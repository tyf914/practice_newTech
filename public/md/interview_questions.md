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

```
0.html类

1.css类

2.js类

3.ajax

4.网络类

5.算法类

6.通用类

7.概念类

8.工程类

9.安全类

10.其他
```



### **HTML类**

1. **<!DOCTYPE> 声明**

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
   > 你知道多少种Doctype文档类型？
   >
   > 该标签可声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。
   >
   > HTML 4.01 规定了三种文档类型：Strict、Transitional 以及 Frameset。
   >
   > XHTML 1.0 规定了三种 XML 文档类型：Strict、Transitional 以及 Frameset。
   >
   > Standards（标准）模式（也就是严格呈现模式）用于呈现遵循最新标准的网页，而 Quirks（包容）模式（也就是松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。

2. **HTML5的了解**

   > 新的HTML标准，
   >
   > 标签的增改废，新的api，语义化，多媒体，canvas，svg，本地存储，支持跨域，移动优先。

3. **语义化**

   > 1. 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
   > 2. 有利于SEO:和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
   > 3. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
   > 4. 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

4. **HTML5本地存储**

   > 1. 浏览器本地存储
   >
   >    在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来取代globalStorage。
   >
   > 2. html5中的Web Storage包括了两种存储方式：sessionStorage和localStorage。
   >
   >    sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。
   >
   >    而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
   >
   >    localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等
   >
   > 3. web storage和cookie的区别
   >
   >    Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。
   >
   >    除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。
   >
   >    但是cookie也是不可以或缺的：cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生
   >
   > 4. 浏览器的支持
   >
   >    除了IE7及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的userData其实就是javascript本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持web storage。
   >
   > ​

​

------



### **CSS类**

1. **盒模型**

   > **含义**

   ```
   一个元素盒模型的层次从内到外分别为：内边距、边框和外边距   
   ```

   > **延伸**：

   ```
   盒子模型分为两类：W3C标准盒子模型和IE盒子模型   
   W3C盒子模型——属性高和属性宽不包含padding和border，即box-sizing的默认属性content-box
   IE盒子模型——属性高和宽包含padding和border，即border-box。
   我们在编写页面代码的时候应该尽量使用标准的W3C盒子模型（需要在页面中声明DOCTYPE类型），避免多个浏览器对同一页面的不兼容。
   因为如果不声明DOCTYPE类型，IE会将盒子模型解释为IE盒子模型，FireFox等会将其解释为W3C盒子模型；
   而如果在页面中声明了DOCTYPE模型，所有的浏览器都会把盒子模型解释为W3C盒子模型。
   ```

