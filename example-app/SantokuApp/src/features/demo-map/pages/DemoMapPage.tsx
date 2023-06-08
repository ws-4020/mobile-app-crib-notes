import {Button} from 'bases/ui/button/Button';
import {TextInput} from 'bases/ui/input/TextInput';
import {MapView, MapViewRef} from 'bases/ui/map/MapView';
import {Marker, MarkerProps} from 'bases/ui/map/Marker';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
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
    // 緯度と経度が入力されていた場合のみマーカーを追加し、そうでない場合はマーカーをクリアする
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

  useEffect(() => {
    mapViewRef.current?.animateToRegion(region);
  }, [region]);

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
            <SectionBox title="表示領域の変更" description="表示領域を変更できます。">
              <FieldBox title="latitude" description="緯度">
                <TextInput
                  value={form.values.latitude}
                  onChangeText={form.handleChange('latitude')}
                  errorMessage={form.errors.latitude}
                  keyboardType={keyboardType}
                />
              </FieldBox>
              <FieldBox title="longitude" description="経度">
                <TextInput
                  value={form.values.longitude}
                  onChangeText={form.handleChange('longitude')}
                  errorMessage={form.errors.longitude}
                  keyboardType={keyboardType}
                />
              </FieldBox>
              <FieldBox title="latitudeDelta" description="緯度範囲（縦幅）">
                <TextInput
                  value={form.values.latitudeDelta}
                  onChangeText={form.handleChange('latitudeDelta')}
                  errorMessage={form.errors.latitudeDelta}
                  keyboardType={keyboardType}
                />
              </FieldBox>
              <FieldBox title="longitudeDelta" description="経度範囲（横幅）">
                <TextInput
                  value={form.values.longitudeDelta}
                  onChangeText={form.handleChange('longitudeDelta')}
                  errorMessage={form.errors.longitudeDelta}
                  keyboardType={keyboardType}
                />
              </FieldBox>
            </SectionBox>
            <View style={styles.search}>
              <Button title="更新する" onPress={form.submitForm} size="middle" />
            </View>
          </View>
          <SectionBox title="地図の種類選択" description="地図の見た目を変更できます。">
            <FieldBox title="MapType" description="マップタイプ">
              <MapTypePicker mapType={mapType} setMapType={setMapType} />
            </FieldBox>
            <FieldBox title="showBuilding" description="建物の輪郭を表示" fieldStyles={styles.toggleConfigContainer}>
              <ToggleButton isPressed={showBuildings} setIsPressed={setShowBuildings} />
            </FieldBox>
            <Text style={styles.notice}>建物の輪郭表示の切り替えが確認できたのは、iOSのバージョン15以下だけです。</Text>
          </SectionBox>
          <SectionBox
            title="画面操作の制限"
            description="以下のトグルスイッチをOFFにすると画面操作を制限することができます。">
            <FieldBox title="scrollEnabled" description="スクロールを許可" fieldStyles={styles.toggleConfigContainer}>
              <ToggleButton isPressed={scrollEnabled} setIsPressed={setScrollEnabled} />
            </FieldBox>
            <FieldBox title="zoomEnabled" description="拡大縮小を許可" fieldStyles={styles.toggleConfigContainer}>
              <ToggleButton isPressed={zoomEnabled} setIsPressed={setZoomEnabled} />
            </FieldBox>
            <FieldBox title="rotateEnabled" description="回転を許可" fieldStyles={styles.toggleConfigContainer}>
              <ToggleButton isPressed={rotateEnabled} setIsPressed={setRotateEnabled} />
            </FieldBox>
            <FieldBox
              title="pitchEnabled"
              description="視点の角度変更を許可"
              fieldStyles={styles.toggleConfigContainer}>
              <ToggleButton isPressed={pitchEnabled} setIsPressed={setPitchEnabled} />
            </FieldBox>
          </SectionBox>
          <SectionBox title="マーカーの追加" description="マーカーを追加できます。">
            <FieldBox title="latitude" description="緯度">
              <TextInput
                value={markerForm.values.latitude}
                onChangeText={markerForm.handleChange('latitude')}
                errorMessage={markerForm.errors.latitude}
                keyboardType={keyboardType}
              />
            </FieldBox>
            <FieldBox title="longitude" description="経度">
              <TextInput
                value={markerForm.values.longitude}
                onChangeText={markerForm.handleChange('longitude')}
                errorMessage={markerForm.errors.longitude}
                keyboardType={keyboardType}
              />
            </FieldBox>
            <FieldBox title="title" description="タイトル">
              <TextInput value={markerForm.values.title} onChangeText={markerForm.handleChange('title')} />
            </FieldBox>
            <FieldBox title="description" description="説明">
              <TextInput value={markerForm.values.description} onChangeText={markerForm.handleChange('description')} />
            </FieldBox>
            <FieldBox title="draggable" description="ドラッグを許可" fieldStyles={styles.toggleConfigContainer}>
              <ToggleButton isPressed={markerForm.values.draggable} setIsPressed={setMarkerFormDraggable} />
            </FieldBox>
            <View style={styles.search}>
              <Button title="更新する" onPress={markerForm.submitForm} size="middle" />
            </View>
          </SectionBox>
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

const SectionBox: React.FC<PropsWithChildren<{title: string; description: string}>> = ({
  title,
  description,
  children,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text h4>{title}</Text>
      <Text>{description}</Text>
      <View>{children}</View>
    </View>
  );
};

const FieldBox: React.FC<
  PropsWithChildren<{title: string; description: string; fieldStyles?: StyleProp<ViewStyle>}>
> = ({title, description, fieldStyles, children}) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.flexContainer}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={StyleSheet.flatten([styles.flexContainer, fieldStyles])}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  mapContainer: {
    height: '30%',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    columnGap: 10,
    rowGap: 10,
    paddingVertical: 20,
  },
  toggleConfigContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  notice: {color: 'red'},
});
