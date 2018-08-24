# **Html和Css知识**

这些是我平时学习记下的笔记，在这里做个整理方便随时随时查看

## **关于html的**
**知识小结1：**
1. 移动端的显示，在meta加一个viewpoint.宽度等于设备宽度（适配移动端的第一步）
   `<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">`
2. 用CSS可以做好看的checkbox。可以用label【for】关联。
3. form表单用于批量提交。虽然不是必需的，可以用ajax完成这个功能（我之前就是这么干的）。但只要涉及到表单最好用form，有自带的提交和重置。
<br/>

**关于html的版本：（不同版标准不一样）**
1. W3C有一个检测页面的网站[检查html文档的准确性](https://validator.w3.org)
2. Html5特性：
   - 新增区块：1.section  2.article 3.nav 4.aside
   - 表单增强：1.日期，时间，搜索  2.表单验证 3.placeholder自动焦距
<br/>

**Html元素分类：**
1. 块级block 
2. 行内inline
3. inline-block
其实display还有none,flex等
注意：**span**是行内元素
<br/>

**Html嵌套关系：**
1. 块级可以包内行
2. 块不一定能包块 （比如p）
3. 行内一般不可以包块级  （除a，因为新标准忽略了a）
   a>div合法
<br/>

**我在chrome上调试程序，看到的user agent stylesheet指的是浏览器默认的样式**
**css rest** 样式归零。因为浏览器会自带样式，所以需要样式归零。
**normalize.css**一个样式归零的cs
**万能归零**:（但要考虑选择器性能）
```
*{
	margin:0;
    padding:0;	
 }
```
<br/>

## **Css基础**
**选择器作用：**
- 用于匹配HTML元素
- 有不同的匹配规则

注意：浏览器解析css,是从右往左解析的。
<br/>

**选择器分类：**
- 元素选择器：a{}
- 伪元素选择器 ::before{}
- 类选择器 .link{}
- 属性选择器 【type=radio】{}
- 伪类选择器  :hover{}
- ID选择器 #id{}
- 组合选择器 【type=checkbox】+label{}
- 否定选择器 :not(.link){}
- 通用选择器 *{}
<br/>

注意：
1.!important 优先级最高
2.然后是元素属性 优先级高
3.同权重，后写的生效
<br/>

**自定义字体：**
关于自定义字体，其用法是：
```
@font-face {
    font-family: "IF";
    src: url("./IndieFlower.ttf");  // 引入字体格式文件
}
.custom-font{
    font-family: IF;
}
```

多平台下的字体选择，用fallBack机制
**注意：阿里巴巴的iconfont可以加入购物车再下载，这样可以制作自己想要的雪碧图**

