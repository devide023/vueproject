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

    </div>
</template>

<script>
    export default {
        data() {
          return {
            dataurl: 'user/get_userlist',
            userlist:[],
            columns:[
              {
              id:1,
              name:'login_name',
              label:'登录名',
              width:50
              },
              {
              id:2,
              name:'name',
              label:'用户名',
              width:50
              },
            ]
          }
        },
        methods: {
          getuserlist() {
            this.$axios.get(this.dataurl).then((res)=>{
              this.userlist = res.data;
            },(res)=>{

            });
          }
        },
        created:function(){
          this.getuserlist();
        }
    }
</script>

<style scoped>

</style>
