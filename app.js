const App = {
  data() {
    return {
      inputValue: '',
      placeholderString: 'Введите название заметок',
      title: 'Список заметок',
      notes: ['Заметка 1',  'Заметка 2']
    }
    
  },
  methods: {
    addNewNote () {
      if (this.inputValue !== ''){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
     },
     removeNote(idx) {
      this.notes.splice(idx, 1)
     }
      },
      computed: {
        doubleCountComputed() {
          return this.notes.length * 2;
     }
    },
    watch: {
       inputValue(value) {
        if (value.length > 20) {
          this.inputValue = ''
        }
       }
    }
  }


  Vue.createApp(App).mount('#app')
