<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline"> Edit todo </v-card-title>
      <v-card-text>
        Are you sure you want to edit todo?
        <v-text-field
          v-model="todoTitle"
          @keyup.enter="editTodo()"
          class="pa-3"
          color="purple"
          outlined
          label="Edit Todo"
          hide-details
          clearable
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="$emit('close')">
          Cancel
        </v-btn>
        <v-btn
          :disabled="todoTitleInvalid"
          color="purple darken-1"
          text
          @click="editTodo()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      todoTitle: "",
    };
  },
  methods: {
    editTodo() {
      if (!this.todoTitleInvalid) {
        let updatedTodo = {
          id: this.task.id,
          title: this.todoTitle,
        };

        this.$store.dispatch("editTodo", updatedTodo);
        this.$emit("close");
      }
    },
  },
  computed: {
    todoTitleInvalid() {
      return !this.todoTitle || this.todoTitle === this.task.title;
    },
  },
  mounted() {
    this.todoTitle = this.task.title;
  },
};
</script>
