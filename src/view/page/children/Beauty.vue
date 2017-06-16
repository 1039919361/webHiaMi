<template>
	<div>
		<beautypage :beauty-page="beautyPage"></beautypage>
		<router-view></router-view>
	</div>

</template>

<script>
import beautypage from '@/view/page/children/keep/beautypage'
export default {
  data () {
    return {
    beautyPage:[]
    }
  },
  components: {
  	beautypage
  },
  mounted () {
    this.getevery()
  },
  methods: {
    getevery () {
        this.$http.get('/api/beautyPage').then(function (res) {
        this.beautyPage = res.data.data[0];
        // console.log(res.data.data)
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
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
