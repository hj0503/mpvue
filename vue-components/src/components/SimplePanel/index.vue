<template>
  <div class="className">
    <div class="header">
      <i v-if="hasIcon" class="icon"/>
      <span class="title">{{title}}</span>
      <div v-if="sub" class="sub">{{sub}}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    hasIcon: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    sub: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang='less' scoped>
@import "./index.less";
</style>