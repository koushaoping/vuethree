<template>
  <div class="ocenter">
    <div class="find-password">
      <div class="header">
        <a href="#" class="logo">logo</a>
      </div>
      <div class="password_wrap">
        <el-steps :active="active" finish-status="success" class="active">
          <el-step title="输入个人信息"></el-step>
          <el-step title="设置新密码"></el-step>
          <el-step title="完成"></el-step>
        </el-steps>

        <div class="active-rule" v-if="active==0">
          <div style=" margin-bottom: 20px;width: 380px;height: 48px;">
            <input class="el-input__inner" type="text" placeholder="请输入邮箱"  v-model="emailcode" />
          </div>
          <div style=" margin-bottom: 20px;width: 220px;height: 48px;float:left;">
            <input class="el-input__inner" id="el-input" placeholder="请输入邮箱验证码" type="text" />
          </div>
          <div class="disabled" @click="getcode">获取邮箱验证码</div>
           <div style="margin: 20px auto;width: 380px;height: 50px;">
          <el-button style="margin-top: 12px;" @click="next">下一步1</el-button>
        </div>
        </div>
        <div class="active-rule" v-if="active==1">
          <div style=" margin-bottom: 20px;width: 380px;height: 48px;">
            <input class="el-input__inner" type="text" placeholder="请输入新密码" />
          </div>
          <div style=" margin-bottom: 20px;width: 380px;height: 48px;">
            <input class="el-input__inner" type="text" placeholder="请再次输入新密码" />
          </div>
           <div style="margin: 20px auto;width: 380px;height: 50px;">
          <el-button style="margin-top: 12px;" @click="next">下一步2</el-button>
        </div>
        </div>

        <div class="active-rule" v-if="active==2">
          <div class="finish_tips">密码已经修改成功，一定要保管好你的密码哦～</div>
          <div style="margin: 20px auto;width: 380px;height: 50px;">
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
        </div>
        <!-- <div style="margin: 20px auto;width: 380px;height: 50px;">
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailcode:'',
      active: 0
    };
  },

  methods: {
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
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>

<style>
.finish_tips {
  height: 200px;
  font-size: 24px;
  color: #333;
  text-align: center;
  /* padding-top: 100px;
    margin-top: 170px; */
}
.disabled {
  background-color: #ddd;
  border-color: #ddd;
  /* cursor: not-allowed; */
  width: 136px;
  height: 47px;
  line-height: 47px;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  z-index: 1;
  float: left;
  margin-left: 24px;
  cursor: pointer;
}
#el-input {
  width: 220px;
  margin-right: 0;
}
.password_wrap .el-button:hover {
  background-color: #fa4747;
  color: #fff;
}
.password_wrap .el-button {
  background-color: #f13233;
  width: 380px;
  height: 50px;
  font-size: 14px;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.el-input__inner {
  height: 100%;
  line-height: 48px;
  color: #666;
  border: 1px solid #ccc;
  height: 48px;
  /* display: block; */
}
.active-rule {
  width: 380px;
  margin: 0 auto;
}
.el-step__title.is-process {
  color: #999;
}
.el-step__head.is-process {
  border-color: #999;
  color: #999;
}
.el-step__head.is-success {
  border-color: #f33;
  color: #f33;
}
.el-step__title.is-success {
  color: #333;
}
.active {
  padding: 90px 350px;
}
.password_wrap {
  border: 1px solid #ccc;
  min-height: 600px;
  background: #fff;
  border-top: 3px solid #f33;
  border-radius: 2px;
}
.header .logo {
  display: inline-block;
  width: 200px;
  height: 35px;
  font-size: 30px;
  color: red;
}
.header {
  padding: 20px 0;
  position: relative;
}
.find-password {
  width: 1200px;
  margin: 0 auto;
}
.ocenter {
  background: #f5f5f5;
  height: auto !important;
  min-height: 100% !important;
  min-width: 1200px;
  margin: 0 auto;
}
* {
  padding: 0;
  margin: 0;
}
</style>
