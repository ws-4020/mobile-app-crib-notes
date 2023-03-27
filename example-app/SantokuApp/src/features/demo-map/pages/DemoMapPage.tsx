import {Button} from 'bases/ui/button/Button';
import {TextInput} from 'bases/ui/input/TextInput';
import {MapView, MapViewRef} from 'bases/ui/map/MapView';
import {Marker, MarkerProps} from 'bases/ui/map/Marker';
import {Spacer} from 'bases/ui/spacer/Spacer';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Region, MapTypes} from 'react-native-maps';

import {MapTypePicker} from '../components/MapTypePicker';
import {ToggleButton} from '../components/ToggleButton';
import {initialMarker} from '../constants/initialMarker';
import {initialRegion} from '../constants/initialRegion';
import {RegionFormValues, useRegionForm} from '../form/RegionForm';

export const DemoMapPage: React.FC = () => {
  // TODO [OptOut]マーカーを追加するフォーム（緯度、経度、タイトル、説明、dragable）

  // 現時点でsetMarkerListを使っていないが、後でマーカーを画面から追加できるようにするためにマーカーの配列をstate管理する。
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [markerList, setMarkerList] = useState<MarkerProps[]>([initialMarker]);

  const [region, setRegion] = useState<Region>(initialRegion);

  const [mapType, setMapType] = useState<MapTypes>('standard');

  const onSubmit = useCallback(
    (values: RegionFormValues) =>
      setRegion({
        latitude: Number(values.latitude),
        longitude: Number(values.longitude),
        latitudeDelta: Number(values.latitudeDelta),
        longitudeDelta: Number(values.longitudeDelta),
      }),
    [setRegion],
  );
  const {form} = useRegionForm({
    initialValues: {
      latitude: initialRegion.latitude.toString(),
      longitude: initialRegion.longitude.toString(),
      latitudeDelta: initialRegion.latitudeDelta.toString(),
      longitudeDelta: initialRegion.longitudeDelta.toString(),
    },
    onSubmit,
  });

  const keyboardType = Platform.select({
    ios: 'numbers-and-punctuation',
    android: 'number-pad',
  } as const);

  const [scrollEnable, setScrollEnable] = useState<boolean>(true);
  const [zoomEnabled, setZoomEnabled] = useState<boolean>(true);
  const [rotateEnabled, setRotateEnabled] = useState<boolean>(true);
  const [pitchEnabled, setPitchEnabled] = useState<boolean>(true);

  const mapViewRef = useRef<MapViewRef>(null);
  const animateToRegion = useCallback(() => mapViewRef.current?.animateToRegion(region), [region]);

  useEffect(() => {
    animateToRegion();
  }, [animateToRegion, region]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({
        ios: undefined,
        android: 'height',
      } as const)}
      style={styles.container}>
      <View style={styles.flexContainer}>
        <ScrollView>
          <View style={styles.flexContainer}>
            <SpecAndSourceCodeLink feature="map" />
            <Text>
              {`
地図を表示します。オプションを変更し、表示や操作を確認できます。
        `}
            </Text>
            <Spacer heightRatio={0.03} />
            <Text h4>表示する領域の変更</Text>
            <Spacer heightRatio={0.01} />
            <Text>表示領域を変更できます。</Text>
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
                  keyboardType={keyboardType}
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
                  keyboardType={keyboardType}
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
                  keyboardType={keyboardType}
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
                  keyboardType={keyboardType}
                />
              </View>
            </View>
            <Spacer heightRatio={0.03} />
            <View style={styles.search}>
              <Button title="更新する" onPress={form.submitForm} size="middle" />
            </View>
            <Spacer heightRatio={0.03} />
          </View>
          <View style={styles.flexContainer}>
            <Text h4>地図の種類選択</Text>
            <Spacer heightRatio={0.01} />
            <Text>地図の見た目を変更できます。</Text>
            <Spacer heightRatio={0.03} />
            <View style={styles.rowContainer}>
              <View style={styles.flexContainer}>
                <Text>MapType</Text>
                <Text>マップタイプ</Text>
                <Spacer heightRatio={0.03} />
              </View>
              <View style={styles.flexContainer}>
                <MapTypePicker mapType={mapType} setMapType={setMapType} />
              </View>
            </View>
            <Spacer heightRatio={0.05} />
            <Text h4>画面操作の制限</Text>
            <Spacer heightRatio={0.01} />
            <Text>以下のトグルスイッチをOFFにすると画面操作を制限することができます。</Text>
            <Spacer heightRatio={0.03} />
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>scrollEnabled</Text>
                <Text>スクロールを許可</Text>
              </View>
              <View>
                <ToggleButton isPressed={scrollEnable} setIsPressed={setScrollEnable} />
              </View>
            </View>
            <Spacer heightRatio={0.02} />
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>zoomEnabled</Text>
                <Text>拡大縮小を許可</Text>
              </View>
              <View>
                <ToggleButton isPressed={zoomEnabled} setIsPressed={setZoomEnabled} />
              </View>
            </View>
            <Spacer heightRatio={0.02} />
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>rotateEnabled</Text>
                <Text>回転を許可</Text>
              </View>
              <View>
                <ToggleButton isPressed={rotateEnabled} setIsPressed={setRotateEnabled} />
              </View>
            </View>
            <Spacer heightRatio={0.02} />
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>pitchEnabled</Text>
                <Text>視点の角度変更を許可</Text>
              </View>
              <View>
                <ToggleButton isPressed={pitchEnabled} setIsPressed={setPitchEnabled} />
              </View>
            </View>
            <Spacer heightRatio={0.05} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          ref={mapViewRef}
          initialRegion={initialRegion}
          scrollEnabled={scrollEnable}
          zoomEnabled={zoomEnabled}
          rotateEnabled={rotateEnabled}
          mapType={mapType}
          pitchEnabled={pitchEnabled}
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
