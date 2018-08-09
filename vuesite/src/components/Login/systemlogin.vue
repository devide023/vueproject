<template>
    <div>
        <el-row :gutter="20">
            <el-col :lg="1" :md="2" :sm="6">用户名</el-col>
            <el-col :lg="23" :md="22" :sm="18"><el-input v-model="username" placeholder="" type="text"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :lg="1" :md="4" :sm="6">密码</el-col>
            <el-col :lg="23" :md="20" :sm="18"><el-input v-model="userpwd" placeholder="" type="password"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col><el-button type="primary" @click="login">登录</el-button>
            </el-col>
        </el-row>
        
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username:'',
                userpwd:''
            }
        },
        methods: {
            login() {
                
            }
        }
    }
</script>

<style scoped>

</style>