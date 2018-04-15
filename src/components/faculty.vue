<template>
    <div>
        <div class="main-content">
            <APPHeader></APPHeader>
            <div class="faculty-content">
                <el-row >
                    <el-col :span="4"><div class="grid-content bg-purple">
                        <div>
                            <el-menu
                                    default-active="1"
                                    class="el-menu-vertical-demo"
                                    @open="handleOpen"
                                    @close="handleClose"
                                    @select="handleSelect"
                                    :default-openeds="openeds"
                            >

                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span>RESEARCH</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item-group v-for="item in researchList" :key =item.value>
                                        <el-menu-item :index="item.value">{{item.text}}</el-menu-item>
                                    </el-menu-item-group>
                                </el-menu-item-group>
                            </el-submenu>
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>NAME</span>
                                    </template>
                                        <el-menu-item-group index="A-G">
                                            <template slot="title">
                                              <el-button type="text" style="color: #8c939d"
                                                         v-for="item in A_G" :key = item v-on:click="clickButton(item)">
                                                {{item}}
                                              </el-button>
                                            </template>
                                        </el-menu-item-group>
                                    <el-menu-item-group index="H-N">
                                      <template slot="title">
                                        <el-button type="text" style="color: #8c939d"
                                                   v-for="item in H_N" :key = item v-on:click="clickButton(item)">
                                          {{item}}
                                        </el-button>
                                      </template>
                                    </el-menu-item-group>
                                    <el-menu-item-group index="O-U">
                                      <template slot="title">
                                        <el-button type="text" style="color: #8c939d"
                                                   v-for="item in O_U" :key = item v-on:click="clickButton(item)">
                                          {{item}}
                                        </el-button>
                                      </template>
                                    </el-menu-item-group>
                                    <el-menu-item-group index="V-Z">
                                      <template slot="title">
                                        <el-button type="text" style="color: #8c939d"
                                                   v-for="item in V_Z" :key = item v-on:click="clickButton(item)">
                                          {{item}}
                                        </el-button>
                                      </template>
                                        <!--<template slot="title">V-Z</template>-->
                                        <!--<el-menu-item v-for="item in V_Z" :key = item :index="item">-->
                                            <!--{{item}}-->
                                        <!--</el-menu-item>-->
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </div>

                    </div></el-col>
                    <el-col :span="1"><div class="grid-content bg-purple-light"><br/></div></el-col>
                    <el-col :span="15"><div class="grid-content bg-purple-light">
                        <div>
                            <el-table ref="table"
                                    :data="td"
                                    style="width: 100%"
                                    @cell-click = "openDetails"
                            >
                                <el-table-column
                                        prop="name"
                                        label="Name"
                                        :filters="filter"
                                        :filter-method="filterHandler"
                                        sortable
                                        align = "center"
                                >
                                    <template slot-scope="scope">
                                        <!--<img :src="rootPath+scope.row.avatar" height="40px"/>-->
                                        <span style="margin-left: 10px">{{scope.row.name}}</span>
                                    </template>
                                </el-table-column>

                                <el-table-column
                                        prop="research"
                                        label="Research Area"
                                        align = "center"
                                        :formatter="formatter"
                                >
                                        <!--:formatter="formatter"-->
                                </el-table-column>
                                <el-table-column
                                        prop="email"
                                        label="Email"
                                        align = "center"
                                >
                                  <!--<template slot-scope="scope">-->
                                    <!--{{scope.row.email}}-->
                                  <!--</template>-->
                                </el-table-column>

                            </el-table>

                        </div>

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
                    <el-col :span="4"><div class="grid-content bg-purple-light">

                    </div></el-col>
                </el-row>
            </div>

            <!--<Foot></Foot>-->
        </div>
    </div>

</template>


