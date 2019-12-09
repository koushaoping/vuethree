<template>
  
    <div class="all">
     
        <div class="box1">
        <div class="text">
          综合排序
        </div>
          
        </div>
        <div class="top">
       
              <div class="list">
  <el-row>
  <el-col :span="8" v-for="(yw, index) in all" :key="index" >
    <el-card :body-style="{ padding: '4px' }" >
      <div style="padding: 14px;">
        <div class="one">
<div class="kemu">{{yw.course_subject}}</div>
<div class="nengrong">{{yw.course_name}}</div>
        </div>
       
        <div class="bottom clearfix">
          课程时间：{{yw.course_time}}
        </div>
        <div>
           <img :src="yw.teacher.teacher_img" class="">
        </div>
        <div>姓名：{{yw.teacher.teacher_name}}</div>
        <div>毕业院校：{{yw.teacher.univercity}}</div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
          
        </div>
       
      </div>
   
</template>
<script>
export default {
     data() {
      return {
         currentDate:'2019-11-19',
        activeName: 'first',
        all:[],
        yw:[],

      };
    },
  created(){
    // console.log(this.$route.params)
    this.grade=this.$route.params.info;
    this.subject=this.$route.params.km;
    console.log(this.grade)
    console.log(this.subject)
    this.$http.get('/bjq/Tbk/selAllTbk',{
         params:{
           course_grade:this.subject,
           course_subject:this.grade
         }
      }).then(res=>{
        console.log(res);
        this.all=res.data.data;
      })
  },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>
<style>
.all {
  width: 100%;
  background-color: rgb(216, 216, 216);
}
.top {
  width: 90%;
  margin: auto;
  
}
.el-card{
  width: 90%;
  margin-top: 10px;
}
.one{
  width: 90%;
  height: 50px;
  background-color: white;

}
.kemu{
  width:10%;
  float: left;
  margin-left: 10px;
  border: 1px solid red;
  color: red;
}
.nengrong{
  width: 85%;
  float: right;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 1000px;
  color: black;
}
.box1 {
  width: 90%;
  height: 30px;
  text-align: left;
  margin-top: 25px;
  margin: auto;
  border-bottom: 2px solid black;
}
.text{
  width: 10%;
  height: 30px;
  float: left;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 18px;
}
.box2{
    width: 3%;
    height: 40px;
    background-color: rgb(228, 173, 150);
    float: left;
   
    line-height: 40px;
    text-align: left;
}
.el-tabs__nav-scroll{
    width: 100%;
    height: 40px;
   
    background-color: rgb(228, 173, 150);
    float: right;
}
.el-tabs--card>.el-tabs__header{
    border-bottom: none;
}
.el-tabs--card>.el-tabs__header .el-tabs__item{
    border-left:none; 
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
    border: none;
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom:none ; 
}
.el-card__body{
    margin-top:20px; 
}
.el-card__body:hover{

transform: translateY(-10px);
}
</style>