import React from 'react';
import { colors } from '../../../styles/theme';

const LargeLogo = ({
  color1 = colors.electricViolet,
  color2 = colors.denim,
  overlapColor = colors.matisse,
  textColor = colors.blueZodiac,
  height = 36,
  width = 120,
  className
}) => (
  <>
    <img src='/images/logo-light.png'  style={{ "height": "3rem", "marginRight" : "15px"}} ></img>
  </>
);

export default LargeLogo;
