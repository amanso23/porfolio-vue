<template>
    <section class="flex items-center justify-center h-full">
        <div class="flex justify-center items-center h-full">
            <div class="grid xl:pt-10 max-w-sm grid-cols-4 gap-4 px-10 md:max-w-none md:gap-10 xl:px-6  [&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1rem/2)] md:[&>*:nth-child(2n-1)]:-translate-y-[calc(50%+1.5rem/2)] ">
                <div class="tooltip" data-tip="html"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1"  :src="htmlSVGAux"></div>
                <div class="tooltip tooltip-right" data-tip="css"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1"  :src="ccsSVGAux"></div>
                <div class="tooltip" data-tip="spring"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1"  :src="springBootSVG"></div>
                <div class="tooltip tooltip-left" data-tip="js"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1" :src="jsSVGAux"></div>
                <div class="tooltip tooltip-left" data-tip="tailwindcss"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1"  :src="tailwindSVGAux"></div>
                <div class="tooltip tooltip-left" data-tip="docker"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1"  :src="dockerSVGAux"></div>
                <div class="tooltip" data-tip="react"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1" :src="reactSVG"></div>
                <div class="tooltip tooltip-right" data-tip="java"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1" :src="javaSVGAux"></div>
                <div class="tooltip tooltip-bottom" data-tip="laravel"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1"  :src="laravelSVGAux"></div>
                <div class="tooltip" data-tip="kafka"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1" :src="apacheKafkaSVG"></div>
                <div class="tooltip tooltip-left" data-tip="mysql"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1"  :src="mysqlSVGAux"></div>
                <div class="tooltip tooltip-bottom" data-tip="php"><img loading="lazy" class="icon size-24 aspect-square w-full will-change-auto motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:![scale:1]" style="opacity:1;filter: brightness(1)blur(0px);scale:1"  :src="phpSVGAux"></div>

            </div>
        </div>
    </section>
</template>

