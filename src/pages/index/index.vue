<template>
  <Layout>
    <text class="title">{{ msg }}</text>
    <view>
      <nut-button type="primary" @tap="gotoList" @click="gotoList"
        >主要按钮</nut-button
      >
    </view>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import Taro from '@tarojs/taro';
import { getResultDataApi } from '@/services';
import './index.scss';
const store = useStore();
const msg = ref('home page...');
const gotoList = () => {
  store.commit('loadingStart');
  setTimeout(() => {
    store.commit('loadingEnd');
    Taro.navigateTo({
      url: '/pages/list/index'
    });
  }, 1000);
};

getResultDataApi().then(res => {});
</script>
