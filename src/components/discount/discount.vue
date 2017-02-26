<template>
<ul>
  <li v-for="(item,index) in info">
    <span class="icon" :class="classMap[info[index].type]"></span>
    {{ info[index].description }}
  </li>
</ul>
</template>

<script>
  export default {
    props: ['classMap', 'info']

  };
</script>
<style lang="less">
  @import "../../common/less/mixin.less";
  @import "../../common/less/icon.css";
  span.icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  /*利用动态class切换icon*/
  span.icon-decrease{
  .bglogo('../../components/header/decrease_1');
  }
  span.icon-discount{
  .bglogo('../../components/header/discount_1');
  }
  span.icon-guarantee{
  .bglogo('../../components/header/guarantee_1');
  }
  span.icon-invoice{
  .bglogo('../../components/header/invoice_1');
  }
  span.icon-special{
  .bglogo('../../components/header/special_1');
  }
</style>
