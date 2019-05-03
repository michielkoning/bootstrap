<template>
  <div id="app">
    <div class="wrapper">
      {{ hello }}

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: 'world',
    };
  },
};
</script>

<style scoped>
#app {
  background: #000;
}
</style>
