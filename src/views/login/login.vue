<template>
  <div class="index-wrapper">
    <div>登录页</div>
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
    this.login();
  },
  mounted() {},
  methods: {
    ...mapActions({
      login: 'login'
    }),
  }
}

</script>