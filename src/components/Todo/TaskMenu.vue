<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="menuClick(i)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <DialogEdit
      @close="dialogs.edit = false"
      v-if="dialogs.edit"
      :task="task"
    />
    <DueDateCalender
      @close="dialogs.dueDate = false"
      v-if="dialogs.dueDate"
      :task="task"
    />
    <DialogDelete
      @close="dialogs.delete = false"
      v-if="dialogs.delete"
      :task="task"
    />
  </div>
</template>

<script>
import DialogDelete from "./Dialogs/DialogDelete";
import DialogEdit from "./Dialogs/DialogEdit";
import DueDateCalender from "./Dialogs/DueDateCalender";

export default {
  props: ["task"],
  components: {
    DialogEdit,
    DialogDelete,
    DueDateCalender,
  },
  data() {
    return {
      dialogs: {
        edit: false,
        dueDate: false,
        delete: false,
        sort: false,
      },
      items: [
        {
          title: "Edit",
          icon: "mdi-pencil",
          click() {
            this.dialogs.edit = true;
          },
        },
        {
          title: "Due date",
          icon: "mdi-calendar-edit",
          click() {
            this.dialogs.dueDate = true;
          },
        },
        {
          title: "Delete",
          icon: "mdi-delete",
          click() {
            this.dialogs.delete = true;
          },
        },
        {
          title: "Sort",
          icon: "mdi-sort",
          click() {
            if (!this.$store.state.searchTerm) {
              this.$store.commit("toggleSorting");
            } else {
              this.$store.commit("showSnackBar", "We dont sort and search, dont be mad!!");
            }
          },
        },
      ],
    };
  },
  methods: {
    menuClick(i) {
      this.items[i].click.call(this);
    },
  },
};
</script>
