<template>
    <a :href="link" :class="[backgroundColor, 'flex', 'opacity-100', 'transition-opacity', 'duration-200','hover:opacity-70', 'p-1', 'lg:p-2', 'justify-center', 'items-center', 'gap-x-1', 'rounded-full', 'text-[0.9rem]', 'text-white']" class="relative hover:arrow-hover">
        <img :src="icon" class="size-5 md:size-6 lg:size-7"/>
        <p class="lg:flex hidden underline">{{typeButton}}</p>
        <img :src="require('@/assets/icons/arrow-top-right.svg')" class="arrow lg:flex hidden"/>
    
    </a>
</template>

<script>

    export default{
        props : {
            link : {
                type : String,
                required : true
            },
            icon : {
                type : String,
                required : true
            },
            backgroundColor : {
                type : String,
                required : true

            },
            typeButton : {
                type : String,
                required : true
            }
        }
    }


</script>

<style scoped>


.arrow {
  transition: transform 0.3s ease; 
}

.hover\:arrow-hover:hover .arrow {
  transform: translateY(-2px);
}
    


</style>





