<template>
  <div class="about">
    <h1 @click="change">This is an about page</h1>
    {{count}}
  </div>
</template>
<script>
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  export default {
    setup(){
      const store = useStore();
      const change = () => {
        console.log('触发更新')
        store.commit('increment')
      }
      return {
        // 在 computed 函数中访问 state
        count: computed(() => store.state.count),
        change
      }
    },
  }
</script>
