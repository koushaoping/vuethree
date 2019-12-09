<template>
  <div class="pagefirst">
    <div class="banner-container">
      <div class="fixWrap">
        <div class="fcontent">
          <a class="flogo" href="#">
            <img src="../assets/logo-0711-white.png" alt />
            <router-view />
          </a>
          <div class="r-right">
            <a href="/first">进入官网</a>
            <span></span>
            <a href="#">客户端下载</a>
            <a class="flogin" href="/login">登录</a>
            <a class="freg" href="/login">注册</a>
          </div>
        </div>
      </div>
      <div class="inner-container">
        <img class="human" src="../assets/headerhuman.png" alt />
        <div class="login-component">
          <p>哈佛北大等院校毕业师资</p>
          <div class="phone-wrap">
            <input class="input-phone" placeholder="请输入邮箱" type="text"  v-model="emailcode"/>
          </div>
          <div class="code-wrap">
            <input class="input-code" placeholder="请输入验证码" type="text" v-model="yzm"/>
            <div class="code-btn" @click="getcode">获取验证码</div>
          </div>
          <div class="login-btn" @click="getregister">免费领取</div>
        </div>
      </div>
    </div>
    <div class="section1">
      <div class="section1_box">
        <h1>主讲+辅导老师直播教学</h1>
        <div class="border_red"></div>
        <h3>追踪各个环节，把关学习效果</h3>
        <div class="section1_contentbox">
          <div class="section1_contentCon">
            <img src="../assets/section1_1.png" class="section1_img" alt />
            <p class="section1_contentCon-title">主讲直播授课</p>
            <p class="section1_contentCon-cont">打通孩子解题思路，一通百通</p>
          </div>
          <div class="section1_contentCon">
            <img src="../assets/section1_2.png" class="section1_img" alt />
            <p class="section1_contentCon-title">辅导老师1对1答疑</p>
            <p class="section1_contentCon-cont">有问题随时解答学会为止</p>
          </div>
        </div>
        <a class="lq_btn" href="#" @click="dialogFormVisible=true">立即试听精品课</a>
      </div>
    </div>
    <div class="section2">
      <div class="section2_box">
        <h1>课堂真实体验</h1>

        <div class="border_red"></div>
        <h3>
          <span>01</span>趣味课堂，激发学习兴趣，学出成就感
        </h3>
        <div class="section2_contentbox">
          <div class="section2_continer-block">
            <img width="380" height="200" src="../assets/section2-1.jpg" alt />
            <div class="section2_continer-bg">
              <div class="border_red-left"></div>
              <div class="section2_continer-text">动画课件</div>
            </div>
          </div>
          <div class="section2_continer-block" id="section2_continer-block">
            <img width="380" height="200" src="../assets/section2-2.jpg" alt />
            <div class="section2_continer-bg">
              <div class="border_red-left"></div>
              <div class="section2_continer-text">小组PK</div>
            </div>
          </div>
          <div class="section2_continer-block">
            <img width="380" height="200" src="../assets/section2-3.jpg" alt />
            <div class="section2_continer-bg">
              <div class="border_red-left"></div>
              <div class="section2_continer-text">金币奖励</div>
            </div>
          </div>
        </div>
        <h3>
          <span>02</span>学测结合，实时检测学习效果，快速提升
        </h3>
        <div class="section2_contentbox">
          <div class="section2_continer-block">
            <img width="380" height="200" src="../assets/section2-4.jpg" alt />
            <div class="section2_continer-bg">
              <div class="border_red-left"></div>
              <div class="section2_continer-text">课题互动题</div>
            </div>
          </div>
          <div class="section2_continer-block" id="section2_continer-block">
            <img width="380" height="200" src="../assets/section2-5.jpg" alt />
            <div class="section2_continer-bg">
              <div class="border_red-left"></div>
              <div class="section2_continer-text">随堂测试</div>
            </div>
          </div>
          <div class="section2_continer-block">
            <img width="380" height="200" src="../assets/section2-6.jpg" alt />
            <div class="section2_continer-bg">
              <div class="border_red-left"></div>
              <div class="section2_continer-text">学习报告</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog class="chuangkou" :visible.sync="dialogFormVisible" width="23%">
      <div id="login-component">
        <p>哈佛北大等院校毕业师资</p>
        <div class="phone-wrap">
          <input class="input-phone" placeholder="请输入邮箱" type="text" v-model="emailcode"/>
        </div>
        <div class="code-wrap">
          <input class="input-code" placeholder="请输入验证码" type="text" v-model="yzm" />
          <div class="code-btn" @click="getcode">获取验证码</div>
        </div>
        <div class="login-btn" @click="getregister">免费领取</div>
      </div>
    </el-dialog>
  
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      dialogFormVisible: false,
      emailcode:'',
      yzm:'',
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods:{
    getcode(){
      this.$http.post('/api/user/sendEmail?email='+this.emailcode).then(res=>{
        console.log(res);
        if(res.data.status==1){
          this.$message.error("获取验证码失败");
        }else{
          this.$message.success("获取验证码成功");
        }
      })
    },
    getregister(){
      let datalist=new FormData()
      datalist.append('yanzhengma',this.yzm)
      datalist.append('user_email',this.emailcode)
       this.$http.post('/api/user/login',datalist).then(res=>{
        console.log(res);
        if(res.data.status==3){
          this.$message.success("注册成功");
          this.$router.push('/personinfo')
        }
      })
    }
  }
};

