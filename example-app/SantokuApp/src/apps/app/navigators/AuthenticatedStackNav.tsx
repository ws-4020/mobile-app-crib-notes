import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@shopify/restyle';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import {m} from 'bases/message/Message';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React, {useMemo, useCallback} from 'react';
import {Platform} from 'react-native';

import {useMainTabNav} from './MainTabNav';
import {QuestionAndEventPostStackNav} from './QuestionAndEventPostStackNav';
import {AuthenticatedStackParamList} from './types';
import {withInitialData} from '../components/withInitialData';
import {QuestionDetailScreen} from '../screens/qa-question/QuestionDetailScreen';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const getInitialRouteName = (initialData: AppInitialData): keyof AuthenticatedStackParamList => {
  return 'MainTabNav';
};

type Props = {
  initialData: AppInitialData;
};
const Component: React.FC<Props> = ({initialData}) => {
  const navigation = useNavigation();
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const mainTabNav = useMainTabNav(initialData);
  const theme = useTheme<RestyleTheme>();

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen
        name="MainTabNav"
        component={mainTabNav}
        options={{
          headerShown: false,
        }}
      />
      {Platform.OS === 'ios' ? (
        <nav.Screen
          component={QuestionDetailScreen}
          name="QuestionDetail"
          options={{
            title: m('質問詳細'),
            headerStyle: {backgroundColor: theme.colors.orange1},
            contentStyle: {backgroundColor: theme.colors.orange2},
            headerTitleStyle: {fontSize: 20, fontWeight: '500'},
            headerTintColor: theme.colors.white,
            headerBackTitleVisible: false,
            headerLeft: () => (
              <>
                <Ionicons name="arrow-back" size={24} color={theme.colors.white} onPress={goBack} />
                <StyledSpace width="p32" />
              </>
            ),
          }}
        />
      ) : (
        <nav.Screen
          component={QuestionDetailScreen}
          name="QuestionDetail"
          options={{
            title: m('質問詳細'),
            headerStyle: {backgroundColor: theme.colors.orange1},
            contentStyle: {backgroundColor: theme.colors.orange2},
            headerTitleStyle: {fontSize: 20, fontWeight: '500'},
            headerTintColor: theme.colors.white,
            headerBackTitleVisible: false,
          }}
        />
      )}
      <nav.Screen
        name="QuestionAndEventStackNav"
        component={QuestionAndEventPostStackNav}
        options={{presentation: 'modal', headerShown: false}}
      />
    </nav.Navigator>
  );
};

export const useAuthenticatedStackNav = (initialData: AppInitialData) => {
  return useMemo(() => withInitialData(initialData, Component), [initialData]);
};
