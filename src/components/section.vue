<template>
<section>
    <!-- <transition-group
    move-class="move"
    mode="out-in"
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutUp"
    :duration="{ enter: 1000, leave: 1000 }"
    > -->
    <article v-for="post in excerpts" :key="post.id">
        <div class="postShorten-wrap">
            <div class="postShorten-header">
                <router-link tag='h1' :to="'article/'+post.id">
                    {{ post.name }}
                </router-link>
                <div class="postShorten-meta">
                    <span>发表于 </span>
                    <span>{{ post.createdAt }}</span>
                    <span> 更新于 </span>
                    <span>{{ post.updatedAt }}</span>
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
    <!-- </transition-group> -->


    <div class="page">
        <ul>
            <li class="page-prev left">
                <router-link :to="`/?page=`+ (pages.current - 1)" :class="{'click-ban': page <= '1'}">
                    上一页
                </router-link>
            </li>
            <li class="page-next left">
                <router-link :to="'/?page='+ (pages.current + 1)" :class="{'click-ban': page >= pages.sum}">
                    下一页
                </router-link>
            </li>
            <li class="right">第 {{ pages.current }} 页 / 共 {{ pages.sum }} 页</li>
        </ul>
    </div>
</section>
</template>

<script>
import { get } from 'http';

export default {
    name: 'sectionTemp',
    data() {
        return {
            spare: true,
            status: 200,
            index: [],
            excerpts: [],
            posts: [],
            info: [],
            page: 1,
            pages: {
                current: 1,
                sum: 1
            }
        }
    },
    methods: {
        // 请求首页信息
        // async getHome() {
        //     let url = ""
        //     if (this.spare) {
        //         url = this.$store.state.indexURL+this.page+'.json'
        //     } else {
        //         url = this.$store.state.indexURL+this.page+'_copy.json'
        //     }
        //     await this.axios.get(url)
        //     .then( res => {
        //         this.pages = res.data.pages
        //         this.posts = res.data.index
        //     })
        //     .catch( err => {
        //         if (this.spare) {
        //             this.spare = false
        //             this.getHome()
        //         } else {
        //             this.status = err.response.status
        //             // 让页面变成 404 
        //             // console.log("404")
        //         }
        //     })
        // },
        async getIndex() {
            // 获取 index.json 文件, 副本是 index_copy.json
            let url = ""
            if (this.spare) {
                url = this.$store.state.indexURL + "index.json"
            } else {
                url = this.$store.state.indexURL + "index_copy.json"
            }
            await this.axios.get(url)
            .then( res => {
                // console.log("index: ",res.data.index)
                this.index = res.data.index
            })
            .catch( err => {
                if (this.spare) {
                    this.spare = false
                    this.getIndex()
                } else {
                    this.status = err.response.status
                }
            })
        },
        rmExcerpt() {
            // 循环移除 excerpts
            while (this.excerpts.length != 0) {
                this.excerpts.shift()
            }
        },
        async getExcerpt() {
            // 获取页码
            let num = this.index.length
            let sum = this.pages.sum
            let current = this.pages.current
            // 获取切片
            let idx = this.index.slice((current-1)*10, current < sum ? (current-1)*10+10:num)
            let url = this.$store.state.excerptURL
            for (let i = 0; i < idx.length; i++ ) {
                let id = idx[i]
                await this.axios.get(url+id+'.json')
                .then( res => {{
                    this.excerpts.push(res.data.excerpt)
                }})
                .catch( err => {
                    // console.log("文章id: ", id, "不存在")
                    // this.status = err.response.status
                    // 还需要再想一想
                })
            }
        },
        getPage() {
            // 获取当前页码
            let page = this.$route.query.page
            if (typeof(page) == "undefined") {
                this.page = "1"
            } else {
                this.page = page
            }
            // 获取页码数
            let num = this.index.length
            this.pages.sum = Math.ceil(num / this.$store.state.indexRow)
            this.pages.current = parseInt(this.page)
        }
    },
    watch: {
        '$route.query.page': function() {
            this.getPage()
            this.rmExcerpt()
            this.getExcerpt()
        }
    },
    mounted() {
        // this.getPage();
        // this.getHome();
        // this.getIndex();
        // this.getExcerpt();
        (async () => {
            await this.getIndex();
            this.getPage();
            await this.getExcerpt();
        })()
        // this.getExcerpt();
    }
}
</script>

<style scoped>
    .page .click-ban {
        cursor: not-allowed;
        pointer-events:none;
        color: #eee;
        border: 1px solid #eee;
    }
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


