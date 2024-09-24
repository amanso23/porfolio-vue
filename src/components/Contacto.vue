<template>
    <section class="m-7 md:m-6 lg:m-[5em]">
      
      
      <!--
      <div class="my-6 mx-auto max-w-4xl rounded-md font-sans">
        <div class="pl-9 pt-3">
          <h1 class="text-3xl md:text-4xl font-extrabold">let's talk</h1>
          <p class="text-sm md:text-xl font-semibold mt-3">Para cualquier duda o proyecto puedes contactarme a través de mi <span class="text-[#38bdf8] font-bold"><a id="correo" href="#seccionCorreo">correo electrónico</a></span> o mis <span class="text-[#38bdf8] font-bold"><a id="social" href="#seccionSocial">redes sociales</a></span>.</p>
          <div class="mt-12">
            <h2 class="text-lg font-extrabold" id="seccionCorreo">Correo Electrónico</h2>
            <ul class="mt-3">
              <li class="flex items-center">
                <div class="size-11 rounded-full flex items-center justify-center shrink-0">
                  <svg  class="size-10" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
                </div>
                <a href="mailto:adrianmanso80@gmail.com" class="text-sm ml-3">
                  <small class="block">Correo</small>
                  <strong>adrianmanso80@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12">
            <h2 class="text-lg font-extrabold" id="seccionSocial">Redes Sociales</h2>
            <ul class="flex mt-3">
              <li class="rounded-full flex items-center justify-center shrink-0">
                <a href="https://facebook.com" class="github transition-colors duration-300 hover:text-[#38bdf8]" @click="animateEmail">
                  <svg  class="size-10" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                </a>
              </li>
              <li class="rounded-full flex items-center justify-center shrink-0" @click="animateSocials">
                <a href="https://twitter.com" class="linkedin transition-colors duration-300 hover:text-[#38bdf8]">
                  <svg class="size-10" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    -->
     
    </section>
    
    


   
    
  </template>
  
  

<script>
   

    import contactoSVG from '@/assets/contacto.svg';

    export default {
        name: 'AboutComponent',
        components: {
          
        },
        data(){
            return {
                iconoSVG: `
                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" slot="icono" class="mt-3">
                    <path d="M19 0H4C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2V5H0V7H2V9H0V11H2V13H0V15H2V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0ZM11 2.999C12.648 2.999 14 4.35 14 5.999C13.9971 6.79385 13.6801 7.55533 13.1182 8.11747C12.5562 8.67962 11.7948 8.99684 11 9C9.353 9 8 7.647 8 5.999C8 4.35 9.353 2.999 11 2.999ZM17 16H5V15.25C5 13.031 7.705 10.75 11 10.75C14.295 10.75 17 13.031 17 15.25V16Z" fill="white"/>
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
            },
            
        },
        beforeUnmount() {
            this.restoreFavicon();
        },
         mounted () {
            /*document.getElementById('seccionCorreo').addEventListener('click', () => {
                this.classList.add('color');
                setTimeout(() => {
                    this.classList.remove('color');
                }, 1000);
            });*/
            this.changeFavicon(contactoSVG); 
        }
    }
</script>


<style scoped>

   



</style>