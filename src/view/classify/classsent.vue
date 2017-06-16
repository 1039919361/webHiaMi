<template>

  <div class="sent-menu">
    <dl v-for="item in pinpai">
      <dt><img :src="item.PictureWebp" alt=""></dt>
      <dd>
        <p>{{item.SlideName}}</p>
        <p>{{item.Description}}</p>
      </dd>
    </dl>
    



  </div>
</template>

<script>
export default{
  data () {
    return{
      pinpai: []
    }
  },
  mounted () {
    this.getimgAuto()

  },
  methods: {
    getimgAuto () {
      this.$http.get('/api/pinpai').then(function (res) {

        this.pinpai=res.data.data[0].Records;
      
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>
<style scoped lang="less">
    .sent-menu{
      height: auto;
      margin-top: .03rem;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: .45rem;
      dl{
        width: 33%;
        padding-bottom: .1rem;
        dt{
          img{
            width: 100%;
          }
        }
        dd{
          p{
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            padding: 0 .1rem;
            line-height: .25rem;
            white-space: nowrap;
            color: #999;
            &:nth-child(2){
              font-size: .12rem;
            }
          }
        }
      }
    }
</style>

