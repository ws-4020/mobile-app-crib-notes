import React, {useEffect, useState} from 'react';
import {Container, Description, KeyboardAvoidingView} from '../../basics';
import DeviseTokenNotificationForm from '../../parts/notification/DeviseTokenNotificationForm';
import TopicNotificationForm from '../../parts/notification/TopicNotificationForm';
import messaging from '@react-native-firebase/messaging';
import {useIsMounted} from '../../../hooks/useIsMounted';

const PushNotification: React.FC = () => {
  const [allowedNotification, setAllowedNotification] = useState(false);
  const isMounted = useIsMounted();
  useEffect(() => {
    requestUserPermission()
      .then((authorize) => {
        if (isMounted()) {
          setAllowedNotification(authorize);
        }
      })
      .catch((e) => console.log(e));
  }, [isMounted]);

  async function requestUserPermission() {
    const authorizationStatus = await messaging().requestPermission();
    return authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED;
  }

  return (
    <Container refreshing={false}>
      <KeyboardAvoidingView>
        <Description>指定した端末へプッシュ通知を送信する例と、指定したトピックを購読している端末へプッシュ通知を送信する例を示します。</Description>
        <DeviseTokenNotificationForm allowedNotification={allowedNotification} />
        <TopicNotificationForm allowedNotification={allowedNotification} />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default PushNotification;
