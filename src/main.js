import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// 组件定义
app.component('todo-item', {
  template: `<li>This is a todo</li>`
})

app.mount('#app')

