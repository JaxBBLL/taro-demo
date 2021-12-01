import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import Layout from '@/components/Layout';
import { View, Text, Button } from '@tarojs/components';
import { useConnect } from '@/store/index';
import { getUsersApi } from '@/services';
import './index.scss';

const Page = props => {
  const { state, dispatch } = useConnect();

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  const clickHandle = () => {
    dispatch({
      type: 'get_users',
      payload: getUsersApi()
    });
  };

  const gotoListPage = () => {
    Taro.navigateTo({
      url: '/pages/list/index'
    });
  };
  return (
    <Layout>
      {state.users.map(user => {
        return (
          <View className='user' key={user}>
            {user}
          </View>
        );
      })}
      <Button className='button button-primary' onClick={clickHandle}>
        getUsers
      </Button>
      <View>
        <Button className='button button-danger' onClick={gotoListPage}>
          link
        </Button>
      </View>
    </Layout>
  );
};
// Page.options = {
//   addGlobalClass: true
// };
export default Page;
