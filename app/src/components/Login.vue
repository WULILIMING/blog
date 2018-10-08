<template>
    <div class="login">
        <div class="loginbox">
            <h1>—— Login in ——</h1>
            <div>
                <input type="text" v-model="username" placeholder="请输入用户名">
            </div>
            <div>
                <input type="password" v-model="pwd" placeholder="请输入密码">
            </div>
            <a href="javscript:;" @click="toLogin()">登 录</a>
            <p>注意：该登录入口只提供管理员发布文章使用</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'Login',
    data () {
        return {
            username:'',
            pwd:''
        }
    },
    methods: {
        toLogin: function(){
            axios.post('/api/login',{
                username: this.username,
                pwd: this.pwd
            })
            .then((res)=>{
                console.log(res.data);
                if(res.data.status == 1){
                    console.log('登录成功',res.data);
                    alert(res.data.text);
                    this.$router.push('/addarticle');
                }else if(res.data.status == 0){
                    console.log('登录失败',res.data.text);
                }else if(res.data.status == 2){
                    console.log(res.data.text);
                }
                
            })
            .catch((err)=>{
                console.log('服务器无响应',err);
            })
        }
    }
}
</script>
<style lang="scss">
    .login{
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../assets/images/loginbg.jpg) no-repeat;
        background-size: 100%;
        .loginbox{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            width: 20%;
            height: 36%;
            min-width: 384px;
            min-height:308px;
            color: #eee;
            text-align: center;
            background-color: rgba(0,0,0,.5);
            border-radius: 8px;
            overflow-y: scroll;
            div{
                width: 80%;
                margin: 20px auto;
                border: 1px solid #eee;
                border-radius: 8px;
                overflow: hidden;
                input{
                    box-sizing: border-box;
                    display: inline-block;
                    width: 100%;
                    font-size: 16px;
                    color: #eee;
                    padding: 10px;
                    line-height: 1.5;
                    background: transparent;
                    outline: none;
                    border: 0;
                }
            }
            a{
                display: inline-block;
                width: 80%;
                margin: 0 auto;
                font-size: 18px;
                color: #66ccff;
                text-align: center;
                font-weight: 600;
                padding: 15px 0;
                // background-color: #ddd;
                border: 1px solid #eee;
                border-radius: 8px;
                text-decoration: none;
            }
            p{
                font-size: 12px;
                color: #66ccff;
                margin-top: 30px;
            }
        }
        .loginbox::-webkit-scrollbar {
            display: none;
        }
        
    }
</style>


