import useNutui from './useNutui';
import useCustom from './useCustom';

export default function(App) {
  useNutui(App);
  useCustom(App);
  return App;
}
