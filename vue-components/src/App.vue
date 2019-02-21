<template>
  <div id="app">
    <TitleBar title="title">
      <h2>Hello world</h2>
    </TitleBar>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue'

export default {
  name: 'app',
  components: {
    TitleBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
}
</style>
