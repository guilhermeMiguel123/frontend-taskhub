<template>
  <div>
    <draggable :list="tasks" :group="'tasks'" @start="onDragStart">
      <v-list>
        <v-list-item-group v-for="task in tasks" :key="task.id">
          <v-list-item>{{ task.title }}</v-list-item>
        </v-list-item-group>
      </v-list>
    </draggable>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onDragStart(evt) {
      console.log('Drag started:', evt);
    },
  },
};
</script>

<style scoped>
/* Adicione seu estilo aqui */
</style>
