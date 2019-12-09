<template>
<div>
   <div class="top">
        <div class="kuang">
            <div class="icon">
                <img src="../assets/icon.png" alt="">
                <div class="xi">陕西</div>
                <div class="icontwo">
                    <img src="../assets/iconone.png" alt="">
                </div>
                <div class=kuo>[为您推荐该地区的课程]</div>
            </div>
        </div>
        <ul class="you">
            <li class="zi" @click="cun">
                教师资格证公示
                </li>
             <li class="zi">客户端下载</li>
              <li class="zi" @click="dingdan">我的订单</li>
               <li class="zi">设置</li>
                <li class="zi" @click="denglu">立即登录</li>
        </ul>
    </div>
       <div class="zhong">
           <div class="class">
               西安新思维教育
               <p>Learning more efficiently</p>
           </div>
          <ul class="lesson">
          <li class="choose" @click="xk">选课中心</li>
              <li class="choose" @click="jz">免费讲座</li>
                  <li class="choose">学习中心</li>
                      <li class="choose">1对1</li>
                          <li class="choose">发现更多
                              <ul class="er">
                                  <li class="bian">编程社区</li>
                                   <li class="bian">逛书城</li>
                                    <li class="bian">学社团</li>
                              </ul>
                          </li>
                          </ul>
       </div> 
       <input class="box" type="text">
       <div class="search">
       <img src="../assets/search.png" alt="">
       </div>
       <input class="shopping" type="text" @click="btn">
       <div class="wu">
           <img src="../assets/cicyle.png" alt="">
           <span>购物车</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"shopping",
    methods:{
        cun(){
            this.$router.push("/teacher")
        },
        xk(){
            this.$router.push("/first")
        },
        jz(){
            this.$router.push("/jz")
        },
        dingdan(){
            this.$router.push("/info")
        },
        denglu(){
            this.$router.push("/login")
        },
        btn(){
            this.$router.push("/shopping")
        }
    }
}
</script>
<style >
*{
    margin: 0;
    padding: 0;
}
.top{
    width: 100%;
    height: 30px;
    background-color: gray;
    line-height: 30px;
}
.kuang{
    width: 180px;
    height: 30px;
    margin: 0 74.5px;
}
.icon{
    width: 40px;
    height: 40px;
    margin-top:6px; 
}
.icon img{
    width: 16px;
    height: 16px;
    margin-left:-28px;
    margin-top: 8px;
}
.xi{
        width: 60px;
        height: 17px;
        color: #afafaf;
        font-size:  12px; 
        margin-top:-35px;
        margin-left:16px;  
}
.icontwo{
    width: 12px;
    height: 13px;
    margin-top: -16px;
    margin-left: 40px;
}
.icontwo img{
     width: 12px;
    height: 13px;
    margin-left:1px;
    margin-top:0px; 
}
.kuo{
    width: 280px;
    height: 17px;
    color: #afafaf;
    font-size: 12px;
    margin-left: 10px;
    margin-top:-14px; 
}
.kuo:hover{
    color:white;
}
.xi:hover{
    color:white;
}
.icontwo:hover{
    color: white;
    transform: rotateY(360deg)
}
.you{
    width: 850px;
    height: 30px;
    float: right;
    margin-right:74.5px; 
    margin-top: -33px;
}
.zi{
    width: 170px;
    height: 30px;
    list-style: none; 
    font-size:12px;
    color: #D0D0D0;
    float: left;
    margin-top:2px; 
    cursor: pointer;   
}
.zi:hover{
    color: white;
}
.zhong{
    width: 100%;
    height: 100px;
    margin: 0 auto;
    border: 1px solid black;
}
.class{
    width: 170px;
    height: 51px;
    font-family: 'Courier New', Courier, monospace;
    color:red;
    margin-top:10px;
    margin-left: 65px;
    font-size: 20px;
}
.class p{
    font-size: 14px;
    font-family: 'Lucida Sans';
    color: black;
}
.lesson{
    width: 530px;
    height: 100px;
    margin-top: -73px;
    margin-left: 244px;
}
.choose{
    width: 98px;
    height: 30px;
    font-size:16px;
    color: #333333; 
    float: left;
    list-style: none;
    margin-top: 35px;
    margin-left: 5px;
}
.choose:hover{
    color: red;
}
.choose:nth-child(1){
    color: red;
}
.er{
    width: 98px;
    height: 120px;
    border: 1px solid lavender;
    border-radius: 4px;
    margin-top:10px; 
    display: none;
}
.bian{
    width: 98px;
    height: 29px;
    font-size: 14px;
    text-align: center;
    border-bottom: 1px solid lavender;
    list-style: none;
    line-height: 30px;
    margin-top: 10px;
    color: #333333;
}
.choose:hover.er{
    display: block;
}
.box{
    width: 320px;
    height: 32px;
    border-radius:10px; 
    float: right;
    border-color:lavender; 
    margin-right:200px;
    margin-top: -70px; 
    position: relative;
}
.search{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 202px;
    top: 70px;
    text-indent: -13px;
}
.search img{
 width: 30px;
 height: 30px;
}
.shopping{
    width: 130px;
    height: 32px;
    float: right;
    border-radius: 10px;
    border-color:lavender; 
    margin-right:50px;
    margin-top: -69px; 
    cursor: pointer;
    position: relative;
}
.wu{
    width: 110px;
    height: 16px;
    position: absolute;
    right: 70px;
    top:70px;
}
.wu img{
 width: 16px;
 height: 16px;
}
.wu span{
    font-size: 12px;
    color: #333333;
}
.shopping:hover{
    border-color: red;
}
.wu span:hover{
    color: red;
    cursor: pointer;
}
</style>