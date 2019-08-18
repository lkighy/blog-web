<template>
    <article>
        <!-- <div class="post-header">
            <h1 class="post-title">Rust 🦀 和 WebAssembly 🕸</h1>
            <div class="post-meta">
                <time></time>
                <span> in </span>
                <a href=""> 其他 </a>
                <span>read(1123)</span>
            </div>
        </div> -->
        <div class="post-content markdown-body" v-html="article">
        </div>
        <div class="post-footer">
            <div class="post-footer-tags">
                <span>文章分类:</span>
                <span class="right">最后编辑于 {{ info.updatedAt }}</span>
                <div class="tag">
                    <router-link :to="'/search/tag/'+tag" v-for="(tag, i) in info.tags" :key="i">
                        {{ tag }}
                    </router-link>
                </div>
            </div>
            <div class="post-actions-wrap">
                <a href="" class="article-prev">上一篇</a>
                <a href="" class="article-next">下一篇</a>
            </div>

        </div>
    </article>
</template>

<script>
import '../lib/css/github-markdown.css'
export default {
    name: 'articleTemp',
    data() {
        return {
            articleId: "",
            article: "",
            info: {},
        }
    },
    methods: {
        getArticleId() {
            this.articleId = this.$route.params.id
        },
        getExcerpt() {
            this.axios.get(this.$store.state.excerptURL+this.articleId+".json")
            .then(res => {
                this.info = res.data.excerpt
            })
            .catch(err => {
                // 
            })
        },
        getArticle() {
            this.axios.get(this.$store.state.htmlBookURL+this.articleId+".html")
                .then(res => {
                    this.article = res.data
                })
                .catch(err => {
                    // this.article = err.response.status
                })
        },
        getArticlePrev() {

        },
        getArticleNext() {
            
        }
    },
    mounted() {
        this.getArticleId()
        this.getArticle()
        this.getExcerpt()
    },
}
</script>

<style>
    article {
        width: 90%;
        margin: 0 auto;
    }
    .post-content {
        padding-top: 24px;
    }
    .post-footer {
        color: #888;
        margin-top: 16px;
        padding-bottom: 8px;
    }
    .tag a {
        display: inline-block;
        padding: 4px 8px;
        margin: 4px;
        border: 1px solid #349ef3;
        border-radius: 4px;
        color: #349ef3;
    }
    .tag a:hover {
        color: #0366d6;
        border-color: #0366d6;
    }
    .post-footer-tags {
        border-bottom: 1px solid #e3e3e3;
        padding-bottom: 12px;
    }

    .post-actions-wrap a {
        display: inline-block;
        padding: 4px 12px;
        border: 1px solid #aaa;
        border-radius: 4px;
        margin: 4px;
        color: #aaa;
        text-decoration: none;
    }
    .post-actions-wrap a:hover {
        text-decoration: none;
        color: #326799;
        border-color: #326799;
    }
</style>

