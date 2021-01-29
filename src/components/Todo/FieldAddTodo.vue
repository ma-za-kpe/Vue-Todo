<template>
  <div>
    <v-text-field
      v-model="newTodo"
      @keyup.enter="addTodo()"
      class="pa-3"
      color="purple"
      outlined
      label="Add Todo"
      hide-details
      clearable
    >
      <template v-slot:append>
        <v-icon :disabled="todoTitleInvalid" @click="addTodo()"
          >mdi-plus-circle</v-icon
        >
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    todoTitleInvalid() {
      return !this.newTodo;
    },
  },
  methods: {
    addTodo() {
      if (!this.todoTitleInvalid){
      this.$store.dispatch("addTodo", this.newTodo);
      this.newTodo = "";
      }
    },
  },
};
</script>
