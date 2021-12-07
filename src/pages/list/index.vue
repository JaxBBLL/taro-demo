<template>
  <Layout>
    <view class="title">{{ msg }}</view>
    <view v-for="item in list" :key="item">{{ item }}</view>
  </Layout>
</template>

<script>
import { ref } from 'vue';
import './index.scss';
const msg = ref('This is list page');
const list = ref(['Jack', 'Tom']);
export default {
  onPullDownRefresh() {
    msg.value = 'haha';
  },
  setup() {
    return {
      msg,
      list
    };
  }
};
</script>
