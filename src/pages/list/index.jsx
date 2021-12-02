import React, { useEffect, useState } from 'react';
import Taro, { useReachBottom } from '@tarojs/taro';
import Layout from '@/components/Layout';
import { View, Image, Text, Button } from '@tarojs/components';
import { useConnect } from '@/store/index';
import { getListApi } from '@/services';
import { dateFormat } from '@/common/util';
import './index.scss';

const Page = props => {
  const { state, dispatch } = useConnect();
  const pageSize = 15;
  const [loaded, setLoaded] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const getList = () => {
    if (loaded) {
      return;
    }
    dispatch({
      type: 'get_aq_list',
      payload: getListApi({
        pageNumber,
        pageSize
      }).then(res => {
        if (!res.data.length) {
          setLoaded(true);
        }
        return res.data;
      })
    });
  };

  useEffect(() => {
    dispatch({
      type: 'reset_aq_list'
    });
  }, []);

  useEffect(() => {
    getList();
  }, [pageNumber]);

  useReachBottom(() => {
    setPageNumber(pageNumber + 1);
  });

  return (
    <Layout>
      <View className='page-main'>
        <View className='list'>
          {state.aqList.map(item => {
            const answerContentTypeMap = {
              2: 'article',
              3: 'video',
              4: 'audio'
            };
            const time = dateFormat(item.createTime, 'YYYY-MM-DD');
            const className = answerContentTypeMap[item.answerContentType];
            return (
              <View key={item.id} className={'list-item ' + className}>
                <Image
                  className='img'
                  src={item.thumbnail}
                  mode='aspectFill'
                ></Image>
                <View className='title'>{item.title}</View>
                <View className='des'>
                  <Text>{time}</Text>
                  <Text>{item.view}阅读</Text>
                </View>
              </View>
            );
          })}
        </View>
        {loaded && <View className='text-center'>已经到底了...</View>}
      </View>
    </Layout>
  );
};
// Page.options = {
//   addGlobalClass: true
// };
export default Page;
