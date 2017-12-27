<template>
    <div id="body">
        <div class="head">
            <p>个人博客</p>
            <span>当前登录账户:host</span>
        </div>
        <el-container class="section">
            <el-row class="tac">
                <el-col :span="12">
                    <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
            <el-main class="right">

            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
#body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.head{
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    background: #5E9FA1;
    justify-content: space-between;
}
.head p{
    color: #fff;
    font-size: 18px;
    margin-left: 10px;
}
.head span{
    color: #fff;
    font-size: 18px;
    margin-right: 10px;
}
.section{
    width: 100%;
    height: 600px;
    display: flex;
    background: #ccc;
}
.tac{
    width: 20%;
    background: blue;
    display: flex;
    flex-direction: column;
}
.tac el-menu-item{
    width: 100%;
    height: 40px;
    background: #EDF5FF;
    line-height: 40px;
}
.right{
    width: 80%;
}
</style>
