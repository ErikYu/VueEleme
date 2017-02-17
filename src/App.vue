<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <nav>
      <ul>
        <li><router-link to="/goods">商品</router-link></li>
        <li><router-link to="/sellers">店家</router-link></li>
        <li><router-link to="/ratings">评分</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header.vue';
export default {
  name: 'app',
  data() {
      return {
          seller: {}
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
    'v-header': header
  }
};
</script>

<style rel="stylesheet/less" type="text/css" lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  ul{
    display: flex;
    height: 40px;
    li{
      display: inline-block;
      flex: 1;
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

</style>
