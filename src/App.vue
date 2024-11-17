<template>
  <div id="app">
    <header>
      <h1>TaskHub</h1>
      <!-- A navegação só aparece se o usuário estiver logado -->
    </header>

    <!-- O conteúdo da página será renderizado aqui -->
    <router-view></router-view>

    <footer>
      <p>&copy; 2024 TaskHub. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,  // Controla se o usuário está logado
    };
  },
  created() {
    // Verifica se há um token no localStorage. Se houver, define o usuário como logado.
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

footer {
  background-color: #f8f8f8;
  color: #888;
  text-align: center;
  padding: 10px;
  margin-top: auto;
}

footer p {
  margin: 0;
}
</style>
