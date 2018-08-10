<template>
    <div>
      <el-table :data="userlist" border=true stripe=true>
        <el-table-column v-for="col in columns"
          :prop="col.name"
          :key="col.id"
          :label="col.label"
          :width="col.width">
        </el-table-column>
      </el-table>

      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageindex"
      :page-sizes="[50,100, 200, 300, 400]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="resultcount" background>
    </el-pagination>

    </div>
</template>

<script>
    export default {
        data() {
          return {
            dataurl: 'user/userlist',
            userlist:[],
            pageindex:1,
            pagesize:50,
            resultcount:0,
            columns:[
              {
              id:0,
              name:'Id',
              label:'Uid',
              width:50
              },
              {
              id:1,
              name:'Login_Name',
              label:'登录名',
              width:100
              },
              {
              id:2,
              name:'Name',
              label:'用户名',
              width:100
              },
              {
              id:3,
              name:'Sex',
              label:'性别',
              width:100
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
              id:7,
              name:'Add_Time',
              label:'录入日期',
              width:200
              },
            ]
          }
        },
        methods: {
          getuserlist() {
            this.$axios.post(this.dataurl,{pageindex:pageindex,pagesize:pagesize}).then((res)=>{
              this.userlist = res.data;
            },(res)=>{

            });
          },
          handleSizeChange(val) {
            this.pagesize = val;
          },
          handleCurrentChange(val) {
            this.pageindex = val;
          }
        },
        created:function(){
          this.getuserlist();
        }
    }
</script>

<style scoped>

</style>
