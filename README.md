# blog-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## #/article/:id
传入的 id 值为 文章id
通过 文章id 查询文章
### ajax 请求的 json 数据
#### 文章
通过 id 去获取 html 格式的文章,然后在获取其他的资料,如 标签,最后编辑时间,评论等
请求一:

html 静态文件
`
请求二:

博文信息
```json
{
    "id": 1,
    "tags": ["rust", "WebAssembly"],
    "updatedAt": "2018-08-01",
    "createdAt": "2019-01-18",
}
```
请求三:

评论内容
```json
{
    [{
        "id": 1,
        "username": "青丘梦",
        "content": "这是评论内容",
        "childrenId": 2,
        "childrenUserName": "梦青丘",
        "updatedAt": "2018-08-01",
        "createdAt": "2019-01-18"
    },{
        "id": 1,
        "username": "青丘梦",
        "content": "这是评论内容",
        "childrenId": 2,
        "childrenUserName": "梦青丘",
        "updatedAt": "2018-08-01",
        "createdAt": "2019-01-18"
    }]
}
```
