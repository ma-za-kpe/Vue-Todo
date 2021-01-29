<template>
  <div>
    <v-list flat subheader>
      <draggable v-model="myList" handle=".handle">
        <TodoItem
          v-for="task in myList"
          :key="task.id"
          :task="task"
        />
      </draggable>
    </v-list>
    <Footer />
  </div>
</template>

<script>
import draggable from "vuedraggable";

import TodoItem from "../Todo/TodoItem";
import Footer from "../layout/Footer";

export default {
  components: {
    TodoItem,
    Footer,
    draggable,
  },
  computed: {
    myList: {
      get() {
        return this.$store.getters.filteredTasks;
      },
      set(value) {
        this.$store.dispatch("updateTodoList", value);
      },
    },
  },
};
</script>
