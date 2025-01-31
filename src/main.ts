import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app= createApp(App)

app.directive('font-size', {
    beforeMount: (el, binding) => {
      el.style.fontSize = '30px'
    }
})

app.directive('custom-size', {
    beforeMount: (el, binding) => {
      el.style.fontSize = binding.value + 'px'
    }
})

app.directive('custom-size-arg', {
    beforeMount: (el, binding) => {
        let size = 16
        switch (binding.arg) {
            case 'sm':
                size = 12;
                break;
            case 'md':
                size = 16;
                break;
            case 'lg':
                size = 20;
                break;
            case 'xl': 
                size = 24;
                break;
            case '2xl':
                size = 32;
        }
        el.style.fontSize = size + 'px'
    }
})

app.directive('custom-size-modify', {
    beforeMount: (el, binding) => {
        let size = 16

        if(binding.modifiers.sm){
            size = 12;
        } else if(binding.modifiers.lg){
            size = 16;
        } else if(binding.modifiers.xl){
            size = 20;
        }

        el.style.fontSize = size + 'px'

        if(binding.modifiers.red){
            el.style.color = '#ff0000'
        }else if(binding.modifiers.green){
            el.style.color = '#00ff00'
        }else if(binding.modifiers.blue){
            el.style.color = '#0000ff'
        }
    }
})

app.mount('#app')
