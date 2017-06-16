<template>
   <nav class="footer">
    <router-link :to="item.link" v-for="item in navList" active-class="high">
       <p>{{item.icon}}</p>
       <p>{{item.text}}</p>
    </router-link>
  </nav>
</template>
<script>
export default {
  name: 'footerNav',
  data () {
    return {
      navList: [
        {
          icon: 'x',
          text: '首页',
          link:'/home/index/2'
        },
        {
          icon: 'x',
          text: '分类',
          link:'/parent/classify'
        },
        {
          icon: 'x',
          text: '购物车',
          link:'/parent/shop'
        },
        {
          icon: 'x',
          text: '我的',
          link:'/parent/myself'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
  .footer{
    font-size: .14rem;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    z-index: 999;
    height: .4rem;
    border-top:1px solid #f2f2f2;
    background: #fff;
    overflow-x: hidden;
    display: flex;
    justify-content: space-around;
    .high{
     color: red;
    }
    a{
      
      display: inline-block;
      p{
      padding-bottom: .05rem ;
      text-align:center; 
      }
  }
 }
  
</style>
