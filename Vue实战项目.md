## Vue实战项目supermall

要注意脚手架的版本

### 1、划分目录结构

![image-20201201100429096](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201201100429096.png)

### 2、css文件引入

#### 1、新建normalize.css

可以在github搜索，找到源码

```css
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
    margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */

main {
    display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
    background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
    font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
    font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
    border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
    overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
    text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
    vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
    overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
    display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
    display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
    display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
    display: none;
}
```



#### 2、新建base.css

代码搜索王红元老师的GitHub找到的，王红元老师的github

```java
https://github.com/coderwhy/supermall/blob/master/src/assets/css/base.css
```



```css
@import "./normalize.css";

/*:root -> 获取根元素html*/
:root {
    --color-text: #666;
    --color-high-text: #ff5777;
    --color-tint: #ff8198;
    --color-background: #fff;
    --font-size: 14px;
    --line-height: 1.5;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    user-select: none; /* 禁止用户鼠标在页面上选中文字/图片等 */
    -webkit-tap-highlight-color: transparent; /* webkit是苹果浏览器引擎，tap点击，highlight背景高亮，color颜色，颜色用数值调节 */
    background: var(--color-background);
    color: var(--color-text);
    /* rem vw/vh */
    width: 100vw;
}

a {
    color: var(--color-text);
    text-decoration: none;
}


.clear-fix::after {
    clear: both;
    content: '';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
}

.clear-fix {
    zoom: 1;
}

.left {
    float: left;
}

.right {
    float: right;
}

```

然后记得在App.vue里面去注册它

```vue
<style>
  @import "assets/css/base.css";
</style>
```





### 3、配置别名

在**supermall目录下**新建**vue.config.js**

```js
module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        //默认配置了@，src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
```

### 4、.editorconfig文件

vue-cli2才有，这里从旧代码复制过来

这个文件很重要，可以配置统一的缩进符号等，如果身为一个组长，那么就必须配置好这个文件

### 5、tabbar的引入和项目模块的划分

从旧代码把tabbat拷贝过来

![image-20201201104146561](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201201104146561.png)

#### 5.1、引入img图片

![image-20201201143513926](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201201143513926.png)

#### 5.2、导入路由

下载路由

```java
npm install vue-router
```

编辑router/index.js文件，即路由文件

在main.js注册路由

```java
import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')

```

在App.vue使用TabBar

```vue
<template>
  <div id="app">
    <router-view/>
    <main-tar-bar/>
  </div>
</template>

<script>

  import MainTarBar from "./components/content/mainTaBbar/MainTarBar";

export default {
  name: 'app',
  components: {
    MainTarBar
  }
}
</script>
```

### 6、首页导航栏的封装和使用

#### 6.1、创建一个新的NavBar放在，因为是每个版本都需要用到的

![image-20201201150458637](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201201150458637.png)

#### 6.2、NavBar编辑设置插槽和css

在里设置插槽要使用具名插槽，那么每次替换元素的时候才可以准确的选择到

#### 6.3、在Home里面使用

这里推荐背景颜色还有字体颜色在Home里面设置，因为每一个NavBar的颜色样式都是不一样的

### 7、请求首页多个数据

添加封装的network，安装axios

```java
npm install axios --save
```

#### 添加一个home.js封装Home的网络请求，专门面对Home的网络请求，home.js是面对request的。Home->home->request

#### 1、home.js

```js
import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}

```

#### 2、request.js封装好的网络请求

```js
import axios from 'axios'

export function request(config) {
     //1.创建axios的实例
      const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
      })
      //2、axios拦截器的使用
      //2.1请求拦截
      instance.interceptors.request.use((config) => {
        return config
      },(err) => {
        // console.log(err);
      })
      //2.1响应拦截
      instance.interceptors.response.use((res)=>{
        return res.data
      },(err)=>{
        console.log(err);
      })
      //3.发送真正的网络请求
      return instance(config)
}

```



在Home.vue调用网络请求获取数据

在组件创建的时候采用created去创建网络请求，在data里面初始化两个参数去接收返回的数据

