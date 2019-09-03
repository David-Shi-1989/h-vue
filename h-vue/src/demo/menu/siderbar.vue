<template>
  <div>
    <h1>Sidebar 侧边栏</h1>
    <h2>概述</h2>
    <p>固定在侧边，用于导航的菜单列表。支持两级，手风琴模式。</p>
    <h2>代码示例</h2>
    <h3>普通使用</h3>
    <div class="hv-demo-block-m" style="width: 200px;">
      <siderBar></siderBar>
    </div>
    <h2>API</h2>
    <h3>props</h3>
    <Table size="small" :column="table.column" :list="table.list"></Table>
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
          { title: '属性', key: 'name' },
          { title: '说明', key: 'desc' },
          { title: '类型', key: 'type' },
          { title: '默认值', key: 'default' }
        ],
        list: [
          {name: 'name1', desc: 'desc1', type: 'type1', default: 'default1'}
        ]
      }
    }
  }
}
</script>

<style lang="less">

</style>
