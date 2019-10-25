import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  Button
} from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '资讯我们'
  }

  // 类的实例属性，es7的提案，安装babel插件可以转译
  state = {}

  componentWillMount() {}

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidShow() {
    console.log('componentDidShow')
  }

  componentDidHide() {
    console.log('componentDidHide')
  }

  render() {
    return <View>资讯我们</View>
  }
}
