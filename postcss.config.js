module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport":{
            //设计稿一般来说使用iphone6的
            viewportWidth: 375, //视窗的高度，对应的是我们设计稿的高度
            viewportHeight: 667,  //视窗的宽度，对应的是我们设计稿的宽度
            unitPrecision: 5,   //指定'px' 转换为视窗单位值的最小位数（很多时候无法整除）
            viewportUnit: 'vw',  //指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['ignore','tab-bar','tab-bat-item'],//指定不需要被转换的类
            minPixelValue: 1, //小于或者等于1px的不转换为视窗单位
            mediaQuery: false, //允许媒体查询中转换 'px',
            exclude: [/TabBar/] //匹配到有关于xxxTabBarxx的组件都不需要转换
        },
    }
}