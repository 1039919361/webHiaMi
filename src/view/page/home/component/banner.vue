<template>
	<div class="banner-cli">
		<div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiperLide">
                	<img v-if="item.PictureWebp" :src="item.PictureWebp" alt="">
                	<!-- <img v-if="item.BuyerPictures" :src="item.BuyerPictures" alt=""> -->
					<img v-else :src="item.picture" alt="">
				</div>
				
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
	</div>
</template>
<script>

import Swiper from '@/lib/swiper.js'
export default {
  data () {
    return {
    	mySwiper : ''
    }
  },
  props:['swiperLide'],
  mounted () {
  	this.mySwiper = new Swiper('.banner',{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000,
            autoplay:1000
        })
  },
  updated () {
  	this.mySwiper.update()
  }
}

 
</script>
	
<style lang="less">

	.banner-cli{
		/*height: 1.96rem;*/
		height: 85%;
		/*width: 100%;*/
		.banner{
			width: 100%;
			
			img{
				width: 100%;
			}
		}
		
		.swiper-pagination-bullet{
			-webkit-transition: all .5s ease;
    		transition: all .5s ease;
			width: 9px;
		    height: 3px;
		    border-radius: 50%;
		    background-color: #666;
			border-radius: inherit;
		}
		
		.swiper-pagination-bullet-active
		{
			width: 24px;
			height: 3px;
			border-radius: inherit;
			background-color: #b0b0b0
		}
	}




</style>