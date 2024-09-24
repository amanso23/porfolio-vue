<template>
    <nav class="flex justify-center items-center w-[95%] lg:w-2/5 m-4 lg:m-0 text-nowrap">
      <ul class="flex lg:flex-col gap-x-1 md:gap-x-4 font-extrabold items-start text-[0.9em] md:text-xl lg:text-[4.4em]">
        <li 
          class="transition-all duration-200" 
          @click="seleccionarSeccion('Sobre mi')"
          :class="{ selected: seccionSeleccionada === 'Sobre mi' }">
          {{ seccionSeleccionada === 'Sobre mi' ? '#sobre mí' : 'sobre mí' }}
        </li>
        <li 
          class="transition-all duration-200" 
          @click="seleccionarSeccion('Habilidades')"
          :class="{ selected: seccionSeleccionada === 'Habilidades' }">
          {{ seccionSeleccionada === 'Habilidades' ? '#habilidades' : 'habilidades' }}
        </li>
        <li 
          class="transition-all duration-200" 
          @click="seleccionarSeccion('Proyectos')"
          :class="{ selected: seccionSeleccionada === 'Proyectos' }">
          {{ seccionSeleccionada === 'Proyectos' ? '#proyectos' : 'proyectos' }}
        </li>
        <p class="text-[1rem] ml-8 mt-3 font-normal text-[#6c747e] hidden lg:block">📲 Contáctame a través de mis <u class="text-[#00a96e]">redes sociales</u>.</p>
        <SocialMediaSection />
      </ul>
    </nav>
  </template>
  
  <script>
  import SocialMediaSection from "@/components/SocialMediaSection.vue";
  
  export default {
    name: 'NavComponent',
    data() {
      return {
        seccionSeleccionada: 'Sobre mi'
      };
    },
    methods: {
      seleccionarSeccion(seccion) {
        this.seccionSeleccionada = seccion; 
        this.$emit('seleccionarSeccion', seccion);
      }
    },
    components: {
      SocialMediaSection
    }
  }
  </script>
  


<style scoped>



    li{
        cursor: pointer;
        padding: 0.5em 0.5em;
        margin-top: -0.5em;
    }
    

    nav li.selected{
        color: #f9575f;
        filter : drop-shadow(1em 0 2em #b32df7);
    }

</style>