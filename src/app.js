import { createApp } from 'vue';
import store from './store';
import usePlugins from './plugins/index';
import '@/styles/app.scss';

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
}).use(store);

usePlugins(App);

export default App;
