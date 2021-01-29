<template>
  <div class="text-center">
    <v-btn class="done" @click="doneSorting()" rounded color="primary" dark>
      Done Sorting.
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    doneSorting() {
      this.$store.commit("toggleSorting");
    },
  },
};
</script>

<style>
.done {
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
}
</style>