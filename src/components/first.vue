<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in item" :key="index">
        <img :src="item.url" class="lunbotu" alt="轮播图" />
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <div class="one">
        <div class="box1" >年级
          <span @click="showvalue">小升初</span>
          <span @click="showvalue">初升高</span>
        </div>
        <div class="box2">课程
          <span @click="show">全部</span>
         <span @click="show">语文</span>
         <span @click="show">数学</span>
         <span @click="show">英语</span>
        </div>
      </div>
    </div>
<div class="all">
<div class="tab">
    同步课
    <el-button class="coupons" type="text" @click="dialogVisible = true">优惠券</el-button>
    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</div>

<div class="list">
 <el-row>
        <el-col :span="8" v-for="(tbcourse,index) in allList" :key="index">
          <el-card >
            <img :src="tbcourse.tbk_tupian" class="image">
            <div style="padding: 10px;">
              <span>{{tbcourse.tbk_name}}</span>
              <div class="bottom clearfix">
                <h3> <font color="red">{{tbcourse.tbk_nianji}}</font> </h3>
                <!-- <el-button type="text" class="button" >操作按钮</el-button> -->
                 <!-- <el-button type="success" @click="btn(item.name)">操作按钮</el-button> -->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
  <div class="tab">
  素养课
</div>
<div class="list">
  <el-row>
  <el-col :span="8" v-for="(themecourse, index) in List" :key="index" >
    <el-card :body-style="{ padding: '4px' }" >
      <img :src="themecourse.course_detial" class="image">
      <div style="padding: 14px;">
        <span>{{themecourse.course_name}}</span>
        <div class="bottom clearfix">
          <span class="time">{{themecourse.course_date}}</span>
           <h3> <font color="red">{{themecourse.course_time}}</font> </h3>
         
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
  <div class="tab">
  专题课
</div>
<div class="list">
  <el-row>
  <el-col :span="8" v-for="( zhuanti, index) in All" :key="index" >
    <el-card :body-style="{ padding: '4px' }" >
      <img :src=" zhuanti.course_detial" class="image">
      <div style="padding: 4px;">
        <span>{{ zhuanti.course_name}}</span>
        <div class="bottom clearfix">
          <span class="time">{{ zhuanti.course_date}}</span>
           <h3> <font color="red">{{ zhuanti.course_time}}</font> </h3>
         
        </div>
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
      dialogVisible: false,
      item: [
        { url: require("../assets/banner1.jpg") },
        { url: require("../assets/banner2.png") },
        { url: require("../assets/banner3.jpg") },
        { url: require("../assets/banner4.jpg") }
      ],
        allList:[],
        List:[],
        All:[],
      tbcourse:[],
      themecourse:[],
      zhuanti:[],
      x:[],
      e:[],
     
    };
  },
  methods: {
       showvalue(event){
                var e = event.currentTarget.innerHTML;
                console.log(e)
            },
            show(ntp){
                var x = event.currentTarget.innerHTML;
                console.log(x)
            },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
  created() {
      // console.log(this.$route);
      // this.id=this.$route.query.nav;
     
       this.$http.get('/bjq/Tbk/selTbk',{
           params:{
            kemu: 'x',
            nianji: 'e'
        }
       }).then(res=>{
        console.log(res);
        this.allList=res.data.data;
        // this.tbcourse=res.data.data;
      }),
       this.$http.get('/api/suya').then(res=>{
        console.log(res);
        this.List=res.data.data;

      }),
       this.$http.get('/api/zhuant',{
         params:{
           course_grade:'小升初',
           course_subject:'语文'
         }
       }).then(res=>{
        console.log(res);
        this.All=res.data.data;
       

      })
    }
     
    
    
};

</script>
<style>
.el-carousel__item:nth-child(2n) {
 
  border: 1px black;
}

.el-carousel__item:nth-child(2n + 1) {
 
  border: 1px rgb(26, 21, 21);
}
.banner img{
  width: 100%;
  height: 300px;
}
.title{
  width: 100%;
  height:100px;
  background-color: white;
  
}
.time{
  width: 90%;
  height: 30px;
  margin-top: -3px;
}
.one{
  width: 90%;
  height: 100px;
  background-color: white;
  color: black;
 
  margin: auto;
}
.box1{
  width: 100%;
  height: 30px;
  text-align: left;
  margin-top: 25px;
}
.box1 span{
  margin-left: 15px;
}
.box1 span:hover{
  color: red;
}
.el-card{
  width: 90%;
  margin-top: 10px;
  
}
.box2{
  width: 100%;
  height: 30px;
  text-align: left;
 
}
.box2 span{
  margin-left: 15px;
}
.box2 span:hover{
  color: red;
}
.all{
  width: 100%;
  margin-top: -40px;
  background-color: rgb(216, 216, 216);
}
.tab{
  width: 90%;
  height: 45px;
  margin: auto;
  text-align: left;
  font-size: 32px;
  color: black;
  line-height: 65px;
  font-weight: 500;
}
.coupons{
  width: 150px;
  height: 50px;
  background-color: red;
  color: white;
  font-size: 30px;
  float: right;
  border-radius: 10px;
 margin-top: 10px;
 text-align: center;

}
.list{
  width: 90%;
  margin:20px auto;
}
.list :hover{
  margin-top: -3px;
}
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .box3{
        height: 100px;
        width: 100px;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
  }
</style>