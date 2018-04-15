<template>
    <div>
        <div class="main-content">
            <APPHeader></APPHeader>
            <div class="faculty-content">
                <el-row>
                    <el-col :span="4"><div class="grid-content bg-purple-light">
                        <br/>
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">
                        <div v-if="person.avatar" class="avatar">
                            <img :src=imgroot+person.avatar>
                        </div>
                       <div v-else class="avatar">
                        <img :src=nophoto>
                       </div>
                        <br/>
                        <div class="name">
                            Name：{{person.name}}
                        </div>
                        <br/>
                        <div class="email">
                            Email: {{person.email}}
                        </div>

                    </div></el-col>
                    <el-col :span="10"><div class="grid-content bg-purple-light">
                        <!--<div class="position"> POSITIONS：</div>-->
                        <!--<div class="position_detail">-->
                            <!--{{person.position}}-->
                        <!--</div>-->
                        <!--<br/>-->
                        <!--<div class="reward">BRIEF: </div>-->
                        <!--<br/>-->
                        <p class="brief" v-html="person.brief"></p>
                    </div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light">

                    </div></el-col>


                </el-row>
            </div>
        </div>
    </div>

</template>


<script>
    import APPHeader from './public/APPHeader.vue';
    import Foot      from './public/Foot.vue'
    export default {
        data() {
            return {
                openeds: ['1'],
                uniqueOpened: false,
                imgroot: "./static/",
                nophoto :"./static/nophoto.jpeg",
                person:{}
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
            APPHeader,
            Foot
        },
        created(){
            this.$http.get(process.env.API_HOST+'jcgd/faculty?id='+this.$route.params.id).then((success) => {
                this.person = success.body.returnData.list[0];
                console.log(this.person)
            }, (error) => {
            });
        }
    }
</script>

<style >
    #app {
        text-align: center;
        width: 100%;
    }
    .main-content{
        padding-bottom: 60px; /*重要！给footer预留的空间*/
        text-align: left;
    }
    .block{
        text-align: right;
    }
    .faculty-content{
        padding-top: 20px;
    }
    .avatar img{
        width: 200px;
        height: 220px;
    }
    .grid-content{
        color: black;
    }
    .reward{

    }
    .position{
        margin: 0;
        padding: 0 0 .35em 0;
        line-height: 1.75em;
        font-weight: 100;
    }
    .position_detail{
        margin: 0;
        padding: 0 0 .35em 0;
        line-height: 1.75em;
        font-weight: 100;
        font-style: normal;
        font-family: 'Gotham SSm A','Gotham SSm B','Helvetica Neue',Helvetica,Arial,sans-serif;
        color: #414041;
        font-size: .75rem;
        letter-spacing: .025em;
    }
    .brief{
        margin: 0;
        padding: 0 0 .35em 0;
        line-height: 1.75em;
        font-weight: 100;
        font-style: normal;
        font-family: 'Gotham SSm A','Gotham SSm B','Helvetica Neue',Helvetica,Arial,sans-serif;
        color: #414041;
        font-size: .75rem;
        letter-spacing: .025em;
    }

</style>
