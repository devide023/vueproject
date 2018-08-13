<template>
    <div class="querybar">
      <el-form :inline="true" :model="formInline" label-width="50px" size="small">
      <el-form-item label="姓名">
        <el-input v-model="formInline.username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="formInline.tel" type="text"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onquery">查询</el-button>
      </el-form-item>
    </el-form>
      <el-table :data="userlist" :border="true" :stripe="true" size="small">
        <el-table-column v-for="col in columns"
          :prop="col.name"
          :key="col.id"
          :label="col.label"
          :width="col.width">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
       </el-table-column>
      </el-table>

      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageindex"
      :page-sizes="[20,30,50,100, 200, 300, 400]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="resultcount" background
      class="myfooter"
      >
    </el-pagination>

    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="30%"
      @close="onclosedialog"
      @open="onopendialog"
      >
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.Name" type="text"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.Sex" placeholder="性别">
            <el-option label="男" value="M"></el-option>
            <el-option label="女" value="W"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.Tel" type="text"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="form.Mobile" type="text"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.Address" type="text"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button type="primary" @click="onEdituser">提交</el-button>
        <el-button @click="dialogVisible=false">取消</el-button>
      </span>
    </el-dialog>


    </div>
</template>

<script>
    export default {
        data() {
          return {
            dataurl: 'user/userlist',
            delurl:'user/deluser?id=',
            formInline:{
              username:'',
              tel:'',
              sex:''
            },
            form:{
              Name:'',
              Id:0,
              Sex:'M',
              Tel:'',
              Mobile:'',
              Address:'',
              Login_Name:''
            },
            userlist:[],
            pageindex:1,
            pagesize:20,
            resultcount:0,
            dialogVisible: false,
            columns:[
              {
              id:0,
              name:'Id',
              label:'Uid',
              width:100
              },
              {
              id:1,
              name:'Login_Name',
              label:'登录名',
              width:150
              },
              {
              id:2,
              name:'Name',
              label:'用户名',
              width:150
              },
              {
              id:3,
              name:'Sex',
              label:'性别',
              width:50
              },
              {
              id:4,
              name:'Tel',
              label:'电话',
              width:100
              },
              {
              id:5,
              name:'Mobile',
              label:'手机',
              width:100
              },
              {
              id:6,
              name:'Address',
              label:'地址',
              width:400
              },
              {
              id:7,
              name:'Add_userName',
              label:'录入人',
              width:150
              },
              {
              id:8,
              name:'Add_Time',
              label:'录入日期',
              width:150
              },
            ]
          }
        },
        methods: {
          getuserlist() {
            this.$axios.post(this.dataurl,{key:this.formInline.username,tel:this.formInline.tel,pageindex:this.pageindex,pagesize:this.pagesize}).then((res)=>{
              if(res.data.state==1)
              {
                this.userlist = res.data.list;
                this.resultcount= res.data.resultcount;
              }
            },(res)=>{

            });
          },
          onquery(){
            this.getuserlist();
          },
          onEdituser(){

          },
          onclosedialog(done){

          },
          onopendialog(){
            console.log('opendialog');

          },
          handleSizeChange(val) {
            this.pagesize = val;
            this.pageindex = 1;
            this.getuserlist();
          },
          handleCurrentChange(val) {
            this.pageindex = val;
            this.getuserlist();
          },
          handleEdit(index, row) {
            console.log(index, row);
            this.dialogVisible=true;
            this.form.Id = row.Id;
            this.form.Login_Name = row.Login_Name;
            this.form.Name = row.Name;
            this.form.Sex = row.Sex;
            this.form.Tel = row.Tel;
            this.form.Mobile = row.Mobile;
            this.form.Address  =row.Address;
          },
          handleDelete(index, row) {
            this.$confirm('你确定删除该用户?','提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
              this.$axios.get(this.delurl+row.Id).then((res)=>{
              if(res.data.state==1)
              {
                this.$message({
                  type: 'success',
                  message: res.data.msg
                });
                this.getuserlist();
              }
            },(res)=>{});
            }).catch(()=>{
              this.$message({
                type:'info',
                message:'已取消'
              });
            });
          }
        },
        created:function(){
          this.getuserlist();
        }
    }
</script>

<style scoped>
.querybar{
  text-align: left;
  margin: 5px;
}
  .myfooter{
    text-align: right;
    margin-top: 10px;
  }
</style>
