
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Maper() {
    const defaultState = {
      center: [55.755821, 37.6176356],
      zoom: 10,
    };
  
    return (
    <div className=''>
    <YMaps
    enterprise
    query={{
      apikey: 'ca82d0a4-2657-47bc-af32-5205e0b9ea06',
    }}>
        <Map height={"1024px"} width={"100%"} defaultState={defaultState}>
            <Placemark/>
        </Map>
      </YMaps>
    </div>
        
    );
  }