```vue
import {getHomeMultidata} from "network/home";

export default {
    name: "Home",
    components:{
      NavBar
    },
    data(){
      return {

        // results: null
        banners: [],
        recommends: []

      }
    },
    created() {
      //1、请求多个数据，加括号调用函数，
      getHomeMultidata().then((res)=>{
        // console.log(res);
        // this.results = res
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
```

### 8、轮播图的展示

#### 1、先封装成组件再调用，直接复制包装好的组件Swiper

![image-20201201154833076](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201201154833076.png)

#### 2、在Home.vue里面导入Swiper，并且使用

先导入Swiper和SwiperItem，然后在template里面用for循环取出返回数据的链接和图片，将他们放入到对应的a标签和图片中

```vue
<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><div slot="center">购物车</div></NavBar>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from "network/home";
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name: "Home",
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    data(){
      return {

        // results: null
        banners: [],
        recommends: []

      }
    },
    created() {
      //1、请求多个数据，加括号调用函数，
      getHomeMultidata().then((res)=>{
        // console.log(res);
        // this.results = res
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
  }
</script>
```

#### 3、把Swiper部分抽取出来重新封装

在home文件夹下面新建childcomps

```vue
<template>
  <div id="home" class="wrapper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type: Array,
        default(){
          return[]
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>

```

#### 4、在Home使用该组件

要在Home.vue位置把数据传入到组件当中

```vue
<home-swiper :banners="banners"/>
```

### 9、首页开发-推荐信息展示

#### 1、封装组件

调整css，然后在template里面去调整数据展示位置，要在Home.vue传入数据，在组件里面接收数据

```vue
<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type: Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
  }
</style>

```

### 10、本周流行开发

#### 1、封装组件

```vue
<template>
  <div class="feature">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend_bg.jpg"/>
      </a>
  </div>
</template>

<script>
  export default {
    name: "featureView"
  }
</script>

<style scoped>
  .feature img{
    width: 100%;
  }
</style>

```

#### 2、在Home.vue使用

```vue
import FeatureView from "./childComps/FeatureView";

components:{
FeatureView
}
```

### 11、TabControl的封装

​	我们不需要每个都采取插槽的设置，因为每一个所需要的内容都是不一样的，只有纯文字的话我们只需要传入对应的文字就可以了

​	先建立一个独立的封装组件，在里面获取需要的titles，在Home中获取并且使用它，并且传入对应的数据，利用display: flex去排列它，使用for循环去遍历，使用:class="{active: index === currentIndex}"去实现点击变色的功能。

​	我们还需要实现滑动到顶部会停止，因为只需要在Home里面实现这种功能，所以我们在Home的界面给它添加css。

```vue
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      itemClick(index){
        // console.log(index);
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
  }
  .tab-control-item{
    flex: 1;

  }
  .tab-control-item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }


</style>

```

```vue
<tab-control :titles="['流行','新款','精选']" class="tab-control"/>
//滑动到距离顶部停止，这是暂时使用的方法
.tab-control{
    position: sticky;
    top: 44px;
  }
```

### 12、保存商品的数据结构

​	因为要同时保存流行，精选等数据信息，我们需要同时请求所有的数据。但是随着用户的点击，比如说用户下拉到流行的第五页，这时候点击精选的时候应该显示精选当时的页数。我们选择一下的数据结构去存储。默认的page为0

```java
goods:{
          'pop':{page: 0 , list:[]},
          'news':{page: 0 , list:[]},
          'sell':{page: 0 , list:[]},
        }
```

# ##################2020.12.01#####################



### 13、我们开发的时候created里面只放一些逻辑流程，methods里面放具体操作

```vue
created() {
      //1、请求多个数据，加括号调用函数，
      this.getHomeMultidata()
      //2、获取商品的所有信息
      this.getHomeGoods()
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then((res)=>{
          // console.log(res);
          // this.results = res
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        getHomeGoods(type,1).then((res)=>{
        console.log(res);
      })
      }
    }
```