2. **position**

   > [CSS中position属性介绍(新增sticky)](http://www.cnblogs.com/s1nker/p/4835079.html)

   | 属性       | 释义                                       |
   | -------- | ---------------------------------------- |
   | static   | 默认值。没有定位，元素出现在正常的流中                      |
   | inherit  | 继承父元素的position属性，IE8以及往前的版本都不支持inherit属性。 |
   | relative | 生成相对定位的元素，相对于其在普通流中的位置进行定位。              |
   | absolute | 生成绝对定位的元素， 相对于position:relative/absolute的父级元素定位，如果没有，就相对于body定位，但是没设置left/right/top/bottom中的某一项时，显示效果和没设置absolute一样。 |
   | fixed    | 生成固定定位的元素，通常相对于浏览器窗口或 frame 进行定位。（老版本IE不支持） |
   | sticky   | 生成粘性定位的元素，容器的位置根据正常文档流计算得出，具体见上面的链接      |

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
   > 使用CSS中的clear:both;属性来清除元素的浮动可解决2、3问题，对于问题1，添加如下样式，给父元素添加clearfix样式：
   >
   > ```css
   > .clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}
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


5. **css选择器优先级**

   > !important > id > class > tag  
   >
   > important 比 内联优先级高,但内联比 id 要高

6. **link标签和@import**

   > [css link和@import区别用法](http://www.divcss5.com/rumen/r431.shtml)

7. **定位**

   > 文档普通流、position定位、浮动
   >
   > 元素的定位属性：position以及相关的top/right/bottom/left，clip，vertical-align，overflow，z-index


7. **实现阴影有哪些方式**

   > box-shadow,text-shadow等等，用的不多，一般要用到再查

8. **对屏幕和鼠标的判定**

   > [《 JavaScript&jQuery交互式Web前端开发》读书笔记一：各种方式确定窗口、文档、鼠标的宽高、位移等信息](http://blog.csdn.net/u013836242/article/details/52910077)


10. **display的几种值**
    > 1. inherit
    > 2. none
    > 3. inline&inline开头的
    > 4. block
    > 5. flex
    > 6. ruby&ruby开头的
    > 7. table&table开头的
    > 8. list-item
    > 9. run-in
    > 10. compact

11. **响应式布局**

    > 目前接触到的就是rem，em和媒体查询，听过过手机端的ratio，viewport之类的，没用过
    >
    > 一般用Chrome浏览器的调试工具观察效果

12. **图片轮播**

    > [任务十二：学习CSS 3的新特性](http://ife.baidu.com/2016/task/detail?taskId=12)
    >
    > 我还没实现，可以看看任务里别人提交的代码

13. **实现各种水平/垂直/水平垂直居中效果**

    > [超简单的图片水平垂直居中](http://blog.csdn.net/u013836242/article/details/77747790)
    >
    > [用css让一个容器水平垂直居中](http://www.cnblogs.com/xianyulaodi/p/5863305.html)
    >
    > [CSS布局奇淫技巧之--各种居中](http://www.cnblogs.com/2050/p/3392803.html)
    >
    > [大小不固定的图片、多行文字的水平垂直居中](http://www.zhangxinxu.com/wordpress/2009/08/%E5%A4%A7%E5%B0%8F%E4%B8%8D%E5%9B%BA%E5%AE%9A%E7%9A%84%E5%9B%BE%E7%89%87%E3%80%81%E5%A4%9A%E8%A1%8C%E6%96%87%E5%AD%97%E7%9A%84%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD/)

14. **一边固定宽度一边自适应**

    > [固定宽度边栏另一边自适应的布局（自己加了个改善）](http://blog.csdn.net/u013836242/article/details/77748300)

15. **Flex**

    > [Flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

16. **sass和less**

    > CSS预处理语言，Bootstrap用的是Less，但Bootstrap最新版改为支持Sass，所以我就学了SaSS。

17. **BFC**

    > [CSS之BFC详解](http://www.html-js.com/article/1866)

18. **hack**

    > [CSS hack 百度百科](https://baike.baidu.com/item/css%20hack/7026361?fr=aladdin)
    >
    > [史上最全的CSS hack方式一览](http://blog.csdn.net/freshlover/article/details/12132801)

19. **浏览器兼容性**

    > CSS: 上面的hack，盒子模型，新属性的兼容性等
    >
    > JS: JS的一些方法不同，比如事件机制相关的方法和属性，Ajax
    >
    > 浏览器: 比如HTTP/1.0时代某些浏览器为协议添加Connection:keep-alive实现

20. **冒泡和捕获**

    > 意思 & addEventListener的最后一个Boolean参数

21. **DOM和BOM**

    > [DOM&BOM知识点](./resource/DOM&BOM知识点.xmind)

    ​

    ​

    ------

    ​


### **JS类**

1. **prototype**

   > [真正理解prototype](http://blog.csdn.net/u013836242/article/details/77775924)

2. **new**

   > [《JavaScript标准参考教程（alpha）》读书笔记一：面向对象编程](http://blog.csdn.net/u013836242/article/details/52932856#new)

3. **this，怎么传入this**

   > [《JavaScript标准参考教程（alpha）》读书笔记一：面向对象编程](http://blog.csdn.net/u013836242/article/details/52932856#绑定this)

4. **原型链和作用域链**

   > 作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的。

5. **闭包**

   > [深入理解javascript原型和闭包（15）——闭包](http://www.cnblogs.com/wangfupeng1988/p/3994065.html)

6. **数组去重**

   > [超方便的数组去重](http://blog.csdn.net/u013836242/article/details/77750061)

7. **传入函数的参数列表**

   > es5:arguments
   >
   > es6:rest

8. **伪数组**

   > 类数组对象，具有length属性且不具有数组的方法。例如：参数列表arguments，节点列表nodelist

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
  > ​         用ES6的Array.from(arguments) 或rest，再用[reduce](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001435119854495d29b9b3d7028477a96ed74db95032675000##reduce)累加
  >
  > 2.var arg = Array.prototype.slice.call(arguments);
  >
  > 一般用这个，实际上就是[伪数组转数组方法（原生4种）](http://www.cnblogs.com/NTWang/p/6280447.html)，这里我再添加一个方法`Object.setPrototypeOf(arguments, Array.prototype);`

11. **各种文本框，复选框之类的值怎么获取**

    > jQuery: html()修改/获取html内容，text()修改/获取文本内容，val()修改/获取表单元素的值；
    >
    > 原生:innerHTML，innerText，value。

12. **ES6**

    > [30分钟掌握ES6/ES2015核心内容](http://www.jianshu.com/p/ebfeb687eb70)

13. **Promise及相关异步操作**

    > [Promise](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345008539155e93fc16046d4bb7854943814c4f9dc2000)

14. **JavaScript垃圾回收方法**

    > 1. 标记清除（mark and sweep）
    >
    >    这是JavaScript最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变量，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”。垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了
    >
    > 2. 引用计数(reference counting)
    >
    >    在低版本IE中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数，当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。
    >
    >    ​
    >
    >    在IE中虽然JavaScript对象通过标记清除的方式进行垃圾回收，但BOM与DOM对象却是通过引用计数回收垃圾的， 也就是说只要涉及BOM及DOM就会出现循环引用问题。

15. **Cookie读写**

    > document.cookie进行读写

    ​

    ---

    ​


###**AJAX类**

1. **手写ajax**

   > [廖雪峰老师JS教程读书笔记（二）：原生AJAX与跨域总结](http://blog.csdn.net/u013836242/article/details/77838304)

2. **跨域相关**

   > 同上

3. **jQuery的Ajax**

   > ​

4. ​

   ------




### **网络类**

1. **点击链接后发生的事情**

   > [阮一峰老师网络协议相关博客读后总结_图解](http://blog.csdn.net/u013836242/article/details/77882631)

2. **HTTP请求，请求和响应的头，返回的码**

   > 请求响应结构结构：
   >
   > 返回码：

3. **https**

   >HTTP和HTTPS:
   >
   >HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS。
   >
   >默认HTTP的端口号为80，HTTPS的端口号为443。
   >
   >为什么HTTPS安全
   >
   >因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用HTTPS，密钥在你和终点站才有。https之所以比http安全，是因为他利用ssl/tls协议传输。它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性

4. **TCP和UDP**

   > TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。一个TCP连接必须要经过三次“对话”才能建立起来
   >
   > UDP（User Data Protocol，用户数据报协议）是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去！ UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境。

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

6. **http2**

   >可参考[阮一峰老师网络协议相关博客读后总结_图解](http://blog.csdn.net/u013836242/article/details/77882631)
   >
   >HTTP/2引入了“服务端推（server push）”的概念，它允许服务端在客户端需要数据之前就主动地将数据发送到客户端缓存中，从而提高性能。
   >
   >HTTP/2提供更多的加密支持  
   >
   >HTTP/2使用多路技术，允许多个消息在一个连接上同时交差。  
   >
   >它增加了头压缩（header compression），因此即使非常小的请求，其请求和响应的header都只会占用很小比例的带宽。

7. **WebSocket**

   > WebSocket是Web应用程序的传输协议，它提供了双向的，按序到达的数据流。他是一个HTML5协议，WebSocket的连接是持久的，他通过在客户端和服务器之间保持双工连接，服务器的更新可以被及时推送给客户端，而不需要客户端以一定时间间隔去轮询。

8. **Get和Post的区别**

    > ​

   ​

---



###**算法类**

1. **排序**

   > 1. 快速排序
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
   >    ​
   >
   > 2. 选择排序
   >
   >    ```javascript
   >
   >    ```
   >
   >    ​
   >
   > 3. 冒泡排序
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
   >    ​
   >
   > 4. 桶排序
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

1. ### **cookie和session**

   > 优点：极高的扩展性和可用性
   >
   > 1. 通过良好的编程，控制保存在cookie中的session对象的大小。
   > 2. 通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
   > 3. 只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
   > 4. 控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。
   >
   > 缺点：
   >
   > 1. `Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉.
   > 2. 安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。
   > 3. 有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用
   >
   > cookie 和session 的区别：
   >
   >  1、cookie数据存放在客户的浏览器上，session数据放在服务器上。
   >
   >  2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
   >
   > 考虑到安全应当使用session。
   >  3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
   >  考虑到减轻服务器性能方面，应当使用COOKIE。
   >  4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
   >  5、所以个人建议：
   > 将登陆信息等重要信息存放为SESSION
   > 其他信息如果需要保留，可以放在COOKIE中

2. 绝对路径和相对路径

   > 绝对路径:从盘符开始
   >
   > 相对路径:从当前位置开始


---



### **概念类**

1. **前后端分离**

   > 不是很清楚，

2. **前端整体架构**

   > [自己总结的web前端知识体系大全【欢迎补充】](http://www.cnblogs.com/wangfupeng1988/p/4649709.html)


---



### **工程类**

1. **性能优化**

   > 不了解  
   >
   > 少用全局变量之类的  
   >
   > 尽量用缓存，CDN  
   >
   > 压缩
   >
   > css sprites，以及类似的各种自动化工具打包合并文件以减少请求次数

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

   > 没用过，用过grunt，跟着网上的课程学的时候学了一点点，知道是干啥的，没看过文档

4. **webpack和为什么要打包**

   > 1. 同上
   > 2. 这三个都是自动化工具，就是为了减少重复劳动（压缩，编译，单元测试，代码检查），提高效率的，无论是工作效率还是访问效率。

5. ​

---



### **安全类**

1. **常见web安全及防护原理 **

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
   >
   > 4. **同源策略**
   >
   >    协议、域名、端口相同的算一个域，

   ​

---



### **其他**



---


### 参考链接

    [1]: http://www.nowcoder.com/discuss/7600
    [2]: http://www.nowcoder.com/discuss/5168
    [3]: https://mdluo.github.io/blog/about-front-end-interview/
    [4]: https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers   （高端向，还没看先存着）
  
