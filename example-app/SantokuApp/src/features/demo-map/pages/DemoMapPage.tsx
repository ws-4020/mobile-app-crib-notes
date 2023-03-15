import {Button} from 'bases/ui/button/Button';
import {TextInput} from 'bases/ui/input/TextInput';
import {MapView} from 'bases/ui/map/MapView';
import {Marker, MarkerProps} from 'bases/ui/map/Marker';
import {Spacer} from 'bases/ui/spacer/Spacer';
import React, {useCallback, useState} from 'react';
import {View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
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
  // DONE 地図表示のフォーム（緯度、経度、緯度幅、経度幅、マップタイプ）の作成
  // DONE 複数のピンを立てることができるようにstateで位置情報を管理する
  // DONE マーカーをリスト展開してMapViewの中に配置する
  // DONE マーカーを地図上に表示する
  // DONE 地図操作と制限できる項目の確認（scrollEnable, zoomEnable, rotateEnable ）
  // TODO 地図操作とマーカー操作の説明を記載する

  // TODO [OptOut]マーカーを追加するフォーム（緯度、経度、タイトル、説明、dragable）
  // TODO 型のimportが元のライブラリからで良いのか？Omit後のPropsを展開して持ってきたほうがいい？

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

  // const initialMarkerPosition: LatLng = {
  //   latitude: 34.7024898,
  //   longitude: 135.494,
  // };

  // console.log(markerLat);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({
        ios: 'padding',
        android: undefined,
      } as const)}
      style={styles.container}>
      <View style={styles.container}>
        <View style={{height: '50%'}}>
          <SafeAreaView style={{flex: 1}}>
            <ScrollView style={styles.scrollView}>
              {/* <MapView initialRegion={region} style={styles.map} /> */}

              <View>
                <Text h4>地図の表示領域</Text>
                <Spacer style={{height: '5%'}} />
                <View style={styles.rowContainer}>
                  <View style={styles.flexContainer}>
                    <Text>latitude</Text>
                  </View>
                  <View style={styles.flexContainer}>
                    <TextInput
                      // label={m('ページ番号')}
                      // label="latitude"
                      placeholder="latitude"
                      value={form.values.latitude}
                      onChangeText={form.handleChange('latitude')}
                      // showClearButton={!!form.values.pageNo}
                      // onClearButtonPress={clearPageNo}
                      // errorMessage={form.errors.pageNo}
                    />
                  </View>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.flexContainer}>
                    <Text>longitude</Text>
                  </View>
                  <View style={styles.flexContainer}>
                    <TextInput
                      placeholder="longitude"
                      value={form.values.longitude}
                      onChangeText={form.handleChange('longitude')}
                    />
                  </View>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.flexContainer}>
                    <Text>latitudeDelta</Text>
                  </View>
                  <View style={styles.flexContainer}>
                    <TextInput
                      placeholder="latitudeDelta"
                      value={form.values.latitudeDelta}
                      onChangeText={form.handleChange('latitudeDelta')}
                    />
                  </View>
                </View>
                <View style={styles.rowContainer}>
                  <View style={styles.flexContainer}>
                    <Text>longitudeDelta</Text>
                  </View>
                  <View style={styles.flexContainer}>
                    <TextInput
                      placeholder="longitudeDelta"
                      value={form.values.longitudeDelta}
                      onChangeText={form.handleChange('longitudeDelta')}
                    />
                  </View>
                </View>
                <Spacer style={{height: '5%'}} />

                <View style={styles.search}>
                  <Button title="地図を更新" onPress={form.submitForm} size="middle" />
                </View>
                <Spacer style={{height: '5%'}} />
              </View>
              <Text h4>地図の種類</Text>
              <Spacer style={{height: '5%'}} />

              <View style={styles.rowContainer}>
                <View style={styles.flexContainer}>
                  <Text>MapType</Text>
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
              <Spacer style={{height: '5%'}} />

              <Text h4>操作の種類</Text>

              <View style={styles.toggleConfigContainer}>
                <View>
                  <Text>scrollEnable</Text>
                </View>
                <View>
                  <ToggleButton isPressed={scrollEnable} setIsPressed={setScrollEnable} />
                </View>
              </View>
              <View style={styles.toggleConfigContainer}>
                <View>
                  <Text>zoomEnable</Text>
                </View>
                <View>
                  <ToggleButton isPressed={zoomEnable} setIsPressed={setZoomEnable} />
                </View>
              </View>
              <View style={styles.toggleConfigContainer}>
                <View>
                  <Text>rotateEnable</Text>
                </View>
                <View>
                  <ToggleButton isPressed={rotateEnable} setIsPressed={setRotateEnable} />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            // provider={PROVIDER_GOOGLE}
            // region={{
            //   latitude: 34.7024898,
            //   longitude: 135.494,
            //   latitudeDelta: 0.005,
            //   longitudeDelta: 0.002,
            // }}
            region={region}
            onRegionChange={setRegion}
            scrollEnabled={scrollEnable} // falseでスクロールしても地図が動かなくなる
            // zoomEnabled={false} // falseでタップしても地図が拡大されなくなる
            // rotateEnabled={false} // falseで2本指で回しても地図が回転しなくなる
            // camera={camera}
            // mapPadding={{top:100, left:100,right:100}}
            mapType={mapType}
            // showsPointsOfInterest={false}
            showsIndoorLevelPicker
            showsBuildings={showsBuildings}
            style={styles.map}>
            {/* TODO 受け取った情報からマーカーを作る */}
            {markerList.map((item, index) => (
              <Marker key={index} {...item} />
            ))}
            {/* <Marker
            title="大阪駅"
            description="大阪府大阪市北区梅田３丁目１−１"
            coordinate={{latitude: markerLat, longitude: markerLon}}
            draggable
            // tappable={undefined}
            onDragEnd={e => {
              setMarkerLat(e.nativeEvent.coordinate.latitude);
              setMarkerLon(e.nativeEvent.coordinate.longitude);
            }}> */}
            {/* <Callout onPress={() => alert('alert')}>
              <Text style={{fontWeight: '800'}}>大阪駅</Text>
              <Text>大阪府大阪市北区梅田３丁目１−１</Text>
            </Callout> */}
            {/* <Callout onPress={() => alert('alert')}>
              <Text>callout</Text>
            </Callout> */}
            {/* </Marker> */}
            {/* <Marker coordinate={{latitude: 37.788, longitude: -122.43}} /> */}
          </MapView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  scrollView: {
    // padding: '5%',
  },
  mapContainer: {
    alignItems: 'center',
    height: '50%',
    // padding: '10%',
    // flex: 1,
  },
  map: {
    height: '100%',
    width: '100%',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  toggleConfigContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
