<template>
   <div class="y-box">
    <div>
      <img src="//m.haimi.com/static/images/web/default-avatar-square.png" alt="">
      <div class="number">
        <p>您的手机号码：+86 152*****520</p>
      </div>
    </div>

      <div class="btn" @click="loginClear">
        <router-link to="/enroll?to=myself">更换手机</router-link>
        
      </div>
   </div> 
   
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods:{
    loginClear() {
      window.localStorage.clear();
    }
  }
}
  
</script>
<style scoped lang="less">
  .y-box{
  height: 600px;
  font-size: .14rem;
  div{
    img{
      display: block;
      margin: .3rem auto;
      width: .5rem;
      height: .5rem;
    }
    .number{
      text-align: center;
      font-size: .16rem;
    }
  }
  .btn{
    text-align: center;
    line-height: .38rem;
    background: #991f33;
    margin-top: .3rem;
    font-size: .16rem;
    color: #fff;
    width: 92%;
    margin-left: 4%;
    a{
      color: #fff;
    }
  }
}
</style>
