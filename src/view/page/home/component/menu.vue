<template>
	<div class="menu">
		<dl v-for="item in newMenu.Records">
			<dt><img v-lazy="item.PictureWebp" alt=""></dt>
			<dd><a href="http://www.haimi.com/mobile/?Hm_Source=247.0.0#/sign">{{item.SlideName}}</a></dd>
		</dl>
	</div>

</template>
<script>
export default {
  props:['newMenu'],
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
	.menu{
		height: .88rem;
		
		font-size: .14rem;
		overflow: hidden;
		display: flex;
      	justify-content:space-around;
		dl{
			
			dt img{
				width: .9rem;
			}
			dd{
				text-align: center;
				line-height: .3rem;
			}
		}

	}


</style>