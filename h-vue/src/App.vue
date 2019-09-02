<template>
  <div id="app">
    <div class="hv-app-sb">
      <siderBar :menuData="sidebar.menu"></siderBar>
    </div>
    <div class="hv-app-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import siderBar from '@/components/menu/sidebar'
export default {
  components: {siderBar},
  data () {
    return {
      sidebar: {
        menu: [
          {
            title: '菜单',
            icon: 'fa fa-navicon',
            sub: [
              { title: '侧边栏', to: '/menu/side-bar' }
            ]
          },
          {
            title: '表单',
            icon: 'fa fa-file-o',
            sub: [
              { title: '输入框' },
              { title: '下拉框' }
            ]
          },
          {
            title: '数据',
            icon: 'fa fa-database',
            sub: [
              { title: '表格', to: '/data/table' }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
@import url('../static/less/readme.less');
@siderbar-width: 200px;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  .hv-app-sb {
    width: @siderbar-width;
    flex-shrink: 0;
  }
  .hv-app-main {
    width: 100%;
    box-sizing: border-box;
    border-left: solid 1px #555;
    padding: 20px 10px;
    .reader();
  }
}
</style>
