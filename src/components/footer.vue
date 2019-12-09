<template>
  <div class="footer">
    <div class="shouye">
        <ul>
      <li class="about">网校首页</li>
      <li class="about">关于我们</li>
      <li class="about">网校招聘</li>
      <li class="about">合作专区</li>
      <li class="about">联系我们</li>
      <li class="about">AI开放平台</li>
      <li class="about">意见反馈</li>
      <li class="about">漏洞提交</li>
      <li class="about">隐私政策</li>
      <li class="about">版权声明</li>
      <li class="about">反盗链声明</li>
      </ul>
      <p>
      客服电话：400-800-2211
      （免长途话费） Copyright © 2009-2019 学而思网校 www.xueersi.com 北京学而思教育科技有限公司 版权所有 
      </p>
       <p>
      违法和不良信息举报电话：010-62577976 地址：北京市海淀区中关村大街18号科贸中心7层  京ICP证080230号
      </p>
      <div class="yu">
        <div class="item">
            <img src="../assets/01.png" alt="">
        </div>
        <div class="item">
            <img src="../assets/02.png" alt="">
        </div>
        <div class="item">
            <img src="../assets/03.png" alt="">
        </div>
      </div>
      </div>
    </div>
</template>
<script>
export default {};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
.footer {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #333333;
}
.shouye {
  width: 90%;
  height: 150px;
  margin: auto;
  margin-top: 20px;
}
.about {
  width: 90px;
  height: 50px;
  color: white;
  font-size: 12px;
  float: left;
  list-style: none;
  margin-left: 20px;
  margin-top: 20px;
}
p{
    font-size: 12px;
    color: white;
    margin-bottom: 10px;
}
.yu{
    width: 205px;
    height: 50px;
    margin: 0 auto;
    overflow: hidden;
}
.item{
    width: 57px;
    height: 20px;
    float: left;
    margin-left: 5px;
}
.item img{
    width: 100%;
    height: 100%;
}
</style>