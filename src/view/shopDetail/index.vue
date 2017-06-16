<template>
  <div class="s-box">
   <imgBanner :swiperLide="swiperLide"></imgBanner>
    <div class="detail-content">
      <h2>{{tranceText.Subject}}</h2>
      <output><b>¥{{tranceText.FinalAmount}}</b> <span> 月销{{tranceText.SoldNum}}件</span> </output>
    </div>
    <div class="aside">邮费{{tranceText.ConsultNum}}元</div>
    <div class="other">
      <ul>
        <li>
          <span>{{tranceText.Promises[0]}}</span>
          <span>{{tranceText.Promises[1]}}</span>
          <span>{{tranceText.Promises[2]}}</span>
        </li>
        <li>
          请选择：规格分类
        </li>

      </ul>
    </div>
  <div class="comment">

    <shop-comment :shop-comment="shopComment"></shop-comment>
    
  </div>
    <div class="menu">
      <dl>
        <dt> <img :src="tranceText.Mall.LogoSrc" alt=""></dt>
        <dd>
          <p>{{tranceText.Mall.MallName}}</p>
          <p>{{tranceText.Mall.Introduction}}</p>
        </dd>
      </dl>
    </div>
    <div class="shop-brand">
      发现更多<span>{{tranceText.BrandName}}</span>良品
    </div>


    <div v-html="tranceText.Descriptioin" class="shopdetail-content">
      
    </div>

  <!-- 加入购物车 -->
    <div class="buy-bg">
      <div class="buy-mack" @click="hideMack" ref="mack"></div>  
      
      <div class="buy-info expand-buy-transition" ref="buyCon">
        <div class="info">
          <img class="fl" :src="tranceText.TopReviews[0].ProductPicture" alt="">
          <div class="fl">
            <p class="f16 c_red">¥{{tranceText.FinalPrice}}</p>
            <p class="c_999 f10 stock">(库存{{tranceText.Stock}}件)</p>
            <p class="c_666 f14">请选择：颜色分类,尺码大小</p>
          </div>

        </div>
      
      <div class="classify">
            <div class="sku">
              <h3 v-if="tranceText.AttrInfoArray[0].AttrName">{{tranceText.AttrInfoArray[0].AttrName}}</h3>
              <div class="list">
                <span v-for="item in AttrValues">{{item}}</span>
                
              </div>
            </div>
            <div class="sku">
              <!-- <h3 v-if="tranceText.AttrInfoArray[1].AttrName">{{tranceText.AttrInfoArray[1].AttrName}}</h3> -->
              <div class="list">
                <span v-for="item in AttrValuesT">{{item}}</span>
              </div>
            </div>
          
          </div>

          <div class="nums">
            <span class="fl f14">购买数量</span>
            <div class="fr">
              <button>-</button>
              <input type="tel" value="1">
              <button>+</button>
            </div>
          </div>
          <div class="submit f16 c_fff">确定</div>
    </div>
    </div>



    <!-- 加入购物车组件 -->
  <!-- <shopCar></shopCar> -->
<div class="shopCar">
      <div class="buy-box cle">
        
        <router-link to="/home/index/2"><div class="home"></div></router-link>

        <div class="fav"></div>
        

        <router-link to="/parent/shop"> <div class="car"></div> </router-link>
        <div class="add-cart">
          <span @click="showMack">加入购物车</span>
        </div>
        <!-- 按钮button  -->
        <div class="go-buy c_fff">
          <span @click="showMack">立即购买</span>
        </div>
      </div>

      
    


  </div>

  </div>
</template>
<script>
// import shopCar from "@/view/shop/shopCar"
import imgBanner from '@/view/page/home/component/banner'
import shopComment from '@/view/shopDetail/shopComment'

