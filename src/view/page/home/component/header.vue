<template>
  <div class="search-bar">
    <div class="text">
      <span class="fl ico"></span>
      <input class="fl f12 c_fff" placeholder="搜索宝贝" type="search">
    </div>
    <div class="submit">
      <router-link to="/search">搜索</router-link>
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
     
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-bar{
  height: 0.44rem;
  background: #242424;
  padding: 0.1rem;
  border-bottom: 1px solid #e5e5e5;
  display:-webkit-box;
  box-sizing:border-box;
  .text{
    -webkit-box-flex:1;
    background: #1a1a1a;
    line-height: 0.44rem;
    position:relative;
    input{
      border: none;
      height: 0.24rem;
      padding-left: 0.02rem;
      display:block;
      position:absolute;
      background: #1a1a1a;
      top:0;
      width:100%;
      left:0;
      color:#fff;
    }
  }
  .submit{
    display: block;
    width: 0.4rem;
    text-align: center;
    font-size:0.14rem;
    color: #fff;
    font-weight: 600;
    padding-top: .05rem;
    padding-left: .05rem;
  }
}
</style>
