import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from './getLoggedInAccountId';

export const putAccountsMeAnswerCommentLikes = rest.put(
  `${backendUrl}/accounts/me/likes/questions/:questionId/answers/:answerId/comments/:commentId`,
  async (req, res, ctx) => {
    try {
      const accountId = getLoggedInAccountId();
      const questionId = String(req.params.questionId);
      const answerId = String(req.params.answerId);
      const commentId = String(req.params.commentId);
      const db = getDb(accountId);
      const answerCommentLike = db.answerCommentLike.findFirst({
        where: {
          accountId: {equals: accountId},
          questionId: {equals: questionId},
          answerId: {equals: answerId},
          commentId: {equals: commentId},
        },
      });
      if (!answerCommentLike) {
        db.answerCommentLike.create({questionId, accountId, answerId, commentId});
      }

      return delayedResponse(ctx.status(204));
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);
