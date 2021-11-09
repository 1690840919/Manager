<template>
  <div class="welcomePage">
    <div class="content">
      <div class="text">
        <div class="big">欢迎使用</div>
        <div class="mid">vue3通用后台管理系统</div>
        <div class="small">-vue3+element-plus+vite打造后台管理系统</div>
      </div>
      <div class="bg">
        <img src="../../assets/images/welcome.png" alt="">
      </div>
    </div>
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

<style src='' lang="scss" scoped>
.welcomePage {
  margin: 20px;
  height: calc(100vh - 90px);
  background: white;
  position: relative;
  .text{
    position: absolute;
    top: 30%;
    left: 90px;
    .big{
      font-size: 30px;
      color: #000;
      font-weight: bolder;
    }
    .mid{
      font-size: 40px;
      color: rgb(75,147,236);
      font-weight: bold;
      margin: 10px 0;
    }
    .small{
      padding-left: 40px;
      font-size: 24px;
    }
  }
  .bg{
    position: relative;
    img{
      position: absolute;
      right: 60px;
      top: 60px;
    }
  }
}
</style>
