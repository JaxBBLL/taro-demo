<template>
  <text class="title">{{ msg }}</text>
</template>

<script>
import { ref } from 'vue';
import './index.scss';
const msg = ref('list page');
export default {
  onPullDownRefresh() {
    msg.value = 'haha';
  },
  setup() {
    return {
      msg
    };
  }
};
</script>
