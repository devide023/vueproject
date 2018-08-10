<template>
    <div class="sysheader">
      <img src="@/assets/logo.png">
      <span class="system_name">{{systemname}}</span>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            logurl:'',
            systemname:'后台系统'
          }
        },
    }
</script>

<style scoped>
  .sysheader img{
    width: 100px;
    height: 100px;
    float: left;
  }
  .system_name{
    color: #ffffff;
    font-size: 20px;
    float: left;
    line-height: 100px;
    height: 100px;
  }
</style>
