<template>
  <div>{{ date }} — <strong>Mazakpe</strong></div>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
        date: ''
    }
  },
  methods: {
    prettyDate() {
      this.date = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
      setTimeout(this.prettyDate, 1000)
    },
  },
  mounted(){
      this.prettyDate()
  }
};
</script>

<style>
</style>