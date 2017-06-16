<template>
  <div class="search">
      <div class="header">
        <input type="text" placeholder="搜索宝贝">
        <span>搜索</span>
      </div>
      <div class="search-hot">
         <h3>热搜宝贝</h3>
      <div class="search-content">
        
        <span v-for="item in hotword">
          <router-link :to="{name:'searchclassify',params:{pageId:item} }">  
          {{item}}
        </router-link>
        </span>
        
      </div>
      </div>
  </div>
</template>
          
<script>

export default {
  data () {
    return {
      hotword:[]
    }
  },
  created () {
      // let ProductID=this.$route.params.ProductID;
      // http://m.haimi.com/api/search/hotword?type=PRODUCT&platform=WAP
      // http://m.haimi.com/api/product/detail-cdn?ProductID=4444353&platform=WAP
      this.$http.jsonp('http://m.haimi.com/api/search/hotword?type&platform=WAP',
      {
          jsonp:"_callback"
      }
        ).then(function (res) {
        this.hotword=res.data.data;
        

        // this.name=data.Subject;
        // 要转成json对象
        // this.swiperLide = JSON.parse(data.ProductPictures);

        // this.tranceText=res.data.data;

        // this.shopComment=res.data.data;

        // var ress=res.data.data.Descriptioin;

        // this.docume=res.data.data.Descriptioin.substring(0,1);
        // console.log(docume)
      
      }, function (response) {
        console.log(response)
      })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .search{
    height: auto;
    font-size: .12rem;
    .header{
      height: .44rem;
      border-bottom: 1px solid #f2f2f2;
      input{
        height: 65%;
        width: 70%;
        border: none;
        background: #f9f9f9;
        margin-top: .09rem;
        margin-left: .1rem;
        padding:0 8% 0 5%;
      }
      span{
        padding-left: .05rem;
        font-size: .12rem;
      }
    }
    .search-hot{
      h3{
        font-size: .14rem;
        font-weight: 500;
        line-height: .3rem;
        padding-left: .1rem;
      }
      .search-content{
        margin-left: .1rem;
        span{
          display: inline-block;
          line-height: .16rem;
          padding: .03rem .12rem;
          border: 1px solid #e5e5e5;
          margin-bottom: .1rem;
          margin-right: .1rem;
        }
        
      }
    }

  }


</style>
