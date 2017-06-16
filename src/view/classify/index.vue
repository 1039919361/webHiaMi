<template>
    <div class="y-box">
      <div class="ment">
   
          <router-link :to="item.link" active-class="oppo"  v-for="item in mainlist" class="hell">
            
              {{item.text}}
            
          </router-link>
      </div>
    <router-view></router-view>
   </div>
</template>

<script>
export default{
  data () {
    return{
      mainlist:[
        {
          text:'分类',
          link:'/parent/classify/classparent'
        },{
          text:'品牌',
          link:'/parent/classify/classsent'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
    .ment{
      height: .44rem;
      text-align: center;
      background-color: #fff;
      border-bottom: 1px solid #e6e6e6;
      .hell{
       display: inline-block;
        height: .34rem;
        padding-top: .1rem;
        color: #666;
        cursor: pointer;
        position: relative;
        &:nth-child(2){
        margin-left: .2rem;
        }
        &:nth-child(1){
        margin-right: .2rem;
        }
        &.oppo:after{
          content:"";
          display: block;
          width: 100%;
          height: 3px;
          background: #000;
          position: absolute;
          bottom: 7px;
          left: 0;
        }
    }
  }
</style>

