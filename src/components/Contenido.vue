<template>
    <div class="flex flex-col self-start h-full">
        <div v-if="seccionSeleccionada === 'Sobre mi'">
            <About />
        </div>
        <div v-else-if="seccionSeleccionada === 'Habilidades'">
            <Skills />
        </div>
        <div v-else-if="seccionSeleccionada === 'Proyectos'">
            <Proyectos />
        </div>
        <div v-else-if="seccionSeleccionada === 'Contacto'">
            <Contacto />
        </div>  
    </div>
</template>

<script>
    import About from '@/components/About.vue';
    import Skills from '@/components/Skills.vue';
    import Proyectos from '@/components/Proyectos.vue';
    import Contacto from '@/components/Contacto.vue';
    export default{
        name : 'ContenidoComponent',
        props : {
            seccionSeleccionada : {
                type : String,
            }
        },
        components : {
            About,
            Contacto,
            Skills,
            Proyectos
            
        }
    }
</script>