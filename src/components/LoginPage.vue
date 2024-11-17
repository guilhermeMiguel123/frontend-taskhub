<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Usuário</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Senha</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Aqui você poderia fazer uma chamada API para autenticar o usuário
      if (this.username && this.password) {
        // Simulando um login bem-sucedido e salvando o token
        localStorage.setItem('token', 'fake-jwt-token');
        this.$router.push('/tasks');  // Redireciona para a página de tarefas
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para o formulário de login */
</style>
