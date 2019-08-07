<template>
<section>
    <article v-for="post in posts" :key="post.id">
        <div class="postShorten-wrap">
            <div class="postShorten-header">
                <router-link tag='h1' :to="'article/'+post.id">
                    {{ post.title }}
                </router-link>
                <div class="postShorten-meta">
                    <time>{{ post.updatedAt }}</time>
                    <span> in </span>
                    <a href="">{{ post.category }}</a>
                    <span> read({{ post.read }})</span>
                </div>
            </div>
            <div class="postShorten-excerpt">
                <p>{{ post.excerpt }}</p>
            </div>
        </div>
        <div class="postShorten-thumbnailimg right">
            <img src="https://blog.liyuans.com/usr/themes/Themia/img/sj/32.jpg" alt="">
        </div>
        <div class="clear"></div>
    </article>
    <div class="page">
        <ul>
            <li class="page-prev left">
                <router-link to="/">
                    上一页
                </router-link>
            </li>
            <li class="page-next left">
                <router-link to="/">
                    下一页
                </router-link>
            </li>
            <li class="right">第 1 页 / 共 1 页</li>
        </ul>
    </div>
</section>
</template>

<script>
export default {
    name: 'sectionTemp',
    data() {
        return {
            posts: [
                { id: 1,title: "Rust 🦀 和 WebAssembly 🕸", updatedAt: "2018-05-01",  category: "rust", read: 1123, excerpt: "这本书描述了 rust 和 WebAssembly 的使用。", thumbnailimg: ''},
                { id: 2,title: "这是一个实验性标题", updatedAt: "2018-03-01",  category: "教程", read: 1123, excerpt: "这是文章内容的摘录，就是这么简单...", thumbnailimg: ''},
                { id: 3,title: "这是测试标题的文章", updatedAt: "2018-09-01",  category: "其他", read: 1123, excerpt: "这是文章内容的摘录，就是这么简单...", thumbnailimg: ''},
                { id: 4,title: "这是一个测试标题", updatedAt: "2018-08-01",  category: "ssr", read: 1123, excerpt: "这是文章内容的摘录，就是这么简单...", thumbnailimg: ''},
                { id: 6,title: "这是一个标题--------", updatedAt: "2019-05-01",  category: "rss", read: 1123, excerpt: "这是文章内容的摘录，就是这么简单...", thumbnailimg: ''},
            ]
        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    h1 {
        cursor: pointer;
        color: #555;
        font-size: 24px;
        margin: 0;
    }
    p {
        margin-top: 4px;
    } 

    section {
        width: 90%;
        margin: 0 auto;
        color: #5d686f;
    }
    article {
        width: 100%;
        margin: 24px 0 0;
        border-bottom: 1px solid #e3e3e3;
    }

    .page {
        margin-top: 12px;
    }
    .page ul {
        margin: 0;
        padding: 0;
    }
    .page li {
        list-style: none;
    }

    .page-next a,
    .page-prev a {
        display: inline-block;
        padding: 4px 12px;
        border: 1px solid #718C8E;
        border-radius: 4px;
        font-size: 14px;
        margin: 4px;
        color: #718C8E;
    }
    .page-next a:hover,
    .page-prev a:hover {
        border-color: #34aaf2;
        color: #34aaf2;
    }
    .postShorten-wrap {
        width: calc(100% - 160px);
        display: inline-block;
    }

    .postShorten-thumbnailimg {
        width: 160px;
        height: 100%;
        display:inline-block;
    }

    .postShorten-thumbnailimg img {
        margin: 24px 0 16px 16px;
        width: 140px;
        height:140px;
        border-radius: 8px;
    }
    
    @media only screen and (max-width: 480px) {
        .postShorten-thumbnailimg {
            display: none;
        }
        .postShorten-wrap {
            width: 100%;
        }
    }
</style>


