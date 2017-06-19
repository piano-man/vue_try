<template>
    <div>
    <h1>Users Page</h1>
    <button @click='gohome'>Go Home</button>
    </div>
</template>
<script>
export default {
    watch:{
        '$route' (to,from){
            alert(to.params.teamId)
        }

    },
    created(){
        alert(this.$route.params.teamId)
    },
    methods: {
        gohome(){
            this.$router.push('/')
        }
    }
}

</script>