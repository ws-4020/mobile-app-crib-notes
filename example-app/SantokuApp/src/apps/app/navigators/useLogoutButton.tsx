import {m} from 'bases/message/utils/Message';
import {Button} from 'bases/ui/components/button/Button';
import {useLogoutUseCase} from 'features/account/hooks/useLogoutUseCase';
import React from 'react';
import {GestureResponderEvent, StyleSheet} from 'react-native';

type HeaderRightLogoutButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  isLoading: boolean;
};

const HeaderRightLogoutButton: React.FC<HeaderRightLogoutButtonProps> = ({onPress, isLoading}) => {
  return (
    <Button
      title={m('ログアウト')}
      size="small"
      type="clear"
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      onPress={onPress}
      loading={isLoading}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 14,
    color: '#4b6bbd',
  },
  buttonStyle: {
    height: undefined,
  },
});

type CloseThisNavigatorButtonProps = {
  tintColor?: string;
};

export const useLogoutButton = () => {
  const {logout, isLoading} = useLogoutUseCase();
  // NativeStackNavigatorのheaderRightに合わせたコンポーネント。
  const LogoutButton: React.FC<CloseThisNavigatorButtonProps> = () => (
    <HeaderRightLogoutButton onPress={logout} isLoading={isLoading} />
  );

  return {LogoutButton};
};
