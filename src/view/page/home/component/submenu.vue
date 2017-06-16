<template>
	<div class="submenu">
		<p>推荐好物</p>
		<div class="submenu-img">
		    <div><img src="//img.haimi.com/FuLpfc95-5APc7dz5DtSTjmPpxpH" alt=""></div>
			<div><img src="//img.haimi.com/FpHVmM2PkFveIvS_l0UIIpqsoKVw" alt=""></div>
			<div><img src="//img.haimi.com/FlbsnBTN6A_7TufytNY3z6RDTiJy" alt=""></div>
			<div><img src="//img.haimi.com/FsRbXjc3acEQEv-GPgisegGLgquG" alt=""></div>
			<div><img src="//img.haimi.com/FpfhReyWTvWLOXeAY36dpkgmVASS" alt=""></div>
			<div><img src="//img.haimi.com/FvIiZyy9v7fJng1tY-11tHXRD7ZU" alt=""></div>
			<div><img src="//img.haimi.com/Fjz3JTC-_jfcOkLLgdalc1pibfXN" alt=""></div>
			<div><img src="//img.haimi.com/FphUu_w_6QPZ1BB9LhfVk2nsDnFr" alt=""></div>
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
	.submenu{
		height: 505px;
		.submenu-img{
			display: flex;
			/*justify-content:space-between;*/
			flex-wrap:wrap;
			div{
				width: 50%;
				height: 1.2rem;
				img{
					width: 100%;
				}
			}
		}
	}
	.submenu p{
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