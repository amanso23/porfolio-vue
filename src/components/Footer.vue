<template>
    <footer class="flex justify-around items-center p-4">
        <div class="copyright">
            Adrián Manso © {{getActualYear()}}
        </div>
        <div class="tecnologias flex items-center gap-x-1">
            <svg class="size-5" width="1.4em" height="1.2em" viewBox="0 0 256 221"><path fill="#41b883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"/><title>Vue js</title><path fill="#41b883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"/><path fill="#35495e" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"/></svg>
            <svg  class="size-7" viewBox="0 0 128 128"><title>Tailwind</title><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"/></svg>
        </div>
    </footer>
</template>


<script>
    export default{
        name : 'FooterComponent',
        methods : {
            getActualYear(){
                return new Date().getFullYear();
            }
        }
    }

</script>