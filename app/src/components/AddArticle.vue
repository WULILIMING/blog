<template>
    <div class="add-article">
        <div class="cont">
            <el-row>
                <el-col :span="24"><h1>新增文章</h1></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><el-input v-model="title" type="text" placeholder="文章标题"></el-input></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-select v-model="value" placeholder="请选择文章类型">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            size="medium">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <div class="editor">
                    <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
                </div>
            </el-row>
            <el-row>
                <div class="graid-content button"><el-button type="success" size="meduim" @click="addItem()">提交</el-button></div>
            </el-row>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import UE from '../components/Editor.vue';
export default {
    components: {UE},
    name:'add-article',
    data () {
        return {
            title:'',
            imgsrc:'',
            content:'',
            time:0,
            watch:0,
            like:0,
            type:0,
            defaultMsg: '这里是UE测试',
            config: {
                initialFrameWidth: null,
                initialFrameHeight: 350
            },
            options: [{
                value: '1',
                label: '学习笔记'
            }, {
                value: '2',
                label: '生活时光'
            }, {
                value: '3',
                label: '蚵仔煎'
            }, {
                value: '4',
                label: '龙须面'
            }, {
                value: '5',
                label: '北京烤鸭'
            }],
            value:''
        }
    },
    methods:{
        addItem: function(){
            this.time = Date.now();
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
.cont{
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
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-select{
        width: 100%;
    }
    .el-button{
        width: 100%;
    }
    .button{
        width: 20%;
        margin: 0 auto;
    }
}
</style>


