/**
 * Hooks Component
 */
import Taro, { useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

function Index() {
  const onShare = () => {
    swan.openShare({
      success(res) {
        Taro.showToast({
          title: '分享成功'
        });
      }
    });
  };
  const onCallPhone = () => {
    Taro.makePhoneCall({
      phoneNumber: '13812341234'
    });
  };
  return (
    <View className='m-fixed-bar'>
      <View>
        <View className='at-icon at-icon-share' onClick={onShare} />
      </View>
      <View>
        <View className='at-icon at-icon-phone' onClick={onCallPhone} />
      </View>
    </View>
  );
}

Index.options = {
  addGlobalClass: true
};

export default Index;
