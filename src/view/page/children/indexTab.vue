<template>
  <div>
    <imgBanner :swiperLide="swiperLide"></imgBanner>
    <dlMenu :new-menu="newMenu"></dlMenu>
    <imgMenu></imgMenu>
    <greatTitl></greatTitl>
    <subMenu></subMenu>
    <brandTitl :brand-content="brandContent" :brand-titl="brandTitl"></brandTitl>
    <brandTitl :brand-content="brandContent2" :brand-titl="brandTitl2"></brandTitl>
    <brandTitl :brand-content="brandContent3" :brand-titl="brandTitl3"></brandTitl>
    <everyTitl :every-body="everyBody"></everyTitl>
  </div>
 
</template>

<script>

import imgBanner from '../home/component/banner'
import dlMenu from '../home/component/menu'
import imgMenu from '../home/component/imgmenu'
import greatTitl from '../home/component/great'
import subMenu from '../home/component/submenu'
import brandTitl from '../home/component/brand'
import everyTitl from '../home/component/everybody'
export default {
  name: 'homePage',
  data () {
    return {
      swiperLide: [],
      everyBody:{
        every:''
      },
      newMenu: [],
      brandTitl: [],
      brandContent: [],
      brandTitl2: [],
      brandContent2: [],
      brandTitl3: [],
      brandContent3: []

    }
  },
  components: {
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
    this.getevery()
  },
  methods: {
    getimgAuto () {
      this.$http.get('/api/imgAuto').then(function (res) {

        this.swiperLide = res.data.data[0].Records;
        this.newMenu=res.data.data[1];
        // 标题图
        this.brandTitl=res.data.data[6].Records[0].PictureWebp;
        // dl dl 菜单
        this.brandContent=res.data.data[7];

        this.brandTitl2=res.data.data[8].Records[0].PictureWebp;
        // dl dl 菜单
        this.brandContent2=res.data.data[9];

        this.brandTitl3=res.data.data[10].Records[0].PictureWebp;
        // dl dl 菜单
        this.brandContent3=res.data.data[11];


      }, function (response) {
          console.log(response)
      })
    },
    getevery () {
        this.$http.get('/api/everyBody').then(function (res) {
        this.everyBody.every = res.data.data;
      })
    }
  }
}
</script>

<!-- 增加“范围”属性限制CSS只有这个组件 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>