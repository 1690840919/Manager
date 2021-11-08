<template>
  <div class="loginPage">登陆页面
    <el-button type="primary">{{$store.state.userInfo.name}}</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.loginPage{
}
</style>
