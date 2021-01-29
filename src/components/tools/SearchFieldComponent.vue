<template>
  <v-text-field
  :disabled="$store.state.sorting"
    :value="$store.state.searchTerm"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    :class="{ close: searchClosed && !$store.state.searchTerm }"
    prepend-inner-icon="mdi-magnify"
    clearable
    solo
    dense
    light
    hide-details
    label="Search term"
    placeholder="Drink Tequila at 5am with the girls."
  >
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      searchClosed: true,
    };
  },
};
</script>

<style>
.close {
  width: 0px;
}
.v-icon {
  cursor: pointer;
}
</style>