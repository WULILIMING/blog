<template>
    <div class="add-article">
        <div class="container">
            <el-row>
                <el-col :span="24"><h1>编辑文章</h1></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><el-input v-model="title" type="text" placeholder="请输入标题"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><el-input v-model="imgsrc" type="text" placeholder="请输入路径"></el-input></el-col>
            </el-row>
            
            <el-input
                type="textarea"
                autosize
                placeholder="请输入文章内容"
                v-model="content">
            </el-input>
            <el-input v-model="time" type="number" @focus="getTime()" placeholder="请输入时间"></el-input>
            <el-input v-model="watch" type="number" placeholder="请输入阅览数量"></el-input>
            <el-input v-model="like" type="number" placeholder="请输入收藏数"></el-input>
            <el-input v-model="type" type="number" placeholder="请输入类型"></el-input>
            <el-button type="success" @click="addItem()">提交</el-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'add-article',
    data () {
        return {
            title:'',
            imgsrc:'',
            content:'',
            time:0,
            watch:0,
            like:0,
            type:0
        }
    },
    methods:{
        getTime: function(){
            this.time = Date.now();
        },
        addItem: function(){
            axios.post('/api/insertArticle',{
                title: this.title,
                imgsrc: this.imgsrc,
                content: this.content,
                time: parseInt(this.time),
                watch: parseInt(this.watch),
                like: parseInt(this.like),
                type: parseInt(this.type)
                
            }).then((res)=>{
                console.log('新增文章成功',res.data);
                alert('新增文章成功');
                this.$router.push('/home');
            }).catch((err)=>{
                console.log('新增文章失败',err);
            })
        }
    }
}
</script>
<style lang="scss">
.container{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    h1{
        display: block;
        width: 100%;
        font-size: 24px;
        color: #444;
        margin: 0;
        margin-top: 20px;
    }
    .el-row{
        width: 100%;
    }
}
</style>


