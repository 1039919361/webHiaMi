<template>
   
  <div class="coupon-box">
    <div class="bonus-type">
        <ul>
          <li v-for="item in list">
            <router-link :to="item.link" active-class="on">
            <a href="javascript:;">{{item.name}}</a>
            </router-link>
          </li>
          
        </ul>
    </div>
      <router-view></router-view>

   </div>
</template>

<script>
export default {
  data () {
    return {
        list:[
          {
            name:'可用',
            link:'/coupon/couponK'
          },
          {
            name:'已使用',
            link:'/coupon/couponYsy'
          },
          {
            name:'已过期',
            link:'/coupon/couponGq'
          }
        ]
    }
  }
 }
  
</script>
<style scoped lang="less">

  

    .coupon-box{
      height: auto;
      font-size: .14rem;
      background: #f6f6f6;
      .bonus-type{
        background: #fff;
        height: .44rem;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: .15rem;
        ul{
          
          li{
            line-height: .44rem;
            width: 33.33%;
            text-align: center;
            float: left;
            background: #fff;
            position: relative;
            a{
              display: inline-block;
              line-height: .44rem;
              padding: 0 .06rem;
            }
            .on{
              border-bottom: 2px solid #991f33;
              color: #991f33;
            }
          }
        }
      }
      
   }
</style>
