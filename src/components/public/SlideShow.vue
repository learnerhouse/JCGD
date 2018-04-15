<template>
<div>
    <div class="block">
        <el-carousel height="450px">
            <el-carousel-item v-for="item in indexdata" :key = "item.pic">
                <img :src="item.pic">
            </el-carousel-item>
        </el-carousel>
        <!--<div style="float:left; width:100px;height:100%; z-index:10;line-height:500px;background-color:rgba(0, 0, 0, 0.5);opacity:1;">dfaaf-->
        <!--</div>-->
    </div>
</div>

</template>


<script>
    export default{
        created() {
            this.$http.get(process.env.API_HOST+'jcgd/index').then((success) => {
                this.tranform = false;
                this.indexdata = success.body.returnData.list;
                console.log(success)
            }, (error) => {
                console.log(error)
            })

        },
        data() {
            return {
                indexdata: [],
            }
        }
    }
</script>

<style>
    @import url("//unpkg.com/element-ui@2.2.2/lib/theme-chalk/index.css");

    .el-carousel__item img {
        width: 100%;
        height: 450px;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

</style>