<script>
    import skillsSVG from '@/assets/skills.svg';
    import springBootSVG from '@/assets/icons/springBootSVG.svg';
    import jsSVG from '@/assets/icons/jsSVG.svg';
    import htmlSVG from '@/assets/icons/htmlSVG.svg';
    import cssSVG from '@/assets/icons/cssSVG.svg';
    import tailwindSVG from '@/assets/icons/tailwindSVG.svg';
    import javaSVG from '@/assets/icons/javaSVG.svg';
    import laravelSVG from '@/assets/icons/laravelSVG.svg';
    import mysqlSVG from '@/assets/icons/mysqlSVG.svg';
    import phpSVG from '@/assets/icons/phpSVG.svg';
    import dockerSVG from '@/assets/icons/dockerSVG.svg';
    import reactSVG from '@/assets/icons/reactSVG.svg';
    import apacheKafkaSVG from '@/assets/icons/apacheKafkaSVG.svg';

    export default {
        name: 'AboutComponent',
        components: {
        
        },
        data(){
            return {
                iconoSVG: `
                <svg width="30" height="30" viewBox="0 0 20 20" fill="none" slot="icono" class="mt-2">
            <path d="M5.45804 6.92217L2.479 10.0001L5.45804 13.0781C5.55684 13.1785 5.63863 13.3021 5.6987 13.4419C5.75877 13.5817 5.79592 13.7349 5.80802 13.8925C5.82012 14.0502 5.80693 14.2093 5.7692 14.3606C5.73147 14.512 5.66996 14.6525 5.5882 14.7742C5.50645 14.8959 5.40607 14.9964 5.29286 15.0697C5.17965 15.1431 5.05585 15.1879 4.9286 15.2017C4.80134 15.2154 4.67315 15.1978 4.55142 15.1498C4.42968 15.1018 4.31682 15.0244 4.21933 14.9221L0.34834 10.9221C0.239317 10.8095 0.151599 10.6685 0.0914014 10.5092C0.031204 10.3499 0 10.1761 0 10.0001C0 9.82418 0.031204 9.65038 0.0914014 9.49105C0.151599 9.33172 0.239317 9.19076 0.34834 9.07814L4.21933 5.07819C4.41681 4.87752 4.67024 4.78174 4.92441 4.81173C5.17859 4.84172 5.41291 4.99505 5.57632 5.23831C5.73973 5.48156 5.81899 5.79504 5.79684 6.11044C5.77468 6.42584 5.65291 6.7176 5.45804 6.92217ZM19.6517 9.07814L15.7807 5.07819C15.6832 4.97585 15.5703 4.89845 15.4486 4.85046C15.3268 4.80247 15.1987 4.78484 15.0714 4.79858C14.9441 4.81233 14.8203 4.85717 14.7071 4.93054C14.5939 5.0039 14.4936 5.10433 14.4118 5.22603C14.33 5.34773 14.2685 5.4883 14.2308 5.63962C14.1931 5.79095 14.1799 5.95003 14.192 6.10771C14.2041 6.26539 14.2412 6.41854 14.3013 6.55833C14.3614 6.69811 14.4432 6.82177 14.542 6.92217L17.521 10.0001L14.542 13.0781C14.4432 13.1785 14.3614 13.3021 14.3013 13.4419C14.2412 13.5817 14.2041 13.7349 14.192 13.8925C14.1799 14.0502 14.1931 14.2093 14.2308 14.3606C14.2685 14.512 14.33 14.6525 14.4118 14.7742C14.4936 14.8959 14.5939 14.9964 14.7071 15.0697C14.8203 15.1431 14.9441 15.1879 15.0714 15.2017C15.1987 15.2154 15.3268 15.1978 15.4486 15.1498C15.5703 15.1018 15.6832 15.0244 15.7807 14.9221L19.6517 10.9221C19.7607 10.8095 19.8484 10.6685 19.9086 10.5092C19.9688 10.3499 20 10.1761 20 10.0001C20 9.82418 19.9688 9.65038 19.9086 9.49105C19.8484 9.33172 19.7607 9.19076 19.6517 9.07814ZM12.9113 0.0722576C12.7918 0.0183889 12.665 -0.00577009 12.538 0.00116073C12.411 0.00809155 12.2864 0.0459765 12.1712 0.112651C12.056 0.179326 11.9525 0.273484 11.8667 0.389748C11.7809 0.506012 11.7144 0.642103 11.671 0.790249L6.50966 18.39C6.42217 18.6891 6.43402 19.0189 6.5426 19.3071C6.65118 19.5953 6.8476 19.8183 7.0887 19.927C7.19454 19.9755 7.30651 20.0002 7.41934 20C7.61803 20 7.81192 19.9243 7.97467 19.7829C8.13742 19.6416 8.26114 19.4416 8.32902 19.21L13.4903 1.61024C13.5338 1.46211 13.5533 1.30482 13.5477 1.14736C13.5421 0.989891 13.5115 0.835333 13.4578 0.692511C13.404 0.54969 13.3281 0.421403 13.2343 0.314979C13.1405 0.208554 13.0308 0.126076 12.9113 0.0722576Z" fill="white"/>
        </svg>
            `,
            springBootSVG: springBootSVG,
            jsSVGAux: jsSVG,
            htmlSVGAux: htmlSVG,
            ccsSVGAux: cssSVG,
            tailwindSVGAux: tailwindSVG,
            javaSVGAux: javaSVG,
            laravelSVGAux: laravelSVG,
            mysqlSVGAux: mysqlSVG,
            phpSVGAux: phpSVG,
            dockerSVGAux: dockerSVG,
            reactSVG: reactSVG,
            apacheKafkaSVG: apacheKafkaSVG
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
            this.changeFavicon(skillsSVG); 
        }
    }
</script>

<style scoped>

    .icon{
        transition: all;
        
    }

    .icon:hover{
        filter: drop-shadow(0 0 1rem #c757f7) !important;
        animation: shake 0.2s ease-in-out;
        
    }

    @keyframes shake {
        0% { transform: rotate(0deg); }
        10% { transform: rotate(10deg); }
        20% { transform: rotate(-10deg); }
        30% { transform: rotate(10deg); }
        40% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
        60% { transform: rotate(-10deg); }
        70% { transform: rotate(10deg); }
        80% { transform: rotate(-10deg); }
        90% { transform: rotate(10deg); }
        100% { transform: rotate(0deg); }
    }

</style>
