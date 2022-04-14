import {Button} from 'components/button/Button';
import {PickerBackdrop} from 'components/picker/PickerBackdrop';
import {DemoStackParamList} from 'navigation/types';
import React, {useState} from 'react';
import {Text, View} from 'react-native';

const ScreenName = 'Picker';
const Screen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="show" onPress={() => setIsVisible(true)} />
      <PickerBackdrop
        style={{justifyContent: 'flex-end'}}
        modalProps={{style: {justifyContent: 'flex-end'}}}
        isVisible={isVisible}
        onPress={() => setIsVisible(false)}>
        <View style={{flex: 1, justifyContent: 'flex-end'}} pointerEvents="box-none">
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column-reverse',
              backgroundColor: '#fff',
              height: 300,
            }}>
            <Text>test</Text>
            <Button title="close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </PickerBackdrop>
    </View>
  );
};

export const PickerScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};
