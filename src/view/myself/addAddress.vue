<template>
   <div class="y-box">
    
      <div class="ip-box">
        <div class="cle">
          
          <input type="txt" class="tel" id="text" @blur="fun" placeholder="收货人姓名">
          
        </div>
        
        <div class="cle">
          <input type="tel" class="tel" id="pass" placeholder="手机号码">
          
        </div>
          <div class="other"></div>
        <div class="cle">
          <input type="tel" class="tel" id="pass" placeholder="所在地区">
          
        </div>
        <div class="cle">
          <input type="tel" class="tel" id="pass" placeholder="详细地址">
          
        </div>
        <div class="cle">
          <input type="tel" class="tel" id="pass" placeholder="设为默认地址">
          
        </div>

      </div>
  <div class="btn" @click="loginAdd">
    添加地址
  </div>
   </div> 
   
</template>

<script>
export default {
  data () {
    return {
      sendSmsFlg: true,
      sendTime:10

    }
  },
  methods:{
      // loginAdd () {
      //   if(input.value != ""){
      //       alert('添加成功')
      //   }
      // }
  }
}
  
</script>
<style scoped lang="less">
  .y-box{
  height: 600px;
  font-size: .14rem;
  .iphone{
      line-height: .38rem;
      background: #fff9f3;
      text-align: center;
      color: #991f33;
    
  }  
  .other{
    height: .12rem;
    background: #f6f6f6;
  }
  .ip-box{
    height: 400px;
    .cle{
      
      margin-top: .1rem;
      height: .55rem;
      line-height: .55rem;
      border-bottom: 1px solid #ccc;
      margin: 0 .15rem 0 .15rem;
      position: relative;
      span{
        padding-top: .05rem;
        display: inline-block;
        color: #666;
        /*overflow: hidden;*/
      }
      .tel{
        padding-top: .1rem;
        width: 1.9rem;
        font-family: sans-serif;
        display: inline-block;  
        padding-top: .05rem;
        background: #fff;
        border: none;
        font-size: .14rem;
      }
      .code{
        float: right;
        color: #991f33;
        font-size: .12rem;
      }
      #code{
        color: #999;
      }
      .span{
        position: absolute;
        top:5px;
        right: 0;
        color: skyblue;
        font-size: .12rem;
      }
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
  }
}
</style>
