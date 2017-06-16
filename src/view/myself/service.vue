<template>
   <div class="y-box">
    <div class="content">
      <p>暂无内容</p>
    </div>
  <div class="im-foot">
    <div class="upload-img fl" >
      <input type="file">
    </div>
    <input type="text" class="send-msg" placeholder="输入新消息">
    <a href="javascript:;" id="sendBtn" class="send-btn fr">发送</a>
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
  font-size: .14rem;
  width: 100%;
  position: absolute;
  bottom: 5px;
  top: 0;
  background: #f5f5f7;
  .content{
    position: absolute;
    width: 100%;
    p{
      text-align: center;
      line-height: .3rem;
    }
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .im-foot{
    position: absolute;
    bottom: 0;
    height: .45rem;
    background: #fff;
    width: 100%;
    z-index: 1;
    .upload-img{
      input{
      opacity: 0;
      display: block;
      width: .49rem;
      height: .49rem;
      }
      width: .49rem;
      height: .45rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAYAAAD1T9h6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdERDY0NUNGOUNCNzExRTZBRUJBOEQwRTA5RjJDRThDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdERDY0NUQwOUNCNzExRTZBRUJBOEQwRTA5RjJDRThDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0RENjQ1Q0Q5Q0I3MTFFNkFFQkE4RDBFMDlGMkNFOEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0RENjQ1Q0U5Q0I3MTFFNkFFQkE4RDBFMDlGMkNFOEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7I8P3mAAADS0lEQVR42uyZSWgUURCGu8e4ix5UJCB6GU8hB3fEBeJBcYvEiGJAUaMtIiHuSxKjIUZFFI2KuJCYOIoo4jIhRhSioAeXgAc9iCiiJDgHUQY1LjCOf8EvNKE7vardMAUf3Uy/7qm/X72qejOqpmmzFEWpA9lKuOw9KI6E1HmFPtdl6ZxXQyYgLb5HlJBbRkBGQEaAfZsHWsFnIudzwyJgD4iDPDCAyHkTrwVagLzlcvATlILBpJSflXN2AitgI49bwVHwkch5Ja9tCLKAcTzGDK6d6TImtFlIDbKANh6XGlxbxeMTj34sAOvc3JhlY8xhZpwDbKBiOkHVujFuLZfPlGffAq/9ngFJlTWgF6jVLeJaflbDMW5sKO/tB/qDBqdhbXdwBZgP7oKvRM7zec2NifgrYCR4DBJgCtOzryH0x+LELzsGpoEOUAjGgBuc0WbwMsi9kCxYDXyn8+18OedAX4ZSj6AKmK5b9CLike7aes7IJLApiAKi4BLoCQ4aFMdPYDXPq0BOkAQMBFfBEHATbDcZ18IfGvqAs1br1ImAUWC8h0odY85/AYpAqpvxEj7v+H3b/BAwFtxndoi6EFDNlJtk55q0GJ9klU+zYcz1IiCPm5dhLDwtPNq1xaCMb3wReGXzvjvgNOtFI9eNYwGFdFji9zIzRlRXPe3MXD1DaAu47XDmNoM3YDT3HY4EaMwYvcEJxu1C5uyJ4KJFrpYZu06hDS77pS9gJUOpjEJsCZD24BQdrGLhSdH52YzRfFZTszbhGhgOHoI1HrLXPXCcIdTIZ5sKULnTkkX3i47v7jLmGdtf2U6uNUmHJ1mMRHABx3qxHexSZTHvMhMgys6DEn5hEUPHyFp1U7uXa0VfTVeATjqf8KGGSPO4nC9VtrYTjATE6bTE3RzGf3d2gXGpsoeRdTGDFTbNNNjmYyF8AI6wsNUbdaMzwQfGuN0d1n4wgqHUxFmUdbOPi9xvq+DLzTGagbdgqovtYQlnT2rDIJ7v/EvtyDeGUspIwGSWeacmD1sCnoLnYJlFm+DVJKsdMhLQ4eGhnUyrBTbaBD+s0s2OzMra/2Fn++N/78gC98NWRoBbkzUg/7dms/iEzRIRVsxECJ2XrFn8W4ABAO0puFRVa4DXAAAAAElFTkSuQmCC) 50% no-repeat;
      background-size: .2rem;
      
    }
    .send-msg{
      width: 2.45rem;
      border: 0;
      background: #f7f7f7;
      margin-top: .05rem;
      padding-left: .1rem;
      height: .32rem;
      float: left;
    }
    .send-btn{
      line-height: .34rem;
      display: block;
      width: .6rem;
      text-align: center;
      color: #fff!important;
      background: #991f33;
      margin-right: .08rem;
      margin-top: .05rem;
    }
  }
}
</style>
