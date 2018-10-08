<template>
    <div class="me">
        <div class="imgbox"><img src="../assets/images/carousel.jpg" alt=""></div>
        <div class="container">
            <h1>欢迎您来到LiLiMing的博客，学习、工作、生活，都要精彩！</h1>
            <div class="content">

            </div>
        </div>   
    </div>
</template>
<script>
export default {
    name: 'Me',
    data () {
        return {
            
        }
    }
}
</script>
<style lang="scss">
    .imgbox{
        width: 100%;
        height: 200px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .container{
        width:1200px;
        margin: 0 auto;
        overflow: hidden;
    }
</style>


