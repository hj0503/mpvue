<template>
  <div class="container">
    <span class="title">
      {{title}}
      <TrendArrow :up="false"/>
    </span>
    <span class="sub">{{subTitle}}</span>
    <slot></slot>
  </div>
</template>

<script>
import TrendArrow from "../components/Arrow/TrendArrow";
export default {
  name: "TitleBar",
  components: {
    TrendArrow
  },
  props: {
    title: String,
    subTitle: {
      type: String,
      default: "sub-title"
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #ececec;
  padding: 0 10px;
  box-sizing: border-box;
}
.sub {
  margin-left: 10px;
}
</style>
