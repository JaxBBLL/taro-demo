import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

export default class Index extends Component {
  /* 使用外部样式类可以让组件使用指定的组件外样式类，
     如果希望组件外样式类能够完全影响组件内部，
     可以将组件构造器中的 options.addGlobalClass 字段置为 true。
     这个特性从小程序基础库版本 2.2.3 开始支持。 */
  static options = {
    addGlobalClass: true
  };
  // 类的实例属性，es7的提案，安装babel插件可以转译
  state = {
    statusBarHeight: 0,
    navigationBarHeight: 0
  };

  componentWillMount() {
    const appInstance = Taro.getApp();
    const { statusBarHeight, navigationBarHeight } = appInstance.globalData;
    this.setState({
      statusBarHeight,
      navigationBarHeight
    });
  }

  render() {
    const { navigationBarHeight, statusBarHeight } = this.state;
    return (
      <View
        className='m-nav'
        style={{
          paddingTop: statusBarHeight + 'px'
        }}
      >
        <View
          style={{
            height: navigationBarHeight + 'px',
            lineHeight: navigationBarHeight + 'px'
          }}
        >
          <View className='at-icon at-icon-chevron-left'></View>
          {this.props.title}
        </View>
      </View>
    );
  }
}
