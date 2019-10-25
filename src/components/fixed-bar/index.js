import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
export default class Index extends Component {
  static options = {
    addGlobalClass: true
  }
  state = {}

  onShare = () => {
    // swan.openShare();
  }

  onCallPhone = () => {
    // Taro.makePhoneCall({
    //   phoneNumber: "000000" //仅为示例，并非真实的电话号码
    // });
  }

  render() {
    return (
      <View className="m-fixed-bar">
        <View>
          <View className="at-icon at-icon-share" onClick={this.onShare} />
        </View>
        <View>
          <View className="at-icon at-icon-phone" onClick={this.onCallPhone} />
        </View>
      </View>
    )
  }
}
