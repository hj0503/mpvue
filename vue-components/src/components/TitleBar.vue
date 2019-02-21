<template>
  <div class="container">
    <span class="title">{{title}}</span>
    <span class="sub">{{subTitle}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    subTitle: {
      type: String,
      default: "sub-title"
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #ececec;
  padding: 0 10px;
  box-sizing: border-box;
}
.sub{
  margin-left: 10px;
}
</style>
