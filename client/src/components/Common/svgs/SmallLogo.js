import React from 'react';
import { colors } from '../../../styles/theme';

const SmallLogo = ({
  color1 = colors.electricViolet,
  color2 = colors.denim,
  overlapColor = colors.matisse,
  height = 24,
  width = 24,
  className
}) => (
  <img src="/assets/images/logo-light.png" style={{"height": "3.2rem", "marginRight": "15px"}} />
);

export default SmallLogo;
