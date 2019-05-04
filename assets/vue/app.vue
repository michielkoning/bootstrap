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
  methods: {},
};
</script>

<style scoped>
.wrapper {
  background: #000;
}
</style>
