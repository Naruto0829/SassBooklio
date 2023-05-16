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
  <img src="/icons/favicon.ico" style={{"height": "40px", "width": "40px"}} />
);

export default SmallLogo;
