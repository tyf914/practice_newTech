# 技术面试准备



### 非技术类
    1. 自我介绍
    2. 做过项目

1. **自我介绍**

   > 略

2. **做过项目**

   >简历有写




---



### 技术类


> 0. html类
>
> 1. css类
>
> 2. js类
>
> 3. ajax
>
> 4. 网络类
>
> 5. 算法类
>
> 6. 通用类
>
> 7. 概念类
>
> 8. 工程类
>
> 9. 安全类
>
> 10. 其他



### **HTML类**

1. **<!DOCTYPE> 声明**

   > **解释**
   >
   > <!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器以何种模式来渲染文档。
   >
   > 严格模式的排版和 JS 运作模式是以该浏览器支持的最高标准运行。
   >
   > 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
   >
   > DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。
   >
   > ​
   >
   > **你知道多少种Doctype文档类型？**
   >
   > 该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
   >
   > HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
   >
   > XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
   >
   > Standards（标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，而 Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。

2. **HTML5的了解**

   > 新的HTML标准。
   >
   > 标签的增改废，语义化，多媒体，canvas，svg，本地存储，跨平台，移动优先，Geolocation，Workers多线程处理。
   >
   > ​
   >
   > HTML5 中的一些有趣的新特性：
   >
   > - 用于绘画的 canvas 元素
   > - 用于媒介回放的 video 和 audio 元素
   > - 对本地离线存储的更好的支持
   > - 新的特殊内容元素，比如 article、footer、header、nav、section
   > - 新的表单控件，比如 calendar、date、time、email、url、search

3. **语义化**

   > 1. 语义化更具可读性，便于团队开发和维护，减少差异化。
   > 2. 去掉或者丢失样式的时，能够让页面呈现出清晰的结构
   > 2. 有利于SEO；
   > 4. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）；

4. **HTML5本地存储**

   > 1. **浏览器本地存储**
   >
   >    在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来取代globalStorage。
   >
   > 2. **html5中的Web Storage包括sessionStorage和localStorage。**
   >
   >    **sessionStorage**：
   >
   >    用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。
   >
   >    **localStorage**：
   >
   >    用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
   >
   >    ​
   >
   >    localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等
   >
   > 3. **web storage和cookie的区别**
   >
   >    Web Storage和cookie概念相似，但
   >
   >    1. 前者是为了更大容量存储设计的。而Cookie大小受限（不同浏览器情况不同）；
   >    2. Cookie每次你请求一个新的页面的时候Cookie都会被发送过去，浪费了带宽；
   >    3. cookie还需要指定作用域，不可以跨域调用；
   >    4. Web Storage拥有setItem,getItem,removeItem,clear等方法，cookie需要前端开发者自己封装setCookie，getCookie。
   >
   >    但cookie也是不可或缺的：cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生
   >
   > 4. **浏览器的支持**
   >
   >    除了IE7及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，通过代码封装可以统一到所有的浏览器都支持web storage。
   >
   > ​

​

------



### **CSS类**

