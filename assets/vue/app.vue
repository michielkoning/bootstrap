<template>
  <div id="app">
    <button @click="toggleModal(true)">Click</button>
    <app-modal title="test" @close="toggleModal(false)" v-show="showModal">adasd</app-modal>
  </div>
</template>

<script>
import AppModal from '@/components/AppModal.vue';

export default {
  components: {
    AppModal,
  },
  data() {
    return {
      hello: 'world',
      showModal: false,
    };
  },
  methods: {
    toggleModal(showModal) {
      this.showModal = showModal;
    },
  },
};
</script>

<style scoped lang="postcss">
.wrapper {
  background: #f0f;
}
</style>
