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
    <table class="hv-api-table">
      <thead>
        <tr>
          <td style="width: 100px;">属性</td>
          <td>说明</td>
          <td style="width: 100px;">类型</td>
          <td style="width: 100px;">默认值</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>mode</td>
          <td>mode</td>
          <td>mode</td>
          <td>mode</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import siderBar from '@/components/menu/sidebar'
export default {
  components: {siderBar}
}
</script>

<style lang="less">

</style>
