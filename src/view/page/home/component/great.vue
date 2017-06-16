<template>
	<div class="great">
		<p>严选品种</p>
		<div class="great-img">
			<div><img src="//img.haimi.com/FojyqPOoPcb_iozPd2n0Nj7Gz4ij" alt=""></div>
			<div><img src="//img.haimi.com/FhUaqFBlvdqeBwftFyzC5e7GDQnn" alt=""></div>
			<div>
				<img src="//img.haimi.com/FjtR_vZBEQTrHyw5IAcUmvUtHqZ7" alt="">
			</div>
			
			
			
		</div>
		
	</div>

</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
	.great-img{
		height: 2.4rem;
    	background: #fff;
    	position: relative;
    	div{
    		position: absolute;
    		img{
	    			width: 100%;
	    		}
    		&:first-child{
	    		width: 54%;
	    		height: 50%;
			    left: 0;
			    top: 0;
			}
			&:nth-child(2){
				width: 54%;
	    		height: 50%;
			    left: 0;
			    top: 1.05rem;
			}
			&:nth-child(3) {
				width: 46%;
	    		height: 100%;
			    right: 0;
			    top: 0;
			}
    	}
    	
	}
	.great p{
		font-size: .16rem;
		line-height: .4rem;
	    border-bottom: 1px solid #eee;
	    position: relative;
	    text-align: center;
	    padding: 0 .2rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    background: #fff;
	}
	


</style>