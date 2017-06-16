<template>
  <div>
    <headerBar></headerBar>
    <div class="section">
      <navList v-directiveNav=""></navList>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import footerNav from '@/view/base/footerNav/foot'

import headerBar from '@/view/page/home/component/header'
import navList from '@/view/page/home/component/navlist'
import imgBanner from '@/view/page/home/component/banner'
import dlMenu from '@/view/page/home/component/menu'
import imgMenu from '@/view/page/home/component/imgmenu'
import greatTitl from '@/view/page/home/component/great'
import subMenu from '@/view/page/home/component/submenu'
import brandTitl from '@/view/page/home/component/brand'
import everyTitl from '@/view/page/home/component/everybody'
export default {
  name: 'homePage',
  data () {
    return {
      swiperLide:[]
    }
  },
  components: {
    headerBar,
    footerNav,
    navList,
    imgBanner,
    dlMenu,
    imgMenu,
    greatTitl,
    subMenu,
    brandTitl,
    everyTitl
  },
  mounted () {
    this.getimgAuto()

  },
  methods: {
    getimgAuto () {
      this.$http.get('/api/imgAuto').then(function (res) {
        // this.imgAuto=response.data.data
        console.log(res)
        this.swiperLide = res.data.data[0];
        // console.log(this.swiperLide)

      
      }, function (response) {
        console.log(response)
      })
    }
  }
}   
</script>

<style scoped lang="less">


.section{
  margin-bottom: .4rem;
}


</style>
