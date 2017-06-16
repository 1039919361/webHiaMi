<template>
  <div class="search">
    <!-- 搜索分类页 -->
      <div class="header">
        <input type="text" placeholder="搜索宝贝" ref="inpt">
        <span @click="getMenu">搜索</span>
      </div>
      <div class="search-list">
          <span>综合排序</span>
          <span>销量优先</span>
          <span>价格排序
            <i><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5QzBCQUJDOUZGNjExRTY4ODA0RjY1NUY2NzNBOEVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY5QzBCQUJEOUZGNjExRTY4ODA0RjY1NUY2NzNBOEVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjlDMEJBQkE5RkY2MTFFNjg4MDRGNjU1RjY3M0E4RUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjlDMEJBQkI5RkY2MTFFNjg4MDRGNjU1RjY3M0E4RUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5CQvlXAAAAmklEQVR42mL8//8/AzKYNWuWIohOS0u7jyzOiKwQqMgNSK2HcgOBindhKAQqCgJSy4GYDSr3C4gjgYrXwRUCFSUA2XOAmJkBFfwF4hSg4gWMM2fO9AJytoA0MWAHICt9mIDEb6g1uABI7g8juq9xgeGlEBiOzkB6ExBz4VDzDYj9QeHIDsSceAwDybERH4UkJQqSkhmhhAsQYAAuwmAZyCRlZAAAAABJRU5ErkJggg==" alt=""></i>
          </span>
      </div>
        <div class="search-menu">
         
        <dl v-for="item in Subject">
          <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID} }">
    
          <dt>
            <!-- <img v-lazy="item.PicturesWebp" alt=""> -->
            <img v-lazy="item.Pictures" alt="">
            <span>月销{{item.MonthSalesNum}}件</span>
          </dt>
          <dd>
            
            <p>{{item.Subject}}</p>
            <p class="price">¥{{item.FinalPrice}}</p>
            
            
          </dd>
          </router-link>
        </dl>

        
      
        </div>
  </div>
</template>
          
<script>

export default {
  data () {
    return {
      Subject:[]
    }
  },
  mounted(){
    let classSpan=this.$route.params.pageId;
    console.log(this.$refs)
    this.$refs.inpt.value=classSpan;


  },
  created () {
      let classSpan=this.$route.params.pageId;
     
      
      // http://m.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject='+this.wordValue+"&Sort=&BrandID=&platform=WAP

      // http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=%E9%9D%A2%E8%86%9C&Sort=&BrandID=&platform=WAP

      // http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject='+wordValue+"&Sort=&BrandID=&platform=WAP
      console.log(classSpan)

      this.$http.jsonp('http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject='+classSpan+"&Sort=&BrandID=&platform=WAP",  
      {
          jsonp:"_callback"
      }
        ).then(function (res) {
        this.Subject=res.data.data;
       
      
      }, function (response) {
        console.log(response)
      })



      // this.$http.jsonp('http://m.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject='+this.wordValue+"&Sort=&BrandID=&platform=WAP",  
      // {
      //     jsonp:"_callback"
      // }
      //   ).then(function (res) {
      // console.log(res)
       
      
      // }, function (response) {
      //   console.log(response)
      // })
  },
  methods:{
      getMenu () {
        let val=this.$refs.inpt.value;
        console.log(val)
        
      }
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
    .search-list{
      line-height: .41rem;
      background: #fff;
      text-align: center;
      overflow: hidden;
      border-bottom: 1px solid #e5e5e5;
      span{
        &:hover{
          color: #991f33;
        }
        &:nth-child(1){
          width: 30%;
          display: inline-block;
          float: left;
          position: relative;
        }
        &:nth-child(2){
          width: 40%;
          display: inline-block;
          float: left;
        }
        &:nth-child(3){
          width: 30%;
          display: inline-block;
          float: left;
          position: relative;
          i{
            position: absolute;
            width: .05rem;
            height: .1rem;
            top: .16rem;
            right: .22rem;
            img{
              display: block;
              width: .06rem;
              height: .1rem;
            }
          }
        }
      }
    }
    .search-menu{
      background: #f2f2f2;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      dl{
        width: 49%;
        background: #fff;
        margin-bottom: .1rem;
        dt{
          position: relative;
          img{
            width: 100%;
          }
          span{
            position: absolute;
            bottom: 0;
            right: .05rem;
            padding: .03rem .03rem;
            background: rgba(0,0,0,.4);
            color: #fff;
          }
        } 

        img:first-child{
          height: 1.83rem;
        }
        dd{
          width: 80%;
          padding: 0 .1rem;
          height: .5rem;
          p{
            overflow: hidden;
              text-overflow: ellipsis;
              padding: 0 .1rem;
              line-height: .25rem;
              white-space: nowrap;
              font-size: .14rem;
              
          }
          .price{
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAahJREFUeNrsmVErREEUx3e2jQdKyReQPHjgyYNSiiUK5cWnUD6Uz7GilCdvlPJgKTZtKZYSi+s/da4mtWPOmHOvYU79d7Z2z9zfPXNmzsy9KsuySmxWrURoCTpBJ+gE7We1Xj8opb5bwJX+KGOd/1uRziMZG7STIY1EwGxpV/VximX12IYe9b0UoAdoyzq6togaQ687GiwwmB1wDf000vfUjtMEldIsXacVIj2OqZ0UjnCd2t2YoBepbcQCPQDNQG/QfizQc1AfdATdhYA+hV6hMai/zHzmQD9DZ1RBJ4ShGyE3TJIpMgJNQU/QYSzQdWI5oFGNAnrBNZ8/N0a99MVGaW9wJQB9Tn1PO3ExoHWZ7VDnwwGB82DcmiNv4+Kkh+74RCBFlqjdg94ljlsSeT3vutT9FmjFKSo+EzEvtRIb/yaLiwmtR2YH6gYE1hNwkwPtenIp3GxcNa5jGafvkA9r1qA2dA2tMvzWyUcfqTa875Ajw1pGXt4wLnlh+LV9OEI9Fnth/NcsIN2iI71MUbuk75wK2CS/FR8Old5uJegEnaD/D/SHAAMAFobZ/36BLJ8AAAAASUVORK5CYII=) 1.3rem no-repeat;
                background-size: .2rem;
              }
          
        }
      }
    }


  }


</style>
