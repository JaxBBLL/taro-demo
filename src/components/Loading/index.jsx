import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';

const Comp = props => {
  return (
    <View className='m-loading'>
      <View class='lds-ring'>
        <View className='ring'></View>
        <View className='ring'></View>
        <View className='ring'></View>
        <View className='ring'></View>
      </View>
    </View>
  );
};

export default Comp;
