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
  },
  render() {
    return (
      <Layout>
        <text class='title'>{msg.value}</text>
      </Layout>
    );
  }
};
</script>
