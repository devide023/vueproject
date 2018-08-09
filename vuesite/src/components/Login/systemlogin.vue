<template>
    <div>
        <el-row>
            <el-col :lg="24">
                <img src='@/assets/logo.png'>
            </el-col>
        </el-row>
        
        <el-row class="myrow">
            <el-col :lg="1" :md="2" :sm="6">用户名</el-col>
            <el-col :lg="23" :md="22" :sm="18"><el-input v-model="username" placeholder="" type="text"></el-input>
            </el-col>
        </el-row>
        <el-row class="myrow">
            <el-col :lg="1" :md="4" :sm="6">密码</el-col>
            <el-col :lg="23" :md="20" :sm="18"><el-input v-model="userpwd" placeholder="" type="password"></el-input>
            </el-col>
        </el-row>
        <el-row class="myrow">
            <el-col><el-button type="primary" @click="login">登录</el-button>
            </el-col>
        </el-row>
        
        
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                username:'',
                userpwd:''
            }
        },
        methods: {
            login() {
                this.$axios.post('login/checklogin',{login_name:this.username,pwd:this.userpwd}).then((res)=>{
                    console.log(res.data);
                    this.$router.push({ path: '/main' }) 
                },(res)=>{
                    console.log(res.data);
                });
            }
        }
    }
</script>

<style scoped>
    .myrow{
        margin:20px auto;
    }
</style>