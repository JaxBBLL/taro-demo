import Taro, { Component } from '@tarojs/taro';

import { View, Text } from '@tarojs/components';
import SwiperComponent from '@components/swiper';
import FixedBar from '@components/fixed-bar';
import { AtGrid } from 'taro-ui';

import './index.scss';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  // 类的实例属性，es7的提案，安装babel插件可以转译
  state = {
    swiperList: [
      require('../../assets/swiper3.jpg'),
      require('../../assets/swiper2.jpg'),
      require('../../assets/swiper1.jpg')
    ],
    gridList: [
      {
        image:
          'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '领取中心'
      },
      {
        image:
          'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '找折扣'
      },
      {
        image:
          'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '领会员'
      },
      {
        image:
          'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: '手机馆'
      }
    ]
  };

  componentWillMount() {}

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidShow() {
    console.log('componentDidShow');
  }

  componentDidHide() {
    console.log('componentDidHide');
  }

  render() {
    const { swiperList, gridList } = this.state;
    return (
      <View className='page-index'>
        <SwiperComponent list={swiperList} indicatorActiveColor='#ff6600' />
        <AtGrid columnNum={4} hasBorder={false} data={gridList} />
      </View>
    );
  }
}
