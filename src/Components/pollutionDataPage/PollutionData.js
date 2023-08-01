import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import map from '../../assets/map.png';

import pollutionContent, {
  airRiskRate,
  spliter,
} from './pollutionUtilitiesContent.js';
import {
  fecthPollution,
  displayCountryMap,
} from '../../redux/Pollution/pollution.js';
import pollution from './PollutionData.module.css';

// Component PollutionData
const PollutionData = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { name, lat } = spliter(id);
  const latlag = lat;
  useEffect(() => {
    dispatch(fecthPollution(latlag, name[1]));
    dispatch(displayCountryMap(true));
    window.scrollTo(0, 0);
  }, [id]);

  const pollutionDisplay = useSelector((state) => state.pollution.display);
  const gasVolume = useSelector((state) => state.pollution);
  const { gas } = gasVolume;

  const storeTest = gas.length !== 0;
  const airRate = storeTest ? airRiskRate(gas[0].rate) : ' ';
  const gasContent = pollutionContent(storeTest, gas);

  return (
    <div className={pollution.contianer}>
      <div className={pollution.image_container}>
        <div
          className={pollution.img_map}
          style={pollutionDisplay ? { display: 'block ' } : { display: 'none' }}
        >
          <img
            src={map}
            alt="map"
            className={pollution.image_map}
          />
        </div>
      </div>
      <div className={pollution.head_gas_info} data-testid="pollution_data">
        {' '}
        <span className={pollution.head_country}>{gasVolume.name}</span>
        {' '}
        air
        pollution ( μg/m3 ) stats - 2022
      </div>
      <div className={pollution.grid_column}>
        <div className={pollution.row_marker}>{gasContent}</div>
      </div>
      <div className={pollution.risk_rate}>
        Rate:
        {storeTest ? airRate : 'Unknown'}
      </div>
    </div>
  );
};

export default PollutionData;
