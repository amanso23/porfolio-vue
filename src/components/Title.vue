<template>
    <h1 class="font-extrabold text-4xl md:text-[3.5em] lg:text-[4.5em]">
        <div class="flex items-center gap-x-2">
            <div v-html="icono"></div>
            {{ titulo }}
        </div>
    </h1>
</template>

<script>
    export default{
        name : 'TitleComponent',
        props : {
            titulo : {
                type : String,
                required : true
            },
            icono : {
                type : String,
                required : true
            }
        }
}
</script>



<style scoped>
    
</style>