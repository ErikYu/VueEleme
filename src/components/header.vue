<template>
  <div id="header">
    <div id="seller-wrapper">
      <div class="header-img">
        <!--v-bind:src设置src为动态prop-->
        <img :src=seller.avatar />
      </div>
      <div class="header-seller">
        <h1>{{ seller.name }}</h1>
        <h3>{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</h3>
        <!--v-if检测是否实际有supports传入，一开始传入的是空对象seller-->
        <div class="header-seller-supports">
          <span v-if="seller.supports">{{ seller.supports[0].description }}</span>
          <span v-if="seller.supports">{{ seller.supports.length }}个 ></span>
        </div>
      </div>
    </div>
    <div id="bulletin-wrapper">
      {{ seller.bulletin }}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            seller: {
                type: Object
            }
        }
    };
</script>
<!--注意lang="less"-->
<style rel="stylesheet/less" type="text/css" lang="less">
#header{
  height:134px;
  box-sizing: border-box;
  background: #ccc;
  background-size: cover;
  #seller-wrapper{
    padding: 24px 12px 18px 24px;
    height: 106px;
    box-sizing: border-box;
    .header-img{
      float: left;
      img{
        width: 64px;
        height: 64px;
      }
    }
    .header-seller{
      color: rgb(255, 255, 255);
      margin-left: 16px;
      float: left;
      h1{
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
      }
      h3{
        font-weight: 200;
        font-size: 12px;
        line-height: 12px;
      }
      .header-seller-supports{
        span{
          font-weight: 200;
          font-size: 10px;
          line-height: 12px;
        }
      }
    }
  }
  #bulletin-wrapper{
    height: 28px;
    line-height: 28px;
    font-size: 10px;
    /*color: rgb(255, 255, 255);*/
    font-weight: 200;
    overflow: hidden;
  }
}
</style>
