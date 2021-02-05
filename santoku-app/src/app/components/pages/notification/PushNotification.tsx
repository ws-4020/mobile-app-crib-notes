import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Description } from '../../basics';
import DeviseTokenNotificationForm from '../../parts/notification/DeviseTokenNotificationForm';
import TopicNotificationForm from '../../parts/notification/TopicNotificationForm';

const PushNotification: React.FC = () => {
  return (
    <Container refreshing={false}>
      <ScrollView>
        <Description>指定した端末へプッシュ通知を送信する例と、指定したトピックを購読している端末へプッシュ通知を送信する例を示します。</Description>
        <DeviseTokenNotificationForm />
        <TopicNotificationForm />
      </ScrollView>
    </Container>
  );
};

export default PushNotification;
