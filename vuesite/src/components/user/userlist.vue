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
        <el-table-column label="操作" width="150">
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
            userlist:[],
            pageindex:1,
            pagesize:20,
            resultcount:0,
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
              width:150
              },
              {
              id:5,
              name:'Mobile',
              label:'手机',
              width:150
              },
              {
              id:6,
              name:'Address',
              label:'地址',
              width:500
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
              width:200
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
