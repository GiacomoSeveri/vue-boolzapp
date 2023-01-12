console.log('Vue ok', Vue);

const app = Vue.createApp({
    data(){
        return{
            currentIndex: 0,
            data: {
                user: {
                  name: 'Nome Utente',
                  avatar: '_io'
                },
                contacts: [
                  {
                    name: 'Michele',
                    avatar: '_1',
                  },
                  {
                    name: 'Fabio',
                    avatar: '_2',
                  },
                  {
                    name: 'Samuele',
                    avatar: '_3',
                  },
                  {
                    name: 'Luisa',
                    avatar: '_4',
                  },
                ]
            }
        }
    },
});

app.mount('#root');