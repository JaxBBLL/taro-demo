import Taro, {
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
  useRef,
  useCallback,
  useMemo
} from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './index.scss';

function Index() {
  const [count, setCount] = useState(0);

  return (
    <View className='fl'>
      <Button size='mini' type='primary' onClick={() => setCount(count + 1)}>
        click
      </Button>
      <Text> {count} </Text>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: '首页'
};

export default Index;
