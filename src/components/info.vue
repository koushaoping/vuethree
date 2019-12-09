<template>
  <div class="ocenter">
    <div class="nav">
      <div class="container">
        <ul>
          <li>
            <a href="#">学习中心</a>
          </li>
          <li>
            <a href="#">我的试题</a>
          </li>
          <li>
            <a href="#">我的讲座</a>
          </li>
          <li>
            <a href="#">我的应用</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="clearfix">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="我的资料">
          <div class="profile-group">
            <span class="group-item">基础资料</span>
          </div>
          <div class="base-box">
            <div class="base-content">
              <!-- <p>账户信息</p> -->
              <div class="zxczxc">
                <div class="qweqwe">用户昵称:</div>
                <input type="text" v-model="nicheng" />
              </div>
              <!-- <p>学员信息</p> -->
              <div class="zxczxc">
                <div class="qweqwe">学员姓名:</div>
                <input type="text" v-model="name" />
              </div>
              <div class="zxczxc">
                <div class="qweqwe">英文名:</div>
                <input type="text" v-model="ename" />
              </div>
               <div class="zxczxc">
                <div class="qweqwe">学校:</div>
                <input v-model="school" type="text" />
              </div>
              <div class="zxczxc">
                <div class="qweqwe">性别:</div>
                <select v-model="sex" name>
                  <option value></option>
                  <option value>男</option>
                  <option value>女</option>
                </select>
              </div>
             
              <div class="zxczxc">
                <div class="qweqwe">年级:</div>
                <!-- <input type="text" /> -->
                <select v-model="grade" name>
                  <option value></option>
                  <option value>小升初</option>
                  <option value>初升高</option>
                </select>
              </div>
              <div class="zxczxc">
                <div class="qweqwe">出生日期:</div>
                <input type="date" v-model="birth" />
              </div>
              <div class="zxczxc">
                <div class="qweqwe"></div>
                <button @click="saveinformation">保存</button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修改密码">
          <div class="profile-group">
            <span class="group-item">修改密码</span>
          </div>
          <div class="base-box">
            <div class="base-content">
              <!-- <div class="zxczxc">
                <div class="qweqwe">当前密码:</div>
                <input type="password" placeholder="请输入当前网站密码" />
              </div>-->
              <div class="zxczxc">
                <div class="qweqwe">新密码:</div>
                <input type="password" placeholder="请设置密码" v-model="psd1" />
              </div>
              <div class="zxczxc">
                <div class="qweqwe">确认密码:</div>
                <input type="password" placeholder="请输入确认密码" v-model="psd2" />
              </div>
              <div class="zxczxc">
                <div class="qweqwe"></div>
                <button @click="replacepsd">保存</button>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="修改邮箱">
          <div class="profile-group">
            <span class="group-item">修改邮箱</span>
          </div>
          <div class="base-box">
            <div class="base-content">
              <div class="zxczxc">
                <div class="qweqwe">邮箱:</div>
                <input type="text" v-model="email" placeholder="请输入邮箱" />
              </div>
              <div class="zxczxc">
                <div class="qweqwe">验证码:</div>
                <input type="text" v-model="yzm" placeholder="请输入邮箱验证码" />
                <button @click="getcode">获取验证码</button>
              </div>
              <div class="zxczxc">
                <div class="qweqwe">当前密码:</div>
                <input type="password" v-model="psd" placeholder="请输入当前网页密码" />
              </div>
              <div class="zxczxc">
                <div class="qweqwe"></div>
                <button @click="replaceemail">保存</button>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="收货地址">
          <div class="profile-group">
            <span class="group-item">地址管理</span>
          </div>
        </el-tab-pane>

        <el-tab-pane label="修改密码">配置管理</el-tab-pane>
        <el-tab-pane label="第三方账户绑定">配置管理</el-tab-pane>
        <el-tab-pane label="修改密码">配置管理</el-tab-pane>
        <el-tab-pane label="修改密码">配置管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      tabPosition: "left",
      psd1: "",
      psd2: "",
      psd:"",
      email: "",
      yzm: "",
      nicheng: "",
      name: "",
      ename: "",
      sex: "",
      school: "",
      grade: "",
      birth: ""
    };
  }, 
  methods: {
    saveinformation() {
      let cc = new FormData();
      cc.append("xinxi_nicheng", this.nicheng);
      cc.append("xinxi_name", this.name);
      cc.append("xinxi_ename", this.ename);
      cc.append("xinxi_sex", this.sex);
      cc.append("xinxi_school", this.school);
      cc.append("xinxi_grade", this.grade);
      cc.append("xinxi_birth", this.birth);
      this.$http.post("/sco/cx", cc).then(res => {
        console.log(res);
       
      });
    },
    replacepsd() {
      let aa = new FormData();
      aa.append("password1", this.psd1);
      aa.append("password2", this.psd2);

      this.$http.post("/api/user/updatePsw", aa).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.$message.error("密码更改失败");
        } else {
          this.$message.success("密码更改成功");
        }
      });
    },
    getcode() {
      this.$http.post("/api/user/sendEmail?email=" + this.email).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.$message.error("获取验证码失败");
        } else {
          this.$message.success("获取验证码成功");
        }
      });
    },
    replaceemail() {
      let bb = new FormData();
      bb.append("email", this.email);
      bb.append("yanzhengma", this.yzm);
      bb.append("password", this.psd);
      this.$http.post("/api/user/updateEmail", bb).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.$message.error("邮箱更改失败");
        } else {
          this.$message.success("邮箱更改成功");
        }
      });
    }
  }
};
</script>




