<template>
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
</template>

<script>
export default {

}
</script>

<style>
    .respond {
        margin: 24px 0;
        width: 100%;
    }
    .respond > span {
        display: inline-block;
        font-size: 14px;
        margin-bottom: 8px;
    }
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
</style>