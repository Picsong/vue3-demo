<template>
  <div class="layout-wrapper">
    <Box1 class="base-style--four-border"></Box1>
    <Box1 class="base-style--four-border"></Box1>
    <Box2 class="base-style--four-border"></Box2>

    <Map1 class="base-style--four-border grid__item-4"></Map1>
    <div class="base-style--four-border"></div>

    <List1 class="base-style--four-border" title="近效期监控" desc="商品库存：456" :timeout="4000"/>
    <List1 class="base-style--four-border" title="工作排行榜" :timeout="5000"/>
    <List1 class="base-style--four-border grid__item-8" title="库存监控" desc="商品库存：123" :timeout="3000">
      <template v-slot:head>
        <div class="list__head">Here might be a page title</div>
      </template>
      <template v-slot:item="{item}">
        <li class="list__item">{{ item.name }}</li>
      </template>
    </List1>
<!--    <div>9</div>-->
  </div>
</template>

<script>
import Box1 from "../components/chart1.vue";
import Box2 from "../components/chart2.vue";
import Map1 from "../components/map1.vue";
import List1 from "../components/list1.vue";

export default {
  name: "Layout",
  components: {
    Box1,
    Box2,
    Map1,
    List1
  }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: grid;
  width: 100%;
  height: 100%;
  padding: 80px 20px 40px;
  box-sizing: border-box;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 'q w e' 'a s d' 'z x .';
  grid-auto-flow: column;
  grid-gap: 20px;

  & > div {
    color: #999;
    border: 1px solid #333333;
  }

  .grid__item-4 {
    //grid-column: span 1;
    grid-row: span 2;
  }

  .grid__item-8 {
    .list__head {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #cccccc;
      background-color: #1D408A;
    }

    .list__item {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      color: #ccc;
    }
  }
}


</style>
