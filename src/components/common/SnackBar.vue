<template>
  <v-snackbar v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.snackText }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$store.commit('hideSnackBar')">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
};
</script>

<style>
div.v-snack:not(.v-snack--absolute) {
    height: 100%;
}
</style>