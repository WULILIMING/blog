<template>
    <div class="main">
        <header>
            <div class="container">
                <div class="logo"><a href=""><img src="../assets/images/logo.png" alt="logo"></a></div>
                <div class="empty"></div>
                <div class="nav">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="transparent"
                        text-color="#fff"
                        active-text-color="#66ccff"
                        router>
                        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                            {{ item.navItem }}
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="search">
                    <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        resize="none"
                        v-model="input21">
                    </el-input>
                </div>
            </div>
        </header>
        <router-view></router-view>
        <footer>
            <a href="">LiLiMing's</a> blog & Created by <a href="">Ming</a> 
        </footer>
        <a href="javascript:;" class="toTop" v-show="show"><i class="el-icon-upload2"></i></a>
    </div>
</template>
<script>
export default {
    name: 'Main',
    data () {
        return {
            navList:[
                {name:'/home',navItem:'首页'},
                {name:'/me',navItem:'关于我'},
                {name:'/study',navItem:'学习笔记'},
                {name:'/works',navItem:'作品集'},
                {name:'/life',navItem:'生活时光'},
                {name:'/message',navItem:'留言板'},
            ],
            input21: '',
            activeIndex: '/home',
            show: true
        }
    },
    computed:{
        // activeIndex(){
        //     return this.$route.path.replace('/','');
        // }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(this);
        },
        
    }
}
</script>
<style>
    header{
        width: 100%;
        height: auto;
        background-color: rgba(0,0,0,.8);
    }
    .container{
        display: flex;
        flex-direction: row;
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    header>.container>.logo{
        position: relative;
        flex: 3;
        text-align: center;
    }
    header>.container>.logo>a>img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 80%;
        height: 80%;
    }
    header>.container>.nav{
        flex: 8;
    }
    header>.container>.empty,.search{
        flex: 3;
        line-height: 60px;
    }
    .el-menu--horizontal{
        border-bottom: none;
    }
    footer{
        font-size: 16px;
        color: #999;
        text-align: center;
        padding: 15px 0;
        margin-top: 20px;
        background-color: rgba(0,0,0,.8);
    }
    footer>a{
        font-size: 18px;
        color: #66ccff;
        opacity: 0.7;
        text-decoration: none;
    }
    footer>a:hover{
        opacity: 1.0;
    }
    .toTop{
        display: block;
        position: fixed;
        bottom: 10%;
        right: 2%;
        z-index: 1;
        width: 50px;
        height: 50px;
        color: #eee;
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        line-height: 50px;
        background-color: rgba(0,0,0,.8);
    }
</style>


