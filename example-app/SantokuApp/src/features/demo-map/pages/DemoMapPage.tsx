import {Button} from 'bases/ui/button/Button';
import {TextInput} from 'bases/ui/input/TextInput';
import {MapView, MapViewRef} from 'bases/ui/map/MapView';
import {Marker, MarkerProps} from 'bases/ui/map/Marker';
import {Spacer} from 'bases/ui/spacer/Spacer';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {MapType, Region} from 'react-native-maps';

import {MapTypePicker} from '../components/MapTypePicker';
import {ToggleButton} from '../components/ToggleButton';
import {initialMarker} from '../constants/initialMarker';
import {initialRegion} from '../constants/initialRegion';
import {MarkerFormValues, useMarkerForm} from '../form/useMarkerForm';
import {RegionFormValues, useRegionForm} from '../form/useRegionForm';

export const DemoMapPage: React.FC = () => {
  const [defaultMarker, setDefaultMarker] = useState<MarkerProps>(initialMarker);
  const [formSubmittedMarker, setFormSubmittedMarker] = useState<MarkerProps>();

  const [region, setRegion] = useState<Region>(initialRegion);

  const [mapType, setMapType] = useState<MapType>('standard');
  const [showBuildings, setShowBuildings] = useState<boolean>(true);
  const markerList = useMemo(
    () => (formSubmittedMarker ? [defaultMarker, formSubmittedMarker] : [defaultMarker]),
    [defaultMarker, formSubmittedMarker],
  );

  const onSubmit = useCallback(
    (values: RegionFormValues) => {
      const latitude = Number(values.latitude);
      const longitude = Number(values.longitude);
      const latitudeDelta = Number(values.latitudeDelta);
      const longitudeDelta = Number(values.longitudeDelta);
      setRegion({latitude, longitude, latitudeDelta, longitudeDelta});
      setDefaultMarker({coordinate: {latitude, longitude}});
    },
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
  const onMarkerFormSubmit = useCallback((values: MarkerFormValues) => {
    // 緯度と経度が入力されていた場合のみマーカーを設定し、そうでない場合はマーカーをクリアする
    if (values.latitude && values.longitude) {
      const marker = {
        coordinate: {
          latitude: Number(values.latitude),
          longitude: Number(values.longitude),
        },
        title: values.title,
        description: values.description,
        draggable: values.draggable,
      };
      setFormSubmittedMarker(marker);
    } else {
      setFormSubmittedMarker(undefined);
    }
  }, []);
  const {form: markerForm, setMarkerFormDraggable} = useMarkerForm({onSubmit: onMarkerFormSubmit});

  const keyboardType = Platform.select({
    ios: 'numbers-and-punctuation',
    android: 'number-pad',
  } as const);

  const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
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
            <Text h4>表示領域の変更</Text>
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
            <Text h4>マーカーの設定</Text>
            <Spacer heightRatio={0.01} />
            <Text>マーカーを設定できます。</Text>
            <Spacer heightRatio={0.03} />
            <View>
              <View style={styles.rowContainer}>
                <View style={styles.flexContainer}>
                  <Text>latitude</Text>
                  <Text>緯度</Text>
                </View>
                <View style={styles.flexContainer}>
                  <TextInput
                    value={markerForm.values.latitude}
                    onChangeText={markerForm.handleChange('latitude')}
                    errorMessage={markerForm.errors.latitude}
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
                    value={markerForm.values.longitude}
                    onChangeText={markerForm.handleChange('longitude')}
                    errorMessage={markerForm.errors.longitude}
                    keyboardType={keyboardType}
                  />
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View style={styles.flexContainer}>
                  <Text>title</Text>
                  <Text>タイトル</Text>
                </View>
                <View style={styles.flexContainer}>
                  <TextInput value={markerForm.values.title} onChangeText={markerForm.handleChange('title')} />
                </View>
              </View>
              <View style={styles.rowContainer}>
                <View style={styles.flexContainer}>
                  <Text>description</Text>
                  <Text>説明</Text>
                </View>
                <View style={styles.flexContainer}>
                  <TextInput
                    value={markerForm.values.description}
                    onChangeText={markerForm.handleChange('description')}
                  />
                </View>
              </View>
              <Spacer heightRatio={0.01} />
              <View style={styles.rowContainer}>
                <View style={styles.flexContainer}>
                  <Text>draggable</Text>
                  <Text>ドラッグを許可</Text>
                </View>
                <View style={styles.toggleConfigContainer}>
                  <ToggleButton isPressed={markerForm.values.draggable} setIsPressed={setMarkerFormDraggable} />
                </View>
              </View>
            </View>
            <Spacer heightRatio={0.03} />
            <View style={styles.search}>
              <Button title="更新する" onPress={markerForm.submitForm} size="middle" />
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
            <Spacer heightRatio={0.02} />
            <View style={styles.toggleConfigContainer}>
              <View>
                <Text>showBuilding</Text>
                <Text>建物の輪郭を表示</Text>
              </View>
              <View>
                <ToggleButton isPressed={showBuildings} setIsPressed={setShowBuildings} />
              </View>
            </View>
            <Spacer heightRatio={0.02} />
            <Text style={styles.notice}>建物の輪郭表示の切り替えが確認できたのは、iOSのバージョン15以下だけです。</Text>
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
                <ToggleButton isPressed={scrollEnabled} setIsPressed={setScrollEnabled} />
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
          // initialRegionは初期レンダリングのみ参照されるので
          // デモ画面から他のPropsを変更しても地図に表示される場所が変わらない。
          // 一方でregionに位置情報を渡しておくとレンダリングのたびに参照される。
          mapType={mapType}
          showsBuildings={showBuildings}
          scrollEnabled={scrollEnabled}
          zoomEnabled={zoomEnabled}
          rotateEnabled={rotateEnabled}
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
  notice: {color: 'red'},
});
