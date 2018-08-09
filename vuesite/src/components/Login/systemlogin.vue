<template>
    <div>
        <el-row>
            <el-col lg="4" md="2" sm="1">用户名</el-col>
            <el-col lg="18" md="22" sm="23"><el-input v-model="username" placeholder="" type="text"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col lg="4" md="2" sm="1">密码</el-col>
            <el-col lg="18" md="22" sm="23"><el-input v-model="userpwd" placeholder="" type="password"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col><el-button type="button" @click="login"></el-button>
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