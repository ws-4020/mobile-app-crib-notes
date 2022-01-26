import {useCallback} from 'react';
import {Alert} from 'react-native';
import {Mutation, Query, QueryKey} from 'react-query';

import {useSnackbar} from '../../components/snackbar';
import {log} from '../logging';
import {m} from '../message';
import {ApiResourceAccessError, ApiResponseError} from './api';

const useBaseErrorHandler = () => {
  const snackbar = useSnackbar();

  const sendErrorLogToClashlytics = useCallback((error: unknown) => {
    try {
      if (error instanceof ApiResponseError) {
        const status = error.response.status;
        const statusText = error.response.statusText;
        const errorCode = error.response.data?.code ?? 'NoErrorCode';
        const errorMessage = error.response.data?.message ?? 'NoErrorMessage';
        log.warn(`Backend API Request Error (${status} ${statusText}): [${errorCode}] ${errorMessage}`);
      } else if (error instanceof ApiResourceAccessError) {
        log.warn('Backend API Request Error: Could not receive response from server.');
      } else {
        log.warn('Backend API Request Error: Unexpected error.');
      }
    } catch (e) {}
  }, []);

  const showRequireTermsOfServiceAgreementDialog = useCallback(() => {
    Alert.alert(
      m('msg.error.requireTermsOfServiceAgreement.title'),
      m('msg.error.requireTermsOfServiceAgreement.message'),
    );
  }, []);

  const showUpdateAppDialog = useCallback(() => {
    // TODO: ダイアログからApp Storeを開けるようにする
    Alert.alert(m('msg.error.appVersionTooOld.title'), m('msg.error.appVersionTooOld.message'));
  }, []);

  const showTooManyRequests = useCallback(() => {
    snackbar.show(m('msg.backend.tooManyRequests'));
  }, [snackbar]);

  const showMaintenance = useCallback(() => {
    snackbar.show(m('msg.backend.maintenance'));
  }, [snackbar]);

  const showGatewayTimeout = useCallback(() => {
    snackbar.show(m('msg.backend.gatewayTimeout'));
  }, [snackbar]);

  const showUnexpectedError = useCallback(
    (error: unknown) => {
      snackbar.show(m('msg.backend.unexpected'));
      sendErrorLogToClashlytics(error);
    },
    [snackbar, sendErrorLogToClashlytics],
  );

  return useCallback(
    (error: unknown) => {
      if (error instanceof ApiResponseError) {
        const statusCode = error.response.status;
        switch (statusCode) {
          case 400: // Bad Request
            // デフォルトの動作としては特に処理を実施しない
            break;
          case 401: // Unauthorized
            // Mutationの場合は、デフォルトの動作としては特に処理を実施しない
            // Queryの場合は別途処理を定義
            break;
          case 403: // Forbidden
            // 暫定的に最新の利用規約への同意が必要なことを伝えるアラートのみ表示
            // TODO: 最新の利用規約同意画面を開けるようにする
            showRequireTermsOfServiceAgreementDialog();
            break;
          case 404: // Not Found
            // デフォルトの動作としては特に処理を実施しない
            break;
          case 412: // Precondition Failed
            // アプリを新しいバージョンにアップデートするように促すダイアログを表示
            // TODO: ダイアログからApp Storeを開けるようにする
            showUpdateAppDialog();
            break;
          case 429: // Too Many Requests
            // 時間をおいてから再操作をするように促すスナックバーを表示
            showTooManyRequests();
            break;
          case 503: // Service Unavailable
            // システムメンテナンス中であることを伝えるスナックバーを表示
            showMaintenance();
            break;
          case 504: // Gateway Timeout
            // 時間をおいてから再操作をするように促すスナックバーを表示
            showGatewayTimeout();
            break;
          default:
            // 想定外のエラーが発生したことを伝えるスナックバーを表示し、Firebase Clashlyticsへログを送信
            showUnexpectedError(error);
            break;
        }
      } else {
        // 想定外のエラーが発生したことを伝えるスナックバーを表示し、Firebase Clashlyticsへログを送信
        showUnexpectedError(error);
      }
    },
    [
      showGatewayTimeout,
      showMaintenance,
      showRequireTermsOfServiceAgreementDialog,
      showTooManyRequests,
      showUnexpectedError,
      showUpdateAppDialog,
    ],
  );
};

const useDefaultGlobalQueryErrorHandler = () => {
  const defaultErrorHandler = useBaseErrorHandler();
  return useCallback(
    (error: unknown, query: Query<unknown, unknown, unknown, QueryKey>) => {
      // このグローバルエラーハンドラーの中ではuseQueryやuseMutationは利用できないため、
      // 401 Unauthorized 応答時の自動再ログインなどはDefaultOptionsのonErrorで設定する
      defaultErrorHandler(error);
    },
    [defaultErrorHandler],
  );
};

const useDefaultGlobalMutationErrorHandler = () => {
  const defaultErrorHandler = useBaseErrorHandler();
  return useCallback(
    (error: unknown, variables: unknown, context: unknown, mutation: Mutation<unknown, unknown, unknown, unknown>) => {
      defaultErrorHandler(error);
    },
    [defaultErrorHandler],
  );
};

export {useDefaultGlobalQueryErrorHandler, useDefaultGlobalMutationErrorHandler};
