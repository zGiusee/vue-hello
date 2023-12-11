// RECUPERO IL METODOTO

const { createApp } = Vue

// INIZIALIZZO createApp

createApp({

    // DEFINISCO IL METODO E INSERISCO IL RETURN
    data() {
        return {
            message: 'Welcome to Vuejs',
            imageLink: 'https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png'
        }
    }
}).mount('#app')