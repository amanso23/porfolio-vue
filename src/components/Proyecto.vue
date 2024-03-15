<template>
  <h1></h1>
</template>

<script>
    export default{
        name: 'ProyectoComponent',
        props: {
            nombre : {
                type : String,
                required : true
            },
            enlace : {
                type : String,
                required : true
            },
            publico : {
                type : Boolean,
                required : true
            },
            descripcion : {
                type : String,
                required : true
            },
            tecnologias : {
                type : Array,
                required : true
            }
        }, 
    }



</script>

<style scoped>

  .custom-color{
      background: linear-gradient(to right, #8B5CF6, #c757f7, #FF7AEF);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
  }
    
</style>



 



