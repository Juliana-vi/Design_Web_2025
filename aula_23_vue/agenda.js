var contatos = [
    //
    {
    nome: "Juliana", 
    cel: "999878866",
    foto: "juliana.jpg",
    favorito: true
    },

    {
    nome: "Dani", 
    cel: "999878888",
    foto: "juliana.jpg",
    favorito: false
    },

    {
    nome: "Nicole", 
    cel: "999833336",
    foto: "nicole.jfif",
    favorito: true
    },

    {
    nome: "Luna", 
    cel: "999845666",
    foto: "nicole.jfif",
    favorito: false
    }
]


const agenda ={
    data() {
        return {
            titulo:"Agrenda de contatos",
            contatos: window.contatos
        }
    }

}

Vue.createApp(agenda).mount("#app");