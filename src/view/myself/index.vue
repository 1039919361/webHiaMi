<template>
   <div class="y-box">
      <div class="user-info">
        <span class="avatar">
          <input type="file">
          <img src="//m.haimi.com/static/images/web/default-avatar-square.png?imageView2/1/w/100/h/100" alt="">
        </span>
        <span class="nickname">海蜜_e2wmmz</span>
        <i></i>
      </div>
        <div class="user-menu">
          <ul>
            <li class="line">
              
              <a href="javascript:;">我的订单<span>查看全部订单</span></a>
              
            </li>
            <li class="column cle">
              <a href="javascript:;">待付款</a>
              <a href="javascript:;">待发货</a>
              <a href="javascript:;">待收货</a>
              <a href="javascript:;">待评价</a>
              <a href="javascript:;">退款</a>
            </li>
            <li class="blank"></li>
            <li class="line">
              <router-link to="/fav">
              <a href="javascript:;">收藏宝贝</a>
              </router-link>
            </li>
            <li class="line">
              <router-link to="/coupon">
              <a href="javascript:;">红包优惠券</a>
              </router-link>
            </li>
            <li class="line">
              <router-link to="/fav">
              <a href="javascript:;">足迹</a>
              </router-link>
            </li>
            <li class="line">
              <a href="javascript:;">积分商城</a>
            </li>
            <li class="line">
              <router-link to="/address">
              <a href="javascript:;">收货地址</a>
              </router-link>
            </li>
            <li class="line">
              <router-link to="/binding">
              <a href="javascript:;">绑定手机 <span>152*****520</span></a>
              </router-link>
            </li>
            <li class="line">
              <router-link to="/service">
              <a href="javascript:;">海蜜客服</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="logout" @click="logout">
          <router-link to="/enroll?to=myself">退出登录</router-link>
          
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
    logout(){
       window.localStorage.clear();
    }
   
  }
}
  
