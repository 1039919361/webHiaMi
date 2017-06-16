<template>
  <nav id="nav-box">
    <div class="nav-list">
      <router-link
       v-for="item in navList" active-class="on" :to="item.Link+'/'+item.NavID" class="nav-item">
      {{item.Title}}
      
    </router-link>
      
      </div>
  </nav>

</template>

<script>
export default {
  data () {
    return {
      navList:[]
    }
  },
  mounted () {
    this.getNav()
  },
  created(){
    
  },
  destorg(){
    // window.addEventListener('scroll',this.getScroll)
  },
  methods: {
    getNav () {
      this.$http.get('/api/navList').then(function (response) {
        this.navList=response.data.data;    
      }, function (response) {
        console.log(response)
      })
    }
    // ,
    
    // getScroll () {
    //   var scroll= document.body.scrollTop;

    //   // console.log(scroll)
    //   var navite=document.getElementById("nav-box");
    //   var offse=navite.clientHeight;
    //   // console.log(offse)
    //   if(scroll>offse){
    //       // document.getElementById("nav-box").className='navCla';
    //       navite.style.position="fixed";
    //       navite.style.top=0;
    //       navite.style.left=0;
    //       navite.style.zIndex=999;
    //       navite.parentNode.style.paddingTop=offse+'px';

    //       return;

    //     }else{
    //       navite.style.position="relative";
    //       navite.parentNode.style.paddingTop=0+'px';
          
    //     }

    //   }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

#nav-box{
  font-size: .12rem;
  background: #fff;
  width: 100%;
  height: .35rem;
  overflow-x: auto;
  .nav-list{
    font-size: .12rem;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    .nav-item{
      display: block;
      padding: 0 .18rem;
      line-height: .35rem;
      color: #000;
      position: relative;
    &.on:after{
      content:"";
      display: block;
      width: 80%;
      height: 3px;
      background: #000;
      position: absolute;
      bottom: 0;
      left: 10%;
        }
      }
    }
  }      
</style>
