<template>
  <div>
    <Lista :tasks="tasks" @update:tasks="updateTasks" />
  </div>
</template>

<script>
import Lista from '@/components/Lista.vue';  // Certifique-se de importar o componente

export default {
  name: 'Painel',
  components: {
    Lista
  },
  data() {
    return {
      tasks: [
        // Suas tarefas aqui
      ]
    };
  },
  methods: {
    updateTasks(newTasks) {
      // Atualiza a lista de tarefas com os novos dados
      this.tasks = newTasks;
    }
  }
};
</script>
