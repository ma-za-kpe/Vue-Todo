<template>
  <div class="home">
    <FieldAddTodo />
    <TodoList v-if="$store.state.tasks.length" />
    <NoTask v-else />
    <DoneSorting v-if="$store.state.sorting" />
  </div>
</template>

<script>
import FieldAddTodo from "../components/Todo/FieldAddTodo";
import TodoList from "../components/Todo/TodoList";
import NoTask from "../components/Todo/NoTask";
import DoneSorting from "../components/Todo/DoneSorting";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  components: {
    FieldAddTodo,
    TodoList,
    NoTask,
    DoneSorting,
  },
};
</script>
<style >
</style>