</script>

<style>
 .pagefirst .el-dialog{
   border-radius: 20px;
 }
.chuangkou {
  border-radius: 10px;
}
#login-component {
  width: 310px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
  padding: 50px 73px 45px 74px;

  padding: 25px 20px;
  box-sizing: border-box;
}
#login-component p {
  width: 307px;
  line-height: 24px;
  font-size: 25px;
  font-weight: 500;
  color: #3f3f3f;
  text-align: center;
  font-family: "Alibaba-PuHuiTi-M";
  margin-bottom: 19px;
  letter-spacing: 0;
  position: relative;
  left: -20px;
}

#section2_continer-block {
  margin: 0px 30px;
}
.border_red-left {
  width: 4px;
  height: 4px;
  background: black;
  border-radius: 50%;
}
.section2_continer-text {
  text-align: left;
  color: rgb(51, 51, 51);
  padding-left: 5px;
  float: left;
  font-size: 18px;
}

.section2_continer-bg {
  padding: 18px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 18px;
}
.section2_continer-block {
  width: 380px;
  border-radius: 10px;
  box-shadow: 1px 2px 4px 2px #e6e6e6;
}
.section2_contentbox {
  width: 1200px;
  margin-top: 20px;
  display: flex;
  font-size: 18px;
  padding-bottom: 60px;
}
* {
  padding: 0;
  margin: 0;
}
.banner-container {
  background-color: transparent;
  overflow: hidden;
  height: 554px;
  width: 100%;
  background: url(../assets/headerbg.png) center center no-repeat;
  background-size: cover;
}

