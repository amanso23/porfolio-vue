
<template>
    <section class="m-7 md:m-6 lg:m-[5em] h-full">
     
        <div class="flex flex-col justify-center items-center h-full gap-y-2 w-full">
            <Proyecto 
                :nombre="'proyecto-final-vue'"
                :enlace="'https://github.com/amanso23/proyecto_final_vue'"
                :publico="true"
                :descripcion="'Proyecto que implementa la api de TMDb para mostrar películas.'"
                :tecnologias="['vue', 'boostrap']" 
            />
            
        </div>
    </section>
</template>

<script>
    import Proyecto from './Proyecto.vue';
   
    import proyectosSVG from '@/assets/proyectos.svg';
    export default {
        name: 'ProyectosComponent',
        components: {
        
            Proyecto
        },
        data(){
            return {
                iconoSVG: `
                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" slot="icono" class="mt-2">
                    <path d="M4.2 16H6.2C6.31 16 6.4 15.91 6.4 15.8V4.2C6.4 4.09 6.31 4 6.2 4H4.2C4.09 4 4 4.09 4 4.2V15.8C4 15.91 4.09 16 4.2 16ZM9 9H11C11.11 9 11.2 8.91 11.2 8.8V4.2C11.2 4.09 11.11 4 11 4H9C8.89 4 8.8 4.09 8.8 4.2V8.8C8.8 8.91 8.89 9 9 9ZM13.8 10.8H15.8C15.91 10.8 16 10.71 16 10.6V4.2C16 4.09 15.91 4 15.8 4H13.8C13.69 4 13.6 4.09 13.6 4.2V10.6C13.6 10.71 13.69 10.8 13.8 10.8ZM19.2 0H0.8C0.3575 0 0 0.3575 0 0.8V19.2C0 19.6425 0.3575 20 0.8 20H19.2C19.6425 20 20 19.6425 20 19.2V0.8C20 0.3575 19.6425 0 19.2 0ZM18.2 18.2H1.8V1.8H18.2V18.2Z" fill="white"/>
                </svg>
            `
            }
        },
        methods:{
            changeFavicon(href) {
                const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = href;
                document.getElementsByTagName('head')[0].appendChild(link);
            },
            restoreFavicon() {
                const originalFavicon = '/favicon.svg'; 
                this.changeFavicon(originalFavicon);
            }
        },
        beforeUnmount() {
            this.restoreFavicon();
        },
         mounted () {
            this.changeFavicon(proyectosSVG); 
        }
    }
</script>
