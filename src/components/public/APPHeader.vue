<template>
    <div>
        <div class="JCGD">
            <div class="jcgd_text">
                BCM-FDU JOINT CENTER OF GENETICS AND DEVELOPMENT
            </div>
        </div>
        <div class="menue">
            <el-row type="flex" class="row-bg" align="middle" style="height: 80px">
                <el-col :span="12">
                  <div class="grid-content bg-purple logo_img">
                  <!--   <icon name="logo" scale="200"></icon> -->
                    <img src="../../../static/logo.png"/>
                  </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content bg-purple-light">
                        <router-link to="/"><a>HOME</a></router-link>
                        <div style="float:right;width: 1px;height: 25px; background: white;"></div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content bg-purple-light">
                        <router-link to="/faculty"><a>FACULTY</a></router-link>
                        <div style="float:right;width: 1px;height: 25px; background: white;"></div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content bg-purple-light">
                        <router-link to="/news"><a>NEWS</a></router-link>
                        <div style="float:right;width: 1px;height: 25px; background: white;"></div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content bg-purple-light">
                        <router-link to="/about"><a>ABOUT</a></router-link>
                    </div>
                </el-col>
            </el-row>
            <!--<div class="home"> HOME</div>-->
            <!--<div class="about"> ABOUT</div>-->
            <!--<div class="what">WHAT</div>-->
            <!--<div class="exchange">EXCHANGE</div>-->
        </div>
    </div>

</template>


<script>
    import Icon from 'vue-svg-icon/Icon.vue'
    export default{
         components: {
            Icon
        }
    }
</script>

<style>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        color: white;
        border-radius: 4px;
    }
    .logo_img{
        text-align: left;
        vertical-align: middle;
    }
    .logo_img img{
        padding-left: 40px;
        width: 300px;
        height: 50px;
    }
    .grid-content {
        font-size: 20px;
        font-family: Times ,"Times New Roman",serif;
    }
    .grid-content a{
        color: white;
        text-decoration: none;
    }
    .jcgd_text{
        font-size: 10px;
        text-align: left;
        color: rgb(242, 242, 242);
        margin-left: 20px;
        padding-bottom: 6px;
        padding-top: 6px;
    }
    .JCGD {
        font-family: Helvetica, sans-serif;
        text-align: center;
        background-color: rgb(128,128,145);
        /*margin-top: 25px;*/
    }
    .menue {
        font-family: Helvetica, sans-serif;
        text-align: center;
        background-color: rgb(45,47,104);
        height: 80px;
    }

</style>
