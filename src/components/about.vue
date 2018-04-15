<template>
    <div>
        <div class="main-content">
            <APPHeader></APPHeader>
            <div class="faculty-content">
                <el-row :gutter="18">
                    <el-col :span="4"><div class="grid-content bg-purple">
                        <div>
                            <el-menu
                                    default-active="1"
                                    class="el-menu-vertical-demo"
                                    @open="handleOpen"
                                    @close="handleClose"
                                    :default-openeds="openeds"
                            >
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>ABOUT</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="1-1">FUDAN</el-menu-item>
                                        <el-menu-item index="1-2">BCM</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </div>

                    </div></el-col>
                    <el-col :span="1"><div class="grid-content bg-purple-light"><br/></div></el-col>
                    <el-col :span="17"><div class="grid-content bg-purple-light">

                      <div class="textcontent">
                        to be continued...
                      </div>
                        <!--<div>-->
                            <!--<el-table-->
                                    <!--:data="tableData"-->
                                    <!--style="width: 100%"-->
                                    <!--:default-sort = "{prop: 'date', order: 'descending'}"-->
                            <!--&gt;-->
                                <!--<el-table-column-->
                                        <!--prop="name"-->
                                        <!--label="NAME"-->
                                        <!--sortable-->
                                        <!--width="180">-->
                                <!--</el-table-column>-->
                                <!--<el-table-column-->
                                        <!--prop="address"-->
                                        <!--label="RESEARCH AREA"-->
                                        <!--:formatter="formatter">-->
                                <!--</el-table-column>-->
                            <!--</el-table>-->

                        <!--</div>-->

                        <!--分页部分-->
                        <!--<div>-->
                            <!--<div class="block">-->
                                <!--<el-pagination-->
                                        <!--layout="prev, pager, next"-->
                                        <!--:total="50">-->
                                <!--</el-pagination>-->
                            <!--</div>-->
                        <!--</div>-->

                    </div></el-col>
                </el-row>
            </div>

            <Foot></Foot>
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
//                tableData: [{
//                    name: 'name',
//                    address: 'address'
//                }]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            formatter(row, column) {
                return row.address;
            }
        },
        components: {
            APPHeader,
            Foot
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
    .grid-content{
      color: black;
    }
    .faculty-content{
        padding-top: 20px;
    }
    .textcontent{
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
