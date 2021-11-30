import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@tarojs/components';
import { useConnect } from '@/store/index';

const Page = () => {
  const { dispatch } = useConnect();

  return (
    <Layout>
      <Button
        onClick={() => {
          dispatch({
            type: 'loading_start'
          });
          setTimeout(() => {
            dispatch({
              type: 'loading_end'
            });
          }, 3000);
        }}
      >
        loading
      </Button>
    </Layout>
  );
};

export default Page;
