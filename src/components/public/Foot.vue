<template>
    <div>
        <div class="footer">foot1</div>
    </div>
</template>


<script>
    export default{

    }
</script>

<style>
    .footer{
        position: absolute;
        bottom: 0; /* 关键 */
        text-align: center;
        background-color: rgb(45,47,104);
        height: 60px;         /* footer的高度一定要是固定值*/
        width: 100%;
    }
</style>
