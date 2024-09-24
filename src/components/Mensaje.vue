<template>
    <div :class="['chat', tipo === 'start' ? 'chat-start' : 'chat-end', 'mt-1']">
        <div class="chat-header pt-1">
            {{ usuario }}
            <time class="text-xs opacity-50">{{ actualHour }}</time>
        </div>
        <div class="chat-bubble">{{ mensaje }}</div>
        <div class="chat-footer opacity-50">
            {{ usuario === 'Adrián' ? '' : 'Enviado' }} 
        </div>
    </div>
</template>

<script>
    export default{
        name : 'MensajeComponent',
        props : {
            mensaje : {
                type : String,
                required : true
            },
            tipo : {
                type : String,
            },
            usuario : {
                type : String,
                default : 'Adrián'
            },
            estado : {
                type : String,
                default : 'Visto'
            }
        },
        data(){
            return {
                actualHour : this.getActualHour() 
            }
        },
        methods : {
            getActualHour(){
                return new Date().toLocaleTimeString().slice(0, 5);
            }  
        },
        mounted(){
            this.actualHour = this.getActualHour();
        }
    }

</script>


<style scoped>

    

</style>






