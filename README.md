# blog

## 请求数据

首页    /:page      `:page` 为页码
文章    /article/:id    `:id` 为文章id
分类    /categories
标签    /tags

### 数据请求

/book
    /index/{{:page}}.json           首页请求
        /tags_index.json            标签索引
        /categories_index.json      分类索引
    /htmlbook/{{ :id }}.html        html文章请求
    /mdbook/{{ :id }}.md            md文章请求
    /tags.json                      所有标签
    /categories.json                所有分类
    /info.json                      博客信息
