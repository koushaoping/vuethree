<template>
  <div>
    <div class="all">
      <div class="choosecard">
        <div class="info-input">
          <div class="click">
            <div class="click-left" :class="n==1?class1:class2" @click="btn(1)">验证码登录</div>
            <div class="click-right" :class="n==2?class1:class2" @click="btn(2)">密码登录</div>
          </div>
          <div v-if="n==1" class="twomenu">
            <input type name value placeholder="请输入邮箱账号" class="email-input" v-model="emailcode" />
            <div class="code-input">
              <div class="asdasd">
                <input
                  type
                  name
                  value
                  placeholder="请输入验证码"
                  class="input-code-number-box"
                  v-model="yzm"
                />
              </div>
              <div class="input-getcode-btn" @click="getcode">获取验证码</div>
            </div>
            <div class="input-button" @click="getregister">登录</div>
            <div class="login-illustrate">新用户登录后将自动创建帐号</div>
          </div>
          <div v-if="n==2" class="twomenu">
            <input type name value placeholder="请输入邮箱账号" class="email-input" v-model="emailcode" />
            <div class="code-input">
              <div class="asdasd">
                <input
                  type="password"
                  name
                  value
                  placeholder="请输入登陆密码"
                  class="input-code-number-box"
                  v-model="password"
                />
              </div>
              <a href="/find">
                <div class="input-getcode-btn">忘记密码</div>
              </a>
            </div>
            <div class="input-button" @click="getpassword">登录</div>
          </div>
        </div>
        <div class="login-user-policy">
          登录即代表你已阅读并同意
          <a href="#">《用户协议》</a>
          <a href="#">《隐私协议》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      class1: "choose CActive",
      class2: "choose",
      n: 1,
      yzm: "",
      emailcode: "",
      password: ""
    };
  },
  methods: {
    btn(item) {
      this.n = item;
    },
    getcode() {
      this.$http
        .post("/api/user/sendEmail?email=" + this.emailcode)
        .then(res => {
          console.log(res);
          if (res.data.status == 1) {
            this.$message.error("获取验证码失败");
          } else {
            this.$message.success("获取验证码成功");
          }
        });
    },
    getregister() {
      let datalist = new FormData();
      datalist.append("yanzhengma", this.yzm);
      datalist.append("user_email", this.emailcode);
      this.$http.post("/api/user/login", datalist).then(res => {
        console.log(res);
        if (res.data.status == 3) {
          this.$message.success("注册成功");
          this.$router.push("/personinfo");
        }
      });
    },
    getpassword(){
      let datalist=new FormData()
      datalist.append('user_psw',this.password)
      datalist.append('user_email',this.emailcode)
       this.$http.post('/api/user/login2',datalist).then(res=>{
        console.log(res);
        if(res.data.status==0){
          this.$message.success("登录成功");
          this.$router.push('/personinfo')
        } else {
            this.$message.error("密码错误");
          }
      })
    }
  }
};
</script>

<style>
.login-user-policy a {
  color: #f13232;
  cursor: pointer;
  text-decoration: none;
}

.login-user-policy {
  font-size: 14px;
  width: 100%;
  height: 52px;
  line-height: 52px;
  text-align: center;
  background: transparent;
  color: #858c96;
}
.login-illustrate {
  margin: 16px 60px 0;
  text-align: center;
  color: #858c96;
  font-size: 12px;
  background: transparent;
}
.input-button {
  text-align: center;
  width: 300px;
  height: 38px;
  cursor: pointer;
  border-radius: 20px;
  background: #f9f9fc;
  display: inline-block;
  color: rgba(173, 180, 190, 0.4);
  font-size: 16px;
  line-height: 38px;
  margin-top: 40px;
}
.asdasd {
  width: 198px;
  float: left;
}
.input-getcode-btn {
  width: 80px;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  color: #858c96;
  padding-right: 20px;
  float: left;
  cursor: pointer;
  text-align: right;
}
.input-code-number-box {
  padding: 11px 20px;
  font-size: 14px;
  line-height: normal;
  height: 14px;
  outline: 0;
  border: none;
  background: transparent;
  width: 158px;
}
.code-input {
  box-sizing: border-box;
  width: 300px;
  height: 38px;
  background: #f9f9fc;
  border: 1px solid #f9f9fc;
  border-radius: 19px;
  margin-top: 20px;
  /* float: left; */
}
.email-input {
  box-sizing: border-box;
  position: relative;
  width: 300px;
  height: 38px;
  display: flex;
  background: rgb(249, 249, 252);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(249, 249, 252);
  border-image: initial;
  border-radius: 19px;
  padding-left: 20px;
  outline: 0;
}
.click-left {
  float: left;
}
.click-right {
  float: right;
}
.click {
  width: 240px;
  margin: auto;
}
.info-input {
  width: 420px;
  height: 436px;
  padding-top: 60px;
  background: #fff;
  border-radius: 8px 8px 16px 16px;
  box-sizing: border-box;
}
.choosecard {
  width: 420px;
  height: 488px;
  background: #f5f5f5;
  border-radius: 8px;
  position: absolute;
  top: 166px;
  left: 666px;
}
* {
  padding: 0;
  margin: 0;
}
.all {
  width: 100%;
  height: 800px;
  background: url(../assets/all.jpg) center center no-repeat;
  background-color: aqua;
  position: relative;
}

.choose {
  color: rgb(133, 140, 150);
  line-height: 24px;
  height: 24px;
  font-size: 24px;
  cursor: pointer;
}
.CActive {
  line-height: 24px;
  height: 24px;
  color: #212831;
  font-size: 24px;
  cursor: pointer;
  border-bottom: 4px salmon solid;
}
.twomenu {
  padding: 64px 60px 28px;
}
</style>