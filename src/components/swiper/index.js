import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, View, Image } from '@tarojs/components';

export default class Index extends Component {
  /* 使用外部样式类可以让组件使用指定的组件外样式类，
     如果希望组件外样式类能够完全影响组件内部，
     可以将组件构造器中的 options.addGlobalClass 字段置为 true。
     这个特性从小程序基础库版本 2.2.3 开始支持。 */
  static options = {
    addGlobalClass: true
  };
  // 类的实例属性，es7的提案，安装babel插件可以转译
  state = {};

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
    const { list } = this.props;
    return (
      <Swiper
        indicatorColor='#fff'
        indicatorActiveColor='#38f'
        circular
        indicatorDots
        autoplay
      >
        {list.map((item, index) => {
          return (
            <SwiperItem key={index}>
              <View>
                <Image className='img-row' src={item} />
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>
    );
  }
}
