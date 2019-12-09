<template >
  <div>
    <top />
    <div class="tou">
      <div class="title">
        <div class="shou">
          请选择收货地址
          <span>（建议您填写常用地址，以便收货。配套教材最迟开课前7天发货，请您耐心等待!）</span>
          <input class="information" type="button" value="新增收货人信息" @click="addAdress=true"/>
        </div>
      </div>
      <el-dialog title="收货地址" :visible.sync="addAdress">
        <el-form :model="addaddressform">
          <el-form-item label="收货人" :label-width="formLabelWidth">
            <el-input
              v-model="addaddressform.receiverName"
              auto-complete="off"
              placeholder="请准确填写真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="所在省份" :label-width="formLabelWidth">
            <el-input v-model="addaddressform.receiverProvince" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="所在城市" :label-width="formLabelWidth">
            <el-input v-model="addaddressform.receiverCity" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="所在地区" :label-width="formLabelWidth">
            <el-input v-model="addaddressform.receiverDistrict" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input
              v-model="addaddressform.receiverAddress"
              auto-complete="off"
              placeholder="请填写详细路名及门牌号"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input
              v-model="addaddressform.receiverMobile"
              auto-complete="off"
              placeholder="用于接收发货通知短信和送货前通知"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addAdress = false">取 消</el-button>
          <el-button type="primary" @click="saveinformation">确 定</el-button>
        </div>
      </el-dialog>
      <el-table :data="addresstable" style="width: 80%;margin:auto">
        <el-table-column prop="receiverName" label="姓名" width="180"></el-table-column>
        <el-table-column prop="receiverMobile" label="电话" ></el-table-column>
        
        <el-table-column label="地址" >
            <template slot-scope="scope">
                <div>
                    {{scope.row.receiverProvince}}- {{scope.row.receiverCity}}- {{scope.row.receiverDistrict}}
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="receiverAddress" label="地址"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button @click="addressedit(scope.row.id)" type="primary" size="small">编辑</el-button>
                <el-button @click="addressdelete(scope.row.id)" type="danger" size="small">删除</el-button>
                 <el-button @click="addressfind(scope.row.id)" type="info" size="small">查询</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import top from "../components/city";
export default {
  components: {
    top
  },
  data() {
    return {
        addresstable:[],
        addaddressform: {
            receiverProvince: "",
            receiverCity: "",
            receiverDistrict: "",
            receiverAddress: "",
            receiverMobile: "",
            receiverName: ""
        },
        addAdress: false,
        formLabelWidth: "130px"
    };
  },
  created(){
      this.$http.get('/api/shipping/list').then(res=>{
          console.log(res);
          this.addresstable=res.data.data;
      })
  },
  methods: {
    saveinformation() {
      let nn = new FormData();
      nn.append("receiverAddress", this.addaddressform.receiverAddress);
      nn.append("receiverCity", this.addaddressform.receiverCity);
      nn.append("receiverDistrict", this.addaddressform.receiverDistrict);
      nn.append("receiverMobile", this.addaddressform.receiverMobile);
      nn.append("receiverProvince", this.addaddressform.receiverProvince);
      nn.append("receiverName", this.addaddressform.receiverName);
      this.$http.post("/api/shipping/add", nn).then(res => {
        console.log(res);
        if (res.data.status == 0) {
          this.$message.success("添加地址成功");
          this.addAdress = false;
        }
      });
    },
    // 编辑事件
    addressedit(id){
        console.log(id)
    },
    addressfind(id){
        console.log(id)
        if(id.data.data.$message.status==1){
            this.$message.fail("无法查询到该地址")
        }
    },
    // 删除事件
    addressdelete(val){
        console.log(val)
        if(val.data.status==0){
            this.$message.success("删除地址成功")
        }else{
            if(val.data.status==1){
                this.$message.fail("删除地址失败")
            }
        }

    }
  }
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
.tou {
  width: 100%;
  /* height: 1154px; */
  /* border: 1px solid black; */
  margin: 0 auto;
  margin-top: 20px;
}
.title {
  width: 1200px;
  height: 61px;
  /* border: 1px solid black; */
}
.shou {
  width: 100%;
  height: 61px;
  /* border: 1px solid black; */
  font-size: 16px;
  color: #333333;
  line-height: 61px;
}
.shou span {
  color: red;
  font-size: 12px;
}
/* .huo{
    width: 1200px;
    height: 50px;
    border: 1px solid black;
    margin-top: 30px;
}
.person{
    width: 262px;
    height: 38px;
    background-color: #ffffff;
}
.mi{
    margin-left: -410px;
} */
.sheng {
  width: 120px;
  height: 36px;
  line-height: 36px;
}
.anniu {
  width: 172px;
  height: 35px;
  background-color: red;
  font-size: 16px;
  color: white;
  margin-top: 20px;
}
.information {
  width: 190px;
  height: 60px;
  color: #333333;
  font-size: 16px;
}
</style>