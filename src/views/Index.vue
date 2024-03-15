<template>
    <div class="flex flex-col h-screen ">
      <div class="flex flex-col-reverse lg:flex-row items-center justify-between h-full">
        <main class="w-5/6 md:w-2/3 h-full ">
          <Contenido :seccionSeleccionada="seccionSeleccionada" />
        </main>
        <Nav @seleccionarSeccion="seleccionarSeccion"/>
        
      </div>
      <Footer />
      
    </div>
  </template>
  
  <script>
  import Footer from '@/components/Footer.vue';
  import Contenido from '@/components/Contenido.vue';
  import Nav from '@/components/Nav.vue';
  
  export default{
    name: 'IndexView',
    components: {
      Footer,
      Contenido,
      Nav
    },
    data() {
      return {
        seccionSeleccionada: 'Sobre mi',
        isDarkMode: true
      }
    },
    methods: {
      seleccionarSeccion(seccion) {
        this.seccionSeleccionada = seccion;
      },
      
    }
  }
  </script>
  
  <style>
  :root {
    color-scheme: light dark;
  }
  
  html {
    font-family: system-ui, sans-serif;
    height: 100vh;
  }

  body {
    background: radial-gradient(circle, rgb(18, 29, 32), rgb(0, 0, 0));
    color: #ffffff;
  }
  
  
  
  
  
  </style>
  
