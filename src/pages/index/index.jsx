import React, { useEffect, useState } from 'react';
import { View, Text, Button } from '@tarojs/components';
import { useConnect } from '@/store/index';
import { getUsersApi } from '@/services';
import Loading from '@/components/Loading';
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

  return (
    <>
      {state.loading && <Loading />}
      {state.users.map(user => {
        return (
          <View className='user' key={user}>
            {user}
          </View>
        );
      })}
      <Button type='primary' onClick={clickHandle}>
        getUsers
      </Button>
    </>
  );
};
// Page.options = {
//   addGlobalClass: true
// };
export default Page;
