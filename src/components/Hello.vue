<template>

  <!-- 废弃的page 不起作用 -->
  <div class="hello">
        <page></page>
        <router-view></router-view>
        <footerNav></footerNav>
      </div>
  </div>
</template>
<script>
import footerNav from '@/view/base/footerNav/foot'
import page from '@/view/page/home/'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
     footerNav,
     page
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