### 14、利用解析的方法把网络请求数据数组里面的数据一一添加到data里面的数组

```vue
getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then((res)=>{
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
      })
      }
```



### *、从这里开始拿不到接口数据，只展示逻辑代码

### 15、首页开发-首页商品的展示

#### 1、首先我们要创建一个GoodsList的组件，这个组件是关于首页商品展示的部分

在里面接收从Home传来的数据，利用一个数组去接收，使用for循环去遍历每一个对象，把遍历出来的对象放在GoodsListItem里面去展示数据

```vue
<!-- <goods-list :goods="goods['pop'].list"/> --> //Home传入到GoodList获取pop的数据
```

##### GoodsList

```vue
<template>
  <div class="goods">
      <h2>{{goods}}</h2>
      <!-- <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item> -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
    name: "GoodsList",
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
</style>
```

##### GoodsListItem

使用goodsItem去接收数据

```vue
<template>
  <div>我是goodsListItem</div>
</template>

<script>
export default {
    name: 'GoodListItem',
    props:{
        goodsItem:{
            type: Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style>

</style>
```

实现的效果

![image-20201202113944685](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201202113944685.png)

### 16、tabControl点击切换商品

#### 1、点击按钮，子组件传数据到父组件，Home组件获取所点击的信息，根据返回的数据决定要传递给子组件什么数据渲染

tabControl.vue

在 这里实现传递下标出去，然后告诉Home自己点击的是哪一个主题，传出tabClick的事件产生

```vue
methods:{
      itemClick(index){
        // console.log(index);
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
```

在Home监听传出的tabClick事件，在methods中实现方法

```vue
 <tab-control :titles="['流行','新款','精选']" 
                  class="tab-control"
                  @tabClick="tabClick"
                  />
```

在method中，现在data定义一个变量currentType，因为我们的传入值是不是固定的，通过switch的语句去决定要传入的值是什么。

```
<goods-list :goods="goods[currentType].list"/>
```

```vue
methods:{
      /**
       * 事件监听的方法
       */
      tabClick(index){
        // console.log(index);
        switch(index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },
```

用计算属性去代替

```vue
computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    }
```

### 17、Better-Scroll的安装和使用

解决滑动卡顿的问题

#### 1、安装框架

```java
npm install better-scroll --save
```

#### 2、使用import引入

#### 3、使用

```vue
data(){
        return{
            scroll: null
        }
    },
    mounted() {
        console.log(document.querySelector('.wrapper'))
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
        })
    },
```

#### 4、注意要实现设定好wrapper的高度

![image-20201202172136334](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201202172136334.png)

#### 5、Better-Scroll的基本使用

##### 1、检测滚动probeType

```vue
mounted() {
        console.log(document.querySelector('.wrapper'))
        //默认情况下不侦测，probe侦测的意思
        //0,1都是不侦测
        //2：手指滑动的时候侦测
        //3: 只要滑动都侦测
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType: 3
        })
        this.scroll.on('scroll',(position)=>{
            console.log(position)
        })
    },
```

![image-20201202173726717](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201202173726717.png)

##### 2、click

项目补充

##### 3、pullUpLoad上拉加载更多

要先设置pullUpLoad: true，

监听pullingUp事件，上拉一次之后是不可以再次使用了，得使用**this.scroll.finishPullUp()**告诉组件已经上拉完毕，可以再次请求上拉

```vue
mounted() {
        console.log(document.querySelector('.wrapper'))
        //默认情况下不侦测，probe侦测的意思
        //0,1都是不侦测
        //2：手指滑动的时候侦测
        //3: 只要滑动都侦测
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType: 3,
            pullUpLoad: true
        })
        this.scroll.on('scroll',(position)=>{
            // console.log(position)
        })
        this.scroll.on('pullingUp', ()=> {
            console.log('上拉加载中')
            //发送网络请求，请求更多数据

            //等待数据请求完成，而且将更新的数据展示出来之后
            setTimeout(() => {
                this.scroll.finishPullUp()
            }, 2000);
        })
    },
```



