<template>
  <div id="app">
    <div :class="['hv-app-sb',`hv-app-sb-${sidebar.isClose?'close':'open'}`]" :style="{width:sidebar.isClose?'0':'200px'}">
      <siderBar :menuData="sidebar.menu"></siderBar>
      <div class="hv-app-sb-collapse" @click="onCollapseBtnClick" :title="sidebar.isClose?'展开':'收起'">
        <i class="fa fa-angle-left"></i>
      </div>
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
        ],
        isClose: false
      }
    }
  },
  methods: {
    onCollapseBtnClick () {
      this.sidebar.isClose = !this.sidebar.isClose
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
    flex-shrink: 0;
    position: relative;
    transition: all .3s;
    @icon-width: 25px;
    .hv-app-sb-collapse {
      position: absolute;
      z-index: 999;
      top: 200px;
      font-size: 20px;
      color: #333;
      background-color: #f3f3f3;
      width: @icon-width;
      height: @icon-width;
      line-height: @icon-width;
      cursor: pointer;
    }
    &.hv-app-sb-close .hv-app-sb-collapse {
      right: @icon-width*-1;
      opacity: .7;
      border-radius: 50%;
      i.fa-angle-left {
        transform: rotate(180deg)
      }
      &:hover {
        opacity: 1;
      }
    }
    &.hv-app-sb-open .hv-app-sb-collapse {
      right: -0;
    }
  }
  .hv-app-main {
    width: 100%;
    box-sizing: border-box;
    border-left: solid 1px #555;
    padding: 20px 10px;
    overflow-x:hidden;
    overflow-y: auto;
    .reader();
  }
}
</style>
