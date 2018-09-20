<template>
  <div class="index-wrapper">
    <div>首页</div>
    <button @click="goLogin">跳转到登录页</button>
    <mt-button type="default">default</mt-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {

    }
  },
  created() {
 
  },
  mounted() {},
  methods: {
    goLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}

</script>
