<template>
  <v-footer fixed padless>
    <v-col class="text-center" cols="12">
      <LiveDAteTime />
    </v-col>
  </v-footer>
</template>

<script>
import LiveDAteTime from "../tools/LiveDAteTime";

export default {
  components: {
    LiveDAteTime,
  },
};
</script>

<style>
</style>