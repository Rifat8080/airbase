import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { displayCountryMap } from '../../redux/Pollution/pollution.js';
import { fecthCountry } from '../../redux/Country/countries.js';
import search from './Search.module.css';
import map from '../../assets/map.png';

const SearchField = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country_name);
  const { country } = countries;
  const { id } = useParams();
  const namePass = id ? id.toLowerCase() : 'europe';

  useEffect(() => {
    if (country.length === 0) {
      dispatch(fecthCountry(namePass));
    }
  }, []);

  const setDisplay = () => {
    dispatch(displayCountryMap(true));
  };

  const countryField = country.length !== 0
    ? country[0].map((field) => (
      <NavLink
        to={`/pollution/${field.latlag}:${field.name}:${field.code}`}
        className={search.nav}
        key={uuidv4()}
        onClick={setDisplay}
      >
        <div className={search.item_grid}>
          <div className={search.img_container}>
            <img src={map} alt="map" className={search.image_map} />
          </div>
          <div>
            {' '}
            <span className={search.field_name}>
              {' '}
              {field.name}
              {' '}
            </span>
            {' '}
            <div>
              {' '}
              Population:
              {field.population}
            </div>
            {' '}
          </div>
        </div>
      </NavLink>
    ))
    : ' ';

  return (
    <div className={search.contianer}>
      <h4 className={search.padh4} data-testid="search">
        {' '}
        STATES BY COUNTRY
        {' '}
      </h4>
      <div className={search.grid}>{countryField}</div>
    </div>
  );
};

export default SearchField;
