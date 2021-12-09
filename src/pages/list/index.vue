<template>
  <Layout>
    <view class="title">{{ msg }}</view>
    <view v-for="item in list" :key="item">{{ item }}</view>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import { usePullDownRefresh } from '@/hooks';
import './index.scss';
const msg = ref('This is list page');
const list = ref(['Jack', 'Tom', 'Peter', 'Lucy']);
usePullDownRefresh(() => {
  msg.value = 'haha';
});
</script>
