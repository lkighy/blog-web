<template>
  <div>

    <div class="main">
      <transition
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutDown"
      :duration="{ enter: 1000, leave: 1000 }"
      mode="out-in"
      >
        <router-view></router-view>
      </transition>
      <footer>
        <span><img src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" alt="" width="14px">{{ blogName }}</span>
        &nbsp;<a href="">统计</a>
      </footer>
    </div>

    <header>
      <span
      @click="openSidebar"
      class="left list">
        <a>
          <i class="icon-list"></i>
        </a>
      </span>
      <span>
        <a href="">{{ blogName }} 的博客
        </a>
      </span>
      <span class="right search">
        <a href="javascript:;" @click="openSearch">
          <i class="icon-search"></i>
        </a>
      </span>
    </header>

    <div
      @click="openSidebar"
      v-show="displaySidebar"
      class="black"
    ></div>
    
    <transition
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated fadeOutLeft"
    :duration="{ enter: 800, leave: 800 }"
    >
    <nav v-show="displaySidebar">
      <div class="sidebar-profile">
        <div>
          <img :src="picture" alt="头像">
        </div>
          <span>{{ blogName }} 的博客</span>
      </div>
      <ul class="sidebar-buttons">
          <li>
              <router-link to="/">
                  <i class="icon-home"></i>
                  <span>主页</span>
              </router-link>
          </li>
          <li>
              <router-link to="/class">
                  <i class="icon-class"></i>
                  <span>分类</span>
              </router-link>
          </li>
          <li>
              <router-link to="/archive">
              <!-- <a href="" @click="openSearch"> -->
                  <i class="icon-archive"></i>
                  <span>归档</span>
              </router-link>
              <!-- </a> -->
          </li>
          <li>
              <a href="javascript:;" @click="openSearch">
                <i class="icon-search"></i>
                <span>搜索</span>
              </a>
          </li>
          <li>
              <router-link to="/info">
                  <i class="icon-info"></i>
                  <span>关于</span>
              </router-link>
          </li>
      </ul>
    </nav>
    </transition>

    <transition
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
    :duration="{ enter: 800, leave: 800 }"
    >
      <div v-show="displaySearch" class="search_form">
        <div class="close_search" @click="openSearch">
        </div>
        <input class="search_input" type="text" placeholder="输入搜索关键字">
      </div>
    </transition>

  </div>
</template>

<script>
import router from './router'
import './lib/css/animate.css'

export default {
  name: 'app',
  router,
  data() {
    return {
      windowHeight: 0,
      blogName: '青丘梦',
      picture: 'https://www.rust-lang.org/static/images/webassembly.svg',
      // 显示菜单
      displaySidebar: false,
      displaySearch: false
    }
  },
  methods: {
    handleResize() {
      this.windowHeight = window.innerWidth;
    },
    openSidebar() {
      this.displaySidebar = !this.displaySidebar
    },
    openSearch() {
      this.displaySearch = !this.displaySearch
    }
  },
  watch: {
    'windowHeight': function() {
      if (this.windowHeight < 769) {
        this.displaySidebar = false
      } else {
        this.displaySidebar = true
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style>
  .close_search {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 24px;
    height: 24px;
    background-color: #555;
  }
  .search_form {
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }
  .search_input {
    position: absolute;
    display: inline-block;
    top: 40%;
    left: 10%;
    right: 10%;
    width: 80%;
    border: none;
    border-bottom: 2px solid #555;
    outline: none;
    font-size: 24px;
    text-align: center;
    color: #555;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .black {
    display: none;
  }
  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 56px;
    border-bottom : 1px solid #e9e9e9;
    text-align: center;
    line-height: 56px;
    display: none;
    background-color: #fff;
  }

  header i {
    line-height: 70px;
    font-size: 24px;
  }

  header .list,
  header .search {
    padding: 0 12px;
    line-height: 64px;
  }

  header a {
    color: #88909a;
    text-decoration: none;
    vertical-align: middle;
  }

  nav {
      position: fixed;
      top: 0;
      bottom: 0;
      background-color: #000;
      width: 240px;
      text-align: center;
      color: #fff;
      font-size: 18px;
  }

  .sidebar-profile img {
    margin: 32px auto 4px;
    width: 88px;
    height: 88px;
    border-radius: 50%;
  }

  .sidebar-buttons {
    margin: 24px 0 0;
    padding: 0;
  }
  .sidebar-buttons {
    list-style: none;
  }

  .sidebar-buttons a {   
    padding: 12px 0;
    display: inline-block;
    text-decoration: none;
    color: #fff;
    vertical-align: middle;
  }

  .sidebar-buttons span {
      margin: 0 24px;
  }

  .sidebar-buttons i {
      font-size: 24px;
  }

  .main {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 240px;
    background-color: #fff;
    overflow: auto;
    /* padding-top: 16px; */
  }

  .main::-webkit-scrollbar {
      width: 8px;
      background-color: #e3e3e3;
  }
  .main::-webkit-scrollbar-thumb {
      background-color: #999;
  }

  footer {
    margin: 72px auto 20px;
    padding: 20px;
    text-align: center;
    color: #34aaf2;
  }

  @media only screen and (max-width: 1170px) and (min-width: 769px) {
    nav {
      width: 64px;
    }
    nav span {
        display: none;
    }
    .sidebar-profile img {
        width: 44px;
        height: 44px;
        margin-top: 16px;
    }
    .sidebar-buttons {
        margin-top: 8px;
    }
    .main {
        left: 64px;
    }
  }

  @media only screen and (max-width: 768px) {
    /* nav {
        display: none;
    } */
    .main {
        /* top: 56px; */
        padding-top: 56px;
        /* margin-top: 56px; */
        left: 0;
    }
    header {
        display: block;
    }
    header .list {
        margin-left: 12px;
    }
    header .search {
        margin-right: 12px;
    }
    .black {
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: inline-block;
    }
  }
</style>
