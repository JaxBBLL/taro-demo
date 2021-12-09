<template>
  <view>
    <Loading v-show="loadingShow">loading</Loading>
    <slot></slot>
  </view>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Loading from '@/components/Loading';
export default {
  name: 'Layout',
  components: {
    Loading
  }
};
</script>
<script setup>
const store = useStore();
const loadingShow = computed(() => store.state.loading);
</script>
