import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, {
  MapOverlay,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";

const Omg = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 40.68922,
    longitude: -74.044502,
    latitudeDelta: 0,
    longitudeDelta: 0.05,
  });
  return (
    <View className="flex-1">
      <View className="justify-center items-center">
        <MapView
          className="w-full h-full"
          region={mapRegion}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsMyLocationButton
          showsCompass
          showsTraffic
          showsBuildings
          showsIndoors
          showsIndoorLevelPicker
          showsPointsOfInterest
          showsScale
        >
          <Marker coordinate={mapRegion} title="Marker" />
        </MapView>
      </View>
    </View>
  );
};

export default Omg;
