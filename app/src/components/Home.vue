<template>
    <div class="home">
        <div class="content">
            <div class="container">
                <!-- 左半部分 -->
                <main>
                    <!-- <div class="banner"><a href=""></a><img src="../assets/images/carousel.jpg" alt=""></div> -->
                    <div class="banner">
                        <el-carousel height="500px">
                            <el-carousel-item v-for="(item, key) in carouselArr" :key="key">
                                <a :href="item.index+'.vue'" class="cover"><img :src="item.src" :alt="item.text"><div class="title">{{item.text}}</div></a>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="articleList">
                        <ul>
                            <article-item
                                v-for="(item, index) of articlesArr"
                                :key="index"
                                :index="index"
                                :title="item.title"
                                :img="item.img"
                                :content="item.content"
                                :time="item.time"
                                :watch="item.watch"
                                :like="item.like"
                            ></article-item>
                        </ul>
                    </div>
                </main>
                <!-- 右半部分 -->
                <aside>
                    <div class="news">
                        <div class="news-item">
                            <a href="">
                                <div class="imgbox"><img src="../assets/images/news-item.png" alt="简约餐厅"></div>
                                <span>现代简约</span>
                                <h1>黑白灰简约工业风客厅与餐厅</h1>
                            </a>
                        </div>
                        <div class="news-item">
                            <a href="">
                                <div class="imgbox"><img src="../assets/images/news-item.png" alt="简约餐厅"></div>
                                <span>现代简约</span>
                                <h1>黑白灰简约工业风客厅与餐厅</h1>
                            </a>
                        </div>
                    </div>
                    <!-- 特别推荐 -->
                    <div class="recomm-special">
                        <h1>特别推荐</h1>
                        <div class="line"></div>
                        <div class="recomm-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="title">
                                <h3>想做全栈的前端开发程序员</h3>
                                <a href="">阅读</a>
                            </div>
                        </div>
                        <div class="recomm-item">
                            <div class="imgBox"><img src="../assets/images/recomm-item2.jpg" alt=""></div>
                            <div class="title">
                                <h3>想做全栈的前端开发程序员</h3>
                                <a href="">阅读</a>
                            </div>
                        </div>
                        <div class="recomm-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="title">
                                <h3>想做全栈的前端开发程序员</h3>
                                <a href="">阅读</a>
                            </div>
                        </div>
                    </div>
                    <!-- 推荐文章 -->
                    <div class="recomm-special recomm-article">
                        <h1>推荐文章</h1>
                        <div class="line"></div>
                        <div class="head">
                            <a href="">
                                <div class="imgbox"><img src="../assets/images/news-item.png" alt="简约餐厅"></div>
                                <h1>黑白灰简约工业风客厅与餐厅</h1>
                            </a>
                        </div>
                        <div class="article-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="article-info">
                                <p><a href="">法罗力热水器油烟机门店工装效果图</a></p>
                                <span>[2018-09-11]</span>
                            </div>
                        </div>
                        <div class="article-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="article-info">
                                <p><a href="">法罗力热水器油烟机门店工装效果图</a></p>
                                <span>[2018-09-11]</span>
                            </div>
                        </div>
                        <div class="article-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="article-info">
                                <p><a href="">法罗力热水器油烟机门店工装效果图</a></p>
                                <span>[2018-09-11]</span>
                            </div>
                        </div>
                        <div class="article-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="article-info">
                                <p><a href="">法罗力热水器油烟机门店工装效果图</a></p>
                                <span>[2018-09-11]</span>
                            </div>
                        </div>
                    </div>
                     <!-- 点击排行 -->
                    <div class="recomm-special recomm-article">
                        <h1>点击排行</h1>
                        <div class="line"></div>
                        <div class="head">
                            <a href="">
                                <div class="imgbox"><img src="../assets/images/news-item.png" alt="简约餐厅"></div>
                                <h1>黑白灰简约工业风客厅与餐厅</h1>
                            </a>
                        </div>
                        <div class="article-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="article-info">
                                <p><a href="">法罗力热水器油烟机门店工装效果图</a></p>
                                <span>[2018-09-11]</span>
                            </div>
                        </div>
                        <div class="article-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="article-info">
                                <p><a href="">法罗力热水器油烟机门店工装效果图</a></p>
                                <span>[2018-09-11]</span>
                            </div>
                        </div>
                        <div class="article-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="article-info">
                                <p><a href="">法罗力热水器油烟机门店工装效果图</a></p>
                                <span>[2018-09-11]</span>
                            </div>
                        </div>
                        <div class="article-item">
                            <div class="imgBox"><img src="../assets/images/news-item.png" alt=""></div>
                            <div class="article-info">
                                <p><a href="">法罗力热水器油烟机门店工装效果图</a></p>
                                <span>[2018-09-11]</span>
                            </div>
                        </div>
                    </div>
                    <!-- 关注我们 -->
                    <div class="recomm-special focus-us">
                        <h1>请关注我们吧，Come on!</h1>
                        <div class="line"></div>
                        <ul>
                            <li class="email">
                                <a href="javascript:;">
                                    17363397220@163.com
                                    <span>邮箱账号</span>
                                </a>
                            </li>
                            <li class="wechat">
                                <a href="javascript:;">
                                    ym15549027107
                                    <span>微信号</span>
                                </a>
                            </li>
                        </ul>
                        <div class="wechat-code">
                            <img src="../assets/images/ming-wechat.png" alt="Ming的微信">
                        </div>
                    </div>
                </aside>  
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import ArticleItem from './ArticleItem';
export default {
    name: 'Home',
    components: {
        'article-item': ArticleItem
    },
    data () {
        return {
            carouselArr:[
                {src:require('../assets/images/carousel.jpg'),text:'追寻梦想的路上',index:'1'},
                {src:require('../assets/images/carousel.jpg'),text:'追寻梦想的路上',index:'2'},
                {src:require('../assets/images/carousel.jpg'),text:'追寻梦想的路上',index:'3'}
            ],
            articlesArr:[]
        }
    },
    beforeMount () {
        axios.get('/api/getarticles')
            .then((res) => {
                this.articlesArr = res.data;
            })
            .catch((error) => {
                console.log('文章列表获取失败',error);
            })

    }
}
</script>
<style lang="scss">
$color:#66ccff;
.content{
    margin-top: 20px;
}
.container{
    width: 1200px;
    margin:0 auto;
    overflow: hidden;
}
/* 内容区域左半部分 */
.content main{
    float: left;
    width: 800px;
}
/* 轮播图--banner */
.content main .banner{
    width: 100%;
    height: 500px;
    border-radius: 6px;
    overflow: hidden;
}
.content main .banner a.cover{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
}
.content main .banner img{
    width: 100%;
    height: 100%;
}
.content main .banner .title{
    position: absolute;
    bottom: 15%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: 10px 0;
    font-size: 22px;
    letter-spacing: 4px;
    color: #eee;
    padding-left: 60px;
    background-color: rgba(0,0,0,.5);
}
/* 文章列表 */
li{
    list-style: none;
}
.articleList{
    width: 100%;
    height: auto;
    overflow: hidden;
}
.articleList ul{
    width: 100%;
    margin: 0;
    padding: 0;
}
.articleList .article_item{
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    padding: 30px 20px;
    background-color: #fff;
    border-radius: 6px;
}
.articleList .article_item>a{
    width: 100%;
    height: 100%;
    text-decoration: none;
}
.articleList .article_item a>h1{
    margin: 0;
    font-size: 24px;
    color: #666;
    margin-bottom: 20px;
}
.articleList .article_item .imgBox{
    display: inline-block;
    width: 30%;
    /* height: 150px; */
    vertical-align: top;
    /* border-radius: 6px; */
    overflow: hidden;
}
.articleList .article_item .imgBox>img{
    width: 100%;
    transition: all 1.2s;
}
.articleList .article_item .imgBox img:hover{
    transform: scale(1.05);
}
.articleList .article_item .article-info{
    display: inline-block;
    width: 60%;
    padding: 30px 10px;
    margin-left: 10px;
    vertical-align: top;
}
.articleList .article_item .article-info>p{
    font-size: 14px;
    text-align: justify;
    color: #444;
    margin: 0;
    margin-bottom: 15px;
}
.articleList .article_item .article-info .info{
    font-size: 12px;
    color: #555;
}
.articleList .article_item .article-info .info i{
    font-size: 14px;
    margin-right: 5px;
}
.articleList .article_item .article-info .info>span{
    margin-right: 20px;
}
/* 内容右半部分 */
.content aside{
    float: right;
    width: 380px;
    margin-left: 20px;
}
.content aside .news{
    margin-bottom: 20px;
    overflow: hidden;
    background-color: #f6f6f6;
}
.content aside .news-item:last-of-type{
    margin-top: 20px;
}
.content aside .news-item{
    position: relative;
    width: 100%;
    height: 240px;
    border-radius: 6px;
    background-color: #000;
    overflow: hidden;
}
.content aside .news-item>a{
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #555;
    background-color: rgba(0,0,0,.4);
}
.content aside .news-item .imgbox{
    width: 100%;
    height: 100%;
    border-radius: 6px;
    opacity: 0.6;
    overflow: hidden;
    transition: all .8s ease;
}
.content aside .news-item .imgbox:hover{
    opacity: 1;
}
.content aside .news-item .imgbox>img{
    width: 100%;
    height: 100%;
}
aside .news-item>a>span{
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    font-size: 14px;
    color: #fff;
    text-align: center;
    padding: 10px 20px;
    background-color: rgba(0,0,0,.7);
}
aside .news-item>a>h1{
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    font-size: 14px;
    color: #eee;
    text-align: left;
    padding: 10px 20px;
    background-color: rgba(0,0,0,.6);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
// 特别推荐部分
.recomm-special{
    box-sizing: border-box;
    width: 100%;
    padding: 30px 20px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    h1{
        font-size: 22px;
        margin: 0;
        color: #333;
        margin-bottom: 20px;
    }
    .line{
        width: 14%;
        height: 2px;
        background-color: #000;
        transition: all 1.2s;
    }
    .recomm-item{
        position: relative;
        width: 100%;
        font-size: 0;
        margin-top: 20px;
        background-color: #000;
        // border-radius: 6px;
        overflow: hidden;
        .imgBox{
            width: 100%;
            height: auto;
            overflow: hidden;
            opacity: 0.6;
            transition: all 0.8s;
            img{
                width: 100%;
            }
        }
        .title{
            position: absolute;
            top: 25%;
            left: 0;
            z-index: 1;
            width: 100%;
            color: #eee;
            font-size: 18px;
            text-align: center;
            h3{
                width: 100%;
                color: #eee;
                font-size: 18px;
                text-align: center;
            }
            a{
                display: inline-block;
                font-size: 12px;
                color: #eee;
                padding: 6px 18px;
                border: 1px solid #eee;
                border-radius: 10px;
                text-decoration: none;
                transition: all 0.8s;
            }
        }
    }
    
    .recomm-item:hover .imgBox{
        opacity: 1;
    }
    .recomm-item:hover .title>a{
        color: #333;
        background-color: #eee;
    }
}
.recomm-special:hover .line{
    width: 36%;
}
// 推荐文章部分
.recomm-article{
    margin-top: 20px;
    overflow: hidden;
    .head{
        position: relative;
        margin-top: 20px;
        background-color: #000;
        width: 100%;
        .imgbox{
            width: 100%;
            opacity: 0.6;
            overflow: hidden;
            img{
                width: 100%;
                transition: all .8s;
            }
        }
        h1{
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            font-size: 18px;
            color: #eee;
            padding: 10px 20px;
            margin: 0;
            background-color: rgba(0,0,0,.7);
        }
    }
    .head:hover .imgbox>img{
        transform: scale(1.05);
    }
    .article-item{
        width: 100%;
        margin-top: 20px;
        overflow: hidden;
        .imgBox{
            display: inline-block;
            width: 32%;
            max-height: 82px;
            font-size: 0;
            border: 1px solid #ccc;
            vertical-align: top;
            overflow: hidden;
            img{
                width: 100%;
                transition: all .8s;
            }
        }
        .article-info{
            float: right;
            display: inline-block;
            width: 65%;
            vertical-align: top;
            p{
                margin: 0;
                text-align: justify;
                line-height: 1.5;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
                a{
                    color: #555;
                    text-decoration: none;
                }
                a:hover{
                    color: $color;
                }
            }
            span{
                display: block;
                font-size: 14px;
                color: #555;
                margin-top: 18px;
            }
        }
    }
    .article-item:hover .imgBox>img{
        transform: scale(1.1);
    }
}
// 关注我们部分
.focus-us{
    margin-top: 20px;
    overflow: hidden;
    ul{
        margin: 0;
        padding: 0;
        margin-top: 20px;
        list-style:none;
        li{
            font-size: 12px;
            margin-bottom: 10px;
            background: #fff;
            color: #525252;
            line-height: 40px;
            padding: 0 0 0 34px;
            border: 1px solid #DDD;
            border-radius: 2px;
            position: relative;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            a{
                text-decoration: none;
                span{
                    float: right;
                    text-align: center;
                    width: 100px;
                    transition: all .6s;
                }
            }
        }
        li:hover a span{
            width: 130px;
        }
        .email{
            border: 1px solid #12aae8;
            background: url(../assets/images/gzbg.jpg) no-repeat 0 -150px;
            a{
                color: #12aae8;
                span{
                    color: #fff;
                    background-color: #12aae8;
                }
            }
        }
        .wechat{
            border: 1px solid #199872;
            background: url(../assets/images/gzbg.jpg) no-repeat 0 -200px;
            a{
                color: #199872;
                span{
                    color: #fff;
                    background-color: #199872;
                }
            }
        }
    }
    .wechat-code{
        display: block;
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
}
</style>


