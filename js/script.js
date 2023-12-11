// RECUPERO IL METODOTO

const { createApp } = Vue

// INIZIALIZZO createApp

createApp({

    // DEFINISCO IL METODO E INSERISCO IL RETURN
    data() {
        return {
            message: 'Welcome to Vuejs'
        }
    }
}).mount('#app')