<template>
  <div>
    <v-list-item
    color="white"
      @click="$store.dispatch('done', task.id)"
      :class="{
        'purple lighten-5 text-decoration-line-through': task.done,
      }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon class="pa-2" small color="purple lighten-1"
              >mdi-calendar</v-icon
            >
            {{ task.dueDate | prettyDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <TaskMenu :task="task" />
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.sorting">
          <v-btn class="handle" color="primary" icon>
            <v-icon color="purple lighten-1">mdi-drag</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from "../Todo/TaskMenu";
import { format } from "date-fns";

export default {
  props: ["task"],
  data() {
    return {};
  },
  filters: {
    prettyDate(date) {
      return format(new Date(date), "MMM-d");
    },
  },
  components: {
    TaskMenu,
  },
};
</script>
<style>
.sortable-ghost{
  opacity: 0;
}
</style>