<style>
.base-content select {
  height: 35px;
  line-height: 35px;
  -webkit-box-sizing: border-box;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 34px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
}
.zxczxc {
  margin-bottom: 30px;
}
.qweqwe {
  width: 68px;
  padding-right: 12px;
  line-height: 35px;
  color: #666;
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
}
.base-content button {
  background-color: #f13233;
  width: 100px;
  height: 35px;
  margin: 0 30px 0 80px;
  font-size: 14px;
  border: 0;
  border-radius: 4px;

  color: #fff;
}
.base-content button:hover {
  background-color: #fa4747;
}
.base-content input {
  height: 35px;
  line-height: 35px;
  -webkit-box-sizing: border-box;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 34px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
}
.base-content p {
  width: 88px;
  padding-right: 12px;
  font-size: 16px;
  font-family: MicrosoftYaHeiUI;
  color: #333;
  margin-bottom: 30px;
}
.base-content {
  padding: 30px 60px 0 60px;
  font-size: 14px;
  color: #333;
}
.base-box {
  height: 100%;
  padding: 10px 20px 20px;
  box-sizing: border-box;
  overflow: hidden;
}
.group-item {
  text-align: center;
  width: 160px;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  color: #666;
  float: left;
}
.profile-group {
  margin-top: 35px;
  width: 93%;
  margin-left: 32px;
  margin-right: 32px;
  border-bottom: 1px solid #e5e5e5;
  height: 40px;
  line-height: 30px;
  font-size: 0;
  box-sizing: border-box;
}
.clearfix .el-tab-pane {
  width: 1000px;
  background: #fff;
  min-height: 630px;
  float: right;
}
.el-tabs__active-bar {
  background-color: white;
}
.clearfix .el-tabs__nav-wrap::after {
  background-color: white;
}
.clearfix .el-tabs__item:hover {
  color: #f13232;
}

.clearfix .el-tabs__item.is-active {
  color: #f13232;
}
.clearfix .el-tabs__item {
  color: #666;
  font-size: 14px;
  display: block;
  height: 34px;
  line-height: 34px;
}
.el-tabs--left .el-tabs__item.is-left {
  text-align: left;
}
.clearfix .el-tabs__active-bar {
  height: 0;
}
.clearfix {
  width: 1200px;
  /* height: 100px; */
  margin: 20px auto 0;
  padding-bottom: 60px;
}
.clearfix .el-tabs__header {
  width: 150px;
  min-height: 610px;
  margin-right: 10px;
  padding-left: 20px;
  background: #fff;
  padding-top: 20px;
}
.container ul li a {
  color: #fff;
  position: relative;
  height: 100%;
  display: block;
  text-decoration: none;
}
.container ul li {
  display: block;
  height: 100%;
  padding: 0 24px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  float: left;
  position: relative;
}
.container ul li:hover {
  background: #fff;
}
.container ul li a:hover {
  color: #f13232;
}
.container ul {
  /* display: inline-block; */
  height: 100%;
  margin-top: 0;
  margin-left: 0;
  list-style: none;
}
.nav {
  background: #f13232;
  width: 100%;
  height: 60px;
}
.container {
  line-height: 60px;
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.ocenter {
  background: #f5f5f5;
}
* {
  padding: 0;
  margin: 0;
}
</style>
