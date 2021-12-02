import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import Layout from '@/components/Layout';
import { View, Button } from '@tarojs/components';
import './index.scss';

const Page = props => {
  return (
    <Layout>
      <Button
        className='button button-primary'
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/list/index'
          });
        }}
      >
        list page
      </Button>
      <View className='p-30 text-26'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        laborum quos earum ex ut magni magnam in ratione quam minus tempore
        nihil quisquam sunt, recusandae exercitationem unde possimus explicabo
        cupiditate.
      </View>
    </Layout>
  );
};
// Page.options = {
//   addGlobalClass: true
// };
export default Page;
