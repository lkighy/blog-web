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
        <div class="post-content markdown-body">
            <h1><a id="0"></a>Rust 🦀 和 WebAssembly 🕸</h1>
            <p>这本书描述了 <a href="https://www.rust-lang.org/">rust</a> 和 <a href="https://webassembly.org/">WebAssembly</a> 的使用。</p>
            <h2><a id="3"></a>这本书适合什么人？</h2>
            <p>本书适用于任何有兴趣将 rust 编译为 WebAssembly 的人，以便在 web 上获得快速、可靠的代码。您应该了解一些 Rust，并熟悉 JavaScript 和 CSS。您不需要成为其中一个的专家。</p>
            <p>不知道 Rust？ 首先从<a href="https://doc.rust-lang.org/book/"><em>rust 编程语言开始</em></a>。</p>
            <p>不懂 JavaScript,HTML 或 CSS？ <a href="https://developer.mozilla.org/en-US/docs/Learn">在MDN上了解他们</a>。</p>
            <h2><a id="11"></a>如何阅读本书</h2>
            <p>您应该先阅读<a href="./2.%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AFRust%E5%92%8CWebAssmbly.md">使用 Rust 和 WebAssembly 的动机</a>，并熟悉其<a href="https://rustwasm.github.io/docs/book/background-and-concepts.html">背景和概念</a>。</p>
            <p>本教程应头阅读到尾。您应该：自己编写、编译和运行教程代码。如果您之前没有使用过 Rust 和 web Assembly。请从先了解它们。</p>
            <p><a href="https://rustwasm.github.io/docs/book/reference/index.html">参考部分</a>可以按任何顺序进行阅读。</p>
            <blockquote>
            <p>💡 提示: 您可以通过点击页面顶部的 🔍 图标 或按 s 键来搜索本书。</p>
            </blockquote>
            <h2><a id="21"></a>为本书做贡献</h2>
            <p>这本书是开源的！找个拼写错误？或我们忽略了什么？向我们<a href="https://github.com/rustwasm/book"><strong>发送拉取请求吧</strong></a>。</p>
        </div>
        <div class="post-footer">
            <div class="post-footer-tags">
                <span>文章分类:</span>
                <span class="right">最后编辑于 2019/01/18</span>
                <div class="tag">
                    <a href="">rust</a>
                    <a href="">WebAssembly</a>
                </div>
            </div>
            <div class="post-actions-wrap">
                <a href="" class="article-prev">上一篇</a>
                <a href="" class="article-next">下一篇</a>
            </div>

            <div class="comments">
                <div class="respond">
                    <span>发表新评论</span>
                    <div class="comment-form">
                        <input type="text" placeholder="称呼 *">
                        <input type="text" placeholder="电子邮箱 *">
                        <textarea name="text" placeholder="在这里输入您的评论"></textarea>
                        <button>提交评论</button>
                    </div>
                </div>
                <div class="comment-list">
                    <!-- 评论列表 -->
                    <div class="li-comment">
                        <div class="avatar left">青</div>
                        <div>
                            <div class="comment-meta">
                                <span class="username">青丘梦</span>
                                <span> 在 <time> 2 天前</time> 回复 </span>
                                <span class="username">梦青丘</span>
                            </div>
                            <div class="comment-main markdown-body">
                                <p>您应该先阅读<a href="./2.%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AFRust%E5%92%8CWebAssmbly.md">使用 Rust 和 WebAssembly 的动机</a>，并熟悉其<a href="https://rustwasm.github.io/docs/book/background-and-concepts.html">背景和概念</a>。
                                这本书是开源的！找个拼写错误？或我们忽略了什么？向我们<a href="https://github.com/rustwasm/book"><strong>发送拉取请求吧</strong></a>。</p>
                            </div>
                        </div>
                    </div>
                    <div class="li-comment">
                        <div class="avatar left">梦</div>
                        <div>
                            <div class="comment-meta">
                                <span class="username">青丘梦</span>
                                <span> 在 <time> 2 天前</time> 回复 </span>
                                <span class="username"></span>
                            </div>
                            <div class="comment-main markdown-body">
                                <p>您应该先阅读<a href="./2.%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AFRust%E5%92%8CWebAssmbly.md">使用 Rust 和 WebAssembly 的动机</a>，并熟悉其<a href="https://rustwasm.github.io/docs/book/background-and-concepts.html">背景和概念</a>。
                                这本书是开源的！找个拼写错误？或我们忽略了什么？向我们<a href="https://github.com/rustwasm/book"><strong>发送拉取请求吧</strong></a>。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import '../lib/css/github-markdown.css'
export default {
    name: 'articleTemp',
    props: ['title'],
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
    .comment-main {
        overflow: hidden;
        border-radius: 4px;
        background-color: #e6e6e6;
        padding: 8px 12px;
    }
    .comment-meta {
        font-size: 12px;
        margin: 12px 0;
    }
    .comment-meta .username {
        background-color: #bbb;
        border-radius: 4px;
        padding: 2px;
        color: #fff;
    }
    .li-comment {
        padding: 12px 0 16px;
        border-bottom: 1px solid #eee;
    }
    .li-comment .avatar {
        margin: 12px;
        width: 40px;
        height: 40px;
        background-color: #89C0E8;
        color: #fff;
        font-size: 32px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
    }
    .respond {
        margin: 24px 0;
        width: 100%;
    }
    .respond > span {
        display: inline-block;
        font-size: 14px;
        margin-bottom: 8px;
    }
    .comment-form input,
    .comment-form textarea {
        width: 96%;
        border-radius: 4px;
        border: 1px solid #ddd;
        margin: 8px auto;
        padding-left: 12px;
        font-size: 16px;
        outline: none;
    }
    .comment-form input {
        height: 40px;
    }
    .comment-form textarea {
        height: 160px;
        border-radius: 4px;
        resize: none;
        padding-top: 8px;
    }
    .comment-form button {
        padding: 8px 12px;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #ddd;
        color: #bbb;
        outline: none;
    }
    .comment-form button:hover {
        border: 1px solid #349ef3;
        color: #349ef3;
    }

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

