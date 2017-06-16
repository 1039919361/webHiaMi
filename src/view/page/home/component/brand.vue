<template>
	<div class="brand">
		<div class="present">
			<img v-lazy="brandTitl" alt="">
		</div>
		<div class="brand-titl">
		<dl v-for="item in brandContent.Records">
			<dt><img v-lazy="item.PictureWebp" alt=""></dt>
			<dd>
				<p>{{item.SlideName}}</p>
				<p>{{item.Description}}</p>
			</dd>
		</dl>
		
	</div>
	</div>
</template>
<script>
export default {
  props: ['brandContent','brandTitl'],
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="less">
	.brand{
		overflow: hidden;
		height: 2.2rem;
		font-size: .14rem;
		.present{
			height: .65rem;
			img{
				width: 100%;
			}
		}
		.brand-titl{
			width:100%;
			overflow-x: auto;
			display: flex;

			dl{
				
				height: 100%;

			dt{
				width: 1.05rem;
				height: 1.05rem;
				img{
					width: 100%;
				}
			}
			dd{
				height: .55rem;
				width: 1.05rem;
				p{
					line-height: .2rem;
					text-align: center;
					overflow: hidden;
    				text-overflow: ellipsis;
    				padding: 0 .1rem;
    				/*line-height: .25rem;*/
    				white-space: nowrap;
				}
			}
		}
		}
		
	}

	

</style>