export default {
  name: 'homePage',
  data () {
    return {
      swiperLide:[],
      tranceText:"",
      shopComment:[],
      ProductPictures:[],
      display:'',
      AttrInfoArray:"",
      AttrValues:[],
      AttrValuesT:[]
    }
  },
  components: {
      imgBanner,
      shopComment
  },
  created () {
      let ProductID=this.$route.params.ProductID;
      http://m.haimi.com/api/product/detail-cdn?ProductID=4362542&platform=WAP
      this.$http.jsonp('http://m.haimi.com/api/product/detail-cdn?ProductID='+ProductID+"&platform=WAP",
      {
          jsonp:"_callback"
      }
        ).then(function (res) {
        var data=res.data.data;

        this.name=data.Subject;
        // 要转成json对象
        this.swiperLide = JSON.parse(data.ProductPictures);

        this.tranceText=res.data.data;

        this.shopComment=res.data.data;
        this.ProductPictures=res.data.data.ProductPictures.split(',');
        this.AttrInfoArray=res.data.data.AttrInfoArray.AttrName;
        // console.log(res.data.data.AttrInfoArray[0].AttrName)
        this.AttrValues=res.data.data.AttrInfoArray[0].AttrValues.split(',');
        this.AttrValuesT=res.data.data.AttrInfoArray[1].AttrValues.split(',');

        // console.log(this.tranceText.AttrInfoArray[0].AttrValues.split(','))


      }, function (response) {
        console.log(response)
      })
  },
  methods:{
    showMack(){
        this.$refs.buyCon.style.display="block";
        this.$refs.mack.style.display="block";
    },
    hideMack(){
      this.$refs.buyCon.style.display="";
        this.$refs.mack.style.display="";
    }
    
  }
}   
</script>

