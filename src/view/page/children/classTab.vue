<template>
	<div>
		<homebanner></homebanner>
		<homemenu :home-page="homePage"></homemenu>
		<router-view></router-view>
	</div>

</template>

<script>
import homebanner from '@/view/page/children/keep/keeping'
import homemenu from '@/view/page/children/keep/homemenu'
export default {
  data () {
    return {
    homePage:[]
    }
  },
  components: {
  	homebanner,
  	homemenu
  },
  mounted () {
    this.getevery()
  },
  methods: {
    getevery () {
        this.$http.get('/api/homePage').then(function (res) {
        this.homePage = res.data.data[0];
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
