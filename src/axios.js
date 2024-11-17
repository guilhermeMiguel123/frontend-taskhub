import axios from 'axios';

// Criação da instância do axios com base URL configurada
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',  // A URL base do seu backend (ajustado para a porta correta)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token de autenticação em todas as requisições
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  // Pega o token armazenado no localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;  // Adiciona o token no cabeçalho de todas as requisições
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);  // Se ocorrer algum erro na requisição, rejeita a promise
  }
);

export default axiosInstance;