.fixWrap {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #ff011f;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}
.fcontent {
  width: 1200px;
  height: 100%;
  line-height: 80px;
  margin: 0 auto;
  font-size: 20px;
  /* background-color:blueviolet;  */
}
.flogo {
  display: block;
  float: left;
  padding-top: 20px;
}
.flogo img {
  width: 160px;
}
.r-right {
  float: right;
  line-height: 80px;
  /* background-color: aqua; */
  font-size: 20px;
}
.r-right a {
  text-decoration: none;
  color: inherit;
  outline: none;
}
.r-right a:hover {
  color: white;
}
.r-right span {
  margin: 0 11px;
  height: 18px;
  width: 1px;
  display: inline-block;
  background: #fff;
  position: relative;
  top: 3px;
}
.r-right .flogin {
  display: inline-block;
  width: 98px;
  height: 43px;
  text-align: center;
  line-height: 45px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 23px;
  margin-right: 8px;
  margin-left: 25px;
}
.r-right .flogin:hover {
  border-color: #fff;
  color: #fff;
}

.r-right .freg {
  display: inline-block;
  background: rgba(255, 255, 255, 0.35);
  border: none;
  color: rgba(255, 255, 255, 1);
  width: 100px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 23px;
}
.r-right .freg:hover {
  background: rgba(255, 255, 255, 0.55);
  color: #fff;
}
.inner-container {
  position: relative;
  padding-top: 80px;
  width: 1200px;
  height: 483px;
  background-size: 1920px 483px;
  overflow: hidden;
  margin: 0 auto;
}
.human {
  width: 908px;
  position: absolute;
  top: 84px;
  left: 0;
}
.login-component {
  width: 307px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
  position: absolute;
  right: 0;
  top: 162px;
  padding: 25px 20px;
  box-sizing: border-box;
}
.login-component p {
  width: 307px;
  line-height: 24px;
  font-size: 25px;
  font-weight: 500;
  color: #3f3f3f;
  text-align: center;
  font-family: "Alibaba-PuHuiTi-M";
  margin-bottom: 19px;
  letter-spacing: 0;
  position: relative;
  left: -20px;
}
.phone-wrap {
  width: 100%;
  position: relative;
}
.input-phone {
  text-indent: 47px;
  width: 100%;
  height: 42px;
  border: 1px solid rgba(194, 194, 194, 1);
  border-radius: 21px;
  font-size: 18px;
  background: url(../assets/phone-icon.png) 20px center no-repeat;
  background-size: 18px 27px;
  margin-bottom: 22px;
  box-sizing: border-box;
  outline: none;
}
.code-wrap {
  margin-bottom: 22px;
  width: 100%;
  position: relative;
}
.input-code {
  width: 153px;
  height: 42px;
  text-indent: 15px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(194, 194, 194, 1);
  border-radius: 21px;
  font-size: 18px;
  box-sizing: border-box;
  outline: none;
}
.code-btn {
  float: right;
  width: 109px;
  height: 42px;
  line-height: 42px;
  color: #fff;
  background: rgba(241, 44, 48, 1);
  border-radius: 21px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}
.login-btn {
  width: 100%;
  height: 48px;
  background: rgba(241, 44, 48, 1);
  box-shadow: 0px 6px 18px 0px rgba(241, 44, 48, 0.49);
  border-radius: 24px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 49px;
  text-align: center;
  cursor: pointer;
  margin-top: 21px;
}
.section1 {
  height: 895px;
  background: url(../assets/section2bg.png) no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  -webkit-background-size: cover;
}
.section1_box {
  width: 1200px;
  margin: 0 auto;
  height: 895px;
}
.section1_box h1 {
  padding-top: 90px;
  font-size: 38px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: #313131;
  line-height: 32px;
}
.border_red {
  margin: 16px auto;
  width: 60px;
  height: 5px;
  background: rgba(241, 44, 48, 1);
  border-radius: 3px;
}
.section1_box h3 {
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  text-align: center;
}
.section1_contentbox {
  width: 1200px;
  margin-top: 75px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
}
.section1_img {
  width: 576px;
  height: 338px;
}
.section1_contentCon-title {
  font-size: 24px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(238, 110, 57, 1);
  margin-top: 30px;
}
.section1_contentCon-cont {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 10px;
}
.lq_btn {
  width: 300px;
  line-height: 75px;
  background: rgba(241, 44, 48, 1);
  box-shadow: 0px 10px 15px 0px rgba(234, 73, 64, 0.3);
  border-radius: 37.5px;
  font-size: 24px;
  display: block;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin: 80px auto;
  text-decoration: none;
}
.lq_btn:hover {
  background: #e02727;
}
.section2 {
  width: 100%;
  height: 930px;
}
.section2_box {
  height: 930px;
  background-color: white;
  width: 1200px;
  margin: 0 auto;
}
.section2_box h1 {
  padding-top: 90px;
  font-size: 38px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  line-height: 32px;
}
.section2_box h3 {
  font-family: MicrosoftYaHei;
  font-weight: 400;
  text-align: center;
  font-size: 26px;
  color: #333333;
  margin-bottom: 50px;
}
.section2_box h3 span {
  color: rgba(235, 74, 65, 1);
  margin-right: 5px;
}
</style>