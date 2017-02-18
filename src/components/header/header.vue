<template>
  <div id="header">
    <div id="seller-wrapper">
      <div class="header-img">
        <!--v-bind:src设置src为动态prop-->
        <img :src=seller.avatar />
      </div>
      <div class="header-seller">
        <div class="header-seller-1">
          <span class="logo"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="header-seller-2">
          <h3>{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</h3>
        </div>
        <!--v-if检测是否实际有supports传入，一开始传入的是空对象seller-->
        <div class="header-seller-supports">
          <span v-if="seller.supports">{{ seller.supports[0].description }}</span>
          <span v-if="seller.supports" class="header-seller-supports-num" v-on:click="showSupportAll">{{ seller.supports.length }}个 ></span>
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
    methods: {
      showSupportAll: function () {
        this.$emit('showSupportAll');
      }
    },
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>
<!--注意lang="less"-->
<style rel="stylesheet/less" type="text/css" lang="less">
@import "../../common/less/mixin.less";

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
      div.header-seller-1{
        width: 200px;
        span.logo{
          .bglogo('../../components/header/brand');
          display: inline-block;
          width: 30px;
          height: 18px;
          background-size: cover;
        }
        span.name{
          font-weight: bold;
          font-size: 16px;
          line-height: 18px;
          vertical-align: top;
        }
      }
      div.header-seller-2{
        margin-top: 8px;
        h3{
          font-weight: 200;
          font-size: 12px;
          line-height: 12px;
        }
      }

      .header-seller-supports{
        margin-top: 10px;
        span{
          font-weight: 200;
          font-size: 10px;
          line-height: 12px;
        }
        span.header-seller-supports-num{
          display: inline-block;
          height: 24px;
          box-sizing: border-box;
          line-height: 24px;
          padding-left: 8px;
          padding-right: 8px;
          border: 1px solid;
          font-size: 10px;
          border-radius: 7px;
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
