import { Button, Cell, Icon } from '@nutui/nutui-taro';
// import '@nutui/nutui-taro/dist/style.css';
import '@nutui/nutui-taro/dist/styles/themes/default.scss';

export default function(App) {
  App.use(Button)
    .use(Cell)
    .use(Icon);
}
