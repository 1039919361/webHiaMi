<template>
	<div class="beautymenu">
		<div class="hometitle">
			<p>{{beautyPage.Title}}</p>
		</div>
		<div class="homesubmenu">
			<dl v-for="item in beautyPage.Products">
				<dt>
					<img :src="item.PicturesWebp" alt="">
				</dt>
				<dd>
					<p>{{item.Subject}}</p>
					<p>¥{{item.FinalPrice}}</p>
				</dd>
			</dl>
			
		</div>

	</div>

</template>

<script>
export default {
  props:['beautyPage'],
  data () {
    return {
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.beautymenu{
		font-size: .14rem;
		height: auto;
		.hometitle{
			height: .49rem;
			p{
				text-align: center;
			    line-height: .49rem;
			    padding: 0 1rem;
			    position: relative;
			    overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    font-size: .16rem;
			    background: #f2f2f2;
			}
		}
		.homesubmenu{
			background: #f2f2f2;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			dl{
				width: 49%;
				background: #fff;
				margin-bottom: .1rem;
				dt img{
					width: 100%;
				}
				dd{
					width: 80%;
					padding: 0 .1rem;
					height: .5rem;
					p{
						overflow: hidden;
	    				text-overflow: ellipsis;
	    				padding: 0 .1rem;
	    				line-height: .25rem;
	    				white-space: nowrap;
					}
					
				}
			}
		}
	}

</style>
