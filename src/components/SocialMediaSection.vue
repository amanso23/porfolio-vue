<template>
    <section class="flex gap-x-2 lg:ml-8 mt-0 lg:mt-4">
        <SocialButton :link="'https://www.youtube.com/'" :icon="require('@/assets/icons/linkedin.svg')" :backgroundColor="'bg-[#0076b2]'" typeButton="Linkedin"/>
        <SocialButton :link="'https://www.youtube.com/'" :icon="require('@/assets/icons/github.svg')" :backgroundColor="'bg-gradient-to-r from-gradientColor1 via-gradientColor2 via-gradientColor3 to-gradientColor4'" typeButton="GitHub"/>
    </section>
</template>

<script>

    import SocialButton from './SocialButton.vue';

    export default{
        name : 'SocialMediaSection',
        components : {
            SocialButton
        }
    }
   
</script>

<style scoped>






</style>

