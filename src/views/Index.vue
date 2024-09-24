<template>
    <div class="flex flex-col h-screen">
      <Header />
      <div class="flex flex-col lg:flex-row items-center justify-between h-full">
        <Nav @seleccionarSeccion="seleccionarSeccion"/>
        <main class="w-5/6 md:w-2/3 h-full  flex items-center justify-center">
          <Contenido :seccionSeleccionada="seccionSeleccionada" />
        </main>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from '@/components/Footer.vue';
  import Contenido from '@/components/Contenido.vue';
  import Nav from '@/components/Nav.vue';
  import Header from '@/components/Header.vue';

  
  export default{
    name: 'IndexView',
    components: {
      Footer,
      Contenido,
      Nav,
      Header

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
    background: radial-gradient(circle, #122828, rgb(0, 0, 0));
    color: #a6adbb;
  }
  
  
  
  
  
  </style>
  
