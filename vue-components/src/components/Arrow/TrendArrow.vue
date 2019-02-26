<template>
  <span>
    <GoUp v-if="up"/>
    <GoDown v-if="!up"/>
  </span>
</template>

<script>
import GoUp from "./Up";
import GoDown from "./Down";
export default {
  name: "TrendArrow",
  components: {
    GoUp,
    GoDown
  },
  props: {
    up: {
      type: Boolean
    }
  }
};
</script>

<style lang="less" scoped>
@import "./Arrow.less";
</style>