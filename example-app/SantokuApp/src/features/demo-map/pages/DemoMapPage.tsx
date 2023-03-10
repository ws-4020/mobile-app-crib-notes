import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import MapView, {Region, LatLng, Marker, Callout} from 'react-native-maps';

type DemoMapViewPageProps = object;

// TODO スポットの情報を配列で定義する

export const DemoMapPage: React.FC<DemoMapViewPageProps> = () => {
  // TODO マーカーを地図上に表示する、複数のピンを立てることができるか
  // TODO MapViewを定義し、表示設定をカスタムする。
  //   初期の拡大率→latitudeDelta&longitudeDelta、表示位置→latitude&longitude
  // TODO mapの固定→

  const initialRegion: Region = {
    latitude: 34.7024898,
    longitude: 135.494,
    latitudeDelta: 0.005,
    longitudeDelta: 0.002,
  };

  const [region, setRegion] = useState<Region>(initialRegion);

  const initialMarkerPosition: LatLng = {
    latitude: 34.7024898,
    longitude: 135.494,
  };

  const [markerLat, setMarkerLat] = useState<number>(initialRegion.latitude);

  const [markerLon, setMarkerLon] = useState<number>(initialRegion.longitude);

  // console.log(markerLat);

  return (
    <>
      <Text>大阪駅</Text>
      <Text>大阪府大阪市北区梅田３丁目１−１</Text>
      <View>
        <Text>{region.latitude}</Text>
        <Text>{region.longitude}</Text>

        <TextInput
          onChangeText={text => setMarkerLat(parseFloat(text))}
          defaultValue={markerLat.toString()}
          style={styles.textInput}
        />
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
          initialRegion={region}
          onRegionChange={setRegion}
          // scrollEnabled={false} // falseでスクロールしても地図が動かなくなる
          // zoomEnabled={false} // falseでタップしても地図が拡大されなくなる
          // rotateEnabled={false} // falseで2本指で回しても地図が回転しなくなる
          // camera={camera}
          // mapPadding={{top:100, left:100,right:100}}
          // mapType="satellite"
          // showsPointsOfInterest={false}
          showsIndoorLevelPicker
          showsBuildings={false}
          style={styles.map}>
          {/* TODO 受け取った情報からマーカーを作る */}
          <Marker
            title="大阪駅"
            description="大阪府大阪市北区梅田３丁目１−１"
            coordinate={{latitude: markerLat, longitude: markerLon}}
            draggable
            onDragEnd={e => {
              setMarkerLat(e.nativeEvent.coordinate.latitude);
              setMarkerLon(e.nativeEvent.coordinate.longitude);
            }}>
            <Callout onPress={() => alert('alert')}>
              <Text style={{fontWeight: '800'}}>大阪駅</Text>
              <Text>大阪府大阪市北区梅田３丁目１−１</Text>
            </Callout>
            {/* <Callout onPress={() => alert('alert')}>
              <Text>callout</Text>
            </Callout> */}
          </Marker>
          {/* <Marker coordinate={{latitude: 37.788, longitude: -122.43}} /> */}
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    alignItems: 'center',
    marginVertical: '5%',
  },
  map: {
    height: 300,
    width: 300,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
