<template>
  <template v-for="menu in menuList">
    <el-sub-menu
      v-if="
        menu.children &&
        menu.children.length > 0 &&
        menu.children[0].menuType == 1
      "
      :key="menu._id"
      :index="menu.path"
    >
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.menuName }}</span>
      </template>
      <tree-menu :menuList="menu.children" />
    </el-sub-menu>
    <el-menu-item
      @click='changMenu'
      v-else-if="menu.menuType == 1"
      :index="menu.path"
      :key="menu._id"
    >
      {{ menu.menuName }}
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: '',
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    changMenu(e){
      const path = '/home/' + e.index.split('/')[2]
      this.$router.push(path)
    }
  },
  components: {}
}
</script>

<style src='' lang="scss" scoped>

.el-menu{
    .el-menu-item{
      padding-left: 60px!important;
    }
  }
</style>
