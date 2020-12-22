import React from 'react';

import { Image } from 'react-native';

import icon from '../../assets/graph-money-icon/icon_256.png'

function Brand({ width, height }) {
  return (
    <Image source={icon} style={{ width: width || 128, height: height || 128 }} />
  );
}

export default Brand;