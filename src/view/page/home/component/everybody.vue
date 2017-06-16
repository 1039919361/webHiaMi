<template>
	<div class="all">
	<div class="every" v-for="val in everyBody.every">
		<div class="abstract">
			<p>{{val.Title}}</p>
		</div>
		<div class="every-titl">
			<dl v-for="item in val.Products">
				<router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID} }">

				<dt>
					<img v-lazy="item.PicturesWebp" alt="">
				</dt>
				<dd>
					
					<p>{{item.Subject}}</p>
					<p>{{item.FinalPrice}}</p>
					
				</dd>
				</router-link>
			</dl>
			
		</div>
	</div>
	</div>
</template>
<script>
export default {
  props:['everyBody'],
  data () {
    return {
    	
    }
  }
 }
</script>
<style scoped lang="less">
  .all{
	height: auto;
	.every{
		overflow-x: hidden;
		font-size: .14rem;
		height: 100%;
		.abstract{
			height: .4rem;
			line-height: .4rem;
			text-align: center;
		}
		.every-titl{
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
				img:first-child{
					height: 1.83rem;
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
}
</style>