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
                <span>文章分类</span>
                <span>最后编辑于 2019/01/18</span>
                <div class="tag">
                    <a href="">rust</a>
                    <a href="">WebAssembly</a>
                </div>
            </div>
            <div class="post-actions-wrap">
            </div>
        </div>
    </article>
</template>

<script>
import '../lib/css/github-markdown.css'
export default {
    name: 'articleTemp'
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
</style>

