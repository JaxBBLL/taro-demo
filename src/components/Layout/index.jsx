import React from 'react';
import { useConnect } from '@/store/index';
import Loading from '@/components/Loading';

const Layout = props => {
  const { state } = useConnect();

  return (
    <>
      {state.loading && <Loading />}
      {props.children}
    </>
  );
};

export default Layout;
