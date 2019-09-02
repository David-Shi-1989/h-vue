<template>
  <div class="sc-sidebar">
    <div class="logo"></div>
    <!-- <div class="title">
      <Icon type="logo-codepen" />
      <p>安全服务</p>
    </div> -->
    <ul class="menu-1">
      <li v-for="(item1,idx1) in menuData" :key="`menu-1-${idx1}`" class="menu-item menu-item-1">
        <a class="menu-item-link-1" @click="onMenuItem1Click(item1)">
          <i :class="item1.icon"></i><span>{{item1.title}}</span>
          <i v-if="item1.sub" :class="['fa', 'fa-angle-down', item1.open?'rotate-90':'']"></i>
        </a>
        <ul v-if="item1.sub" class="menu-2" :style="{height: item1.open?(item1.sub.length*menuHeight)+'px':'0', overflow: 'hidden'}">
          <li v-for="(item2,idx2) in item1.sub" :key="`menu-2-${idx2}`" class="menu-item menu-item-2">
            <a class="menu-item-link-2" :to="item2.to" :class="[item2.active?'active':'']" @click="onMenuItem2Click(item2)">{{item2.title}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuData: {
      type: Array,
      default: () => [
        {
          title: '电商',
          icon: 'fa fa-shopping-cart',
          sub: [
            { title: '亚马逊', to: 'fa fa-amazon' }
          ]
        },
        {
          title: '社交',
          icon: 'fa fa-fa',
          sub: [
            { title: '微信', to: 'fa fa-weixin' },
            { title: '新浪微博', to: 'fa fa-weibo' },
            { title: 'Facebook', to: 'fa fa-facebook' }
          ]
        }
      ]
    }
  },
  data () {
    return {
      menuHeight: 32
    }
  },
  created () {
  },
  mounted () {
    setTimeout(this.activeItemByPath.bind(this), 300)
  },
  methods: {
    onMenuItem1Click (item) {
      if (item.open) {
        this.$set(item, 'open', false)
      } else {
        var me = this
        this.menuData.filter(mItem => mItem.title !== item.title).forEach(fItem => {
          me.$set(fItem, 'open', false)
        })
        this.$set(item, 'open', true)
      }
    },
    onMenuItem2Click (item) {
      function clearMenuItem2Active () {
        for (let i = 0; i < me.menuData.length; i++) {
          let item1 = me.menuData[i]
          for (let j = 0; j < item1.sub.length; j++) {
            let item2 = item1.sub[j]
            me.$set(item2, 'active', false)
          }
        }
      }
      var me = this
      clearMenuItem2Active()
      this.$set(item, 'active', true)
      if (item.to) {
        this.$router.push({path: item.to})
      }
    },
    activeItemByPath (_path) {
      let path = _path || this.$route.path
      let activeIndex = this.findActiveItemIndexByPath(path)
      if (activeIndex && activeIndex.length === 2) {
        let index1 = activeIndex[0]
        let index2 = activeIndex[1]
        this.onMenuItem1Click(this.menuData[index1])
        this.onMenuItem2Click(this.menuData[index1].sub[index2])
      }
    },
    findActiveItemIndexByPath (path) {
      for (let i = 0; i < this.menuData.length; i++) {
        let item1 = this.menuData[i]
        for (let j = 0; j < item1.sub.length; j++) {
          let item2 = item1.sub[j]
          if (item2.to === path) {
            return [i, j]
          }
        }
      }
      return null
    }
  }
}
</script>

<style scoped lang="less">
@menu-item-height: 32px;
.sc-sidebar {
  width: 100%;
  height: 100%;
  background-color: #31353c;
  color: #eaeef2;
  font-size: 12px;
  border-radius: 0;
  .title {
    text-align: center;
    padding: 20px 0;
    i {
      font-size: 40px;
    }
    p {
      font-size: 15px;
    }
  }
  a {
    display: block;
    text-decoration: none;
    color: #fff;
    padding: 0 10px;
    height: @menu-item-height;
    line-height: @menu-item-height;
    cursor: pointer;
    box-sizing: border-box;
    &.menu-item-link-1 {
      i.fa-angle-down {
        transition: all .2s;
        &.rotate-90 {
          transform: rotate(90deg);
        }
      }
    }
    &.menu-item-link-2 {
      padding: 0 0 0 35px;
      &:hover {
        background-color: #888;
      }
      &.active {
        background-color: var(--color-light-primary);
      }
    }
  }
  .menu-1 {
    text-align: left;
    list-style: none;
    i.fa {
      display: inline-block;
      width: 15px;
      height: 15px;
      line-height: 15px;
      margin-right: 10px;
      text-align: center;
    }
    .menu-2 {
      list-style: none;
      background-color: #262626;
      transition: height .3s;
    }
  }
}
</style>
