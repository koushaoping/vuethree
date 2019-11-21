<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in item" :key="index">
        <img :src="item.url" class="lunbotu" alt="轮播图" />
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <div class="one">
        <div class="box1">年级
          <span>高三</span>
        </div>
        <div class="box2">课程
          <span>全部</span>
          <span>语文</span>
          <span>数学</span>
          <span>英语</span>
          <span>物理</span>
          <span>化学</span>
          <span>生物</span>
          <span>政治</span>
          <span>历史</span>
          <span>地理</span>
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
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</div>

<div class="list">
  <el-row>
  <el-col :span="6" v-for="(o, index) in 4" :key="index" >
    <el-card :body-style="{ padding: '4px' }" >
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
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
  <el-col :span="6" v-for="(o, index) in 4" :key="index" >
    <el-card :body-style="{ padding: '4px' }" >
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
  <div class="tab">
    三节课
</div>
<div class="list">
  <el-row>
  <el-col :span="6" v-for="(o, index) in 4" :key="index" >
    <el-card :body-style="{ padding: '4px' }" >
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
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
      ]
    };
  },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
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