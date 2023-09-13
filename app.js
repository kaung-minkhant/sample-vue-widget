const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am a template</h2>'
    data() {
        return {
            showBooks: true,
            books: [
              { title: 'name of the wind', author: 'kaung min khant'},  
              { title: 'the way of kings', author: 'shunn le yee'},  
              { title: 'the final empire', author: 'shally nadz'},  
            ],
            x: 0,
            y: 0,
            url: 'http://www.thenetninja.co.uk',
        }
    },

    methods: {
        changeTitle(title) {
            this.title = title
        },

        toggleShowBook() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            if (data) {
                console.log(data);
            }
            console.log(e.type);
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }, 

        clearMouseMove() {
            this.x = 0
            this.y = 0
        }
    }
})

app.mount('#app')