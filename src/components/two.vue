<template>
  
    <div class="all">
     
        <div class="box1">
          年级
          <span>高三</span>
        </div>
        <div class="top">
 <div class="box2">课程</div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first"><div class="list">
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
  </el-tab-pane>
          <el-tab-pane label="语文" name="second">
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
          </el-tab-pane>
          <el-tab-pane label="数学" name="third">
              <div class="list">
  <el-row>
  <el-col :span="6" v-for="(o, index) in 10" :key="index" >
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
          </el-tab-pane>
          <el-tab-pane label="英语" name="fourth">
              <div class="list">
  <el-row>
  <el-col :span="8" v-for="(o, index) in 10" :key="index" >
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
          </el-tab-pane>
        </el-tabs>
        </div>
       
      </div>
   
</template>
<script>
export default {
     data() {
      return {
         currentDate:'2019-11-19',
        activeName: 'first'
      };
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
.box1 {
  width: 90%;
  height: 30px;
  text-align: left;
  margin-top: 25px;
  margin: auto;
  line-height: 35px;
  background-color: rgb(228, 173, 150);
}
.box1 span{
    margin-left: 23px;
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