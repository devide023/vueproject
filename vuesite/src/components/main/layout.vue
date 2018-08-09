<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <v-menutree></v-menutree>
            </el-aside>
            <el-container>
                <el-header height="">
                    <v-header></v-header>
                </el-header>
                <el-main height="">
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

</style>