总复习：[学习CSS布局](http://zh.learnlayout.com/)

1. **盒模型**

   > **含义**：
   >
   > 一个元素盒模型的层次从内到外分别为：内边距padding、边框border和外边距margin   
   >
   > **延伸**：
   >
   > 盒子模型分为两类：
   > W3C盒子模型：属性height和属性width不包含padding和border，即box-sizing的默认属性content-box
   > IE盒子模型：即border-box。
   >
   > 若不声明DOCTYPE类型，IE会将盒子模型解释为IE盒子模型，FireFox等会将其解释为W3C盒子模型；
   > 若声明了DOCTYPE模型，所有浏览器都会解释为W3C盒子模型。

2. **position**

   > [CSS中position属性介绍(新增sticky)](http://www.cnblogs.com/s1nker/p/4835079.html)

   | 属性     | 释义                                                         |
   | -------- | ------------------------------------------------------------ |
   | static   | 默认值。没有定位，元素出现在正常的流中                       |
   | inherit  | 继承父元素的position属性，IE8以及往前的版本都不支持inherit属性。 |
   | relative | 生成相对定位的元素，相对于其在普通流中的位置进行定位。       |
   | absolute | 生成绝对定位的元素， 相对于`position:relative/absolute`的父级元素定位，如果没有，就相对于body定位，但是没设置`left/right/top/bottom`中的某一项时，显示效果和没设置absolute一样。 |
   | fixed    | 生成固定定位的元素，通常相对于浏览器窗口或 frame 进行定位。（老版本IE不支持） |
   | sticky   | 生成粘性定位的元素，容器的位置根据正常文档流计算得出，目前并不是W3C推荐标准。具体见上面的链接 |

3. **浮动和清除浮动**

   > **原理**：  
   >
   > 浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。
   >
   > **浮动元素引起的问题**：
   >
   > （1）父元素的高度无法被撑开，影响与父元素同级的元素
   >
   > （2）与浮动元素同级的非浮动元素（内联元素）会跟随其后
   >
   > （3）若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构
   >
   > **解决方法**：  
   >
   > 使用CSS的`clear:both;`来清除元素的浮动可解决2、3问题，对于问题1，添加如下样式，给父元素添加clearfix样式：
   >
   > ```css
   > .clearfix:after{
   >     content: ".";
   >     display: block;
   >     height: 0;
   >     clear: both;
   >     visibility: hidden;
   > }
   > .clearfix{display: inline-block;} /* for IE/Mac */
   > ```
   >
   > **清除浮动的几种方法**：
   >
   > 1. 额外标签法，`<div style="clear:both;"></div>`（缺点：不过这个办法会增加额外的标签使HTML结构看起来不够简洁。）
   >
   > 2. 使用after伪类
   >
   >    ``` css
   >    #float:after{
   >      content:".";
   >      display:block;
   >      clear:both;
   >      height:0;
   >      visibility:hidden;
   >    }
   >    ```
   >
   > 3. 浮动外部元素
   >
   > 4. 设置overflow为hidden或者auto                    

4. **伪类**

   > [css3选择器——伪类选择器](http://www.w3cplus.com/css3/pseudo-class-selector)
   >
   > **伪类语法的两种表达方式**：
   >
   > ```css
   > a:link {color: red;}
   > a.className:hover {color: blue;}
   > ```
   >
   > 1. 动态伪类
   >
   >    ```css
   >    a:link /* 未被访问时 */
   >    a:visited /* 链接被访问过后  */
   >    a:hover /* 鼠标悬浮时 */
   >    a:active /* 鼠标点中激活链接时 */
   >    /* 应遵守先后顺序 Link--visited--hover--active */
   >
   >    :focus /* 用于元素成为焦点时，常用于表单元素 */
   >    ```
   >
   > 2. UI 元素状态伪类
   >
   >    `:enabled`,`:disabled`,`:checked`，主要针对表单元素
   >
   > 3. CSS3的`:nth`选择器
   >
   >    ```css
   >    :first-child /* 选择某个元素的第一个子元素 */ 
   >    :last-child /* 选择某个元素的最后一个子元素 */
   >    :nth-child() /* 选择某个元素的一个或多个特定的子元素 */
   >    :nth-last-child() /* 选择某个元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始算 */
   >    :nth-of-type() /* 选择指定的元素 */
   >    :nth-last-of-type() /* 选择指定的元素，从元素的最后一个开始计算 */
   >    :first-of-type /* 选择一个上级元素下的第一个同类子元素 */
   >    :last-of-type /* 选择一个上级元素的最后一个同类子元素 */
   >    :only-child选 /* 择的元素是它的父元素的唯一一个了元素 */
   >    :only-of-type /* 选择一个元素是它的上级元素的唯一一个相同类型的子元素 */
   >    :empty /* 选择的元素里面没有任何内容 */
   >    ```
   >
   >
   >    /* :nth-child()较为常用 */
   >    :nth-child(length); /* 参数是具体数字 */
   >    :nth-child(n); /* 参数是n,n从0开始计算,不能用负值。若直接用字母n,将选中所有子元素 */
   >    :nth-child(n*length) /* n的倍数选择，n从0开始算，字母只能用n */
   >    :nth-child(n+length); /* 选择大于length后面的元素 */
   >    :nth-child(-n+length) /* 选择小于length前面的元素 */
   >    :nth-child(n*length+1); /* 表示隔几选一 */
   >    ```
   >
   > 4. 否定选择器`:not`
   >
   >    ```css
   >    /* 与jQuery的:not选择器用法相同 */
   >    input:not([type="submit"]) {border: 1px solid red;}
   >    ```
   >
   > 5. **伪元素**
   >
   >    CSS3中为伪元素多加了个`:`，用来区分伪类和伪元素，目前两种写法皆可。
   >
   >    ```css
   >    p::first-line {} /* 选择元素的第一行 */
   >    p::first-letter {} /* 选择文本块的第一个字母 */
   >    ::before和::after /* 用来给元素的前面或后面插入内容，常用"content"配合使用，见过最多的就是清除浮动 */
   >    ::selection /* CSS3新增，用来改变浏览网页选中文本的background和color */
   >    ```


5. **css选择器优先级**

   > !important > id > class > tag  
   >
   > important 比 内联优先级高,但内联比 id 要高

6. **link标签和@import**

   > `<link>`:
   >
   > ```html
   > <link href="CSSurl路径" rel="stylesheet" type="text/css" />
   > ```
   >
   > `@import`:
   >
   > ```html
   > <!-- 1.在HTML中使用 -->
   > <style type="text/css">
   > 	@import url(CSS文件路径地址);
   > </style>
   >
   > <!-- 2.在CSS中直接使用 -->
   > ```
   >
   > 区别与选择：
   >
   > `<link>`是HTML标签，只能放入HTML代码中使用，`@import`可看做CSS样式，作用是引入CSS样式

7. **定位**

   > 1. **文档流**
   >
   >    将窗体自上而下分成一行一行,并在每行中按从左至右的挨次排放元素,即为普通流/文档流。
   >
   >    补充：内联元素为行内元素，非浮动块级元素都另起一行, 浮动元素则按规则浮在行的一端。若当时行容不下, 则另起新行再浮动。浮动元素的定位照样基于正常的文档流**浮动元素不占任何正常文档流空间**，当一个元素脱离正常文档流后，文档流中的其他元素将忽略该元素并填补其原先的空间
   >
   > 2. **文本流**
   >
   >    文档流相对于盒子模型，文本流相对于文字段落。
   >
   >    **元素浮动后**，跳出文档流。其他元素无视它所占据的区域直接在它身下布局，但文字不会无视，文字会围绕它布局，即**没有脱离文本流**。
   >
   >    绝对定位后，文字会脱离文本流，后面元素的文本不再认同它的位置区域，不再环绕。
   >
   > 3. **position定位**
   >
   >    | **属性值** | **文档流**           | **注释**                                                     |
   >    | ---------- | -------------------- | ------------------------------------------------------------ |
   >    | absolute   | 完全离开文档流       | 绝对定位；使用left，right，top，bottom等属性相对于其最接近的一个具有定位设置（即position值不为默认值static）的父对象进行绝对定位。如果不存在这样的父对象，则依据body对象。而其层叠通过z-index属性定义。当对象定位在浏览器窗口以外，浏览器因此显示滚动条 |
   >    | relative   | 原本所占的空间仍保留 | 相对定位；对象不可层叠，但将依据left，right，top，bottom等属性在正常文档流中偏移位置。当对象定位在浏览器窗口以外，浏览器因此显示滚动条。 |
   >    | fixed      | 完全离开文档流       | 固定定位； 对象定位遵从绝对(absolute)方式，但是要遵守一些规范。当对象定位在浏览器窗口以外，浏览器不会因此显示滚动条，而当滚动条滚动时，对象始终固定在原来位置，即相关于视区进行偏移。 |
   >    | static     | 正常文档流           | 默认情况； 元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。 |
   >    | inherit    | 视情况               | 继承值，对象将继承其父对象相应的值。                         |
   >
   > 4. **浮动**
   >
   >    见上文；
   >
   > 5. **元素的定位属性**
   >
   >    1. position以及相关的top/right/bottom/left
   >
   >    2. clip
   >
   >       ```css
   >       /* 这个属性用于给绝对定位元素定义一个裁切矩形，超出矩形区域的部分按overflow值进行处理
   >        */
   >       img{
   >           position:absolute;
   >           clip:rect(0px,60px,200px,0px);
   >       }
   >       ```
   >
   >    3. vertical-align
   >
   >       次元素影响**inline-level元素和table-cell元素**垂直方向上的布局。根据[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)描述，vertical-align对::first-letter和::first-line同样适用。
   >
   >    4. overflow
   >
   >       overflow属性指定如果内容溢出一个元素的框，会发生什么。（还有overflow-x和overflow-y）
   >
   >       | 值      | 描述                                                     |
   >       | ------- | -------------------------------------------------------- |
   >       | visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
   >       | hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
   >       | scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
   >       | auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
   >       | inherit | 规定应该从父元素继承 overflow 属性的值。                 |
   >
   >    5. z-index
   >
   >       z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）。属性值可为负数，属性值更大的元素显示在前。


7. **CSS3**

   > ​

8. **实现阴影有哪些方式**

   > box-shadow,text-shadow等等，用的不多，一般要用到再查

8. **对屏幕和鼠标的判定**

   > [《 JavaScript&jQuery交互式Web前端开发》读书笔记一：各种方式确定窗口、文档、鼠标的宽高、位移等信息](http://blog.csdn.net/u013836242/article/details/52910077)


10. **display的几种值**
    > 1. inherit
    > 2. none
    > 3. inline&inline开头的（常见：inline、inline-block）
    > 4. block
    > 5. flex
    > 6. ruby&ruby开头的
    > 7. table&table开头的（常见：table、table-cell）
    > 8. list-item
    > 9. run-in
    > 10. compact

11. **响应式布局**

    > 目前接触到的：
    >
    > 1. rem/em
    >
    >    em：1em = 父元素的`font-size`大小；
    >
    >    rem: 1rem = 根元素的`font-size`大小；
    >
    > 2. `calc()`
    >
    >    ```css
    >    width: calc(100% - 50px);
    >    /* 用于动态计算长度值。四则运算，运算符前后都需要保留一个空格 */
    >    ```
    >
    > 3. 媒体查询
    >
    >    ```css
    >    @media [not|only] mediatype and (expressions) {
    >        CSS code;
    >    }
    >    /* 常见mediaType:all、screen，通过在expressions中设置断点来为不同大小的屏幕匹配不同的样式 */
    >    ```
    >    ```html
    >    <!-- 也可以针对不同的媒体使用不同stylesheets -->
    >    <link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
    >    ```
    >
    > 4. viewport
    >
    >    ```HTML
    >    <!-- 简单来说就是显示网页的区域，若视口宽度大于设备宽度，出现横向滚动条 -->
    >    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    >    ```
    >
    > 5. devicePixelRatio
    >
    >    和ViewPort一样常见于移动端开发，window.devicePixelRatio = 物理像素 / 独立像素，比如在Retina屏的iphone上，devicePixelRatio = 2，1个css像素相当于2个物理像素。
    >
    >    这时会导致1px被渲染成2px，解决办法：
    >
    >    ```
    >    1 局部处理
    >        mate标签中的 viewport属性 ，initial-scale 设置为 1 
    >        rem 按照设计稿标准走，外加利用transfrome 的scale(0.5) 缩小一倍即可；
    >
    >    2 全局处理
    >        mate标签中的 viewport属性 ，initial-scale 设置为 0.5
    >        rem 按照设计稿标准走即可
    >    ```
    >
    > 6. zoom缩放
    >
    > 7. ​
    >
    > 我一般用Chrome浏览器的调试工具观察效果

12. **图片轮播**

    > [任务十二：学习CSS 3的新特性](http://ife.baidu.com/2016/task/detail?taskId=12)
    >
    > 我还没实现，可以看看任务里别人提交的代码

13. **实现各种水平/垂直/水平垂直居中效果**

    > 1. 盒子水平垂直居中：
    >
    >    > 1. 定位 + 盒子宽高已知
    >    >
    >    >    ```css
    >    >    position: absolute; 
    >    >    left: 50%; 
    >    >    top: 50%; 
    >    >    margin-left:-自身一半宽度; 
    >    >    margin-top: -自身一半高度;
    >    >    ```
    >    >
    >    > 2. table-cell布局 
    >    >
    >    >    ```css
    >    >    /* 父级 */
    >    >    display: table-cell;
    >    >    vertical-align: middle;
    >    >
    >    >    /* 子级 */
    >    >    margin: 0 auto;
    >    >    ```
    >    >
    >    > 3. 定位 + transform + 子盒子宽高不定
    >    >
    >    >    ```css
    >    >    position: relative/absolute;
    >    >    top: 50%;
    >    >    left: 50%;
    >    >    transform: translate(-50%, -50%);
    >    >    ```
    >    >
    >    > 4. flex布局
    >    >
    >    >    ```css
    >    >    /* 父级 */
    >    >    display: flex;
    >    >    /*实现垂直居中*/
    >    >    align-items: center;
    >    >    /*实现水平居中*/
    >    >    justify-content: center;
    >    >    ```
    >    >
    >    > 5. 浮动 + 相对定位 实现 **未知宽度浮动元素水平居中**
    >    >
    >    >    ```css
    >    >    /* 父级 */
    >    >    .parent {
    >    >        width: 300px;
    >    >        height: 200px;
    >    >    }
    >    >
    >    >    /* 浮动的是这个包裹元素 */
    >    >    .wraper {
    >    >        float: left;  /* 浮动，让它自适应内容的宽度 */
    >    >        position: relative;
    >    >        left: 50%;  /* 相对定位到父元素宽度一半的地方 */
    >    >        clear: both;
    >    >    }
    >    >
    >    >    /* 被包裹的真正需要居中的元素 */
    >    >    .child {
    >    >        position: relative;
    >    >        left: -50%;	/* 相对于包裹元素再次进行相对定位，偏移一半宽度，居中 */
    >    >    }
    >    >    ```
    >    >
    >    > 6. inline-level的**水平居中**
    >    >
    >    >    ```css
    >    >    text-align: center;
    >    >    ```
    >    >
    >    > 7. **水平居中**
    >    >
    >    >    ```css
    >    >    margin: 0 auto;
    >    >    /* 对浮动元素和绝对定位元素无效 */
    >    >    ```
    >    >
    >    > 8. ​
    >
    > 2. 单行文字垂直居中
    >
    >    > ```css
    >    > line-height: 文字父容器的height；
    >    > ```
    >
    > 3. 多行文字垂直居中
    >
    >    > ```css
    >    > /* 核心思想：把文字当成图片处理，用处理图片垂直居中的方式 */
    >    >
    >    > /* 父级，采用table-cell居中法 */
    >    > div {
    >    >     dispaly: table-cell;
    >    >     vertical-align: middle;
    >    >     ......
    >    > }
    >    > /* 子级 */
    >    > span { /* 用一个span标签封装文字 */
    >    >     display: inline-block;
    >    > }
    >    > ```
    >
    > 4. 大小不固定的图片，水平垂直居中
    >
    >    > ​
    >
    > 5. 未知宽高的图片垂直居中
    >
    >    > 1. vertiacl-align + after伪元素
    >    >
    >    >    ```html
    >    >    <style type="text/css">
    >    >    .pic_box{
    >    >    	...
    >    >    }
    >    >    .pic_box::after{
    >    >        content: "";
    >    >        height: 100%;
    >    >        display: inline-block;
    >    >        vertical-align: middle;
    >    >    }
    >    >    img{
    >    >        vertical-align: middle;
    >    >    }
    >    >    </style>
    >    >
    >    >    <div class="pic_box">
    >    >        <img src="img/sheep.png" />
    >    >    </div>
    >    >    ```
    >    >
    >    > 2. table-cell
    >    >
    >    >    ```html
    >    >    <style type="text/css">
    >    >    .pic_box{
    >    >        display: table;
    >    >        ...
    >    >    }
    >    >    .pic_box a{
    >    >        display: table-cell;
    >    >        vertical-align: middle;
    >    >        width: 300px;
    >    >        height: 300px;
    >    >    }
    >    >    </style>
    >    >
    >    >    <div class="pic_box">
    >    >        <!-- img外嵌套一层<span>或者<a>标签 -->
    >    >        <a href="#">
    >    >            <img src="img/sheep.png" />
    >    >        </a>
    >    >    </div>
    >    >    ```
    >
    > 6. ​
    >
    > [超简单的图片水平垂直居中](http://blog.csdn.net/u013836242/article/details/77747790)
    >
    > [用css让一个容器水平垂直居中](http://www.cnblogs.com/xianyulaodi/p/5863305.html)
    >
    > [CSS布局奇淫技巧之--各种居中](http://www.cnblogs.com/2050/p/3392803.html)
    >
    > [大小不固定的图片、多行文字的水平垂直居中](http://www.zhangxinxu.com/wordpress/2009/08/%E5%A4%A7%E5%B0%8F%E4%B8%8D%E5%9B%BA%E5%AE%9A%E7%9A%84%E5%9B%BE%E7%89%87%E3%80%81%E5%A4%9A%E8%A1%8C%E6%96%87%E5%AD%97%E7%9A%84%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD/)

14. **一边固定宽度一边自适应**

    > 1. 固定宽度区浮动，自适应区不设宽度设置margin；
    >
    >    ```html
    >    <style>
    >        #sidebar {
    >            float: right;
    >            width: 300px;
    >        }
    >        #content {
    >            margin-right: 310px;
    >        }
    >        #footer {
    >            clear: both;
    >        }
    >    </style>
    >
    >    <div>
    >        <div id="sidebar">
    >            固定栏在前面，不然因为浮动会导致它在content下另起一行
    >        </div>
    >        <div id="content">
    >            自适应宽度区
    >        </div>
    >    </div>
    >    ```
    >
    > 2. 全部使用float
    >
    >    ```html
    >    <style>
    >        #sidebar {
    >            float: right;
    >            width: 300px;
    >        }
    >        #content {
    >            float: left;
    >            box-sizing: border-box;
    >            width: 100%;
    >            margin-left: -310px;
    >            padding-left: 310px;
    >        }
    >        #footer {
    >            clear: both;
    >        }
    >    </style>
    >
    >    <!-- 此时就可以在HTM中把content这个主要内容放在sidebar前面了 -->
    >    ```
    >
    > 3. 使用table-cell
    >
    >    1. 把wrap设为display:table并指定宽度100%；
    >    2. 然后把content+sidebar设为display:table-cell;
    >    3. 只给sidebar指定一个宽度，那么content的宽度就变成自适应了。
    >
    > 4. ​
    >
    > [固定宽度边栏另一边自适应的布局（自己加了个改善）](http://blog.csdn.net/u013836242/article/details/77748300)

15. **Flex**

    > [Flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

16. **sass和less**

    > CSS预处理语言，Bootstrap用的是Less，但Bootstrap最新版改为支持Sass，所以我就学了SaSS。

17. **BFC**

    > [CSS之BFC详解](http://www.html-js.com/article/1866)

18. **css hack**

    > [史上最全的CSS hack方式一览](http://blog.csdn.net/freshlover/article/details/12132801)
    >
    > **含义**：因为浏览器的差异性，为了在不同浏览器（或同一浏览器的不同版本）统一页面展示效果，针对不同浏览器/版本写相应css code。
    >
    > **分类**：
    >
    > - 属性前缀法(即类内部Hack)：例如 IE6能识别下划线"\_"和星号" * "，IE7能识别星号" * "，但不能识别下划线"_"，IE6~IE10都认识"\9"，但firefox前述三个都不能认识。
    > - 选择器前缀法(即选择器Hack)：例如 IE6能识别\*html .class{}，IE7能识别\*+html .class{}或者*:first-child+html .class{}。
    > - IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： <!--[if IE]>IE浏览器显示的内容 <![endif]-->，针对IE6及以下版本： <!--[if lt IE 6]>只在IE6-显示的内容 <![endif]-->。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。

19. **浏览器兼容性**

    > CSS: 上面的hack，盒子模型，新属性的兼容性等
    >
    > JS: JS的一些方法不同，比如事件机制相关的方法和属性，Ajax
    >
    > 浏览器: 比如HTTP/1.0时代某些浏览器为协议添加Connection:keep-alive实现

21. **DOM和BOM**

    > [DOM&BOM知识点](./resource/DOM&BOM知识点.xmind)

22. **文本溢出**

    > 1. 单行文本
    >
    >    ```css
    >    overflow: hidden;
    >    text-overflow:ellipsis;
    >    white-space: nowrap;
    >    /* 当然还需要加宽度width属来兼容部分浏览*/
    >    ```
    >
    > 2. 多行文本
    >
    >    ```css
    >    display: -webkit-box;
    >    -webkit-box-orient: vertical;
    >    -webkit-line-clamp: 行数;
    >    overflow: hidden;
    >    ```
    >
    > 3. 后续优化
    >
    >    暂略

23. **Chrome字体最小12px的解决办法**

23. **\<p\>文字自动换行**

24. ​

    ​

    ​

    ------

    ​


### **JS类**

1. **JS面向对象**

   > 面向对象编程将真实事物抽象为一个个对象，对象具有明确分工，可以完成各种任务。对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发。比起由一系列函数或指令组成的传统的过程式编程更适合多人合作的大型软件项目。
   >
   > - **对象是单个实物的抽象。**
   > - **对象是一个容器，封装了属性（property）和方法（method）。**
   > - **js面向对象基于构造函数（constructor）和原型链（prototype）**
   >
   > [《JavaScript标准参考教程（alpha）》读书笔记一：面向对象编程](http://blog.csdn.net/u013836242/article/details/52932856#绑定this)
   >
   > 链接包括：
   >
   > - 构造函数
   > - new
   > - this
   > - 对象与继承，结合[廖雪峰老师JS教程读书笔记（一）：JS继承](http://blog.csdn.net/u013836242/article/details/77839375)
   > - prototype

2. **prototype**

   > [真正理解prototype](http://blog.csdn.net/u013836242/article/details/77775924)

3. **原型链和作用域链**

   > 作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的。

4. **new**

   > ​

5. **拷贝数组和对象**

   [javascript 数组以及对象的深拷贝（复制数组或复制对象）的方法](http://blog.csdn.net/fungleo/article/details/54931379)

   > 1. 软拷贝
   >
   >    > 直接用`=`号复制，原数组（/对象）的修改会影响到新数组，指向同一内存地址。
   >
   > 2. 深拷贝
   >
   >    - 数组
   >
   >      > 1. 直接for循环复制
   >      > 2. 用`slice()`方法，`var arr2 = arr.slice(0);`
   >      > 3. `concat()`方法，直接`var arr2 = arr.concat();`
   >      > 4. ES6扩展运算符`...`，`var arr2 = [...arr];`
   >
   >    - 对象

7. **this，怎么传入this**

   > this总是返回属性或方法当前所在的对象，this指向可人为改变，函数在全局环境下运行时，this指向顶层对象window。 
   >
   > | 方法                                                 | 用法                                                         |
   > | ---------------------------------------------------- | ------------------------------------------------------------ |
   > | `function.prototype.call(obj[,arg1,arg2,...])`       | f内部的this指向obj，若参数为空、null、undefined，默认传入全局对象，若参数是一个原始值（如5等），则这个原始值自动转成对应的包装对象（如Number的实例）,**可以在覆盖掉继承的方法后，用call来调用对象的原生方法** |
   > | `function.prototype.apply(obj[, [arg1, arg2, ...]])` | 与call类似，但是——如果要传入参数，必须以数组形式传入，应用见 [原文地址](http://javascript.ruanyifeng.com/oop/this.html)，**一定要见！** |
   > | `function.prototype.bind(obj[,arg1,arg2,...])`       | 比call和apply更进一步，不仅可以绑定this，还可以绑定原函数的参数，每一次运行都会返回一个新函数，这些话不懂的话见原文，注意事项也要见原文，**一定要见！** |
   >
   > [《JavaScript标准参考教程（alpha）》读书笔记一：面向对象编程](http://blog.csdn.net/u013836242/article/details/52932856#绑定this)

7. ​

9. **闭包**

   > [深入理解javascript原型和闭包（15）——闭包](http://www.cnblogs.com/wangfupeng1988/p/3994065.html)

10. **冒泡和捕获**

   > 事件的三个阶段：
   >
   > 捕获阶段 ---> 目标阶段 ---> 冒泡阶段
   >
   > document   ---> target目标 ----> document
   >
   > ​
   >
   > addEventListener的第三个参数设置为true和false（默认）：
   >
   > true表示该元素在事件的“捕获阶段”（由外往内传递时）响应事件；
   >
   > false表示该元素在事件的“冒泡阶段”（由内向外传递时）响应事件。

11. **事件委托**

    > 在父元素上监听事件。事件监听器分析从子元素冒泡上来的事件，根据event.target找到触发事件的子元素，再相应地进行事件处理，不需要进行。

12. **数组排序**

    > 1. sort()
    >
    >    [[js中sort函数的底层实现机制？](https://segmentfault.com/q/1010000007133473)](https://segmentfault.com/q/1010000007133473?_ea=1247880)
    >
    >    > 1. **原理**：
    >    >
    >    >    不同浏览器引擎的实现方式不同，V8：：数组length <= 22 时用插入排序，否则用快速排序
    >    >
    >    > 2. **写法**：
    >    >
    >    >    ```js
    >    >    // 返回值为数组的引用，直接改变原数组
    >    >    arr.sort(func);
    >    >
    >    >    // 若不使用参数，将按字符编码顺序进行排序
    >    >
    >    >    // 提供参数，则需要提供的比较函数返回一个值，若a<b，则返回负数，排序后的数组中a应该在b前面，以此类推
    >    >    function NumAscSort(a,b){
    >    >        return a - b;
    >    >    }
    >    >    function NumDescSort(a,b){
    >    >        return b - a;
    >    >    }
    >    >    ```
    >    >
    >    > 3. ​
    >
    > 2. 参见下面的 算法类--->排序

12. **数组去重**

    > 1. **Set方法（es6）**
    >
    >   原理: 运用ES6的新数据类型Set，利用其去掉重复key的特性解构快速去重
    >
    >   ```js
    >   'use strict';
    >   [...(new Set([1, 2, 2, 3]))];  // 此处还运用了扩展运算符
    >   ```
    >
    > 2. **filter()方法**
    >
    >   原理：filter()方法根据返回值来确认是否抛弃元素。而对于数组重复项，indexOf()方法只会返回第一个匹配到的元素的index，当筛选到重复项时，当前重复项的id自然不等于indexOf的返回值
    >
    >   ```js
    >   arr.filter(function(element,index,array){
    >       return array.indexOf(element) === index;
    >   })
    >   ```
    >
    > 3. **indexOf法**
    >
    > 4. **对象属性不重复法**
    >
    > [超方便的数组去重](http://blog.csdn.net/u013836242/article/details/77750061)

14. **传入函数的参数列表**

    > es5:arguments----es6:...rest
    >

15. **伪数组**

    > 类数组对象，具有length属性且不具有数组的方法。例如：参数列表arguments，节点列表nodelist；
    >
    > ES6可以通过Array.from()转换伪数组为数组；

9. **实现一个querySelectorAll的功能**

   ```javascript
    function querySelect(el,className){
    	var children = el.children;
    	var result = [];
    	if(el.classList.contains(className)){
    		result.push(el);
    	}
    	for(var i; i<children.length; i++){
    		var child = children[i];
    		var arr = querySelect(child,className);
    		result.push.apply(result, arr);
    	}
    	return result;
    }
   ```

10. **实现sum(2,3);sum(2,3,4);sum(2,3,4,5);sum里面的参数不确定；重新设计一下这个函数，让它直接拥有数组的方法**

    > 答：
    >
    > 1.常规方法：
    >
    > ​	函数中循环arguments求和
    >
    > ​    高端方法：
    >
    > ​         用ES6的`Array.from(arguments)` 或`...rest`，再用[reduce](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001435119854495d29b9b3d7028477a96ed74db95032675000##reduce)累加
    >
    > 2.var arg = Array.prototype.slice.call(arguments);
    >
    > 一般用这个，实际上就是[伪数组转数组方法（原生4种）](http://www.cnblogs.com/NTWang/p/6280447.html)，这里我再添加一个方法`Object.setPrototypeOf(arguments, Array.prototype);`

11. **各种文本框，复选框之类的值怎么获取**

    > jQuery: html()修改/获取html内容，text()修改/获取文本内容，val()修改/获取表单元素的值；
    >
    > 原生:innerHTML，innerText，value。

18. **严格模式**

    > ​

19. **ES6**

    > [30分钟掌握ES6/ES2015核心内容（上）](https://segmentfault.com/a/1190000004365693)
    >
    > [30分钟掌握ES6/ES2015核心内容（下）](https://segmentfault.com/a/1190000004368132)
    >
    > [Map和Set](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345007434430758e3ac6e1b44b1865178e7aff9082e000)
    >
    > [iterable](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143450082788640f82a480be8481a8ce8272951a40970000)
    >
    > ES6扩展运算符
    >
    > 异步相关

20. **for循环**

    > 1. **forEach()**
    >
    >    > `forEach()`接收一个函数，每次迭代就自动回调该函数
    >    >
    >    > ```js
    >    > 'use strict';
    >    > var a = ['A', 'B', 'C'];
    >    > a.forEach(function (element, index, array) {
    >    >     // element: 指向当前元素的值
    >    >     // index: 指向当前索引
    >    >     // array: 指向Array对象本身
    >    >     console.log(element + ', index = ' + index);
    >    > });
    >    > ```
    >
    > 2. **for...in**
    >
    >    > `for...in`遍历的实际上是对象的属性名称。
    >    >
    >    > 问题：`Array`数组也是对象，每个元素的索引被视为一个属性。手动给`Array`对象添加了额外的属性(比如name)后，`for ... in`循环将把`name`包括在内，但`Array`的`length`属性却不包括在内。
    >
    > 3. **for...of**
    >
    >    > `for ... of`只循环集合本身的元素。

21. **同步和异步**

    > ​

22. **Promise及相关异步操作**

    > [Promise](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345008539155e93fc16046d4bb7854943814c4f9dc2000)

23. **JavaScript垃圾回收方法**

    > 1. **标记清除**（mark and sweep）
    >
    >    这是JavaScript最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变量，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”。垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了
    >
    > 2. **引用计数**(reference counting)
    >
    >    在低版本IE中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数，当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。
    >
    >    ​
    >
    >    在IE中虽然JavaScript对象通过标记清除的方式进行垃圾回收，但BOM与DOM对象却是通过引用计数回收垃圾的， 也就是说只要涉及BOM及DOM就会出现循环引用问题。
    >
    > 3. **ES6中是如何解决引用计数导致的内存泄漏的**
    >
    > 4. ​

24. **Cookie读写**

    > document.cookie进行读写

25. **typeof 和 instanceof()**

    > ​

26. **正则**

    > ​

27. **变量提升**

    > ​

28. **jQuery_attr()和prop()**

    > 1. **区别**
    >
    >    > `prop()`：设置/获取指定DOM元素(JS对象，Element类型)上的属性(property)；
    >    >
    >    > `attr()`:设置或获取指定DOM元素所对应的文档节点（node节点）上的属性(attribute)。
    >
    > 2. **元素和节点**
    >
    >    > - 元素，即html文档中所有标签都为元素，<p>、<tr>等，也就是说元素是个统称，一个文档里面有很多的元素。
    >    > - 节点，是js为了对html文档进行操作而开发的，即DOM文档对象模型。每个元素都可以称之为一个节点，节点是唯一的。
    >    > - 比方来说<p>标签，肯定是一个p标签元素，那如果通过js对它进行样式控制的时候，就必须获取（找到）到这个元素，称之为节点，如果有好多元素，可以获得第1个、第2个或者第n个。元素是统称，节点是具有唯一性的。
    >    > - ​
    >
    > 3. **注意事项**
    >
    >    > - prop()依赖的是JS原生的`element[property]` 和 `element[property] = value`;
    >    > - attr()依赖的是Element对象的`element.getAttribute(attribute) `和 `element.setAttribute(attribute, value)`。
    >    > - 通过它设置的属性值只能是string类型（输入类型不对则调用输入类型的`toString()`）;
    >    > - jQuery1.6以后获取表单元素的“checked”等属性也不再返回Boolean类型，而是直接返回“checked”等string类型或undefined，而且在某些版本中即使通过attr()改了这些元素的选中状态，对应的属性值也不改变，因为jQuery认为：attribute的checked、selected、disabled就是表示该属性初始状态的值，property的checked、selected、disabled才表示该属性实时状态的值(值为true或false)。
    >    >
    >    > 因此，**请使用`prop()`函数来设置或获取`checked`、`selected`、`disabled`等属性。对于其它能够用`prop()`实现的操作，也尽量使用`prop()`函数。**
    >
    > 4. ​

29. ​

    ​

    ---

    ​


### **AJAX类**

1. **手写ajax**

   > [廖雪峰老师JS教程读书笔记（二）：原生AJAX与跨域总结](http://blog.csdn.net/u013836242/article/details/77838304)
   >
   > ```js
   > //创建一个XMLHttpRequest对象
   > var request=new XMLHttpRequest();
   >
   > //readystate发生change时会执行的回调函数
   > request.onreadystatechange=function(){
   >     if(request.readystate===4){  //请求完成
   >         if(request.status===200){
   >             //请求成功要执行的代码，通过responseText取请求回来的数据
   >         }else{
   >             //请求失败要执行的代码，通过status判断失败原因
   >         }
   >     }else{
   >         //还在请求中 
   >     }
   > }
   >
   > //规定请求的配置,method为请求方法，url为请求路径，async为是否异步，不带此参数默认为true，
   > request.open(method,url,async)；
   >
   > //此时真正发送请求，data为发送的附带数据，没有要发的可以发送null，浏览器兼容好像会好一些。
   > request.send(data || null)
   >
   > /*
   > //如果不支持XMLHttpRequest对象，则需要创建ActiveXObject对象
   > var request;
   > if(window.XMLHttpRequest){
   >     request=new XMLHttpRequest();
   > }else{
   >     request=new AcitveXObject(Microsoft XMLHTTP);
   > }
   > */
   > ```

2. **JSON**

   > ​

3. **jQuery的Ajax**

   > **同源策略**：同源是指"协议+域名+端口"三者相同
   >

4. **跨域相关**

   > [前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)
   >
   > 1. **JSONP**
   >
   >    利用浏览器可以引用外域的JavaScript资源这个特性，在script标签中发送请求，接受回调，这种方法只能发送GET请求，且要求返回JavaScript，通常以函数调用的方式返回 
   >    **具体实现：**
   >
   >    ```JS
   >    var script = document.createElement('script');
   >    script.type = 'text/javascript';
   >
   >    // 传参并指定回调执行函数为onBack
   >    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=onBack';
   >    document.head.appendChild(script);
   >
   >    // 回调执行函数
   >    function onBack(res) {
   >        alert(JSON.stringify(res));
   >    }
   >    ```
   >
   > 2. **flash**
   >
   >    通过Flash插件发送请求，绕过浏览器安全限制；必须安装Flash并和Flash交互，而且现在Flash用的越来越少了。
   >
   > 3. **服务器代理**
   >
   >    `'/proxy?url=http://www.sina.com.cn'` 
   >    在同源域名下架设代理服务器转发请求，js发送请求到这个代理服务器，代理服务器再把结果返回，麻烦在于需要在服务器端额外处理
   >
   > 4. **CORS**
   >
   >    全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。 
   >    Origin为当前发送请求的页面所在的域，当它向外域发送请求时，外域发回的响应头中有一个`Access-Control-Allow-Origin`字段，如果这个字段有请求页面的Origin，或者为*(所有页面都能请求)，那么请求成功，否则失败。 
   >    **关键**在于对方服务器是否愿意给你设置正确的`Access-Control-Allow-Origin`字段
   >
   > 5. **iframe系列**
   >
   > 6. **nodejs中间件代理**
   >
   > 7. **webSocket协议**
   >
   > 8. **postMessage跨域**

4. ​

   ------




### **网络类**

1. **点击链接后发生的事情**

   > [阮一峰老师网络协议相关博客读后总结_图解](http://blog.csdn.net/u013836242/article/details/77882631)

2. **HTTP请求，请求和响应的头**

   > 请求响应结构结构：
   >
   > 返回码：

3. **状态码**

   > - 1xx：指示信息–表示请求已接收，继续处理。
   > - 2xx：成功–表示请求已被成功接收、理解、接受。
   > - 3xx：重定向–要完成请求必须进行更进一步的操作。
   > - 4xx：客户端错误–请求有语法错误或请求无法实现。
   > - 5xx：服务器端错误–服务器未能实现合法的请求。
   >
   > ​
   >
   > 常见状态码：
   >
   > | 状态码 | 含义                                                         | 状态码 | 含义                                                         |
   > | ------ | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ |
   > | 200    | OK，请求成功                                                 | 401    | Unauthorized， 请求要求用户的身份认证                        |
   > | 204    | No Content， 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档 | 403    | Forbidden， 服务器理解请求客户端的请求，但是拒绝执行此请求   |
   > | 301    | Moved Permanently， 永久重定向。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替 | 404    | Not Found， 服务器无法根据客户端的请求找到资源（网页）。     |
   > | 302    | Found ，临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI | 422    | 从当前客户端所在的IP地址到服务器的连接数超过了服务器许可的最大范围。通常，这里的IP地址指的是从服务器上看到的客户端地址（比如用户的网关或者代理服务器地址）。在这种情况下，连接数的计算可能涉及到不止一个终端用户。 |
   > | 304    | Not Modified，未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 | 500    | Internal Server Error， 服务器内部错误，无法完成请求         |
   > | 400    | Bad Request， 客户端请求的语法错误，服务器无法理解           | 503    | Bad Gateway， 作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。 |
   >
   > ​

4. **https**

   >- **HTTP和HTTPS**:
   >
   >  HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS。
   >
   >  默认HTTP的端口号为80，HTTPS的端口号为443。
   >
   >
   >- **为什么HTTPS安全**
   >
   >  因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用HTTPS，密钥在你和终点站才有。https之所以比http安全，是因为他利用ssl/tls协议传输。它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性

5. **TCP和UDP**

   > - TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。一个TCP连接必须要经过三次“对话”才能建立起来
   > - UDP（User Data Protocol，用户数据报协议）是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去！ UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境。

5. **TCP握手**

   > 这个学过，印象不怎么深，在看面试题的时候回顾了，印象是这样的：  
   >
   > 为了准确无误地把数据送达目标处，TCP协议采用了三次握手策略。用TCP协议把数据包送出去后，TCP不会对传送 后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了TCP的标志：SYN和ACK。
   >
   > 发送端首先发送一个带SYN标志的数据包给对方。接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息。 最后，发送端再回传一个带ACK标志的数据包，代表“握手”结束。 若在握手过程中某个阶段莫名中断，TCP协议会再次以相同的顺序发送相同的数据包。
   >
   > 断开一个TCP连接则需要“四次握手”：
   >
   > 第一次挥手：主动关闭方发送一个FIN，用来关闭主动方到被动关闭方的数据传送，也就是主动关闭方告诉被动关闭方：我已经不 会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，主动关闭方依然会重发这些数据)，但是，此时主动关闭方还可 以接受数据。
   >
   > 第二次挥手：被动关闭方收到FIN包后，发送一个ACK给对方，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）。
   >
   > 第三次挥手：被动关闭方发送一个FIN，用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会再给你发数据了。
   >
   > 第四次挥手：主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，至此，完成四次挥手。

7. **http2**

   >可参考[阮一峰老师网络协议相关博客读后总结_图解](http://blog.csdn.net/u013836242/article/details/77882631)
   >
   >- HTTP/2引入了“服务端推（server push）”的概念，它允许服务端在客户端需要数据之前就主动地将数据发送到客户端缓存中，从而提高性能。
   >- HTTP/2提供更多的加密支持  
   >- HTTP/2使用多路技术，允许多个消息在一个连接上同时交差。  
   >- 增加了头压缩（header compression），因此即使非常小的请求，其请求和响应的header都只会占用很小比例的带宽。

7. **WebSocket**

   > WebSocket是Web应用程序的传输协议，它提供了双向的，按序到达的数据流。他是一个HTML5协议，WebSocket的连接是持久的，他通过在客户端和服务器之间保持双工连接，服务器的更新可以被及时推送给客户端，而不需要客户端以一定时间间隔去轮询。它还支持跨域。

8. **Get和Post的区别**

  > - *GET* - 从指定的资源请求数据。
  > - *POST* - 向指定的资源提交要被处理的数据
  >
  > |                  | GET                                                          | POST                                                         |
  > | ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  > | 后退按钮/刷新    | 无害                                                         | 数据会被重新提交（不幂等）。                                 |
  > | 书签             | 可收藏为书签                                                 | 不可收藏为书签                                               |
  > | 缓存             | 能被缓存                                                     | 不能缓存                                                     |
  > | 编码类型         | application/x-www-form-urlencoded                            | application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。 |
  > | 历史             | 参数保留在浏览器历史中。                                     | 参数不会保存在浏览器历史中。                                 |
  > | 对数据长度的限制 | GET 方法发送数据时向 URL 添加数据；URL 长度受浏览器限制。    | 无限制。                                                     |
  > | 对数据类型的限制 | 只允许 ASCII 字符。                                          | 没有限制。也允许二进制数据。                                 |
  > | 安全性           | 与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！ | POST 相对于GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。 |
  > | 可见性           | 数据在 URL 中对所有人都是可见的。                            | 数据不会显示在 URL 中。                                      |

10. **从输入url到看到网页发生了什么**

  > 1. **网络通信**
  >
  >    > 1. **浏览器输入URL**(简)
  >    > 2. **应用层DNS解析域名**(简)
  >    > 3. **应用层客户端发送HTTP请求**(简)
  >    > 4. **传输层TCP传输报文**
  >    > 5. **网络层IP协议查询MAC地址**
  >    > 6. **数据到达数据链路层**
  >    > 7. **服务器接收数据**(简)
  >    > 8. **服务器响应请求**(简)
  >    > 9. **服务器返回相应文件**(简)
  >
  > 2. **页面渲染**(简)
  >
  >    > 1. 解析HTML以构建DOM树 –> 构建渲染树 –> 布局渲染树 –> 绘制渲染树。
  >    > 2. 在浏览器还没接收到完整的HTML文件时，它就开始渲染页面了，在遇到外部链入的脚本标签或样式标签或图片时，会再次发送HTTP请求重复上述的步骤。在收到CSS文件后会对已经渲染的页面重新渲染，加入它们应有的样式，图片文件加载完立刻显示在相应位置。在这一过程中可能会触发页面的重绘或重排。
  >
  > 3. ​
  >
  > 初级：
  >
  > 中级：[当你输入一个网址的时候，实际会发生什么?](http://blog.csdn.net/ygyangguang/article/details/5327278)   /   [从输入URL到浏览器显示页面的详细过程](http://blog.csdn.net/liu2011zhijie/article/details/52593887)
  >
  > 高级：[前端经典面试题: 从输入URL到页面加载发生了什么](https://segmentfault.com/a/1190000006879700)

10. **Restful API**

11. **为什么说HTTP协议是无状态的**

   > ​

12. **cookie和session**

   [认识HTTP----Cookie和Session篇](https://zhuanlan.zhihu.com/p/27669892)

   > 1. **Cookie**
   >
   >    > **需求**：HTTP 是无状态协议，无法根据之前的状态进行本次的请求处理。Cookie 技术通过在请求和响应报文中写入Cookie 信息来控制客户端的状态。
   >    >
   >    > **原理**：
   >    >
   >    > 1. 客户端发送请求，此时第一次访问网页，请求报文不带cookie信息；
   >    > 2. 服务器端发送响应报文，其首部字段中含有Set-Cookie字段，通知客户端保存cookie；
   >    > 3. 之后客户端再次访问，自动发送保存着的cookie信息（请求报文首部字段有cookie字段）。
   >    >
   >    > **字段属性**：
   >    >
   >    > ```http
   >    > Set-Cookie: status=enable; secure; HttpOnly; expires=Tue, 05 Jul 2011 07:26:31 GMT; path=/; domain=.hackr.jp;
   >    > ```
   >    >
   >    > | **属性**     | **说明**                                                     |
   >    > | ------------ | ------------------------------------------------------------ |
   >    > | NAME=VALUE   | 赋予Cookie的名称和值（必需项）                               |
   >    > | expires=DATE | Cookie的有效期（不指定则默认为浏览器关闭为止），另外，服务器端无法显示删除已发送到客户端的cookie，但可以覆盖已过期的cookie来实质性删除客户端cookie |
   >    > | path=PATH    | 将服务器上的文件目录做为Cookie的适用对象（不指定则默认为文档所在的文件目录） |
   >    > | domain=域名  | 做为Cookie适用对象的域名（不指定则默认为创建Cookie的服务器的域名 |
   >    > | secure       | 限制Web 页面仅在HTTPS 安全连接时，才可以发送Cookie。         |
   >    > | HttpOnly     | 使js脚本无法document.cookie获得cookie信息，主要目的为防止XSS窃取cookie信息 |
   >    >
   >    > **优点**：极高的扩展性和可用性
   >    >
   >    > 1. 通过良好的编程，控制保存在cookie中的session对象的大小。
   >    > 2. 通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
   >    > 3. 只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
   >    > 4. 控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。
   >    >
   >    > **缺点**：
   >    >
   >    > 1. Cookie数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉.
   >    > 2. 安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。
   >    > 3. 有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用
   >    >
   >    > ​
   >
   > 2. **Session**
   >
   >    > **需求**：Session 对象存储特定用户会话所需的属性及配置信息。这样，当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。
   >    >
   >    > **原理**：
   >    >
   >    > session本身是一个抽象概念，开发者为实现中断和继续操作，将客户端与服务器一对一的交互抽象为“会话”，由此衍生出“会话状态”即session;
   >    >
   >    > 而此处的原理是指：session的常见实现——借助cookie发送sessionID;
   >    >
   >    > 1. 客户端把用户ID 和密码等登录信息放入报文的实体部分，通常是以POST 方法把请求发送给服务器；
   >    > 2. 如果该用户还没有会话，则 Web 服务器将自动创建一个 Session 对象。通过验证从客户端发送过来的登录信息进行身份认证，然后把用户的认证状态与Session ID 绑定后记录在服务器端。当会话过期或被放弃后，服务器将终止该会话；
   >    > 3. 服务器会发放用以识别用户的Session ID：向客户端返回响应时，会在首部字段Set-Cookie 内写入Session ID（如PHPSESSID=028a8c…）。
   >    > 4. 客户端接收到从服务器端发来的Session ID 后，会将其作为Cookie 保存在本地。下次向服务器发送请求时，浏览器会自动发送Cookie，所以Session ID 也随之发送到服务器。服务器端可通过验证接收到的Session ID 识别用户和其认证状态。
   >
   > 3. **区别**
   >
   >    > 1. cookie数据存放在客户的浏览器上，session数据放在服务器上。
   >    >
   >    > 2. cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗，考虑到安全应当使用session。
   >    >
   >    > 3. session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用COOKIE。
   >    >
   >    > 4. 单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
   >    >
   >    > 5. 所以个人建议：
   >    >
   >    >    将登陆信息等重要信息存放为SESSION
   >    >
   >    >    其他信息如果需要保留，可以放在COOKIE中
   >
   > 4. **如果客户端的浏览器禁用了 Cookie 怎么办？**
   >
   >    > 一般这种情况下，会使用一种叫做URL重写的技术来进行会话跟踪，即每次HTTP交互，URL后面都会被附加上一个诸如 sid=xxxxx 这样的参数，服务端据此来识别用户。
   >
   > 5. ​
   >
   > ​

13. ​
   ​

---



### **算法类**

1. **排序**

   [js实现数组排序](https://www.cnblogs.com/real-me/p/7103375.html)

   > 1. **快速排序**
   >
   >    ```javascript
   >    //快速排序
   >    function quickSort(arr){
   >        if(arr.length<=1){
   >            return arr;//如果数组只有一个数，就直接返回；
   >        }
   >
   >        var num = Math.floor(arr.length/2);//找到中间数的索引值，如果是浮点数，则向下取整
   >
   >        var numValue = arr.splice(num,1);//找到中间数的值
   >        var left = [];
   >        var right = [];
   >
   >        for(var i=0;i<arr.length;i++){
   >            if(arr[i]<numValue){
   >                left.push(arr[i]);//基准点的左边的数传到左边数组
   >            }
   >            else{
   >               right.push(arr[i]);//基准点的右边的数传到右边数组
   >            }
   >        }
   >
   >        return quickSort(left).concat([numValue],quickSort(right));//递归不断重复比较
   >    }
   >
   >    alert(quickSort([32,45,37,16,2,87]));//弹出“2,16,32,37,45,87”
   >
   >    //另一种实现  
   >    function quickSort(left,right) {
   >      var i=left;
   >      var j=right;
   >
   >      if(i>=j){
   >          return;
   >      }
   >
   >      while (i!==j){
   >          while(arr[j]>=arr[left] && i<j){
   >              j--;
   >          }
   >          while(arr[i]<=arr[left] && i<j){
   >              i++;
   >          }
   >          if(i!==j){
   >              temp=arr[j];
   >              arr[j]=arr[i];
   >              arr[i]=temp;
   >          }
   >      }
   >
   >      temp=arr[left];
   >      arr[left]=arr[i];
   >      arr[i]=temp;
   >
   >      quickSort(left,i-1);
   >      quickSort(i+1,right);
   >    }
   >    ```
   >
   > 2. **选择排序**
   >
   >    ```javascript
   >    // 选择排序
   >    function selectSort(arr){ 
   >        var len = arr.length; 
   >        var index,temp; 
   >        for(var i = 0; i < len-1 ;i++){ 
   >            index = i; 
   >            for(var j = i + 1 ; j<len; j++){ 
   >                if(arr[j] < arr[index]){ //寻找最小的数 
   >                    index = j; //保存最小数的索引 
   >                } 
   >            }
   >            temp = arr[i];
   >            arr[i] = arr[index];
   >            arr[index] = temp;
   >        }
   >        return arr; 
   >    }
   >    ```
   >
   > 3. **冒泡排序**
   >
   >    ```javascript
   >    //冒泡排序
   >    function bubbleSort(arr) {
   >      for(var i=0;i<arr.length-1;i++){
   >        for(var j=0;j<arr.length-i;j++){
   >          if(arr[j]>arr[j+1]){
   >            temp=arr[j+1];
   >            arr[j+1]=arr[j];
   >            arr[j]=temp;
   >          }
   >        }
   >      }
   >    }
   >    ```
   >
   > 4. **桶排序**
   >
   >    ```javascript
   >    //桶排序
   >    function bucketSort(arr) {
   >        var newArr=new Array(9);
   >        for(var i=0;i<9;i++){
   >            newArr[i]=0;
   >        }
   >        for(var i=0;i<arr.length;i++){
   >            newArr[arr[i]]++;
   >        }
   >        arr.splice(0,arr.length);
   >        console.log(arr);
   >        for(var i=0;i<9;i++){
   >            for(j=0;j<newArr[i];j++){
   >                arr.push(i);
   >            }
   >        }
   >        return arr;
   >    }
   >    ```
   >
   >

2. **栈，队列，堆**

   > **栈和队列的区别?**
   >
   > 栈的插入和删除操作都是在一端进行的，而队列的操作却是在两端进行的。
   >
   > 队列先进先出，栈先进后出。
   >
   > 栈只允许在表尾一端进行插入和删除，而队列只允许在表尾一端进行插入，在表头一端进行删除
   >
   > **栈和堆的区别？**
   >
   > 栈区（stack）—   由编译器自动分配释放   ，存放函数的参数值，局部变量的值等。
   >
   > 堆区（heap）   —   一般由程序员分配释放，   若程序员不释放，程序结束时可能由OS回收。
   >
   > 堆（数据结构）：堆可以被看成是一棵树，如：堆排序；
   >
   > 栈（数据结构）：一种先进后出的数据结构。

   ​

   ---




### **通用类**

1. **绝对路径和相对路径**

   > 绝对路径:从盘符开始
   >
   > 相对路径:从当前位置开始


---



### **概念类**

1. **前后端分离**

   > 不是很清楚
   >
   > 含义：前后端只通过 JSON 来交流，组件化、工程化不需要依赖后端去实现。

2. **前端整体架构**

   > [自己总结的web前端知识体系大全【欢迎补充】](http://www.cnblogs.com/wangfupeng1988/p/4649709.html)


---



### **工程类**

1. **性能优化**

   > 不太了解
   >
   > 1. 合理使用缓存（减少网络请求资源次数）
   > 2. css sprites（把网页中一些背景图片整合到一张图片文件中，再利用CSS的background系列属性进行背景定位取图片，减少请求次数从而提高了速度）
   > 3. DNS优化，CDN负载均衡
   > 4. 少用全局变量，减少开销，降低内存泄漏风险
   > 5. 自动化工具打包，压缩资源，即降低了请求资源的体积，又降低了请求次数
   > 6. 减少重绘次数，渲染优化
   >
   > ​
   >
   >     渲染优化：
   >     1.禁止使用iframe（阻塞父文档onload事件）；
   >         *iframe会阻塞主页面的Onload事件；
   >         *搜索引擎的检索程序无法解读这种页面，不利于SEO;
   >         *iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
   >     
   >         使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
   >         动态给iframe添加src属性值，这样可以绕开以上两个问题。
   >     
   >     2.禁止使用gif图片实现loading效果（降低CPU消耗，提升渲染性能）；
   >     3、使用CSS3代码代替JS动画（尽可能避免重绘重排以及回流）；
   >     4、对于一些小图标，可以使用base64位编码，以减少网络请求。但不建议大图使用，比较耗费CPU；
   >             小图标优势在于：
   >                 1.减少HTTP请求；
   >                 2.避免文件跨域；
   >                 3.修改及时生效；
   >     
   >     5、页面头部的<style></style> 会阻塞页面；（因为 Renderer进程中 JS线程和渲染线程是互斥的）；
   >     6、页面头部<script</script> 会阻塞页面；（因为 Renderer进程中 JS线程和渲染线程是互斥的）；
   >     7、页面中空的 href 和 src 会阻塞页面其他资源的加载 (阻塞下载进程)；
   >     
   >     8、网页Gzip，CDN托管，data缓存 ，图片服务器；
   >     9、前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
   >     10、用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
   >     11、当需要设置的样式很多时设置className而不是直接操作style。
   >     12、少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
   >     13、避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
   >     14、图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。
   >     
   >     15、 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。
   >         对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘IO。
   >             向前端优化指的是，在不影响功能和体验的情况下，能在浏览器执行的不要在服务端执行，
   >             能在缓存服务器上直接返回的不要到应用服务器，程序能直接取得的结果不要到外部取得，
   >             本机内能取得的数据不要到远程取，内存能取到的不要到磁盘取，缓存中有的不要去数据库查询。
   >             减少数据库操作指减少更新次数、缓存结果减少查询次数、将数据库执行的操作尽可能的让你的程序完成（例如join查询），
   >             减少磁盘IO指尽量不使用文件系统作为缓存、减少读写文件次数等。程序优化永远要优化慢的部分，换语言是无法“优化”的。

2. **模块化，依赖关系**

   > [浅析JS模块规范：AMD，CMD，CommonJS](http://www.jianshu.com/p/09ffac7a3b2c)
   >
   > Node.js遵循CommonJS规范。
   >
   > AMD 是 RequireJS 的，先定义所有依赖，再在回调函数中使用依赖。
   >
   > CMD 是 SeaJS 的，是CommonJS规范的一种实现，用的时候再require
   >
   > 综上，AMD 是提前执行，CMD 是延迟执行，但两者都是异步加载的。
   >
   > AMD推荐的风格通过返回一个对象做为模块对象，CommonJS的风格通过对module.exports或exports的属性赋值来达到暴露模块对象的目的。、
   >
   > CMD模块方式

3. **gulp怎么用，用过啥**

   > 用过grunt和webpack。
   >
   > grunt只是自己练习技术照着教程打包，webpack是学了一点但没实践忘了。

4. **webpack和为什么要打包**

   > 自动化工具，就是为了减少重复劳动（压缩，编译，单元测试，代码检查），提高工作效率和访问效率。

5. **渐进增强与优雅降级**

   > ​

6. **Git**

   > [Git常用命令整理备忘](http://blog.csdn.net/u013836242/article/details/74361453)

7. ​

---



### **安全类**

1. **常见web安全及防护原理**

   > 1. **sql注入**  
   >
   >    就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。  
   >
   > 2. **XSS**  
   >
   >    Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意 html标签或者javascript代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。  
   >
   >    XSS防范方法
   >
   >    1. 代码里对用户输入的地方和变量都需要仔细检查长度和对”<”,”>”,”;”,”’”等字符做过滤；其次任何内容写到页面之前都必须加以encode，避免不小心把html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击。  
   >    2. 避免直接在cookie 中泄露用户隐私，例如email、密码等等。  
   >    3. 通过使cookie 和系统ip 绑定来降低cookie 泄露后的危险。这样攻击者得到的cookie 没有实际价值，不可能拿来重放。  
   >    4. 如果网站不需要再浏览器端对cookie 进行操作，可以在Set-Cookie 末尾加上HttpOnly 来防止javascript 代码直接获取cookie 。  
   >    5. 尽量采用POST 而非GET 提交表单  
   >
   > 3. **CSRF**
   >
   >    [浅谈CSRF攻击方式](http://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)
   >
   >    ​
   >
   >    XSS与CSRF有什么区别吗？
   >
   >    XSS是获取信息，不需要提前知道其他用户页面的代码和数据包。CSRF是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。
   >
   >    要完成一次CSRF攻击，受害者必须依次完成两个步骤：  
   >
   >    登录受信任网站A，并在本地生成Cookie。  
   >
   >    在不登出A的情况下，访问危险网站B。
   >
   >    ​
   >
   >    CSRF的防御
   >
   >    服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数。  
   >
   >    通过验证码的方法

   ​

---



### **框架**

1. **MVVM框架**

   > **概念**：
   >
   > [Vue.js学习笔记](http://tangyifei.herokuapp.com/study_notes/Vue)

2. ​

------





### **其他**



---


### 参考链接

    [1]: http://www.nowcoder.com/discuss/7600
    [2]: http://www.nowcoder.com/discuss/5168
    [3]: https://mdluo.github.io/blog/about-front-end-interview/
    [4]: https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers   （高端向，还没看先存着）
    [5]: https://segmentfault.com/a/1190000013331105?utm_source=channel-newest

