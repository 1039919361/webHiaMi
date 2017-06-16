<template>
  <div>
    <div class="y-box" v-for="item in classpage">
      <div class="class-banner" v-if="item.Records[0].PictureWebp != 0">
        <img :src="item.Records[0].PictureWebp" alt="">

      </div>
      <div class="class-menu" v-else>
        
        <span v-for="i in item.Records">
          <router-link :to="{name:'searchclassify',params:{pageId:i.SlideName} }">  
          {{i.SlideName}}
          </router-link>
        </span>
        
        
      </div>

   </div>
   </div>
</template>

<script>
export default{
  data () {
    return{
      classpage:[]
    }
  },
  mounted () {
    this.getimgAuto()

  } ,
  methods: {
    getimgAuto () {
      this.$http.get('/api/classpage').then(function (res) {

        this.classpage=res.data.data;
      
      }, function (response) {
        console.log(response)
      })
    }
  }
  // ,
  // created () {
  //     let SlideID=this.$route.params.SlideID;
  //     // http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list&platform=WAP
  //     this.$http.jsonp('http://m.haimi.com/api/ad-module/get?SlideID='+SlideID+"&platform=WAP",
  //     {
  //         jsonp:"_callback"
  //     }
  //       ).then(function (res) {
  //       this.classpage=res.data.data;

  //     }, function (response) {
  //       console.log(response)
  //     })
  // }
}
</script>
<style scoped lang="less">
    .class-banner{
      width: 100%;
      margin-top: .03rem;
      font-family: sans-serif;
      img{
        display: inline-block;
        width: 100%;
      }
    }
    .class-menu{

      background-color: #fff;
      padding: .13rem 0 .05rem;
      display: block;
      zoom: 1;
      span{
        padding: .08rem .13rem;
        border: 1px solid #e5e5e5;
        float: left;
        margin: 0 0 .12rem .13rem;
      }
    }
</style>

