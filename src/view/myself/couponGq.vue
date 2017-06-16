<template>
   
  <div class="y-box">
      <div class="bonus-text">
      <i>提醒</i>
      <p>1、红包/优惠券每个订单只可使用一个</p>
      <p>2、红包/优惠券金额大于订单应付金额时，差额不予退回。</p>
      <p>3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回（特殊未指定的除外）</p>
      </div>
   </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
 }
  
</script>
<style scoped lang="less">

  .y-box{
    background: #f6f6f6;
    .bonus-text{
      padding: .15rem .3rem .15rem;
      line-height: .22rem;
      background: #fff;
      color: #6a6a6a;
      i{
        font-style: normal;
      }
      p{
        font-size: .12rem;
      }
    }
    
   }
</style>
