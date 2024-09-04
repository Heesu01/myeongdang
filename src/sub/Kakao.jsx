import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Kakao = ({ lostItems, onMapClick }) => {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const defaultCenter = { lat: 37.22208887233187, lng: 127.18756500802348 };

  const handleMapClick = (target, mouseEvent) => {
    const newLatLng = {
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    };
    onMapClick(newLatLng);
  };

  return (
    <div>
      <Map
        center={currentPosition || defaultCenter} // 현재 위치가 있으면 현재 위치를 사용
        style={{
          width: "100%", // 가로크기
          height: "500px", // 세로크기
        }}
        level={5} // 지도 확대레벨
        onClick={handleMapClick} // 지도 클릭 이벤트 핸들러
      >
        {currentPosition && (
          <MapMarker position={currentPosition}>
            <div style={{ color: "#000" }}>내 위치</div>
          </MapMarker>
        )}

        {lostItems.map((item) => (
          <MapMarker
            key={item.id}
            position={{ lat: item.location.lat, lng: item.location.lng }}
          >
            <div style={{ color: "#000" }}>{item.name}</div>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default Kakao;
