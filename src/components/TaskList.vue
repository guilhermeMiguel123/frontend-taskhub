<template>
  <div>
    <h1>Lista de Tarefas</h1>
    
    <div v-if="tasks.length === 0">
      <p>Não há tarefas.</p>
    </div>
    
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">Excluir</button>
        <button @click="editTask(task)">Editar</button>
      </li>
    </ul>

    <form @submit.prevent="createTask">
      <input v-model="newTaskTitle" type="text" placeholder="Nova tarefa" required />
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
import axios from '../axios';  // Importa a configuração do axios

export default {
  data() {
    return {
      tasks: [],  // Lista de tarefas
      newTaskTitle: '',  // Título da nova tarefa
    };
  },
  mounted() {
    this.fetchTasks();  // Carregar as tarefas quando o componente for montado
  },
  methods: {
    // Método para listar as tarefas
    async fetchTasks() {
      try {
        const response = await axios.get('/tasks');  // Requisição GET para obter tarefas
        this.tasks = response.data;
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    },
    // Método para criar uma nova tarefa
    async createTask() {
      if (!this.newTaskTitle.trim()) return;  // Impede a criação de tarefa vazia

      try {
        const response = await axios.post('/tasks', { title: this.newTaskTitle });
        this.tasks.push(response.data);  // Adiciona a nova tarefa à lista
        this.newTaskTitle = '';  // Limpa o campo de input
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
      }
    },
    // Método para excluir uma tarefa
    async deleteTask(taskId) {
      try {
        await axios.delete(`/tasks/${taskId}`);  // Requisição DELETE para excluir a tarefa
        this.tasks = this.tasks.filter(task => task.id !== taskId);  // Remove a tarefa da lista
      } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
      }
    },
    // Método para editar uma tarefa
    async editTask(task) {
      const newTitle = prompt('Editar título da tarefa:', task.title);
      if (newTitle && newTitle !== task.title) {
        try {
          const response = await axios.put(`/tasks/${task.id}`, { title: newTitle });
          task.title = response.data.title;  // Atualiza o título da tarefa
        } catch (error) {
          console.error('Erro ao editar tarefa:', error);
        }
      }
    }
  },
};
</script>

<style scoped>
/* Estilos do componente de lista de tarefas */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  margin-left: 10px;
}
</style>
