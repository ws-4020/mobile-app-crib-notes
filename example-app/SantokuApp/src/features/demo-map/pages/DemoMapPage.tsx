import {Button} from 'bases/ui/button/Button';
import {TextInput} from 'bases/ui/input/TextInput';
import {MapView} from 'bases/ui/map/MapView';
import {Marker, MarkerProps} from 'bases/ui/map/Marker';
import {Spacer} from 'bases/ui/spacer/Spacer';
import React, {useCallback, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Region, MapTypes} from 'react-native-maps';

import {MapTypePicker} from '../components/MapTypePicker';
import {ToggleButton} from '../components/ToggleButton';
import {initialMarker} from '../constants/initialMarker';
import {initialRegion} from '../constants/initialRegion';
import {secondMarker} from '../constants/secondMarker';
import {MapConfigFormValues, useMapConfigForm} from '../form/MapConfigForm';

type DemoMapViewPageProps = object;

export const DemoMapPage: React.FC<DemoMapViewPageProps> = () => {
  // TODO [OptOut]マーカーを追加するフォーム（緯度、経度、タイトル、説明、dragable）

  // 現時点でsetMarkerListを使っていないが、後でマーカーを画面から追加できるようにするためにマーカーの配列をstate管理する。
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [markerList, setMarkerList] = useState<MarkerProps[]>([initialMarker, secondMarker]);

  const [region, setRegion] = useState<Region>(initialRegion);
  const [mapType, setMapType] = useState<MapTypes>('standard');

  const onSubmit = useCallback(
    (values: MapConfigFormValues) =>
      setRegion({
        latitude: Number(values.latitude),
        longitude: Number(values.longitude),
        latitudeDelta: Number(values.latitudeDelta),
        longitudeDelta: Number(values.longitudeDelta),
      }),
    [setRegion],
  );
  const {form} = useMapConfigForm({
    initialValues: {
      latitude: initialRegion.latitude.toString(),
      longitude: initialRegion.longitude.toString(),
      latitudeDelta: initialRegion.latitudeDelta.toString(),
      longitudeDelta: initialRegion.longitudeDelta.toString(),
    },
    onSubmit,
  });

  const [showsBuildings, setShowsBuildings] = useState<boolean>(true);
  const [scrollEnable, setScrollEnable] = useState<boolean>(true);
  const [zoomEnable, setZoomEnable] = useState<boolean>(true);
  const [rotateEnable, setRotateEnable] = useState<boolean>(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({
        ios: undefined,
        android: 'height',
      } as const)}
      style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.flexContainer}>
            <Text h4>地図の表示領域</Text>
            <Spacer heightRatio={0.03} />
            <View style={styles.rowContainer}>
              <View style={styles.flexContainer}>
                <Text>latitude</Text>
                <Text>緯度</Text>
              </View>
              <View style={styles.flexContainer}>
                <TextInput
                  value={form.values.latitude}
                  onChangeText={form.handleChange('latitude')}
                  errorMessage={form.errors.latitude}
                />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.flexContainer}>
                <Text>longitude</Text>
                <Text>経度</Text>
              </View>
              <View style={styles.flexContainer}>
                <TextInput
                  value={form.values.longitude}
                  onChangeText={form.handleChange('longitude')}
                  errorMessage={form.errors.longitude}
                />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.flexContainer}>
                <Text>latitudeDelta</Text>
                <Text>緯度範囲（縦幅）</Text>
              </View>
              <View style={styles.flexContainer}>
                <TextInput
                  value={form.values.latitudeDelta}
                  onChangeText={form.handleChange('latitudeDelta')}
                  errorMessage={form.errors.latitudeDelta}
                />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.flexContainer}>
                <Text>longitudeDelta</Text>
                <Text>緯度範囲（横幅）</Text>
              </View>
              <View style={styles.flexContainer}>
                <TextInput
                  value={form.values.longitudeDelta}
                  onChangeText={form.handleChange('longitudeDelta')}
                  errorMessage={form.errors.longitudeDelta}
                />
              </View>
            </View>
            <Spacer heightRatio={0.03} />
            <View style={styles.search}>
              <Button title="地図を更新" onPress={form.submitForm} size="middle" />
            </View>
            <Spacer heightRatio={0.03} />
          </View>
          <View style={styles.flexContainer}>
            <Text h4>地図の種類</Text>
            <Spacer heightRatio={0.03} />
            <View style={styles.rowContainer}>
              <View style={styles.flexContainer}>
                <Text>MapType</Text>
                <Spacer heightRatio={0.03} />
              </View>
              <View style={styles.flexContainer}>
                <MapTypePicker mapType={mapType} setMapType={setMapType} />
              </View>
            </View>
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>showsBuildings</Text>
              </View>
              <View>
                <ToggleButton isPressed={showsBuildings} setIsPressed={setShowsBuildings} />
              </View>
            </View>
            <Spacer heightRatio={0.05} />
            <Text h4>操作の種類</Text>
            <Spacer heightRatio={0.03} />
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>scrollEnable</Text>
              </View>
              <View>
                <ToggleButton isPressed={scrollEnable} setIsPressed={setScrollEnable} />
              </View>
            </View>
            <Spacer heightRatio={0.02} />
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>zoomEnable</Text>
              </View>
              <View>
                <ToggleButton isPressed={zoomEnable} setIsPressed={setZoomEnable} />
              </View>
            </View>
            <Spacer heightRatio={0.02} />
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>rotateEnable</Text>
              </View>
              <View>
                <ToggleButton isPressed={rotateEnable} setIsPressed={setRotateEnable} />
              </View>
            </View>
            <Spacer heightRatio={0.05} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          region={region}
          scrollEnabled={scrollEnable}
          zoomEnabled={zoomEnable}
          rotateEnabled={rotateEnable}
          mapType={mapType}
          showsBuildings={showsBuildings}
          style={styles.map}>
          {markerList.map((item, index) => (
            <Marker key={index} {...item} />
          ))}
        </MapView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  mapContainer: {
    height: '50%',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  toggleConfigContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
