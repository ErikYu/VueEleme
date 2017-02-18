<template>
  <div id="app">
    <v-header :seller="seller"  v-on:showSupportAll="show"></v-header>
    <nav>
      <ul>
        <li><router-link to="/goods">商品</router-link></li>
        <li><router-link to="/sellers">店家</router-link></li>
        <li><router-link to="/ratings">评分</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
    <v-supports v-if="isShow" :seller="seller" v-on:hidesupport="hide"></v-supports>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header.vue';
import supports from 'components/supports/supports.vue';
export default {
  name: 'app',
  methods: {
    show: function () {
      this.isShow = true;
    },
    hide: function () {
      this.isShow = false;
    }
  },
  data() {
    return {
      seller: {},
      isShow: true
    };
  },
  // vue实例创建钩子created(){},
  // 应用vue-resource获取相应路由下的数据
  created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno === 0) {
          this.seller = response.data;
        }
      });
  },
  components: {
    'v-header': header,
    'v-supports': supports
  }
};
</script>

<style rel="stylesheet/less" type="text/css" lang="less">
  @import "common/less/mixin";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    height: 667px;
    nav{
      ul{
        display: flex;
        height: 40px;
        .line-bottom;
        li{
          display: inline-block;
          flex: 1;
          text-align: center;
          a{
            display: inline-block;
            line-height: 40px;
            color: rgb(77,85,93);
            height: 40px;
            width: 100%;
            font-size: 14px;
          }
          a.active{
            color: rgb(240,20,20);
          }
        }
      }
    }
    div.supports-all{
      position: fixed;
      width: 100%;
      height: 100%;
      top:0;
      left:0;
      right:0;
      bottom: 0;
      background-color: rgba(7,17,27,0.8);
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 16px;
    }
  }


</style>