<style lang="less">
.s-box{
    height: auto;
    font-size: .14rem;
    background: #f2f2f2;
    .fl{
      float: left;
    }
    .fr{
      float: right;
    }
    .f16{
      font-size: .16rem;
    }
    .f14{
      font-size: .14rem;
    }
    .f10{
      font-size: .1rem;
    }
    .c_red, a.c_red {
      color: #991f33;
    }
    .c_999, a.c_999 {
      color: #999;
    }
    .expand-bg-transition{
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        opacity: 1;
      }
      .buy-bg{
          height: auto;
          /*position: fixed;
          z-index: 100;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,.35);
          display: none;*/
      }
      .buy-mack{
          position: fixed;
          z-index: 100;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,.35);
          display: none;  
      }
      .buy-info{
        background: #fff;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 101;
        display: none;
          .info{
            padding: .15rem .1rem;
            
            img{
              width: .6rem;
              height: .6rem;
              margin-right: .1rem;
            }
            p{
              line-height: .22rem;
              margin-left: .1rem;
            }
          }
          .classify{
            clear: both;
            .sku{
              margin: 0 .15rem;
              border-bottom: 1px solid #e6e6e6;
              padding: .1rem 0 .08rem;
              h3{
                  font-size: .14rem;
                  font-weight: normal;
                  line-height: .28rem;
                }
              .list{
                overflow: hidden;
                span{
                  display: inline-block;
                  margin-right: .15rem;
                  margin-bottom: .1rem;
                  line-height: .24rem;
                  padding: 0 .08rem;
                  white-space: nowrap;
                  border: 1px solid #333;
                  float: left;
                  font-size: .12rem;
                }
              }
            }
          }
          .nums{
            padding: .12rem .1rem;
            height: .26rem;
            line-height: .26rem;
            span{
              width: 50%;
              float: left;
            }
            div{
                  display: flex;
                  /*width: 49%;*/
                  button{
                    display: block;
                    height: .28rem;
                    text-align: center;
                    line-height: .28rem;
                    background: #fff;
                    width: .3rem;
                    border: 1px solid #e6e6e6;
                  }
                  input{
                    width: .56rem;
                    border: none;
                    border-top: 1px solid #e6e6e6;
                    border-bottom: 1px solid #e6e6e6;
                    display: block;
                    height: .26rem;
                    text-align: center;
                    line-height: .26rem;
                    background: #fff;
                  }
                }
          }
          .submit{
            line-height: .44rem;
            text-align: center;
            background: #801a2a;
            color: #fff;
          }
        }
      
      .expand-buy-transition{
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        bottom: 0;

      }
      


  .detail-content{
    padding-bottom: .15rem;
    background: #fff;
    b{
      padding-left: .15rem;
      color: #991f33;
      font-weight: normal;
      font-size: .16rem;
    }
    span{
      float: right;
      font-size: .12rem;
      padding-top: .03rem;
      padding-right: .15rem;

    }
    
  
  h2{
    font-size: .16rem;
    text-align: left;
    padding: .12rem;
    line-height: .2rem;
    max-height: .44rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    font-weight: normal;
    }
  }
  .aside{
      display: block;
      line-height: .36rem;
      height: .36rem;
      border-top: 1px solid #eee;
      padding-left: .2rem;
      background: #fff;
    }
    .other{
      background: #fff;
      margin-top: .1rem;
      height: .88rem;
      ul{
        background: #eee;
      li{
        margin-top: .1rem;
        height: .44rem;
        background: #fff;
        line-height: .44rem;
        padding: 0 .15rem;
        clear: both;
        span{
          margin-left: .1rem;
          line-height: .44rem;
          padding-left: .1rem;
          display: block;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnpJREFUeNqsll1oTnEcx89zuEK5mJC3uEHy9twodmNjkUnUI2+JjNt5ibWZdqFJ8ja7k7ayEtOSm92x0YaSDJOYGxfCHk2UVkry+dX3cJydc55zHs+vPj31nHN+3////3v7Z67MzjoFbCFshvWwAKZABj7DEPTBLXga52R8zLPVcApWwS94AXfgk55Ph8XQAI3wCI7DvaRCE6AVauAD1EEHDEcsaBrshkPQC21QC6P+l9zAR2XQA/vgko7qbIyIo2fndMQt+rZHvkKFbCfdYEHbqRV+d5KbvXsYdshHt3yOEbIdrNCKbjjFWyfsla/WoFAF7NfWrzn/b9flq0a+/wg1w0dockpnTUqmZk8oqxS+mDIm/lOZFRGzFvnO2ks51UlHESLjdNTvYE7I86vynTOhchXjcEqRjGpmO9zVMQUtD89Nw1X+DxYhchn2wH3YAj8j3n1pGq4KK5+yTVk8D8BD2BjsAiG7KnMLrHw+fIV6339n4CA8gQ1JE8hW+wWmxqzGzv40/IDJ6n0W03XwLYGG+R4xoddK8TCz3VQqDucVm1ewVgtMYstMw46uX+1+XsSL72GNft9ClWZREpsLS+GBCXXpz60xH1idLILlEWkcZZ7PLhMa0NCyAE8q0J1HU4hMlE/LzAEv62xCzoCTJex15msmnPA3VW8y2gzaVQKRbZpNbfL9TzHWKinaVeWdRYrk1Dcfy+eYwWfnXw3PNE8uFIhZWEysBG4q7tX+mAY7w4gGVbu2bjV2LKagvYI8Cm/giL6tlK+/zTHmXleh69ZK33VrMHDdWqI6cZW5jV5M0tzrejW0rH426QJZ5dtdXrsw57e1+0j7LcAA6FyRSkLv93MAAAAASUVORK5CYII=) no-repeat left;
          background-size: .1rem;
          float: left;
        }
      }
    }
    }
    .menu{
      height: auto;
      background: #fff;
      margin-top: .1rem;

      dl{
        padding: .1rem;
        display: flex;
        dt{
          width: .5rem;
          img{
            width: 100%;
          }
        }
        dd{
          margin-left: .15rem;
          p{
            &:nth-child(1){
              font-size: .16rem;
            }
            line-height: .24rem;
          }
        }
      }
    }
    .shop-brand{
      line-height: .4rem;
      padding: 0 .05rem;
      background: #fff;
      margin-top: .1rem;
      font-size: .14rem;
      padding-left: .15rem;
      margin-bottom: .1rem;
      span{
        color: #991f33;
      }
    }
    .shopdetail-content{
      text-align: left;
      padding-left: .1rem;
      padding-right: .1rem;
      overflow: hidden;
      line-height: .24rem;
      background: #fff;
      p{
        width: 100%;
        img{
          display: block;
          width: 100%;

        }
      }

    }
    .shopCar{
      font-size: .12rem;
      height: .5rem;

      .buy-box{
        border-top: 1px solid #e5e5e5;
        position: fixed;
        bottom: 0;
        background: #fff;
        width: 100%;
        .home{
          width: .42rem;
          height: .3rem;
          background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcwREQwNzM2ODNBNTExRTZCREQ3RTkyQkJFQ0RBQjk1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcwREQwNzM3ODNBNTExRTZCREQ3RTkyQkJFQ0RBQjk1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzBDQTY2Mzk4M0E1MTFFNkJERDdFOTJCQkVDREFCOTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzBDQTY2M0E4M0E1MTFFNkJERDdFOTJCQkVDREFCOTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5h35j3AAACJElEQVR42uyaP0gCYRjGs6JBqMWWlgoaasuxP0NQQRCV1RDVVFDtQVtD2drSFqhRkw1BYkItOSQZjk1BW9BQi0MNDYHYc/AIh0Rk+p2nPS/88Dzf78+PO757v0NPPp9v+E/R2PDPQsISlrCEJSxhCUtYwqaiuZTkeDxeiTE9YJ+fW6DsYj4QCJgRrkC0gGOwzO8dYAV81uMt3QYuKftOlniurd6ErSt5A8bACxghLzx3w5y6EO4Fd8APHsEQuCdDPOdnTm+tCw+ANOgGGTAMnmy/P/FchjlptqlJ4WmQBD6Q4K2b/SYvy98SzE2ybU0Jr4EY8IIImAMfP+R/MCfCNjH2URPCOyAMmkAQrIPcL9rlmBtk2zD7cq2wNckQ2OXkN3hcauyybY7HIfbtKmHrNjznFSrcnuEy+rPazrOvdfbtdYuwtdBcg5miBajcuLAtdDMcw1dtYetRcgsGix4xlQr7o2yQY3VXS7ifxUJfURFR6bAXK30cs99p4VGQYjmYtJWJpqJQjiY5ZopzcER4EVyx4D8Fk9wImI4DcGTbbFxxLkaFN0GU2zwrpsADGHdAeJVjT9i2mlHOyZjwLDfuhWgFPayQnIp80cuEaZPCe+AZHFK+8JjoclC4HSyAE/AKto294uGi0Vnl11Jv4Iy4+o2HK0LCEpawhCUsYQlLWMISlrCEjWwPf7sx1xV2S3j0f2kJS1jCEpawhCUsYQlL+E/xJcAAKflu8nh0B+AAAAAASUVORK5CYII=) 50% no-repeat;
          background-size: .34rem;
          margin: .05rem 0;
          border-right: 1px solid #eee;
          float: left;
        }
        .fav{
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjhDMDlENjBBMjUyMTFFNkFFRjdDQzEyNzM5QUMyN0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjhDMDlENUZBMjUyMTFFNkFFRjdDQzEyNzM5QUMyN0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzA5QUQyNDU4NDU5MTFFNjgxNDZEQTExNkFEMDNDNEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzA5QUQyNDY4NDU5MTFFNjgxNDZEQTExNkFEMDNDNEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oNFMPAAADiUlEQVR42uyaWWgTURSGJ1ErVkFRxA1iUqutC2IjKC5PQh8ENVYfihtVFBeMC7hSxQqiiOCDVbEqLihaEUHy0AcVii+CvnRTEWk1dalVRMRSQdQa/0P/wCUktSYz6WRyD3zMdGZy7vx3PedOXZFIxMgmcxtZZlqwFqwFa8FasBasBWvBWrBV1j9VB6FQ6H9/0g88BDlgHvidSvmBQMD2LbwSzAezwCqnd2npUYeUvyvAACcLXgvywUvwAvjAOqcKljF7gOeHicFrA50oeAPwgqfgNrgDmoCH9xwleBAoV1r3D6ngtXI+4xjBm8A4UAfuqqsar40Fm50ieDDYz3OZodVNtIgya+/jsxkvOAhGgcegJs79Gt6TZ7ZmuuCJYI/SuoksOpb3ctmyb2ipmKypM2Lw8N498KCH397n/WLQDMKggcgYrwdtfSIYsbPEwpMVUX5QBIbFebyTk9T2XrguBafBUlaeUKLc/6xUQB3PWzjbW9rCT8DMONc/Kq1Sn8QLfQWrmVxMYiX6WalyPpI9oFj5jYz9OVYL/qnMsMfBI9Z4u0lDo4thp3BTue5hRc8Fu4ArmTkomUkrwJaTAmdz7LUb1ttbzuiFLLsVLLdcMPJPGUsLOaYWgMt8AavNxbIWsWzp2u/TsixBdAsL/MactjINgk+wrA6wmL0sfeswRDfisIxjOqhEU1aY+N7Nsko4caY/8IDoWta6TDTHwHoLxJbRdxfz6dq+jrQkzdvGMXYeLDFRrPi6RN9SRrVdQstz4AjX0GqunalaEX2Jz6Msw1axtMTKVSAXnDTBXyV9ic+Ddk0eoi9mRgv7lbTRttnSCB47TPD1hcfhdhbs4/G1Cb7CMT5tLThsgq9WHvOypYWjgr12FuyNedlElkN6sleZIHjCP7r0dAYqneQWmJrJXdqbQPA0Cm1gSucmssvRxLy3MNO69FAuS9+5+yE2ha3YSKE/wCmje49aEvoz4BdYAZ6Ba9ztEGvjvTGGiZ9i3BaN3wJww+j+rFLKLEciJ9mR3Ak+gQ+Mj/MZTUlysAY8B1fAePCGcXSeHQX7lKO8tHwHlo/dZylqB0XGmiTxW9iyF7l1JFmRfGEcbXa3tkJwLlurikKDRu+2WKU1N7J3XOW1IXYWLJtusvN4ga0lrfYuyQhLvhnLVvB1zubNpu0T6f+X1oK1YC1YC9aCtWAtWAvWgrXgpOyvAAMAXEvE4BWoKdUAAAAASUVORK5CYII=) 50% no-repeat;
          background-size: .34rem;
          margin: .05rem 0;
          border-right: 1px solid #eee;
          float: left;
          width: .42rem;
          height: .3rem;
        }
        .car{
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyNDMwNTI3ODNBNjExRTY4QzNCRjE4RkY0MUI1MTFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyNDMwNTI4ODNBNjExRTY4QzNCRjE4RkY0MUI1MTFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjIzMEIyNTg4M0E2MTFFNjhDM0JGMThGRjQxQjUxMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjIzMEIyNTk4M0E2MTFFNjhDM0JGMThGRjQxQjUxMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xph1cAAAB2klEQVR42uyazytEURTH3zAUSbLTYGMWIku/ZoEaNjbzLyhLO/4FC/+EhT9hVmowRdGQlWGULIiFYkWUkuf7cl5pUoy575zR+576dHs13ZnPnHfPPe/2Er7ve3GKJi9mQWEKU5jCFKYwhSlM4agiWcuH8/n8bxvvhKZELpdjhp1kWDtzXMMUpnDkwmPgEvhG7IOUpvAaGDBMWAasaAp3yDgPun+gXaq8K5blu1uj3Jaq4wyMgj6wqZzdWRn3NDNclnFEWbYFTIF3UIyD8KQspxPwEAfh8Hbe0t6W7sC9FKWUonBWxqK2sEWWO2X/f621YLkWHlISnpbdpQRe4pDhcP3uWPXSp8rCWWvhivS1wS3dHLFsDxgGj+DISvgJXIE2kFbK7i54s3w81FrH4frdtn4e1qrUda3f/5bhQdArzU4lDsJfs+tbC19I55OW4tVw+69r4aBinsu2FMU6DuadqbdguRQO4lDGY8/92VXwh3bJgcNNowivSjMQ1XtQ12Cp3kmSDn/QLRj3Gjx4Lk3h2qMfFKTHLsi1xRxqwutgzvs8ZAvGDaM51IQnqq4zRnOoCZeqrg+M5lATXpRu6FnGBaM5vo0E35emMIUpTGEKU5jCFKYwhf8UHwIMALudjU3NJkhkAAAAAElFTkSuQmCC) 50% no-repeat;
          background-size: .34rem;
          margin: .05rem 0;
          border-right: 1px solid #eee;
          float: left;
          width: .42rem;
          height: .3rem;
        }.add-cart{
          width: 1.2rem;
          height: .5rem;
          float: left;
          text-align: center;
          line-height: .5rem;
          font-size: .14rem;
        }
      }
      .cle{
        display: block;
        zoom: 1;
      }
      .c_fff{
        color: #fff;
      }
      .go-buy{
        width: 1.24rem;
        text-align: center;
        float: left;
        span{
          margin-top: -1px;
          line-height: .5rem;
          height: .5rem;
          display: block;
          background: #801a2a;
          font-size: .14rem;
        }
      }
    }
}




</style>
