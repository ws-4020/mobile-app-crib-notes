import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import StatefulAuthIntegration from './webview/StatefulAuthIntegration';
import StatelessAuth from './auth/StatelessAuth';
import Top from './top/Top';
import PushNotifaiction from './notification/PushNotification';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const TopScreenStack = createStackNavigator();

const TopScreen: React.FC = () => {
  const { dispatch } = useNavigation();
  return (
    <TopScreenStack.Navigator>
      <TopScreenStack.Screen
        name="Top"
        component={Top}
        options={{
          title: 'Top',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
    </TopScreenStack.Navigator>
  );
};

const AuthIntegrationWithWebAppsStack = createStackNavigator();

const AuthIntegrationWithWebAppsStackScreen: React.FC = () => {
  const { dispatch } = useNavigation();
  return (
    <AuthIntegrationWithWebAppsStack.Navigator>
      <AuthIntegrationWithWebAppsStack.Screen
        name="AuthIntegrationWithWebApps"
        component={StatefulAuthIntegration}
        options={{
          title: 'Webアプリとの認証情報の連携',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
    </AuthIntegrationWithWebAppsStack.Navigator>
  );
};

const StatelessAuthStack = createStackNavigator();

const StatelessAuthScreen: React.FC = () => {
  const { dispatch } = useNavigation();
  return (
    <StatelessAuthStack.Navigator>
      <StatelessAuthStack.Screen
        name="StatelessAuth"
        component={StatelessAuth}
        options={{
          title: 'ステートレスな認証',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
    </StatelessAuthStack.Navigator>
  );
};

const PushNotifaictionStack = createStackNavigator();

const PushNotificationScreen: React.FC = () => {
  const { dispatch } = useNavigation();
  return (
    <PushNotifaictionStack.Navigator>
      <PushNotifaictionStack.Screen
        name="PushNotification"
        component={PushNotifaiction}
        options={{
          title: 'プッシュ通知',
          headerStyle: { backgroundColor: '#9DC6BF' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Button transparent>
              <Icon name="menu" style={styles.icon} onPress={() => dispatch(DrawerActions.openDrawer())} />
            </Button>
          ),
        }}
      />
    </PushNotifaictionStack.Navigator>
  );
};


const Drawer = createDrawerNavigator();

const Navigator: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="TopDrawer" component={TopScreen} />
      <Drawer.Screen name="AuthIntegrationWithWebApps" component={AuthIntegrationWithWebAppsStackScreen} />
      <Drawer.Screen name="StatelessAuth" component={StatelessAuthScreen} />
      <Drawer.Screen name="PushNotification" component={PushNotificationScreen} />
    </Drawer.Navigator>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  icon: {
    color: 'black',
  },
});
