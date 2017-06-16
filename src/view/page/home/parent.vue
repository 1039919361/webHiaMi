<template>
  <div>
    <router-view></router-view>
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/view/base/footerNav/foot'

export default {
  data () {
    return {
      swiperLide:[]
    }
  },
  components: {
    footerNav
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .y-box{
    font-size: .14rem;
  }

</style>
