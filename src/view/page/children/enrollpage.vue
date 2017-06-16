<template>
   <div class="y-box">
      <div class="iphone">
        请输入手机号码验证码直接登录
      </div>

      <div class="ip-box">

        <div class="cle">
          <span>手机号：</span>
          <input type="tel" class="tel" id="text" @blur="fun" placeholder="请输入手机号">
          <span class="span" id="span"></span>
        </div>
        <div class="cle">
          <span>验证码：</span>
          <input type="tel" class="tel" id="pass" placeholder="请输入验证码">
          <span class="code" v-if="sendSmsFlg" @click="sendSms">发送验证码</span>
          <span class="code" id="code" v-else >{{sendTime}}秒后重新发送</span>
        </div>

      </div>
  <div class="btn" @click="loginDo">
    登录
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
  methods: {
    fun (){
      var text=document.getElementById('text').value,
          span=document.getElementById('span');
      var reg=/^1[34578]\d{9}$/;

      if(text!='' && text.length!=0){
          if(!(reg.test(text))){
            span.innerHTML="NO 输入有误";
            return false;
          }else{
            span.innerHTML="OK 输入正确";
            span.style.color="#991f33";
          }
    }else{
      span.innerHTML='请输入手机号';
    }
   },

   sendSms () {
     this.sendSmsFlg=false;
     let that =this
     let time=setInterval(function(){
      if(--that.sendTime==0){
        clearInterval(time);
        that.sendTime=10;
        that.sendSmsFlg=true;
      }
     },1000) 

     // 执行的是验证码
     var codeArr=[];
     var pass=document.getElementById('pass');
      for(var i=0; i<4; i++){
        codeArr.push(this.getRandom(0,9))
      }
      // codeArr=codeArr.join("")
      pass.value=codeArr.join("");
      console.log("%c"+codeArr,'font-size:26px');


    },
    getRandom (min,max) {
      var random=Math.random();
        return Math.floor( (max-min+1)*random+min);
    },
    loginDo () {
      var text=document.getElementById('text').value,
          pass=document.getElementById('pass').value;

        if(text != "" && pass != ""){
          // ajax请求
          var userData={
              userName:'ysg',
              text:'15210175720',
              userjpg:"www.jpg"
          }
          var url=this.$route.query.to;
          console.log(url);//是你点击的
         
          window.localStorage.setItem('userInfor',JSON.stringify(userData) );
         
          this.$router.push({name:url})//$router有push方法
        }
    }
  }
}
  
</script>
<style scoped lang="less">
  .y-box{
  height: auto;
  font-size: .14rem;
  .iphone{
    line-height: .38rem;
      background: #fff9f3;
      text-align: center;
      color: #991f33;
    
  }  
  .ip-box{
    height: auto;
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
