<template>
    <div>
        <h1>{{message}}</h1>
        <app-input :msg='message' @messageChanged="message = $event"></app-input>
    </div>
</template>
<script>
import input from './input.vue'
export default {
    data() {
        return {

        
        message: 'this is working'
        }

    },
    components: {
        'app-input': input
    }
}
</script>
