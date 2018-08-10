<template>
    <div>
<el-container>
  <el-header class="layout_header" height="200">
    <v-header></v-header>
  </el-header>
  <el-container>
    <el-aside class="layout_aside" width="200px">
      <v-menutree></v-menutree>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>

<script>
import menutree from '@/components/main/menutree'
import systemheader from '@/components/main/systemheader'
    export default {
        components:{
            'v-menutree':menutree,
            'v-header':systemheader
            }
    }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  .layout_header{
    background-color:blue;
    color: white;
  }
  .layout_aside{
    background-color:slategray;
    color: coral;
  }
</style>
