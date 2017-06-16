<template>
   
  <div class="y-box">
      <div class="bonus-text">
      <i>提醒</i>
      <p>1、红包/优惠券每个订单只可使用一个</p>
      <p>2、红包/优惠券金额大于订单应付金额时，差额不予退回。</p>
      <p>3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回（特殊未指定的除外）</p>
      </div>

      <div class="bonus-list bonus-list-Y">
        <ul>
          <li>
            <div class="bonus-content">
              <div class="b-amount c_red">
                <p>
                <i>¥</i>
                <span>10</span>
                </p>
                <em>满60使用</em>
              </div>
              <div class="bonus-info">
                <p>新人注册礼</p>
                <em>
                  2017.05.24-2017.05.31
                </em>
              </div>
            </div>
            <div class="bonus-extra">
              <p class="handle-show c_999">
                使用说明
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="bonus-list bonus-list-Y">
        <ul>
          <li>
            <div class="bonus-content">
              <div class="b-amount c_red">
                <p>
                <i>¥</i>
                <span>20</span>
                </p>
                <em>满199使用</em>
              </div>
              <div class="bonus-info">
                <p>新人注册礼</p>
                <em>
                  2017.05.24-2017.05.31
                </em>
              </div>
            </div>
            <div class="bonus-extra">
              <p class="handle-show c_999">
                使用说明
              </p>
            </div>
          </li>
        </ul>
      </div>
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
    .bonus-list{
      background: #fff;
      margin: 0 .12rem;
      .c_red, a.c_red {
        color: #991f33;
    }   
      ul{
        li{
          margin-top: .1rem;
          background-color: #fff;
          position: relative;
          .bonus-content{
            padding: 0 .3rem 0 1rem;
            border-bottom: 1px solid #eee;
            position: relative;
            .b-amount{
              position: absolute;
              left: .2rem;
              top: .06rem;
              p{
                i{
                  font-weight: 500;
                  font-style: normal;
                }
                span{
                  font-size: .28rem;
                }
              }
              em{
                font-weight: 500;
                font-style: normal;
              }
            }
            .bonus-info{
              height: .55rem;
              border-left: 1px solid #eee;
              padding: .15rem 0 0 .1rem;
              font-size: .14rem;
              em{
                font-weight: 500;
                font-style: normal;
                font-size: .12rem;
              }
            }

          }
          .bonus-extra{
            padding: .15rem .1rem .2rem;
            position: relative;
            font-size: .12rem;
            p{
              position: relative;
              padding-right: .33rem;
              display: inline-block;
              &:after{
                position: absolute;
                top: 2px;
                right: .15rem;
                display: block;
                width: 7.5px;
                height: 7.5px;
                content: ' ';
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMyOEE4QjM1ODNBNDExRTZCMDAzQUJFNDRBNURCMEZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMyOEE4QjM2ODNBNDExRTZCMDAzQUJFNDRBNURCMEZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzI4QThCMzM4M0E0MTFFNkIwMDNBQkU0NEE1REIwRkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzI4QThCMzQ4M0E0MTFFNkIwMDNBQkU0NEE1REIwRkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz69pdmUAAABU0lEQVR42uzVsUsCYRjHcU8kKNyqUVrNP6AmqYagWqUDcWoRJ5daBFtqaSloKThaImgskIqGSqpZaG1sC1qKBhGM6/vAryUK7/RyyRc+Hu+9z/s8vPK+7zm+78f+usVjfWiDIqFawvO8vqxkEucYjzi35buw/Al+9jCLOyzgKYICE7hEGsO2kjwe9OJeK+ulZZQnrbx5K/KsldwipYCpLgtM6x9JKd+c5f/aXW9YRA2juMZ8yAIWf6X5NeV7/b6Fm8jhEEmcwQ1YwFV8UvNzyvfjOWljBdsYwjFKHQqUFGfxO5rf7nQY7cZcQ0Xj+1j/pUBV43HFr2p+4BO/hSI+sIFdOBpz1N/UeFHxXV0rB1hGC2UcYUTPst67iuvp7jrVTnlHQYe1oP4STqK6IOva8y8Y09P6N1Hfwg1kddiy6ge7hUMeuEfMhL0GnME3/n8W+RRgAF5iSW7OX/bgAAAAAElFTkSuQmCC);
                background-repeat: no-repeat;
                background-size: 100%;
              }
            }
          }
        }
      }

    }
    
   }
</style>
