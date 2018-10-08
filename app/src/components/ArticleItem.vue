<template>
    <li class="article_item">
        <a href="">
        <h1>{{title}}</h1>
        <div class="imgBox"><img :src="img" :alt="title"></div>
        <div class="article-info">
            <p>{{content}}</p>
            <div class="info">
                <span class="time"><i class="el-icon-time"></i>{{time}}</span> 
                <span class="see"><i class="el-icon-view"></i>已阅{{watch}}</span>
                <span class="like"><i class="el-icon-star-on"></i>{{like}}</span>
                </div>
        </div>
        </a>
    </li>
</template>
<script>
export default {
    //title:标题,index:索引值,content:内容,time:时间,watch:阅览数,like:收藏,img:图片路径
    props: ['title','index','content','time','watch','like','img']
}
</script>
<style>

</style>


