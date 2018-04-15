<template>
    <div>
        <div class="main-content">
            <APPHeader></APPHeader>

            <SlideShow></SlideShow>
            <Foot></Foot>
        </div>
    </div>
</template>

<script>
    import APPHeader from './public/APPHeader.vue';
    import SlideShow from './public/SlideShow.vue';
    import Foot      from './public/Foot.vue'
    export default {

         components: {
             APPHeader,
             SlideShow,
             Foot
         }
    }
</script>

<style>
    #app {
        text-align: center;
        width: 100%;
    }
    .main-content{
        padding-bottom: 60px; /*重要！给footer预留的空间*/
    }

</style>
