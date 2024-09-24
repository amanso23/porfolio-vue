<template>
    <div class="mockup-browser">
        <div class="mockup-browser-toolbar" >
            <div class="input fake-search scale-90 md:scale-100" @click="copyToPortapapeles">https://amanso23.vercel.app</div>
        </div>
    </div>
</template>


<script>
    export default{
        name : 'HeaderComponent',
        methods : {
            shadowActive(){
                const toolbar = document.querySelector('.fake-search');
                toolbar.classList.contains('shadowInactive') ? toolbar.classList.remove('shadowInactive') : null;
                toolbar.classList.add('shadowActive');
            },
            shadowInactive(){
                const toolbar = document.querySelector('.fake-search');
                toolbar.classList.add('shadowInactive');
            },
            async copyToPortapapeles() {
                const input = document.querySelector('.fake-search');
                try {
                    await navigator.clipboard.writeText(input.textContent);
                } catch (err) {
                    console.error('Error al copiar al portapapeles: ', err);
                }
            }
           
        }
    }

</script>

<style scoped>

    .fake-search{
        transition: all 0.5s;
    }

    .fake-search:hover {
        box-shadow: 0 0 10px #c757f7;
    }


</style>