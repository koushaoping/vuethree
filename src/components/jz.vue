<template >
  <div>
    <top />
    <div class="listen">
      <div class="lin">
        <div class="shi">首页</div>
        <div class="jiang">听讲座</div>
      </div>
      <div class="bo">
        <div class="xueke">
          学科  
        </div>
         <div class="model">
   <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first" >
        <div class="teacher">
          <div class="tu">
            <img src="../assets/04.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/05.png" alt />
              </div>
              <p>陆杰峰</p>
            </div>
            <div class="snow">
              <div class="yuan">探24节气之源：小雪</div>
              <p>11月21日 19:00-19:40</p>
              <p>13948 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/07.png" alt />
              </div>
              <p>网校中考研究中心</p>
            </div>
            <div class="snow">
              <div class="yuan">诺奖得主助你——兴趣唤醒与理科思维养成</div>
              <p>11月24日 15:30-17:30</p>
              <p>3063 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/08.jpg" alt />
              </div>
              <p>张艺凡</p>
            </div>
            <div class="snow">
              <div class="yuan">【家庭教育讲堂】学习压力下的亲子沟通</div>
              <p>11月28日 19:30-20:30</p>
              <p>4434 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/04.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/09.jpg" alt />
              </div>
              <p>刘玉东</p>
            </div>
            <div class="snow">
              <div class="yuan">探24节气之源：小雪</div>
              <p>12月07日 19:00-19:50</p>
              <p>13698 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/10.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/11.jpg" alt />
              </div>
              <p>朱韬</p>
            </div>
            <div class="snow">
              <div class="yuan">初一寒假攻略——谨防两极分化</div>
              <p>12月09日 19:00-20:00</p>
              <p>2851 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/10.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/12.png" alt />
              </div>
              <p>姜子威</p>
            </div>
            <div class="snow">
              <div class="yuan">初三寒假攻略——这个寒假要冲刺</div>
              <p>12月09日 19:00-20:00</p>
              <p>1571 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/10.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/13.png" alt />
              </div>
              <p>王鑫宇</p>
            </div>
            <div class="snow">
              <div class="yuan">初二寒假攻略——这个寒假要逆袭</div>
              <p>12月09日 19:00-20:00</p>
              <p>1531 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/04.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/14.png" alt />
              </div>
              <p>李昶</p>
            </div>
            <div class="snow">
              <div class="yuan">探24节气之源：冬至</div>
              <p>12月22日 19:00-19:50</p>
              <p>7927 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/15.png" alt />
              </div>
              <p>高岩78</p>
            </div>
            <div class="snow">
              <div class="yuan">批评孩子，你Hold住吗？</div>
              <p>12月26日 19:30-20:30</p>
              <p>3814 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="语文" name="second">
        <div class="teacher">
          <div class="tu">
            <img src="../assets/04.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/05.png" alt />
              </div>
              <p>陆杰峰</p>
            </div>
            <div class="snow">
              <div class="yuan">探24节气之源：小雪</div>
              <p>11月21日 19:00-19:40</p>
              <p>13948 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/08.jpg" alt />
              </div>
              <p>张艺凡</p>
            </div>
            <div class="snow">
              <div class="yuan">【家庭教育讲堂】学习压力下的亲子沟通</div>
              <p>11月28日 19:30-20:30</p>
              <p>4434 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/04.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/09.jpg" alt />
              </div>
              <p>刘玉东</p>
            </div>
            <div class="snow">
              <div class="yuan">探24节气之源：小雪</div>
              <p>12月07日 19:00-19:50</p>
              <p>13698 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
         <div class="teacher">
          <div class="tu">
            <img src="../assets/04.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/14.png" alt />
              </div>
              <p>李昶</p>
            </div>
            <div class="snow">
              <div class="yuan">探24节气之源：冬至</div>
              <p>12月22日 19:00-19:50</p>
              <p>7927 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
         <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/15.png" alt />
              </div>
              <p>高岩78</p>
            </div>
            <div class="snow">
              <div class="yuan">批评孩子，你Hold住吗？</div>
              <p>12月26日 19:30-20:30</p>
              <p>3814 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="数学" name="third">
        <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/08.jpg" alt />
              </div>
              <p>张艺凡</p>
            </div>
            <div class="snow">
              <div class="yuan">【家庭教育讲堂】学习压力下的亲子沟通</div>
              <p>11月28日 19:30-20:30</p>
              <p>4434 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
         <div class="teacher">
          <div class="tu">
            <img src="../assets/10.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/11.jpg" alt />
              </div>
              <p>朱韬</p>
            </div>
            <div class="snow">
              <div class="yuan">初一寒假攻略——谨防两极分化</div>
              <p>12月09日 19:00-20:00</p>
              <p>2851 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
          <div class="teacher">
          <div class="tu">
            <img src="../assets/10.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/12.png" alt />
              </div>
              <p>姜子威</p>
            </div>
            <div class="snow">
              <div class="yuan">初三寒假攻略——这个寒假要冲刺</div>
              <p>12月09日 19:00-20:00</p>
              <p>1571 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/10.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/13.png" alt />
              </div>
              <p>王鑫宇</p>
            </div>
            <div class="snow">
              <div class="yuan">初二寒假攻略——这个寒假要逆袭</div>
              <p>12月09日 19:00-20:00</p>
              <p>1531 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/15.png" alt />
              </div>
              <p>高岩78</p>
            </div>
            <div class="snow">
              <div class="yuan">批评孩子，你Hold住吗？</div>
              <p>12月26日 19:30-20:30</p>
              <p>3814 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="英语" name="fourth">
         <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/08.jpg" alt />
              </div>
              <p>张艺凡</p>
            </div>
            <div class="snow">
              <div class="yuan">【家庭教育讲堂】学习压力下的亲子沟通</div>
              <p>11月28日 19:30-20:30</p>
              <p>4434 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
        <div class="teacher">
          <div class="tu">
            <img src="../assets/06.png" alt />
          </div>
          <div class="jieqi">
            <div class="xue">
              <div class="picture">
                <img src="../assets/15.png" alt />
              </div>
              <p>高岩78</p>
            </div>
            <div class="snow">
              <div class="yuan">批评孩子，你Hold住吗？</div>
              <p>12月26日 19:30-20:30</p>
              <p>3814 人已预约</p>
            </div>
          </div>
          <div class="wei">
            <div class="look">
              查看系列讲座
              <span>立即预约</span>
            </div>
          </div>
        </div>
    </el-tab-pane>
  </el-tabs>
          </div>
      </div>
    </div>
    <end/>
  </div>
