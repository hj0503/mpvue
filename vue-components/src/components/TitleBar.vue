<template>
  <div class="container">
    <span class="title">
      {{title}}
      <TrendArrow :up="false"/>
    </span>
    <span class="sub">{{subTitle}}</span>
    <SimplePanel title="title" sub="sub">
      <h2 @click="addA">Hello world{{aDouble}}</h2>
    </SimplePanel>
  </div>
</template>

<script>
import TrendArrow from "../components/Arrow/TrendArrow";
import SimplePanel from "../components/SimplePanel/index";
export default {
  name: "TitleBar",
  components: {
    TrendArrow,
    SimplePanel
  },
  props: {
    title: String,
    subTitle: {
      type: String,
      default: "sub-title"
    }
  },
  data() {
    return {
      a: 1
    }
  },
  computed: {
    aDouble() {
      return this.a * 2
    }
  },
  methods: {
    addA() {
      this.a++
    }
  },
};
</script>

<style scoped>
</style>
