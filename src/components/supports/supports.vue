<template>
  <div class="detail-all">
    <div class="supports-all clearfix">
      <div class="support-main">
        <div class="supports-seller">{{ seller.name }}</div>
        <div class="supports-rating">
          <!--<img src='./star48_on@2x.png'>-->
          <rating-star :score="seller.score" :size="48"></rating-star>
        </div>
        <div class="supports-header">
          <div class="supports-header-line"></div>
          <div class="supports-header-name">优惠信息</div>
          <div class="supports-header-line"></div>
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
      </div>
    </div>
    <div class="supports-close">
      <i v-on:click="hidesupport" class="icon-close"></i>
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
  @import "../../common/less/base.less";
  @import "../../common/less/icon.css";
  .detail-all{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
    overflow: auto;
    background-color: rgba(7,17,27,0.8);
    color: #fff;
    padding-left: 36px;
    padding-right: 36px;
    box-sizing: border-box;
    .supports-all{
      min-height: calc(~'100% - 64px');
      .support-main{
        margin-top: 64px;
        padding-bottom: 64px;
        .supports-seller{
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          color: rgb(255,255,255);
          text-align: center;
        }
        .supports-rating{
          margin-top: 16px;
          margin-bottom: 28px;
        }
        .supports-header{
          display: flex;
          .supports-header-line{
            position: relative;
            top: -7px;
            flex: 1;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
    }
    .supports-close{
      position: relative;
      margin: -64px auto 0 auto;
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 32px;
      clear: both;
    }
  }
</style>
