<template>
  <div>
    <h1>Sidebar 侧边栏</h1>
    <h2>概述</h2>
    <p>固定在侧边，用于导航的菜单列表。支持两级，手风琴模式。</p>
    <h2>代码示例</h2>
    <h3>普通使用</h3>
    <div class="hv-demo-block-l" style="width: 200px;">
      <siderBar></siderBar>
    </div>
    <h2>API</h2>
    <h3>props</h3>
    <Table size="small" stripe border :columns="table.column" :data="table.list"></Table>
  </div>
</template>

<script>
import siderBar from '@/components/menu/sidebar'
export default {
  components: {siderBar},
  data () {
    return {
      table: {
        column: [
          { title: '属性', key: 'name', width: 200 },
          { title: '说明', key: 'desc' },
          { title: '类型', key: 'type', width: 200 },
          { title: '默认值', key: 'default', width: 200 }
        ],
        list: [
          {name: 'menuData', desc: `菜单数据，格式为数组。如:[{title: '电商',icon: 'fa fa-shopping-cart',sub: [{ title: '亚马逊', icon: 'fa fa-amazon', to: '/shop/amazon' }]}]`, type: 'Array', default: '默认的demo菜单'}
        ]
      }
    }
  }
}
</script>

<style lang="less">

</style>
