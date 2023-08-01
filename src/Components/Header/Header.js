import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import header from './Header.module.css';
import { displayCountryMap } from '../../redux/Pollution/pollution.js';

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const SetDisplay = () => {
    Navigate(-1);
    dispatch(displayCountryMap(false));
  };

  const year = new Date().getFullYear();

  return (
    <div className={header.contanier}>
      <div className={header.left_side}>
        <button
          type="button"
          onClick={SetDisplay}
          className={header.button_style}
        >
          <IoIosArrowBack className={header.left_side_arrow} />
        </button>
        <span className={header.left_side_text} data-testid="year">
          {' '}
          {year}
        </span>
      </div>
      <h3>Most views</h3>

      <div className={header.right_side}>
        <FaMicrophone className={header.icon} />
        <IoIosSettings className={header.icon_gear} />
      </div>
    </div>
  );
};

export default Header;
