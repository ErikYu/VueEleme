<template>
  <div class="supports-all">
    <div class="supports-seller">{{ seller.name }}</div>
    <div class="supports-rating">
      <img src='./star48_on@2x.png'>
      <rating-star></rating-star>
    </div>
    <div class="supports-header">
      <span class="supports-header-line"></span>
      <span class="supports-header-name">优惠信息</span>
      <span class="supports-header-line"></span>
    </div>
    <div class="supports">
        <ul class="">
          <li v-if="seller.supports"><span>{{ seller.supports[0].description }}</span></li>
          <li v-if="seller.supports"><span>{{ seller.supports[1].description }}</span></li>
          <li v-if="seller.supports"><span>{{ seller.supports[2].description }}</span></li>
          <li v-if="seller.supports"><span>{{ seller.supports[3].description }}</span></li>
          <li v-if="seller.supports"><span>{{ seller.supports[4].description }}</span></li>
        </ul>
    </div>
    <div class="supports-header">
      <span class="supports-header-line"></span>
      <span class="supports-header-name">商家公告</span>
      <span class="supports-header-line"></span>
    </div>
    <div class="supports support-announcement" v-if="seller.bulletin">
      {{ seller.bulletin }}
    </div>
    <div class="supports-close">
      <div v-on:click="hidesupport">X</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ratingstar from '../ratingstar/ratingstar.vue';
  export default {
    data () {
      return {
        image: './star48_on@2x.png'
      };
    },
    methods: {
      hidesupport: function () {
        this.$emit('hidesupport');
      }
    },
    components: {
        'rating-star': ratingstar
    },
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>
<style rel="stylesheet/less" type="text/css" lang="less">
  .supports-all{
    padding: 64px 36px 32px 36px;
    box-sizing: border-box;
    .supports-seller{
      font-size: 16px;
      font-weight: 700;
      line-height: 16px;
      color: rgb(255,255,255);
      text-align: center;
    }
    .supports-header{
      font-size: 0;
      span{
        display: inline-block;
        vertical-align: middle;
      }
      .supports-header-line{
        background-color: rgba(255,255,255,0.2);
        height: 2px;
        width: 112px;
        line-height: 14px;
      }
      .supports-header-name{
        font-size: 14px;
        font-weight: 700;
        margin: 0 11px 0 11px;
      }
    }
    .supports{
      margin-top: 24px;
      margin-bottom: 28px;
      font-size: 12px;
      line-height: 24px;
      ul{
        li{
          font-size: 12px;
          line-height: 12px;
          margin-bottom: 12px;
        }
      }
    }
  }
</style>
