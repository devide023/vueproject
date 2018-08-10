<template>
    <div>
      <el-menu mode="vertical" @open="handleOpen" @close="handleClose" :router="true" unique-opened>
        <el-submenu v-for="item in rootlist" :key="item.id" :index="item.id.toString()">
          <template slot="title">
            <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item v-for="sitem in getsubitem(item.id)" :key="sitem.id" :index="'/main/'+sitem.control+'/'+sitem.action">{{sitem.title}}</el-menu-item>
      </el-submenu>
      </el-menu>

    </div>
</template>

<script>
    export default {
        data() {
          return {
            dataurl: 'menu/list',
            datalist:[],
            rootlist:[]
          }
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        getsubitem(pid){
            return this.datalist.filter(t=>{return t.pid == pid});
        }
        },
        created:function(){
          var uid = localStorage.getItem("userid")
          if(uid){
            this.$axios.get(this.dataurl+'?userid='+uid).then((res)=>{
            this.datalist = res.data;
            this.rootlist = this.datalist.filter((element) => {return element.pid == 0});
          },(res)=>{
            console.log(res);
          });
          }
        }
    }
</script>

<style scoped>

</style>
