<template>
    <div>
        <el-row>
            <el-col :lg="24">
                <img src="">
            </el-col>
        </el-row>
        <el-row class="myrow">
            <el-col :sm="2" :lg="1">用户名：</el-col>
            <el-col :sm="22" :lg="23">
                <el-input type="text" size="small" v-model="username"></el-input>
            </el-col>
        </el-row>
        <el-row class="myrow">
            <el-col :sm="2" :lg="1">密码：</el-col>
            <el-col :sm="22" :lg="23">
                <el-input type="password" size="small" v-model="userpwd"></el-input>
            </el-col>
        </el-row>
        <el-row class="myrow">
            <el-col>
                <el-button type="primary" @click="login">登录</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username:'',
                userpwd:'',
            }
        },
        methods: {
            login() {
                this.$axios.post('login/checklogin',{login_name:this.username,pwd:this.userpwd}).then(res=>{
                    if(res.data.state==1)
                    {
                        console.log('返回数据');
                        console.log(res.data);
                        
                        let userid = res.data.list[0].Id;
                        this.$axios.get('service/GetToken?staffId='+userid).then(result=>{
                            console.log(result.data.Data)
                            localStorage.setItem('access_token', Qs.stringify(result.data.Data))
                            this.$router.push({ path: '/cll/ajax' })                        
                        })
                    }
                    else
                    {
                        alert(res.data.msg);
                    }
                },res=>{
                    console.log(res);
                });
            }
        },
    }
</script>

<style scoped>

</style>