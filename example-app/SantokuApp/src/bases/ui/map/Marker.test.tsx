import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {LatLng} from 'react-native-maps';

import {Marker} from './Marker';

const latLng: LatLng = {latitude: 34.7024898, longitude: 135.494};

describe('Marker only with required props', () => {
  it('renders successfully only with required props', () => {
    render(<Marker coordinate={latLng} />);
    const mapView = screen.queryByTestId('Marker');
    expect(mapView).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});

// 削除したPropsがなくなっているか

// 共通部品としては削除せず値の指定もしなかったPropsに値を指定することができるか
// 型違いで抽出しテストする
