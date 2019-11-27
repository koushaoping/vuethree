<template>
    <div>
        <div class="title">
            <div class="play">--  教师信息展示  --</div>
            </div>
            <div class="box1">
                <el-row>
        <el-col :span="3" v-for="(teacher,index) in allList" :key="index">
          <el-card >
            <img :src="teacher.teacher_img" class="image">
            <div style="padding: 10px;">
              <span>{{teacher.teacher_name}}</span>
              <div class="bottom clearfix">
                {{teacher.teachering_number}}
              </div>
              <div class="univercity">{{teacher.univercity}}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
            </div>
    </div>
</template>
<script>
export default {
   data(){
          return{
            allList:[],
            teacher:[]  
          }
   },
   mounted(){
       this.stor();
   },
   methods:{
          stor(){
              this.$http.post('/bjq/teacher/findTeacherInfo').then(res=>{
                  console.log(res)
                 this.allList=res.data.data
              })
          }
    }
}
</script>
<style>
 .title{
     width: 100%;
     height: 150px;
     background-color: white;
     /* position: fixed; */
 }  
 .play{
     width: 100%;
     height: 100px;
     background-color: red;
     text-align: center;
     font-size: 24px;
     line-height: 100px;
   
 } 
 .image{
     width: 90%;
 }
 .box1{
     width: 90%;
     margin: auto;
 }
 .el-card{
     width: 90%;
     height: 230px;
     margin-top: 15px;
 }
 .univercity{
     font-size: 14px;
 }
</style>