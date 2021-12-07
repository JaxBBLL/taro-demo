<template>
  <view>
    <Loading v-if="$store.state.loading">loading</Loading>
    <slot></slot>
  </view>
</template>

<script>
import Loading from '@/components/Loading';
export default {
  name: 'Layout',
  components: {
    Loading
  }
};
</script>
