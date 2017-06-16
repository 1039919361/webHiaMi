<template>
	<div>
		<gehupage :gehu-page="gehuPage"></gehupage>
		<router-view></router-view>
	</div>

</template>

<script>
import gehupage from '@/view/page/children/keep/gehupage'
export default {
  data () {
    return {
      gehuPage:[]
    }
  },
  components: {
  	gehupage
  },
  mounted () {
    this.getgehu()
  },
  methods: {
    getgehu () {
        this.$http.get('/api/gehuPage').then(function (res) {
        this.gehuPage = res.data.data[0];
        console.log(res.data.data)
      })
    }
  }
}
</script>

<style scoped lang="less">
	.m-box{
		font-size: .14rem;
		.home-banner{
			width: 100%;
			height: 1.96rem;
			img{
				width: 100%;
			}
		}
	}


</style>
