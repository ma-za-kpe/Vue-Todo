<template>
   <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Delete task
        </v-card-title>
        <v-card-text> Are you sure?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('close')"
          >
            No
          </v-btn>
          <v-btn
            color="purple darken-1"
            text
            @click="$store.dispatch('deleteTodo', task.id)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
 props: ["task"],
}
</script>