</template>
<script>
import top from "../components/city";
import end from "../components/footer";
export default {
     data() {
      return {
        activeName2: 'first'
      };
    },
        methods:{
      handleClick(tab, event) {
    
        console.log(tab, event);
        },
    },
  components: {
    top,
    end,
  }
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
.listen {
  width: 1200px;
  height: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  
}

.lin {
  width: 500px;
  height: 42px;
}
.shi {
  width: 24px;
  height: 16px;
  font-size: 12px;
  color: #999999;
}
.shi:hover {
  color: red;
  cursor: pointer;
}
.jiang {
  width: 36px;
  height: 16px;
  color: #333333;
  font-size: 12px;
  margin-top: -16px;
  margin-left: 40px;
}
.bo {
  width: 1200px;
  height: 56px;
  background-color: bisque;
  margin: 0 auto;
}
.xuebu {
  width: 28px;
  height: 22px;
  font-size: 14px;
  color: #aaaaaa;
  line-height:80px;
}
.student {
  width: 38px;
  height: 22px;
  font-size: 14px;
  color: #333333;
  margin-left: 58px;
  margin-top: -13px;
  line-height:17px;

}
.gao {
  width: 38px;
  height: 22px;
  font-size: 14px;
  color: #333333;
  margin-left: 127px;
  margin-top: -22px;
  line-height: 17px;
}
.student:hover {
  color: red;
  cursor: pointer;
}
.gao:hover {
  color: red;
  cursor: pointer;
}
.xueke {
  width: 28px;
  height: 22px;
  color: #aaaaaa;
  font-size: 14px;
  margin-top: -15px;
  line-height: 57px;
}
.yuwen {
  width: 38px;
  height: 22px;
  color: #333333;
  font-size: 13px;
  margin-left: 40px;
  margin-top: -17px;
}
.shuxue {
  width: 38px;
  height: 22px;
  font-size: 13px;
  color: #333333;
  margin-left: 80px;
  margin-top: -22px;
}
.yingyu {
  width: 38px;
  height: 22px;
  font-size: 13px;
  color: #333333;
  margin-left: 120px;
  margin-top: -22px;
}
.teacher {
  width: 300px;
  height: 390px;
  float: left;
  margin-left: 15px;
  margin-top: 10px;
}
.tu{
  width: 300px;
}
.tu img {
  width: 205px;
 
}
.jieqi {
  width: 300px;
  height: 125px;
  margin-top: 10px;
}
.xue {
  width: 67px;
  height: 76px;
}
.picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
}
.picture img {
  width: 50px;
  height: 50px;
}
.xue p {
  color: #000000;
  font-size: 14px;
}
.snow {
  width: 187px;
  height: 121px;
  margin-left: 70px;
  margin-top: -78px;
}
.yuan {
  width: 187px;
  height: 50px;
  color: #000000;
  font-size: 16px;
  margin-top: 7px;
}
.snow p {
  font-size: 14px;
  color: #999999;
}
.wei {
  width: 300px;
  height: 32px;
  margin-top: 20px;
}
.look {
  width: 120px;
  height: 32px;
  border: 1px solid black;
  font-size: 13px;
  color: #333333;
  text-align: center;
  line-height: 32px;
  margin-left: 11px;
}
.look span {
  display: block;
  width: 120px;
  height: 32px;
  border: 1px solid black;
  font-size: 13px;
  color: #333333;
  text-align: center;
  line-height: 32px;
  margin-top: -33px;
  margin-left: 150px;
}
.look:hover {
  color: red;
  border-color: red;
  cursor: pointer;
}
.look span:hover {
  display: block;
  color: red;
  border-color: red;
  cursor: pointer;
}
.model{
    width: 1172px;
    height: 22px;
    margin-top: -13px;
    margin-left: 44px;
}
.el-tabs--card>.el-tabs__header {
    border-bottom: none;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: none;
        border-bottom: none
}
.el-tabs--card>.el-tabs__header .el-tabs__item{
    border-left: none;
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-bottom:none;
}
.el-tabs__nav-wrap::after{
 height: 0px;
}
.el-tabs__active-bar{
    height: 0px;
}
</style>