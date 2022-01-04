<template>
    <h2>Settings Page</h2>
    <Example />
</template>

<script>
import Example from '../../components/Example.vue';

export default {
    components:{ Example },
    mounted(){
        alert('settings Go!')
    }
}
</script>

<style scoped>
h2 {
    color: orange;
}
</style>