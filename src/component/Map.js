import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Maper() {
  const defaultState = {
    center: [55.755821, 37.6176356],
    zoom: 10,
  };

  const stops = [
    { id: 47, name: 'Красный октябрь', lat: 55.745129, lon: 37.610627 },
    { id: 56, name: 'Кутузовский', lat: 55.744387, lon: 37.538187 },
    { id: 62, name: 'Трёхгорный', lat: 55.754254, lon: 37.56394 },
    { id: 55, name: 'Третьяковский', lat: 55.744502, lon: 37.618414 },
    { id: 49, name: 'Новоспасский', lat: 55.730281, lon: 37.653392 },
    { id: 46, name: 'Киевский', lat: 55.743672, lon: 37.571839 },
    { id: 50, name: 'Китай-город', lat: 55.748462, lon: 37.635886 },
    { id: 172, name: 'Сердце Столицы', lat: 55.76049721, lon: 37.5122458875 },
    { id: 97, name: 'Сити – Центральный', lat: 55.746589, lon: 37.541693 },
    { id: 72, name: 'Андреевский', lat: 55.711646, lon: 37.572238 },
    { id: 73, name: 'Зарядье', lat: 55.749528, lon: 37.629242 },
    { id: 51, name: 'Патриарший', lat: 55.743972, lon: 37.608138 },
    { id: 32, name: 'Нескучный сад', lat: 55.722427, lon: 37.590694 },
    { id: 67, name: 'Лужники - Центральный', lat: 55.713129, lon: 37.549501 },
    { id: 33, name: 'Крымский мост', lat: 55.732427, lon: 37.596061 },
    { id: 64, name: 'Сити – Багратион', lat: 55.746481, lon: 37.545233 },
  ];

  return (
    <div className=''>
      <YMaps
        enterprise
        query={{
          apikey: 'ca82d0a4-2657-47bc-af32-5205e0b9ea06',
        }}
      >
        <Map height={"1024px"} width={"100%"} defaultState={defaultState}>
          {stops.map(stop => (
            <Placemark key={stop.id} geometry={[stop.lat, stop.lon]} properties={{ hintContent: stop.name }} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}
