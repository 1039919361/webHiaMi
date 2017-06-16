<template>
	<div class="shop-comment">

		<p class="product-score">
			<span class="fl c_333">宝贝评分</span>
			<span class="fl">
				<i></i>
			</span>
			<span class="c_red">　{{shopComment.ProductScore}}分</span>
		</p>
		<ul>
			<li>
				<div class="comment-info" v-for="(item,index) in shopComment.TopReviews">
					<div class="avatar fl">
						<img :src="item.Buyer.Avatar" alt="">
					</div>
					<div class="nickname fl">
						{{item.Buyer.NickName}}
					</div>
					<div class="createTime fr">
						{{item.CreateTime}}
					</div>
					<p class="comment-text">
						{{item.BuyerNote}}
					</p>


					<div class="comment-img" v-if="item.BuyerPicturesThumb">
						
						<div class="fl" @click="lookImg(index)">
							<img :src="item.BuyerPictures" alt="">
						</div>
						<!-- <div class="fl">
							<img :src="item.BuyerPicturesThumb" alt="">
						</div> -->
						
					</div>
					
		<div class="img-mark" :style="{display:display}" @click="lookImg()">
			<!-- <shopImg ref="swiper" :swiperLide="shopComment"></shopImg> -->
			
			<div class="swiper-container slide">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
					<img :src="item.BuyerPictures" alt="">
				</div>
			</div>
			<div class="swiper-pagination"></div>

			</div>
		</div>
		
	</div>

			</li>
			<li class="all">全部评论({{shopComment.ReviewCount}})</li>
		</ul>

	</div>
</template>
<script>

// import shopImg from '@/view/page/home/component/banner'
import Swiper from '@/lib/swiper.js'
export default {
  props:['shopComment'],
  data () {
    return {
    	Swiperr:"",
    	display:'none'
    }
  },
  components:{
  	// shopImg
  },
  mounted(){
  	this.Swiperr = new Swiper('.slide',{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000
            // autoplay:1000
        })
  },
  created () {
  	// let that=this;

  	// this.shopComment.TopReviews.forEach(function(item,index){
  	// 	// console.log(item)
   //       that.swiperLide.push({
   //          BuyerPicturesThumb : item.BuyerPicturesThumb
   //       })
   //    })


  },
  methods:{
  	lookImg(index){
  		// 打印所有子组件的东西
  		// console.log(this.$refs)
  		// 让他下面的小点点跟着图片匹配
  			// this.$refs.swiper.mySwiper.slideTo(index,0,false);
 		if(this.display == 'none'){
 			this.display='-webkit-box';
 		}else{
 			this.display="none";
 		}
  	}
  	
  },
  // updated () {
  //   this.$refs.swiper.swiperObj.onResize()
  // },
  updated () {
	if(this.display != "none"){
		// this.Swiperr.update()
		// this.$refs.swiper.mySwiper.onResize();
	}
  } 
}

 
</script>
	
<style scoped lang="less">
.swiper-container{
	/*z-index: 1000;*/
	width: 100%;
}
	.img-mark{
		position: fixed;
		top:0;
		left:0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,0.5);
		z-index: 999;
		display: -webkit-box;
		-webkit-box-pack: center;
		-webkit-box-align: center;
		display: none;
		.slide{
			width: 100%;
			height: 50%;
			img{
				/*width: 375px;*/
				/*height: 300px;*/
				width: 100%;
				display: block;
			}
		}
		
	}


	.shop-comment{
		overflow: hidden;
		width: 100%;
		font-size: .14rem;
		background: #fff;
		height: auto;
		margin-top: .2rem;
		.fl{
			float: left;
		}
		.fr{
			float: right;
		}
		.c_333{
			color: #333;
		}
		.c_red{
			color: #991f33;
		}
		p{
		padding: .14rem .08rem;
    	
		clear: both;
		span:nth-child(2){
			display: inline-block;
		    width: .84rem;
		    height: .15rem;
		    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkhJREFUeNrElssrRFEcx2dQih1ZDI0UCynyWnisbPwH2M0olJXySlgYeWxI2RBKWVBM2dgpS2/GDgtv2RGNlTy/v/reOt2uuXfu3Jk59emc+Z3fOfc75/x+5xz3krfCZaM0st6OdmD7Qyhif5oNMalgCriB/Jtvl4MlxcYYPygDpWy7kikoE4wpv8dpS5qgPpALjoiHtqQIko/3s91DXLR5kiFojNuzCXbJJm3jiRYkAdwKPsGAYh+gzU+fhAmaYrrPgSvFfkWb9E07IcjoHErn+VID6lh7wZsuw9St9POwfAAHYA8cAjkFP6IVlKd8WKiiKLW8gmHwYjCH2AbBJIULTewTMacUt0+hT5EEuXF1BFCPKLYfcM4JDlhfgl+TPycndzGo5R+TukQXFqO4OgJmK6Q5aKI6wZKN7RfBF2SZtg6wqIlRvmUa1AEOkDIPmh2IzxbOZVmMPqjVlVpjeyMGMavMPstijLJML0riYj1RYv5Le1XUKmNjIxFiIh2MWkylcqVyLMyVE6sYs5N6gfU7eLYw1zN91bGOCqpifWrhDNLSXnufVsdTUCiK+UK6sXERdGLQl0H05Zh1ZTwEVStbphV5LU7wEn1kO9dghRzfMg+RS/UGlIMVcAuGQDbIYvuWfeJzzVeBx+4rMsVkuyRrdsAZ8DGlg6CeBGnz0Ud8w7GsUpqJoHwS5oU5C+4UP3lOFIAu0AYadHNsOb1C96CXb5xunRit3PHB76XvfSyZ9p+gL974RWBG2YZIJUzfQo79tCPoT4ABAEzAiXb2jDsuAAAAAElFTkSuQmCC);
		    background-size: auto .14rem;
		    margin: 0 .05rem 0 .08rem;
		}
		
	}
		
		.all{
			line-height: .44rem;
			height: .44rem;
			text-align: center;
			border-top: 1px solid #f2f2f2;
		}
		.avatar{
			width: 10%;
			padding-top: .1rem;
			img{
				width:100%;
			}
		}
		.createTime{
			margin-top: .14rem;
			margin-right: .1rem;
			font-size: .12rem;

		}
		.nickname{
			width: 1.5rem;
			line-height: .28rem;
    		margin-left: .1rem;
    		margin-top: .1rem;
		}
		.comment-info{
			line-height: .18rem;
			display: block;
    		zoom: 1;
    		padding-left: .15rem;
			border-top: 1px solid #eee;
		}
		.comment-img{
			height: .6rem;
		}
		.comment-img > div{
				width: .5rem;
			    height: .5rem;
			    overflow: hidden;
			    margin-right: .1rem;
			    img{
			    	width: 100%;
			    }
			}
		
}
	




</style>