<script>
    import APPHeader from './public/APPHeader.vue';
    import Foot      from './public/Foot.vue'
    export default {
        data() {
            return {
                openeds: ['2'],
                uniqueOpened: false,
                rootPath:"../../static/",
                td : [],
                alpha:["A","B","C","D","E","F","G","H","I","J","K"
                    ,"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                A_G :["A","B","C","D","E","F","G"],
                H_N :["H","I","J","K","L","M","N"],
                O_U :["O","P","Q","R","S","T","U"],
                V_Z :["V","W","X","Y","Z"],
                researchList:[
                  {text: 'Medical Genetics', value: 'medical_genetics'}
                  ,{text: 'Cancer Genomics', value: 'cancer_genomics'}
                  ,{text: 'Neuroscience', value: 'neuroscience'}
                  ,{text: 'Genomics Basic', value: 'genomics_basic'}],
                filter : [{text: 'A', value: 'A'}, {text: 'B', value: 'B'},
                    {text: 'C', value: 'C'}, {text: 'D', value: 'D'},{text: 'E', value: 'E'}, {text: 'F', value: 'F'},
                    {text: 'G', value: 'G'}, {text: 'H', value: 'H'},{text: 'I', value: 'I'}, {text: 'J', value: 'J'},
                    {text: 'K', value: 'K'}, {text: 'L', value: 'L'},{text: 'M', value: 'M'}, {text: 'N', value: 'N'},
                    {text: 'O', value: 'O'}, {text: 'P', value: 'P'},{text: 'Q', value: 'Q'}, {text: 'R', value: 'R'},
                    {text: 'S', value: 'S'}, {text: 'T', value: 'T'},{text: 'U', value: 'U'}, {text: 'V', value: 'V'},
                    {text: 'W', value: 'W'}, {text: 'X', value: 'X'},{text: 'Y', value: 'Y'}, {text: 'Z', value: 'Z'},],

                tableData: []
            }
        },
        methods: {
            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
//                console.log(key, keyPath);
            },
            handleSelect(index,indexPath){
                if (indexPath[0]==1){
                    this.updateByName(indexPath[2]);
                }
                if (indexPath[0]==2){
                    this.updateByResearch(indexPath[1]);
                }
            },
            clickButton(alpha){
              this.updateByName(alpha);
            },
            formatter(row, column) {

              var rs = "";

              if (row.research != "default"){
                rs = row.research;
              }else{
                if (row.medical_genetics != null){
                  rs = rs + "Medical Genetics";
                }
                if (row.cancer_genomics != null){
                  if (rs == "")
                    rs = rs + "Cancer Genomics";
                  else
                    rs = rs + "、Cancer Genomics";
                }
                if (row.neuroscience != null){
                  if (rs == "")
                    rs = rs + "neuroscience";
                  else
                    rs = rs + "、neuroscience";
                }
                if (row.genomics_basic != null){
                  if (rs == "")
                    rs = rs + "Genomics Basic";
                  else
                    rs = rs + "、Genomics Basic";
                }
                if (rs == ""){
                  rs = row.research;
                }
              }
                return rs;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property].indexOf(value)>=0;
            },
            openDetails(row,column) {
                if(row.avatar != ""){
                    this.$router.push({name:'detail',params:{id:row.id}});
                }
                else {
                  if (row.personal_page != null){
                    window.open(row.personal_page);
                  }
                  else{
                    window.open("https://www.bcm.edu/search?q="+row.name);
                  }
                }
            },
            updateByName(filter){
                this.$http.get(process.env.API_HOST+'jcgd/faculty?list=true&alpha='+filter).then((success) => {
                    this.tableData = success.body.returnData.list;
                    this.td = this.tableData;
                }, (error) => {
                });
            },
            updateByResearch(filter){
                var search = "&"+filter+"=Y"
                this.$http.get(process.env.API_HOST+'jcgd/faculty?list=true'+search).then((success) => {
                    this.tableData = success.body.returnData.list;
                    this.td = this.tableData;
                }, (error) => {
                });
            }
        },
        components: {
            APPHeader,
            Foot
        },
        created(){
//            this.$http.get(process.env.API_HOST+'jcgd/facultyResearch?list=true').then((success) => {
//                this.researchList = success.body.returnData.list;
//            }, (error) => {
//            });
          this.$http.get(process.env.API_HOST+'jcgd/faculty?list=true').then((success) => {
            this.tableData = success.body.returnData.list;
            this.td = this.tableData;
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
    .el-table-filter{
        height: 300px;
        overflow: auto;
    }

    .el-button span{
        color: black;
    }
</style>
