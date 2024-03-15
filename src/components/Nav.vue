<template>
    <nav class="flex justify-center items-center w-[95%] lg:w-2/5 m-4 lg:m-0">
        <ul class="flex lg:flex-col gap-y-6 gap-x-4 font-bold items-start text-[1em] md:text-2xl lg:text-[3.5em]  ">
            <li class="transition-colors duration-500 hover:text-[#f074ba] selected " @click="seleccionarSeccion('Sobre mi')">sobre mí</li>
            <li class="transition-colors duration-500 hover:text-[#f074ba]" @click="seleccionarSeccion('Habilidades')">habilidades</li>
            <li class="transition-colors duration-500 hover:text-[#f074ba]" @click="seleccionarSeccion('Proyectos')">proyectos</li>
            <li class="transition-colors duration-500 hover:text-[#f074ba]" @click="seleccionarSeccion('Contacto')">contacto</li>
            
        </ul>
    </nav>
</template>

<script>
    export default{
        name : 'NavComponent',
        methods : {
            seleccionarSeccion(seccion){
                this.$emit('seleccionarSeccion', seccion);
            },
            obtenerSecciones() {
                const lis = document.querySelectorAll('li');
                lis.forEach(li => {
                    li.addEventListener('click', () => {
                        lis.forEach(li => li.classList.remove('selected'));
                        li.classList.add('selected');
                    });
                });
            }

        },
        mounted() {
            this.obtenerSecciones();
        }
    }
</script>


<style scoped>

    li{
        cursor: pointer;
    }

    nav li.selected{
        color: #f074ba !important;
    }

</style>