</script>
<style scoped lang="less">
  .y-box{
  height: auto;
  font-size: .14rem;
  background: #f9f9f9;
  height: 100%;
  .user-info{
    height: .5rem;
    padding: .1rem;
    background: #fff;
    .avatar{
      position: relative;
      display: block;
      float: left;
      width: .5rem;
      height: .5rem;
      padding: 0;
      margin-right: .05rem;
      background: none;
      margin-right: .15rem;
      input{
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        width: .5rem;
        height: .5rem;
        opacity: 0;
      }
      img{
        width: .5rem;
        height: .5rem;
        vertical-align: top;
      }
  }
  .nickname{
    line-height: .5rem;
    font-size: .16rem;
    display: block;
    overflow: hidden;
    max-width: 1rem;
    height: .5rem;
    padding-right: .08rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
    }
    i{
      display: block;
      float: left;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAR5JREFUeNrs2b0KglAUB3CNlj5oqyeQltagyaGxLWpvdAh6mmjxHaJNaGqNaG3yEZr7WML+FwzKJfWeczU6B/7c5ao/jlcuqh1FkfVrVbF+sAQtaEEL+o/Q1W8TfN9vYVgiE6SZ4dx3ZIxsU8xtI4E6xvM8l6LTK2SWEawq7VarwDukj9RIOh13WFUXCYnv9AvcQ07IiGpN1+ORGzxEzmV+EHODi0JrgYtAa4NNo0nAJtFkYFNoUrAJNDmYG80C5kTnAe+RA9U2bqrDg6I63eFaEpzogBvMgb4hR04wx5p2LQMl74iCFrSgBf1R13h0GB1O4lra6M3bJ4SIKWHiWto74hx5IFOkwdTpC7JGFmkm2/KjSNCCFrSgS11PAQYAtIJgn5JOJd0AAAAASUVORK5CYII=) no-repeat 50%;
      width: .23rem;
      height: .5rem;
      background-size: 100%;
    }
  }
  .user-menu {
    background: #fff;
    margin-top: .1rem;
    ul{
      .blank{
        height: .1rem;
        background-color: #f7f7f7;
      }
    li.line{
      padding-left: .2rem;
      margin-left: 0;
      border-bottom: 1px solid #eee;
      position: relative;
      ::after{
          content: '';
          display: block;
          width: .15rem;
          height: .16rem;
          position: absolute;
          top: .18rem;
          right: .1rem;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYJJREFUeNqslcErBHEUx2eXJBdntUehPchlIye5UdQWLluSwxRxVKs2t60tBwcns7mRKA7rvrmJv8DBCblIUZKE8fnVm3oHu2Z33qtP3+Yd3nfe+828XyoMQ69RBEGQRiowCHnf93+8FiPdpHgncgobMAtlr41oaMDbfiE3KlXEdMnMQKIENfW8h8lEKwapZmcgo+pBLmFYUk8wToe3JgZikkGuoU9SbnRjmLwmHVF0Hg/uK4J3SQ3BGcYdJgZicoUsQ9TyJOyaGYjJMbKlUit0sW5mIOH+h0P1vIPJdKJD/uPQu5ELGJWUO+wsHT5adOBG9YHMwJ2kemHeakQ6PvU0zAwYURdyAv2SepO9ZdZBFaKV8Q0FxnZvYsDbF5FFldqkeM3kK6J4XkYRzbtKcd/kP6B4DjlQxeuwZrns3EbNSMpt0hwv/5J4Vci6PlfFn2EqTvF/DWRbHsGI+u4X4t4FcTooy30cxSrF65aX/oBKVSi+b33pz8G23Muldv7IXwEGAC7agjacn98NAAAAAElFTkSuQmCC) no-repeat;
          background-size: 80%;
        }
      a{
        height: .48rem;
        line-height: .48rem;
        
        span{
          float: right;
          margin-right: .3rem;
        }
      }
    }

    .column{
      height: auto;
      margin-bottom: .1rem;
      height: .75rem;
      a:first-child {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVRJREFUeNrsmbtKxEAUhs8saVIo2ESWkELfQKy3sbNIFfAFVvIONgvBwlfYFNZh6xQ2Wm0v1im0iEElYKFFynjOkgGL3aTaZAL/gW8uzBQfw9wyUXVd09hiQiMMSPcVKgzDS87vmanhrh/MPI7jh8lIhKlxFFey/gkrw6Vr7YqFCGlIQxrSm1g3e+MQrMc40q0HndXSNsOchjSkIQ1pSO9L+ohZMu8tx+4PE/UlbXW0HzJPzFlHvwNmwTx23Rv6kL4RYcdxKAgCknxbJElCWZZJ8diE6XElie/7O4XlLTDPc119Hlr6hDm1bZtc193ZqSgKqqpKim/M69DS55J4nkdKbb8plmVJaZrq6sqEhfgliczVKOrcGF6YO1O+XG6Z35Y+30zMXDTbnhFb3qIBJyKkIb3nhSgv7NPm4mN6fOqRvtYVw6Ng5ptHEfxHhDSkh48/AQYAOgdpIUWPZRcAAAAASUVORK5CYII=);
      }
      a:nth-child(2) {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVVJREFUeNpi/P//P8NQA0wMQxCMOppegDEtLc0TSM8FYslB7tbnQJw8c+bM7UxDxMEMUDeC3MrAguRgRhINARc79fX1JGlqbGxkoMA+ydGMOOroUUePOnrU0aOOHnU0DLBQ07CfP38ynDt3DoxBwMjIiMHQ0JCBg4Nj8Dn6zZs3DCdPnmS4dOkSw69fv+Diu3btYjhw4ACDnp4eg7m5OYOIiMjgcPTixYsZ7t27h9yo2QPEU6D8HKAnXM6cOcMIxAxKSkqDw9FQB38BuR/q2GtI0puAWAvkeCCOBarlGeiMeASIbwNxMRDLAnEWmoNh4BpUThaqFqTn4ECFtC2J6j8AcR8Uj5bTo44edfSooxHgMLRywYYPD8WQZqSmYdRsMNmOpulRR486etTRo46mSccWNMIuCa25Bjt4AQvpFBhnkIOnQJwMrl5H5xFHHT3q6IEHAAEGAMspXDu1VNnHAAAAAElFTkSuQmCC);
      }
      a:nth-child(3) {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAh5JREFUeNrsmT1PAkEQhucM4ShMTKAy2gAVldioPTRGOztjYxAuNv4A/4WVIWBnYmflRyHUYIkNMQY6ow3ESIM05ztkLyEB5di7eG7YSZ67ze1lZ2dnP2Z3Ddu2SWVZIMVFGxC0GIVCYRvvC7D8x7rfQA7cF4tFTx4IovIkdF54LSQ0Unnjjw2w/Wg4PYi1AfNuQOg/VMKyLKU9YLukB2rgBIRV7EKLYAucgUew8l8MMFyyBPbAC0iDW2Cq5IFPcA02wDNYAwUVZ6EPcCrS+6pOow/iva6qAT3xNvVKrA3wMZSwtQcC9kAQOzLtgbkxICzC2JpYRCaGtj7IzHrcbGg4bL0REeCobAkOwS549Vh5KT0hFy0yLDQajVI2m6VEIjHMaLfbVKlUqNvtOqHtJvjy0PJSeqZ1Id7rpWOxGOXzeUqlUmSa5hBO8zfOc0JbL7tKWT3TDNjnRyaToUgkMpbJ3zhv9F9JkdbDXYjPKJd/m5cdd06SZDI52ldl5nbbg5539sARJxScQXkw59iAO+GBSfvQujOQfpJWq+Uk6zPsb/3Qs8p1D/12tG1Z1hW7rFqtUjweH+uf/X6fOE/IlewxuRc90wYx/9nodDpUKpWo2WzSYDAYwulyuUycB3kS/8qKtB5j2iUfWuenBcaRBthBq3hayGT1GG5uKVE4LzTH4ACkxOcmuATnKHTgx6iU0WPoa1ZtgDZAGxCofAswAOBN4RWiT1JMAAAAAElFTkSuQmCC);
      }
      a:nth-child(4){
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbdJREFUeNrsmT9Iw1AQhxMpDboEixZRyOaqi+CiLoJOooO4OVSwg6AgQikqagQHHRxcpCBmcFNcdBHEqToILrq5BkSIYCmCkiLG38F1sNZKpX/ek3fwwT1K2y+Py71rqgdBoMkWDZqEoaRrFXo8Hg9Ho9HDbDY74vu+kBdhGMaHaZqnnudNpFKpHEluYTEqqjAFuZEj0nVah8AkJbFYTLMsS0hp13U1x3EonQZJ2t0IrUQVLnCLqO6hpP+jdCif2LatC+4aqPJQ0kpaUuk038F/IV0B10tw9aXlVXsErsBn9H/r0+W8SdW0klbdo7LdRZSdLqu7yNI9Qtync2BAlpqeAr2gRZYbsRGscL4mi/Qs6AA34EgG6WZ6zsH5Yv7Xi+jSCRa/AOcyHC7tYI53NynLibgKmsAx17MQ0jQb34LuIq91cpt7B8sinYj03V3gGswXnIobfKDsg3uRpAfBLgiDbXAG2kAPGAdvGj/aLSb9zHlfjaVfwQwYA09gCNyBPd71HfDwk/RBlae43ya4E65rammtnGfAZqm6SvBVZeo4wT2CYbAAXsBSKR9d/Y+opJV0/eNTgAEAmr6XjlsWOe4AAAAASUVORK5CYII=);
      }
      a:last-child{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcNJREFUeNrsmT9Lw0AUwJMSBNGl2jr2C4joUFChHdpJ/Q4OGcyok+KaVT9Bpgx+CAfFCi12EEHw356tVnRwEBWN7+QFQsilSXPx7uQe/JqQ3MGPR9+9S6L7vq/JFrqSVtIJ0pZlTcDxENgEyoJ6vgBHwK7jOB8GnBwA24Int4yOb8C+gRnWTNPUarVa7AzbtnXO0g2gC2wR6RL8zJCrNGFBoofHX9eSJmEoaSVdkDSp5gugkmEOGdsHznlJTwGrwGlK8QqOXQGmeUmvAffAYgrxKo4hY++AdV7Sj0A7JH5CEa/iPTLmFmgBQ56FOAiJL8WIR4XbeYVZrR6B+ENIfDYifMNKmISRY+41CkWDiD9Fri3g3ymIK6DOI9PvOeZ+8sr0csK94MmikN2hauMMgnTZSyxiaaQnsUA7SeKiSW9gx5xPEh9Xuo/FRiNckDS6lC7bGiU+rvQXg6x+U64PY8TnWCx5jRH38y55gXgHxc9kWfKiGZdmnQ6LM+mIfy1+DLzKIh2I16Vu40VlupewpAkr3VTvPf6L9DM58TxPqkIkb9h3XNdN05a1Agu3mUV6D/cIPD9fZNqjqK9bSlpJCxA/AgwAjyOChY/U74cAAAAASUVORK5CYII=);
      }


      .cle{
      display: block;
      zoom: 1;
      }
      a{
        display: block;
        width: 20%;
        float: left;
        height: .3rem;
        background-repeat: no-repeat;
        background-size: .28rem;
        background-position: center .12rem;
        padding-top: .45rem;
        text-align: center;
        position: relative;
        font-size: .12rem;
      }
    }
    }
  }
  .logout{
    margin: .1rem 0 .2rem;
    background-color: #fff;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
  }
}
</style>
