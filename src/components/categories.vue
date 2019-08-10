<template>
    <div class="categories">
        <!-- 懒加载? -->
        <transition-group
        move-class="move"
        >
        <div class="categories-list" v-for="(menu, i) in categoriesMenu" :key="i">
            <div @click="dispalyList(i)">
                <h2 class="categories-title">
                    <div :class="[menu.isLoad && menu.isDisplay ? 'arrow-down' : 'arrow-left', 'arrow']"></div>
                    {{ menu.name }}
                </h2>
            </div>
            <transition
            enter-active-class="animated slideInDown"
            leave-active-class="absolute animated slideOutUp"
            :duration="{ enter: 800, leave: 800 }">
            <ul v-show="menu.isLoad && menu.isDisplay">
                <li v-for="(article, index) in menu.articles" :key="index">
                    <router-link>
                    {{ article.title }}
                    </router-link>
                    <time class="right">{{ article.createdAt }}</time>
                    <div class="clear"></div>
                </li> 
            </ul>
            </transition>
        </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "categoriesTemp",
    data() {
        return {
            categoriesMenu: [
                // 包含 id, name, articles, 是否以载入,是否显示
                {id: 1, name: "rust", isLoad: true, isDisplay: false, articles: [{title: "rust 入门", createdAt: "2017-05-01"}, {title: "rust 进阶", createdAt: "2017-05-08"}]},
                {id: 2, name: "golang", isLoad: true, isDisplay: false, articles: [{title: "golang 进阶", createdAt: "2018-05-07"}, {title: "golang 携程", createdAt: "2019-08-07"}]},
                {id: 3, name: "pthon", isLoad: false, isDisplay: false, articles: []}
            ]
        }
    },
    methods: {
        dispalyList(i) {
            this.categoriesMenu[i].isDisplay = !this.categoriesMenu[i].isDisplay
        }
    }
}
</script>

<style scoped>
    .absolute {
        position: absolute;
    }
    .move {
        transition: all 1s;
    }
    h1 {
        margin: 0;
    }
    ul {
        margin: 8px 0 16px 0;
    }
    .arrow {
        position: relative;
        width: 0;
        height: 0;
        padding: 0;
        margin: 0;
        display: inline-block;
        border: 6px solid transparent;
    }
    .arrow-left {
        border-left: 6px solid  #334499;
    }
    .arrow-top {
        top: -2px;
        border-bottom: 6px solid  #334499;
    }
    .arrow-right {
        border-right: 6px solid  #334499;
    }
    .arrow-down {
        left: -4px;
        top: 4px;
        border-top: 6px solid  #334499;
    }

    .categories {
        width: 90%;
        margin: 20px auto;
    }
    .categories-list h2 {
        cursor: pointer;
    }
    .categories-list ul {
        width: 100%;
        padding: 0 40px;
    }
    .categories-list ul li {
        width: 90%;
    }
    .categories-list ul li span {
        font-size: 18px;
    }
</style>