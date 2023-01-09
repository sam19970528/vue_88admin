<template>
    <div class="introduce">
        <h1>{{ h1 }}</h1>
        <p>{{ p }}</p>
    </div>
</template>

<script>
export default {
    name:"Introduce",
    props:{
        h1: String,
        p: String
    },
    setup(){
        return {

        }
    }
}
</script>