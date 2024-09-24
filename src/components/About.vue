<template>
    <section>  

        <!-- <div class="mockup-code hidden md:block md:text-[1em] ">
            <pre data-prefix="$"><code>npm i amanso23-porfolio</code></pre> 
            <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            <pre data-prefix=">"><code>info <span class="text-slate-600">--help</span></code></pre>
            <pre data-prefix=" " class="bg-[#646ee4] text-warning-content" ><code>bienvenido a mi porfolio, soy adrian, desarrollador web</code></pre>
            <pre data-prefix=" " ><code>comencé a programar en la universidad, hace 4 años</code></pre>
            <pre data-prefix=" " ><code>solo hace unos meses desde que me saqué el título de desarollador web</code></pre>
            <pre data-prefix=" " ><code>mis objetivos se centran en poder formar parte de grandes proyectos</code></pre>
            <pre data-prefix=" " ><code>rodearme de profesionales que me permitan desarrollarme tanto personal</code></pre>
            <pre data-prefix=" " ><code>como profesionalmente, brindandome oportunidades de cara a presente y futuro</code></pre>
            <pre data-prefix=">"><code></code></pre>
        </div>    -->

        <!-- <div class="mockup-code md:hidden text-[0.6em]">
            <pre data-prefix="$"><code>npm i amanso23-porfolio</code></pre> 
            <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            <pre data-prefix=">"><code>info <span class="text-slate-600">--help</span></code></pre>
            <pre data-prefix=" " class="bg-[#646ee4] text-warning-content" ><code>bienvenido a mi porfolio, soy adrian, desarrollador web</code></pre>
            <pre data-prefix=" " ><code>comencé a programar en la universidad, hace 4 años</code></pre>
            <pre data-prefix=" " ><code>solo hace dos desde que soy desarollador web</code></pre>
            <pre data-prefix=" " ><code>centrado en poder formar parte de grandes proyectos</code></pre>
            <pre data-prefix=" " ><code>rodearme de profesionales que me permitan desarrollarme</code></pre>
            <pre data-prefix=" " ><code>tanto personal, como profesionalmente</code></pre>
            <pre data-prefix=" " ><code>brindandome oportunidades de cara a presente y futuro</code></pre>
            <pre data-prefix=">"><code></code></pre>
        </div>   -->

        <!-- <div class="text-right mt-2 lg:mt-4">
            <a href="/" class="text-[0.8em] lg:text-[1.1em] text-[#fff2b3] font-extrabold cursor-pointer hover:text-[#ffe357]"> Saber más...</a>
        </div> -->
        
    
    </section>
</template>

<script>

import heySVG from '@/assets/icons/heySVG.svg'
import { mensajesStore } from '@/stores/store'

export default {
    name: 'AboutComponent',
    components: {
       
       
    },
    data(){
        return {
            iconoSVG: `
            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" class="mt-2">
                <g clip-path="url(#clip0_4_16)">
                    <path d="M16.2794 7.62312C15.1369 7.62312 14.5019 8.47 14.3687 9.38812H18.2106C18.1062 8.5125 17.4875 7.62625 16.28 7.62625L16.2794 7.62312ZM14.3975 10.6419C14.5931 11.605 15.3906 12.2819 16.5075 12.2819C17.1094 12.2819 17.9819 12.0575 18.4925 11.52L19.4725 12.6469C18.5875 13.5712 17.2625 13.835 16.3575 13.835C14.1569 13.835 12.4419 12.2456 12.4419 9.99312C12.4419 7.88375 14.02 6.14562 16.25 6.14562C18.405 6.14562 20 7.79562 20 9.98062V10.6181H14.3975V10.6419ZM8.99062 13.8319V9.08875C8.99062 8.27875 8.62875 7.80937 7.87375 7.80937C7.19687 7.80937 6.74812 8.2975 6.44437 8.64937V13.8475H4.485V9.09812C4.485 8.28375 4.14 7.8225 3.3875 7.8225C2.71062 7.8225 2.24187 8.31062 1.95562 8.6625V13.8606H-0.00125122V6.25625H1.95875V7.21312C2.29062 6.82875 3.04187 6.165 4.21437 6.165C5.25625 6.165 5.96187 6.60187 6.2775 7.49C6.71687 6.85562 7.5275 6.165 8.7025 6.165C10.1219 6.165 10.9456 7.005 10.9456 8.6325V13.835H8.98562L8.98875 13.8281L8.99062 13.8319Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_4_16">
                        <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            `,
            heySVGAux : heySVG,
            mensajesUsuario : mensajesStore().mensajes,
            mensaje : '',
        }
    },
    methods : {
        enviarMensaje(){
            if(this.mensaje !== ''){
                this.mensajesUsuario.push(this.mensaje);
                this.mensaje = '';
            }
            this.$nextTick(() => {
                    this.scrollToTop();
                });
            
        },
        scrollToTop() {
            const chat = document.querySelector('.messages-wrapper');
            chat.scrollTop = chat.scrollHeight;
        }
    },
    mounted () {
        //this.scrollToTop();
    }
}
</script>

<style scoped>
.chat {
    overflow-y: scroll;
    overflow-x: hidden; 
    scroll-behavior: smooth;
}

.custom-outline:focus-within {
    outline: 2px solid #b359f7;
}

.messages-wrapper {
    flex: 1; 
}

*::-webkit-scrollbar {
    display: none;
}

.mockup-code{
    transition: all 0.3s ease;
}

.mockup-code:hover{
   filter: drop-shadow(0 0 1.5em #b32df7);
}


 

</style>
