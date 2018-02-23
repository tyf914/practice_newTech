# Vue.js学习笔记

> 1. [官方教程](https://cn.vuejs.org/v2/guide/)
> 2. [官方API](https://cn.vuejs.org/v2/api/)
> 3. 官方学习路径：[新手向：Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551)
> 4. [B站up主自制Vue基础讲解视频](https://space.bilibili.com/22590215#!/):自己看不进去可以看看这个，up主讲的不错，开个2倍速播放一会儿就看完了还不是美滋滋



---



## 基础

首先可以看[安装](https://cn.vuejs.org/v2/guide/installation.html)和[介绍](https://cn.vuejs.org/v2/guide/index.html)

前者，像我这样的初学者用CDN引用就行了，其它暂时不用看，配合着Vue用其他东西的没出问题自然最好，有问题百度，多半是引用CDN的位置问题。

后者，大致介绍了一些基本的用法，可以看看跟着写写熟悉一下。

1. ### Vue实例

   > 1. #### Vue实例结构
   >
   >    ```javascript
   >    var vm = new Vue({
   >      el: '#id',	// 绑定元素，必有
   >      data: object,	// 传入数据对象，在渲染时取其中的值，可以通过“vue实例名(这里就是vm).数据对象的键名”直接访问值。
   >      computed: object,  // 计算属性，object的键值对是“计算属性名称：其getter函数”，用于对data中的属性值进行复杂逻辑运算
   >      methods: object,  // 方法，object的键值对是“方法名称：函数”，可通过“vue实例名.methods中的方法名(参数)”直接调用
   >      watch: object,	// 侦听属性，object的键值对是“属性名称：函数”，属性名称是data中的属性，当属性发生变化时传入变化后的属性到函数并执行
   >      created等系列生命周期相关: function,	// 暂时理解为类似Ajax中的状态回调函数
   >      components: object	// 局部注册在本实例的组件，仅在本实例作用域内可用，“组件名：组件选项对象”
   >      mixins: array   // 加载多个混合
   >    })
   >    ```
   >
   >    - **Vue 不能检测对象属性的添加或删除**：
   >      - 不管data数据对象是以字面量创建还是导入外部Object，Vue实例被创建后，data中的属性都会变成响应式属性，即属性的变化会同步到视图，外部Object（如果有的话，同时外部Object更改属性值也会同步到其余两者）
   >      - 但是创建后往vm实例或外部Object上再添加属性，是不会加入响应式系统的，**只有当实例被创建时 `data` 中存在的属性是响应式的**。
   >    - 在选项属性或回调（经常是下面的生命周期有关的回调）上不要使用箭头函数，因为箭头函数和普通函数的this指向机制不同
   >    - vm实例可以通过`vm.\$data`，`vm.\$el`这种加\$前缀的形式暴露一些实例方法和属性，具体见[API 参考](https://cn.vuejs.org/v2/api/#实例属性)
   >
   > 2. #### 实例生命周期
   >
   >    - 见[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)

2. ### 模板语法

   > 1. #### 插值
   >
   >    - **文本：**
   >
   >      - Mustache语法，即使用{{}}的文本插值：
   >
   >      ```html
   >      <span>{{ msg }}</span>
   >      ```
   >
   >      msg会被替换为vm实例的msg属性的值，此时msg中如果有HTML代码，将会作为普通文本输出。
   >
   >      - 插值语法不能用在标签属性上
   >
   >      - 使用`v-text`指令可以更新文本内容，下例：
   >
   >        ```html
   >        <span v-text="msg"></span>
   >        <!-- 和下面的一样 -->
   >        <span>{{msg}}</span>
   >        ```
   >
   >      - 可以通过`v-once`指令执行一次性插值，不会动态更新，但会影响到该节点上所有的数据绑定：
   >
   >        ```html
   >        <span v-once>这个将不会改变： {{ msg }}</span>
   >        ```
   >
   >    - **原始HTML：**
   >
   >      - 使用`v-html`指令，将div内容替换为data中的`rawHtml`属性的值，并以HTML代码而非普通文本输出：
   >
   >        ```html
   >        <div v-html="rawHtml"></html>
   >        ```
   >
   >        注意：不要对用户提供的内容使用插值，以免遭到攻击
   >
   >    - **特性：**
   >
   >      - 插值语法不能作用在HTML特性上，需要使用`v-bind`指令在特性上使用data数据对象上的属性值：
   >
   >        ```html
   >        <div v-bind:id="dynamicId"></div>
   >        ```
   >
   >      - 若要绑定的特性为Boolean类型，若求值结果为falsy（简而言之就是可以强制类型转化为false的那些值），则该特性被删除：
   >
   >        ```html
   >        // 因为disabled的值为Boolean对象，所以若此时绑定的属性求值结果为falsy，则这个button元素上不会有disabled特性
   >        <button v-bind:disabled="isButtonDisabled">Button</button>
   >        ```
   >
   >      - 额外提示：
   >
   >        - 在学习中我使用handleBars模板引擎，它也使用{{}}进行插值，和Vue冲突，解决办法：[vue的符号{{}}和handlebars的符号冲突问题解决](http://blog.csdn.net/u013836242/article/details/78338170)
   >
   >        - 使用自定义的Vue组件（现在不知道不影响）批量生产div时，生成批量的id时出现错误，没能照预想地方式插值进去，解决办法：使用`\`转义`'`
   >
   >          ```html
   >          <div v-bind:id="\'div-\'+vm.id"></div>
   >          ```
   >
   >    - **JavaScript表达式：**
   >
   >      - 数据绑定时，不仅可以简单地绑定属性值，也可以绑定JavaScript表达式，可以访问JS的部分全局变量，如`Math`和`Date`，不包括用户自定义的全局变量：
   >
   >        ```html
   >        {{ number + 1 }}
   >
   >        {{ ok ? 'YES' : 'NO' }}
   >
   >        {{ message.split('').reverse().join('') }}
   >
   >        <div v-bind:id="'list-' + id"></div>
   >        ```
   >
   >      - 每个绑定都只能包含**单个表达式**
   >
   >        ```html
   >        <!--- 这是语句，不是表达式 -->
   >        {{ var a = 1 }}
   >
   >        <!-- 流控制也不会生效，请使用三元表达式 -->
   >        {{ if (ok) { return message } }}
   >        ```
   >
   > 2. #### 指令
   >
   >    指令是带有v-前缀的特殊属性，其值一般是单个JavaScript表达式（v-for例外），指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
   >
   >    - **参数：**
   >
   >      部分指令能接受参数，指令名称+冒号+参数，如`v-bind`绑定HTML属性，`v-on`监听DOM事件：
   >
   >      ````html
   >      <a v-bind:href="url"></a>
   >
   >      <a v-on:click="doSomething"></a>
   >      ````
   >
   >    - **修饰符：**
   >
   >      修饰符是以`.`追加的特殊后缀，用来以特殊方式绑定指令，如`.prevent`修饰符让`v-on`指令对绑定的事件调用`event.preventDefault()`：
   >
   >      ```html
   >      <form v-on:submit.prevent="onSubmit">
   >      ```
   >
   > 3. #### 缩写
   >
   >    `v-bind:`可以替换为`:`， `v-on:`可以替换为`@`

3. ### 计算属性和观察者

   > 1. #### 计算属性
   >
   >    模板语法中的JavaScript表达式非常便利，但是它一般只用来做简单运算，对于任何复杂逻辑，都应当使用计算属性
   >
   >    - **基础例子：**
   >
   >      ```html
   >      <div id="example">
   >        <p>Original message:"{{ message }}"</p>
   >        <p>Computed reversed message:"{{ reversedMessage }}"</p>
   >      </div>
   >      ```
   >
   >      ```js
   >      var vm = new Vue({
   >        el: '#example',
   >        data: {
   >          message: 'Hello'
   >        },
   >        computed: {
   >          //计算属性的getter
   >          reversedMessage: function () {
   >            //this指向vm实例
   >            return this.message.split('').reverse().join('');
   >          }
   >        }
   >      });
   >      ```
   >
   >      可以像绑定普通属性一样在模板中绑定计算属性，上例中的`vm.message`发生变化时，所有依赖计算属性`vm.reversedMessage`的绑定也会更新。
   >
   >    - **计算属性缓存 vs 方法：**
   >
   >      上例中计算属性`reversedMessage`的getter函数，实际上也可以定义为vm实例的methods中的方法：
   >
   >      ```html
   >      <p>Reversed message: "{{ reversedMessage() }}"</p>
   >      ```
   >
   >      ```js
   >      methods: {
   >        reversedMessage: function () {
   >          return this.message.split('').reverse().join('')
   >        }
   >      }
   >      ```
   >
   >      方法和计算属性的结果完全相同，不同的是**计算属性基于依赖进行缓存**，在上例中，`vm.message`未发生改变时，多次访问`vm.reversedMessage`都会立即返回之前的计算结果，而调用methods方法总会再次执行函数。
   >
   >      如果计算属性没有依赖，那么它会一直使用之前的缓存，不再更新：
   >
   >      ```js
   >      computed: {
   >        now: function () {
   >          return Date.now();
   >        }
   >      }	
   >      ```
   >
   >    - **计算属性 vs 侦听属性：**
   >
   >      Vue提供了一种更通用的方式来观察和响应Vue实例上的数据变动：**侦听属性**
   >
   >      例子：
   >
   >      ```html
   >      <div id="demo">{{ fullName }}</div>
   >      ```
   >
   >      ```js
   >      // 侦听属性，代码是命令式且重复的
   >      var vm = new Vue({
   >        el: '#demo',
   >        data: {
   >          firstName: 'Foo',
   >          lastName: 'bar',
   >          fullName: 'Foo Bar'
   >        },
   >        watch: {
   >          firstName: function (val) {
   >            this.fullName = val + ' ' + this.lastName; 
   >          },
   >          lastName: function (val) {
   >            this.fullName = this.firstName + ' ' + val;
   >          }
   >        }
   >      });
   >
   >      // 计算属性，官网文档说这样“好得多了”
   >      var vm = new Vue({
   >        el: '#demo',
   >        data: {
   >          firstName: 'foo',
   >          lastName: 'bar'
   >        },
   >        computed: {
   >          fullName: function () {
   >            return this.firstName + ' ' + this.lastName
   >          }
   >        }
   >      });
   >      ```
   >
   >    - **计算属性的setter：**
   >
   >      计算属性默认只有getter，如果需要你也可以自己提供一个setter：
   >
   >      ```js
   >      computed: {
   >        fullName: {
   >          getter: function () {
   >            return this.firstName + ' ' + this.lastName;
   >          },
   >          setter: function (newValue) {
   >            var name = newValue.split(' ');
   >            this.firstName = names[0];
   >            this.lastName = names[names.length - 1];
   >          }
   >        }
   >      }
   >
   >      //定义setter后运行vm.fullName = 'john Doe';
   >      //setter会被调用，从而更新firstName和lastName
   >      ```
   >
   > 2. #### 侦听器
   >
   >    主要说了通过`watch`选项响应数据的变化，当需要在数据变化时执行异步或开销较大的操作时，这样最有用。并提供了例子，具体见[原文](https://cn.vuejs.org/v2/guide/computed.html#侦听器)

4. ### Class与Style绑定

   > 1. #### 绑定HTML Class
   >
   >    - **对象语法：**
   >
   >      可以通过传给`v-bind:class`一个对象来动态切换class;
   >
   >      - 绑定的数据对象内联定义在模板里：
   >
   >        ```html
   >        <!-- v-bind:class指令可以与普通的class属性共存 -->
   >        <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError}">
   >        </div>
   >
   >        <!-- 当数据属性为falsy时，该数据属性描述的class不存在 -->
   >        <!-- 根据下面的数据属性得到的渲染结果 -->
   >        <div class="static active"></div>
   >        ```
   >
   >        ```js
   >        data:{
   >          isActive: true,
   >          hasError: false
   >        }
   >        ```
   >
   >      - 直接在data里定义绑定的数据对象：
   >
   >        ```html
   >        <!-- 渲染结果和前面一样 -->
   >        <div v-bind:class="classObject"></div>
   >        ```
   >
   >        ```js
   >        data:{
   >            classObject: {
   >                active: true,
   >                'text-danger': false
   >            }
   >        }
   >
   >        //也可以绑定一个返回对象的计算属性
   >
   >        computed: {
   >            classObject: function () {
   >                return {
   >                    //...
   >                }
   >            }
   >        }
   >        ```
   >
   >    - **数组语法：**
   >
   >      也可以传递一个数组给`v-bind:class`来应用一个class列表
   >
   >      - 典型用法：
   >
   >        ```html
   >        <div v-bind:class="[activeClass, errorClass]"></div>
   >        ```
   >
   >        ```js
   >        data: {
   >            activeClass: 'active',
   >            errorClass: 'text-danger'
   >        }
   >        ```
   >
   >      - 根据条件切换class:
   >
   >        ```html
   >        <!-- 使用三元表达式 -->
   >        <div v-bind:class="[isActive ? activeClass : '', errorClass]">
   >        </div>
   >        ```
   >
   >      - 数组语法中也可以用对象语法：
   >
   >        ```html
   >        <div v-bind:class="[{ active: isActive }, errorClass]">
   >        </div>
   >        ```
   >
   >    - **用在组件上：**
   >
   >      用在组件上和用在普通HTML标签上没啥区别，这些类将被添加到根元素上，根元素上已存在的class不会被覆盖
   >
   > 2. #### 绑定内联样式
   >
   >    - **对象语法，数组语法：**
   >
   >      `v-bind:style`跟上面的`v-bind:class`的用法基本一致
   >
   >    - **自动添加前缀：**
   >
   >      `v-bind:style`使用需要添加浏览器引擎前缀的CSS属性时，Vue.js会自动添加前缀。
   >
   >    - **多重值：**
   >
   >      从Vue.js 2.3.0+版本开始，可以为style绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：
   >
   >      ```html
   >      <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
   >      ```
   >
   >      这样写只会渲染数组中最后一个被浏览器支持的值。

5. ### 条件渲染

   > 1. #### v-if
   >
   >    - **基本用法：**
   >
   >      ```html
   >      <!-- 
   >      ok是data数据对象中的属性，当ok为truthy时h1元素才会被渲染。
   >      当然，也可以其他绑定方式或者直接用js表达式
   >      -->
   >      <h1 v-if="ok">Yes</h1>
   >
   >      <!-- 也可以使用一个v-else块形成流控制 -->
   >      <h1 v-if="ok">Yes</h1>
   >      <h1 v-else>No</h1>
   >      ```
   >
   >    - **用`v-if`切换多个元素**
   >
   >      ```html
   >      <!-- 
   >      把<template>元素当做不可见的包裹元素，
   >      在它上面使用v-if条件渲染分组
   >      最终渲染结果不会包含<template>元素
   >      -->
   >
   >      <template v-if="ok">
   >        <h1>Title</h1>
   >        <p>Paragraph 1</p>
   >        <p>Paragraph 2</p>
   >      </template>
   >      ```
   >
   >    - **`v-else`：**
   >
   >      使用`v-else`指令来表示`v-if`的“else块”：
   >
   >      ```html
   >      <div v-if="Math.random() > 0.5">
   >        	Now you see me
   >      </div>
   >      <!-- v-else必须紧跟在v-if或v-else-if元素后面 -->
   >      <div v-else>
   >        	Now you don`t
   >      </div>
   >      ```
   >
   >    - **`v-else-if`：**
   >
   >      2.1.0新增，充当`v-if`的“else-if”块，可连续使用，也必须紧跟在`v-if`或`v-else-if`元素后面
   >
   >    - **用`key`管理可复用的元素：**
   >
   >      - **不使用key:**
   >
   >        Vue会尽可能高效地渲染元素，它经常复用已有元素：
   >
   >        ```html
   >        <template v-if="loginType === 'username">
   >        	<label>Username</label>
   >          	<input placeholder="Enter your username">
   >        </template>
   >        <template v-else>
   >        	<label>Email</label>
   >          	<input placeholder="Enter your email address">
   >        </template>
   >
   >        <!--
   >        在此例中，因为两个<template>适用了相同的元素，所以切换loginType时，input元素实际没有被替换，仅仅替换了它的placeholder，因而用户已输入的内容也会继续显示在input框内
   >        -->
   >        ```
   >
   >      - **使用key：**
   >
   >        使用key是为了表达“这是两个独立的元素，不要复用它们。”：
   >
   >        ```html
   >        <template v-if="loginType === 'username">
   >          	<!-- label仍然被复用 -->
   >          	<label>Username</label>
   >          	<!-- key值是唯一的 -->
   >          	<input placeholder="Enter your username" key="username-input">
   >        </template>
   >        <template v-else>
   >          	<label>Email</label>
   >          	<input placeholder="Enter your email address" key="email-input">
   >        </template>
   >
   >        <!--
   >        现在每次切换loginType都会重新渲染输入框，切换后用户已输入的内容也会被清除，即使再次切换回来，也不会有之前输入的内容
   >        -->
   >        ```
   >
   >
   >
   > 2. #### v-show
   >
   >    ```html
   >    <h1 v-show="ok">Hello!</h1>
   >    ```
   >
   >    - `v-show`的用法和`v-if`基本一致，不同的是`v-show`只是切换元素的`display`，元素还是被渲染并保留在DOM中。
   >    - `v-show`不支持`<template>`和`v-else`元素
   >
   > 3. #### v-if   VS   v-show
   >
   >    - **`v-if`:**
   >      - 它是“真正”的条件渲染，切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
   >      - 它是“惰性”的：若一开始条件为假，它什么也不做，直到条件第一次变为真时它才开始渲染
   >    - **`v-show`:**
   >      - 不管初始条件如何，元素总会被渲染，切换只是简单地基于CSS切换
   >    - **结论：**
   >      - `v-if`切换开销高，`v-show`初始开销高。
   >      - 切换少就用前者，多就用后者
   >
   > 4. #### v-if与v-for一起使用
   >
   >    当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。

6. ### 列表渲染

   > 1. #### 用`v-for`把一个数组对应为一组元素
   >
   >    `v-for`指令根据一组数组的选项列表进行渲染。
   >
   >    - **常规用法：**
   >
   >      ```html
   >      <ul id="example-1">
   >        	<!-- in可以用of代替 -->
   >        	<li v-for="item in items">
   >            	{{ item.message }}
   >        	</li>
   >      </ul>
   >      ```
   >
   >      ```js
   >      var example1 = new Vue({
   >         el: '#example-1',
   >         data: {
   >             items: [
   >                 { message: 'Foo' },
   >                 { message: 'Bar' }
   >             ]
   >         }
   >      });
   >      ```
   >
   >    - **父作用域访问权限和可选参数：**
   >
   >      ```html
   >      <ul id="example-2">
   >        	<!-- v-for块中，我们拥有对父作用域属性的完全访问权限 -->
   >        	<!-- v-for还支持一个可选的第二参数为当前项的索引 -->
   >        	<li v-for="(item, index) in items">
   >        		{{ parentMessage }} - {{ index }} - {{ item.message }}
   >        	</li>
   >      </ul>
   >
   >      <!-- 渲染结果 -->
   >      ● Parent - 0 - Foo
   >      ● Parent - 1 - Bar
   >      ```
   >
   >      ```js
   >      var example2 = new Vue({
   >         el: '#example-2',
   >         data: {
   >             parentMessage: 'Parent',
   >             items: [
   >                 { message: 'Foo'},
   >                 { message: 'Bar'}
   >             ]
   >         }
   >      });
   >      ```
   >
   > 2. #### 一个对象的`v-for`
   >
   >    与上面的类似，可以用`v-for`通过一个对象的属性来迭代，可提供第二个参数为键名，第三个参数为索引。
   >
   >    遍历对象时，分割符是`in`；
   >
   >    遍历对象时，按`Object.keys()`结果遍历，不能保证结果在不同JavaScript引擎下一致。
   >
   > 3. #### `key`
   >
   >    - 用`v-for`更新已渲染过的元素列表时，它习惯复用——如果数据项顺序改变，它不会移动DOM元素来匹配新顺序，而是简单复用每个元素，当然显示DOM元素的顺序还是跟改变后的新顺序一致。
   >
   >    - 上面的默认渲染模式高效，但只适用于**不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**（看不懂）
   >
   >    - 以`v-bind`绑定`key`值，给每项提供一个唯一的`key`属性，可以让Vue追踪每个节点的身份，从而重用和重新排序现有元素。理想的`key`值是每项都有且唯一的id。
   >
   >      ```html
   >      <div v-for="item in items" :key="item.id">
   >      </div>
   >      ```
   >
   >    - 额外提示：
   >
   >      根据我的代码实践，发现是这么一回事儿：
   >
   >      1. 先弄一个不带key的正常`<ol>`列表。
   >      2. 在浏览器开发者工具的页面元素那一块，单独在第一个`<li>`上加一个HTML特性，其他项都不加。
   >      3. 在浏览器控制台里执行`items.reverse()`，当然名字不一定是items哈，总是让items的顺序改变，这时候可以发现，页面上的内容看上去确实改变了顺序，但是实际上之前那个HTML特性始终在第一个`<li>`上。
   >      4. 这说明，DOM元素并没有改变位置，改变的只是每个`<li>`里面的内容。
   >      5. 加上`key`后，HTML标签的顺序改变了，说明是DOM元素移动。
   >      6. 实际上，在实践中发现，就算不加`key`，我给`<li>`批量生成`id`，也能实现同样效果，我想可能是因为`id`也唯一标识了元素吧。（可能不是这样，我忘了当时是否用的是组件了，如果是组件，会不会跟现在的Vue版本里组件用`v-for`必须要有`key`有关）
   >
   > 4. #### 数组更新检测
   >
   >    - **变异方法：**
   >
   >      以下这些数组的变异方法会触发视图更新：
   >
   >      - `push()`
   >      - `pop()`
   >      - `shift()`
   >      - `unshift()`
   >      - `splice()`
   >      - `sort()`
   >      - `reverse()`
   >
   >    - **替换数组：**
   >
   >      - 变异方法会改变原始数组，相应的，也有非变异方法不会改变原始数组而是返回一个新数组：
   >
   >        - `filter()`
   >        - `concat()`
   >        - `slice()`
   >
   >      - 使用非变异方法时，可以用返回的新数组替换原始数组：
   >
   >        ```js
   >        example1.items = example1.items.filter(function (item) {
   >            return item.message.match(/Foo/);
   >        })
   >        ```
   >
   >      - 为了最大范围的重用，新旧数组中相同的元素产生的DOM元素不会被丢弃（自己看文档是这么理解的，没动手实践过）
   >
   >    - **注意事项：**
   >
   >      以下两种情况Vue不能检测数组的变动：
   >
   >      1. 直接用索引设置值：
   >
   >         - **例子：**
   >
   >           ```js
   >           vm.items[indexOfItem] = newValue;
   >           ```
   >
   >         - **解决办法：**
   >
   >           ```js
   >           // Vue.set
   >           Vue.set(example1.items, indexOfItem, newValue);
   >
   >           // Array.prototype.splice
   >           example1.items.splice(indexOfItem, 1, newVaule);
   >           ```
   >
   >      2. 直接修改数组长度：
   >
   >         - **例子：**
   >
   >           ```js
   >           vm.items.length = newLength;
   >           ```
   >
   >         - **解决办法：**
   >
   >           ```js
   >           example1.items.splice(newLength);
   >           ```
   >
   > 5. #### 对象更改检测注意事项
   >
   >    最开始就提到了，**Vue 不能检测对象属性的添加或删除**，对已创建的实例，Vue不能动态添加根级别的响应式属性，但还有一些方法可以向已存在的嵌套对象中添加响应式属性：
   >
   >    ```js
   >    // 实例
   >    var vm = new Vue({
   >      	data: {
   >            userProfile: {
   >            	name: 'Anika'
   >            } 
   >        }
   >    });
   >
   >    // 单个添加
   >    Vue.set(vm.userProfile, 'age', 27);
   >    //还可以使用全局Vue.set的别名vm.$set实例方法
   >    this.$set(this.userProfile, 'age', 27);
   >
   >    // 多个添加
   >    this.userProfile = Object.assign({}, this.userProfile, {
   >      	age: 27,
   >      	favoriteColor: 'Vue Green'
   >    })
   >    ```
   >
   > 6. #### 显示过滤/排序结果
   >
   >    - **通过计算属性：**
   >
   >      ```html
   >      <li v-for="n in evenNumbers">{{ n }}</li>
   >      ```
   >
   >      ```js
   >      data: {
   >          numbers: [ 1, 2, 3, 4, 5 ]
   >      },
   >      computed: {
   >          evenNumber: function () {
   >              return this.numbers.filter(function (nubmer) {
   >                 	return number % 2 === 0 
   >              });
   >          }
   >      }
   >      ```
   >
   >    - **通过method方法：**
   >
   >      ```html
   >      <!-- 计算属性不适用时（比如在嵌套v-for循环中），可以使用method方法 -->
   >      <li v-for="n in even(numbers)">{{ n }}</li>
   >      ```
   >
   >      ```js
   >      data: {
   >          numbers: [ 1, 2, 3, 4, 5 ]
   >      },
   >      method: {
   >          even: function (numbers) {
   >              return this.numbers.filter(function (nubmer) {
   >                 	return number % 2 === 0 
   >              });
   >          }
   >      }
   >      ```
   >
   > 7. #### 一段取值范围的`v-for`
   >
   >    ```html
   >    <!-- v-for也可以取整数 -->
   >    <div>
   >      <span v-for="n in 10">{{ n }}</span>
   >    </div>
   >
   >    <!-- 结果： -->
   >    1 2 3 4 5 6 7 8 9 10
   >    ```
   >
   > 8. #### `v-for`on a `<template>`
   >
   >    ```html
   >    <!-- v-for也可以像v-if一样使用<template>渲染多个元素 -->
   >    <ul>
   >      <template v-for="item in items">
   >        <li>{{ item.msg }}</li>
   >        <li class="divider"></li>
   >      </template>
   >    </ul>
   >    ```
   >
   > 9. #### `v-for` with `v-if`
   >
   >    `v-for`优先级比`v-if`高，当它们处于同一节点时，`v-for`每次循环都运行一次`v-if`，可以起到筛选的作用。
   >
   >    如果想用`v-if`来跳过循环，要将`v-if`置于`v-for`外层
   >
   > 10. #### 一个组件的`v-for`
   >
   >   - 可以像普通元素一样在自定义组件中用`v-for`
   >   - 2.2.0+版本里，组件中使用`v-for`，必须要有`key`
   >   - 因为组件的独立作用域问题，必须用`props`才能传递数据到组件中
   >   - 例子：简单的TODO列表，见[原文](https://cn.vuejs.org/v2/guide/list.html#一个组件的-v-for)
   >

7. ### 事件处理

   >1. #### 监听事件
   >
   >   用`v-on`指令监听DOM事件来触发事件代码，示例：
   >
   >   ```html
   >   <div id="example-1">
   >     	<button v-on:click="count += 1">增加1</button>
   >     	<p>这个按钮被点击了 {{ counter }}次。</p>
   >   </div>
   >   ```
   >
   >   ```js
   >   var example1 = new Vue({
   >      	el: '#example-1',
   >     	data: {
   >           count: 0
   >       }
   >   });
   >   ```
   >
   >2. #### 方法事件处理器
   >
   >   ```html
   >   <!-- v-on可以接受一个定义的方法来调用 -->
   >   <div id="example-2">
   >     	<!-- greet是vue实例中定义的方法名 -->
   >     	<button v-on:click="greet">Greet</button>
   >   </div>
   >   ```
   >
   >   ```js
   >   var example2 = new Vue({
   >     el: '#example-2',
   >     data: {
   >       name: 'Vue.js'
   >     },
   >     //在methods对象中定义方法
   >     methods: {
   >       greet: function (event) {
   >         // 'this'在方法中指当前Vue实例
   >         alert('Hello ' + this.name + '!');
   >         // event是原生DOM事件
   >         if (event) {
   >           alert(event.target.tagName);
   >         }
   >       }
   >     }
   >   });
   >
   >   // 也可以直接js调用方法
   >   example2.greet();	// 输出 'Hello Vue.js!' 因为不是DOM事件所以不会输出别的
   >   ```
   >
   >3. #### 内联处理器里的方法
   >
   >   ```html
   >   <!--除了直接绑定一个方法，也可以用内联js语句调用方法 --》
   >   <!-- 如果需要在内联语句处理器中访问原生DOM事件，可以用$event把事件传入方法中 -->
   >   <button v-on:click="warn('Form cannot be submitted yet.' $event)">
   >   </button>
   >   ```
   >
   >   ```js
   >   method: {
   >       warn: function (mesage, event) {
   >           if (event) {
   >               event.preventDefault();
   >           }
   >         	alert(message);
   >       }
   >   }
   >   ```
   >
   >4. #### 事件修饰符
   >
   >   - `.stop`
   >   - `.prevent`
   >   - `.capture`
   >   - `.self`
   >   - `.once`
   >
   >   ```html
   >   <!-- 阻止单击事件冒泡 -->
   >   <a v-on:click.stop="doThis"></a>
   >
   >   <!-- 提交事件不再重载页面 -->
   >   <form v-on:submit.prevent="onSubmit"></form>
   >
   >   <!-- 修饰符可以串联 -->
   >   <!-- 串联时修饰符的顺序很重要 -->
   >   <a v-on:click.stop.prevent="doThat"></a>
   >
   >   <!-- 只有修饰符 -->
   >   <form v-on:submit.prevent></form>
   >
   >   <!-- 添加事件侦听器时使用事件捕获模式 -->
   >   <div v-on:click.capture="doThis">...</div>
   >
   >   <!-- 只当事件在该元素本身 (比如不是子元素) 触发时触发回调 -->
   >   <div v-on:click.self="doThat">...</div>
   >
   >   <!-- 2.1.4新增 -->
   >   <!-- 点击事件将只会触发一次 -->
   >   <a v-on:click.once="doThis"></a>
   >   ```
   >
   >5. #### 键值修饰符
   >
   >   - **检测键值：**
   >
   >     ```html
   >     <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
   >     <input v-on:keyup.13="submit">
   >     ```
   >
   >   - **常用按键别名：**
   >
   >     - `.enter`
   >     - `.tab`
   >     - `.delete` (捕获“删除”和“退格”键)
   >     - `.esc`
   >     - `.space`
   >     - `.up`
   >     - `.down`
   >     - `.left`
   >     - `.right`
   >
   >     ```html
   >     <input v-on:keyup.enter="submit">
   >
   >     <!-- 缩写语法 -->
   >     <input @keyup.enter="submit">
   >     ```
   >
   >   - **自定义键值修饰符别名：**
   >
   >     通过全局`config.keyCodes`对象自定义：
   >
   >     ```js
   >     // 可以使用 v-on:keyup.f1
   >     Vue.config.keyCodes.f1 = 112
   >     ```
   >
   >   - **自动匹配案件修饰符：**
   >
   >     2.5.0新增
   >
   >     - **使用任意有效按键名为修饰符：**
   >
   >       ```html
   >       <!-- 使用短横线命名法，可以直接使用由 KeyboardEvent.key 暴露的任意有效按键名作为修饰符 -->
   >       <input @keyup.page-down="onPageDown">
   >
   >       <!-- 处理函数仅在$event.key === 'PageDown'时被调用 -->
   >       ```
   >
   >     - **特殊情况：**
   >
   >       极少数的键 (`.esc` 以及所有的方向键) 在 IE9 中有不同的 `key` 值, 如果你想支持 IE9，应使用之前的Vue内置别名。
   >
   >6. #### 系统修饰符
   >
   >   - 可以用如下修饰符开启鼠标或键盘事件监听，使在按键按下时发生响应。2.1.0新增
   >
   >     - `.ctrl`
   >     - `.alt`
   >     - `.shift`
   >     - `.meta`（windows系统键盘上对应win键）
   >
   >     例子：
   >
   >     ```html
   >     <!-- Alt + C -->
   >     <input @keyup.alt.67="clear">
   >     <!-- Ctrl + Click -->
   >     <div @click.ctrl="doSomething">Do something</div>
   >     ```
   >
   >   - 修饰键比正常的按键不同；修饰键和 `keyup` 事件一起用时，事件引发时必须按下正常的按键。换一种说法：如果要引发 `keyup.ctrl`，必须按下 `ctrl` 时释放其他的按键；单单释放 `ctrl` 不会引发事件。
   >
   >   - **`.exact`修饰符：**
   >
   >     `.exact` 修饰符应与其他系统修饰符组合使用，以指示处理程序只在精确匹配该按键组合时触发。2.5.0新增
   >
   >     ```html
   >       <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
   >     <button @click.ctrl="onClick">A</button>
   >      
   >       <!-- 只有在 Ctrl 被按下的时候触发 -->
   >     <button @click.ctrl.exact="onCtrlClick">A</button>
   >     ```
   >
   >   - **鼠标按钮修饰符：**
   >
   >     - `.left`
   >     - `.right`
   >     - `.middle`
   >
   >7. #### 为什么在HTML中监听事件
   >
   >   这种监听方式虽违背了关注点分离原则，但因为所有Vue.js事件处理方法和表达式都严格绑定在当前视图的ViewModel上，并不会导致维护上的困难，使用`v-on`的好处：
   >
   >   1. 直观地通过HTML模板定位JS代码中对应的方法；
   >   2. 无需在JS里手动绑定事件，与DOM完全解耦，更易于测试；
   >   3. 当ViewModel被销毁时，所有事件处理器都自动被删除，无须自己清理；

8. ### 表单输入绑定

   > 1. #### 基础用法
   >
   >    - **介绍：**
   >
   >      - 用`v-model`指令在表单控件元素上创建双向数据绑定，它会**根据控件类型自动选取正确方法**更新元素。
   >
   >    - **注意事项：**
   >
   >      - `v-model`会忽略所有表单元素的`value`、`checked`、`selected`特性的初始值。应从Vue实例的`data`选项中声明初始值。
   >      - `v-model`不会在IME（输入法，不懂，以后学到再管吧）输入中得到更新，要更新请使用`input`事件
   >
   >    - **具体用例：**
   >
   >      略写，自己看[教程原文](https://cn.vuejs.org/v2/guide/forms.html#文本)。
   >
   >      简单概括：
   >
   >      1. `v-model`绑定在**输入文本的控件**上时，控件的内容（也就是文本）自动赋给`v-model`给定的变量，这个变量必须在Vue实例中有定义（即，数据对象里有这个属性，另外计算属性好像不行）。简而言之，把文本直接赋给Vue实例的属性，然后就像使用Vue实例的属性一样使用（具体原理：[使用自定义事件的表单输入组件](https://cn.vuejs.org/v2/guide/components.html#使用自定义事件的表单输入组件)）。下例：
   >
   >         ```html
   >         <input v-model="message" placeholder="edit me">
   >         <p> Message is: {{ message }}</p>
   >
   >         <!-- textarea控件也是输入文本，也可以这么干。在textarea使用插值语法不会生效，应使用v-model替代插值语法 -->
   >         <!-- 别忘了在Vue实例中定义message -->
   >         ```
   >
   >      2. 绑定在**单个CheckBox**上时，传递给`v-model`命名变量的是true或false；
   >
   >      3. 一个变量同时绑定在**多个   CheckBox   或   单/多个Radio单选按钮**上时，传递给`v-model`命名变量的是勾选中的组件的`value`。如果是多选，Vue实例中定义数据属性时就初始为空数组，单选就是空字符串；
   >
   >      4. 绑定在**select选择列表**上时，如果`option`有`value`，传给`v-model`的就是勾选的`option`的`value`，如果没有，就是`option`内的文本。单选多选初始值参照上一点；
   >
   >      5. 绑定在**select选择列表**上时，一开始默认没选择option时，最好在第一个option，也就是提示“请选择”的option上加上`disabled`，不然可能会出错。
   >
   > 2. #### 值绑定
   >
   >    有时我们不想简单地把`v-model`绑定成各种控件的value静态字符串或true/false，这时可以用`v-bind`绑定控件的`value`到Vue实例的动态属性上，而且这个属性可以不是字符串
   >
   >    ```html
   >    <!-- checkbox -->
   >    <!-- toggle、a、b都要在data中先定义 -->
   >    <input type="checkbox" v-model="toggle" :true-value="a" :false-value="b">
   >
   >    <!-- radio -->
   >    <input type="radio" v-model="toggle" :value="a">
   >
   >    <!-- 内联对象字面量 -->
   >    <select v-model="selected">
   >      <option :value="{ number: 123 }">123</option>
   >    </select>
   >    ```
   >
   > 3. #### 修饰符
   >
   >    - `.lazy`
   >
   >      ```html
   >      <!-- 在 "change" 而不是 "input" 事件中更新 -->
   >      <input v-model.lazy="msg" >
   >      ```
   >
   >    - `.number`
   >
   >      ```html
   >      <!-- 自动将用户的输入值转为 Number 类型 (如果原值的转换结果为 NaN 则返回原值 -->
   >      <!-- 具体情况应当自己探索，比如实际上开头为数字后面不能转换，实际上它会保留前面数字，从第一个不能转换为数字的字符开始，丢弃后面的字符) -->
   >      <input v-model.number="age" type="number">
   >      ```
   >
   >    - `.trim`
   >
   >      ```html
   >      <!-- 自动过滤用户输入的首尾空格 -->
   >      <input v-model.trim="msg">
   >      ```
   >
   > 4. #### `v-model`与组件
   >
   >    Vue 的组件系统允许你创建一个具有自定义行为可复用的 input 类型，这些 input 类型甚至可以和 `v-model` 一起使用，略，见[教程原文](https://cn.vuejs.org/v2/guide/forms.html#v-model-与组件)。

9. ### 组件

   > 1. #### 使用组件
   >
   >    - **全局注册：**
   >
   >      ```html
   >      <div id="example">
   >        	<!-- 组件应该挂载到某个Vue实例下，否则不会生效。 -->
   >        	<my-component></my-component>
   >      </div>
   >
   >      <!-- 渲染结果 -->
   >      <div id="example">
   >        <div>
   >          A custom component
   >        </div>
   >      </div>
   >      ```
   >
   >      ```js
   >      // 必须在初始化根实例之前注册组件
   >      Vue.component('my-component', {
   >         // function返回数据对象给组件调用
   >         data: Function,
   >        
   >         // 跟data数据对象类似，接收HTML中组件标签上使用的属性，两者都可以“实例.属性名”调用
   >         // 需要对props进行验证时（也就是指定变量类型，是否required之类的），props的值要从数组改成object
   >         props: ['attrName'],   
   >        
   >         // 模板，注意，模板只能有一个根元素
   >         // 另外据我代码实践，好像不能里面有<template>元素，这里可能是将template解析为HTML5的<template>元素而不是之前用到的方便分组渲染的元素
   >         template: '<div>A custom component</div>',   
   >        
   >         // 渲染函数
   >         render: Function,
   >        
   >         // 标记组件为函数式组件
   >         functional: Boolean,
   >        
   >         // 对象内键值对为“过滤器名: function (value)”
   >         filters: Object,
   >        
   >         // 创建自定义的表单输入组件时，使用model选项避免某些输入类型占用value导致的冲突
   >         model: Object,
   >        
   >         // 只有当组件有name选项时才能在template里递归地调用它自己，使用Vue.component这种方式全局注册组件时，组件的名称会被自动设置为name
   >         name: String,
   >        
   >         // 自定义局部指令,对象内键值对为“指令名-对象”，里面这个对象里放的是各种钩子函数。
   >         directives: Object
   >         
   >         // 其余的选项和Vue实例的选项基本一致
   >      });
   >
   >      // 创建根实例
   >      new Vue({
   >         el: '#example' 
   >      });
   >      ```
   >
   >    - **局部注册：**
   >
   >      可以不把组件注册到全局，只注册到单个Vue实例/组件的`components`选项：
   >
   >      ```js
   >      var Child = {
   >        template: '<div>A custom component!</div>'
   >      }
   >      new Vue({
   >        // ...
   >        components: {
   >          // <my-component> 将只在父组件模板中可用
   >          'my-component': Child
   >        }
   >      })
   >      ```
   >
   >    - **DOM模板解析注意事项：**
   >
   >      之前的案例大部分都是使用`el`将Vue实例挂载到一个已有内容的元素上，其实这样以DOM为模板会收到HTML本身的一些限制：
   >
   >      1. Vue只有在浏览器解析DOM后才能获取内容
   >      2. 像`ul`、`ol`、`table`、`select`这样的元素对内部包含的元素类型有限制
   >      3. 像`option`这样的元素只能出现在某些特定元素的内部
   >
   >      ```html
   >      <!-- 组件my-row会被当作无效内容，因而渲染错误 -->
   >      <table>
   >        <my-row>...</my-row>
   >      </table>
   >
   >      <!-- 变通方法 -->
   >      <table>
   >        <tr is="my-row"></tr>
   >      </table>
   >      ```
   >
   >      ------
   >
   >      **应当注意，如果使用来自以下来源之一的字符串模板，则没有这些限制：**
   >
   >      - `<script type="text/x-template">`
   >      - JavaScript 内联模板字符串
   >      - `.vue` 组件（单文件组件）
   >
   >      因此，请尽可能使用字符串模板。
   >
   >    - **`data`必须是函数：**
   >
   >      ```js
   >      Vue.component('my-component', {
   >        template: '<span>{{ message }}</span>',
   >        data: {
   >          message: 'hello'
   >        }
   >      });
   >      // 上例会停止运行，告诉你在组件实例中data必须是一个函数
   >
   >      data: function () {
   >        return {
   >          counter: 0
   >        }
   >      }
   >      // data函数如果返回对象时出现错误的话见原文：https://cn.vuejs.org/v2/guide/components.html#data-必须是函数
   >      ```
   >
   >    - **组件组合：**
   >
   >      组件设计的初衷就是要配合使用的，最常见的是父子组件关系：父组件在模板中使用了子组件，父组件通过Prop给子组件下发数据，子组件通过事件给父组件发送消息
   >
   > 2. #### Prop
   >
   >    - **使用Prop传递数据：**
   >
   >      组件实例的作用域是孤立的，这意味着不能也不应该在子组件模板内直接引用父组件的数据，父组件通过Prop下发数据到子组件中。但是如果使用对象和数组这种引用类型指向同一个内存空间的数据，需要注意，没定义好的话说不定在子组件里改了就把父组件的也改了。
   >
   >      > 讲尼玛这么多，教程就特娘没解释过这看起来就用了一个组件的例子中到底啥是父组件。
   >      >
   >      > 这是我的思考：[Vue父组件到底是啥？](http://blog.csdn.net/u013836242/article/details/78458731)
   >      >
   >      > 简单来说就是：我暂时认为大多数情况下，JS里定义组件的地方是子组件，HTML中的组件标签是父组件
   >      >
   >      > md，上次segmentfault搜到一个问题问“只有我一个觉得vue教程写的难懂么”（大致意思是这个），下面一堆冷嘲热讽的，mdzz
   >
   >      下例：
   >
   >      ```js
   >      Vue.component('child', {
   >        // 声明 props
   >        props: ['myMessage'],
   >        // 就像 data 一样，prop 也可以在模板中使用
   >        // 同样也可以在 vm 实例中通过 this.message 来使用
   >        template: '<span>{{ myMessage }}</span>'
   >      })
   >      ```
   >
   >      ```html
   >      <!-- 传入 -->
   >      <child my-message="hello!"></child>
   >
   >      <!-- 结果 -->
   >      <span>hello!</span>
   >      ```
   >
   >    - **camelCase  VS  kebab-case：**
   >
   >      当使用的不是字符串模板时。camelCase形式命名的prop要转化为对应的kebab-case形式，例子：
   >
   >      prop中定义了`['myMessage']`，则HTML中调用时用`my-message`
   >
   >    - **动态Prop：**
   >
   >      通过`v-bind`动态地将prop绑定到父组件的数据上
   >
   >      ```html
   >      <div>
   >        <input v-model="parentMsg">
   >        <br>
   >        <child :my-message="parentMsg"
   >      </div>
   >      ```
   >
   >      把一个对象的所有属性都作为prop传递：
   >
   >      ```js
   >      // 要绑定的对象
   >      //...
   >      todo: {
   >          text: 'Learn Vue',
   >          isComplete: false
   >      }
   >
   >      // 实际代码实践中发现还是要把自己需要在模板里用到的属性全部标出来
   >      Vue.component('todo-item', {
   >         props: ['text', 'isComplete'],
   >         template: '<div class="todoItem">{{ text }} {{ isComplete }}</div>'
   >      });
   >      ```
   >
   >      ```html
   >      <!-- 直接用v-bind="对象名"绑定整个对象-->
   >      <todo-item v-bind="todo"></todo-item>
   >
   >      <!-- 等价于 -->
   >      <todo-item :text="todo.text" :is-complete="todo.isComplete"></todo-item>
   >      ```
   >
   >    - **字面量语法  VS  动态语法：**
   >
   >      ```html
   >      <!-- 传递数值时的差异 -->
   >
   >      <!-- 直接用字面量的方式传值，实际上传的是字符串“1” -->
   >      <comp some-prop="1"></comp>
   >
   >      <!-- 用v-bind才能让值按js表达式计算 -->
   >      <comp :some-prop="1"></comp>
   >      ```
   >
   >    - **单向数据流：**
   >
   >      Prop是单向绑定的，父组件值改了会同步更新到子组件，子组件改了不会影响父组件，如果你在子组件中改变prop的值，Vue会在控制台给出警告，如果你确实有需要，那么：
   >
   >      1. 用组件的`data`定义一个局部变量并用prop属性初始化它：
   >
   >         ```js
   >         props: ['initialCounter'],
   >         data: function () {
   >             return { counter: this.initialCounter }
   >         }
   >         ```
   >
   >      2. 组件内定义一个计算属性，处理Prop值并返回：
   >
   >         ```js
   >         props: ['size'],
   >         computed: {
   >             normalizedSize: function () {
   >                 return this.size.trim().toLowerCase()
   >             }
   >         }
   >         ```
   >
   >    - **Prop验证：**
   >
   >      可以为组件的prop指定验证规则，如果传入数据不合要求，Vue会发出警告。
   >
   >      - 要指定验证规则，不能像之前那样用字符串数组，要用对象形式定义prop：
   >
   >        ```js
   >        Vue.component('example', {
   >          props: {
   >            // 基础类型检测 (null 指允许任何类型)
   >            propA: Number,
   >            // 可能是多种类型
   >            propB: [String, Number],
   >            // 必传且是字符串
   >            propC: {
   >              type: String,
   >              required: true
   >            },
   >            // 数值且有默认值
   >            propD: {
   >              type: Number,
   >              default: 100
   >            },
   >            // 数组/对象的默认值应当由一个工厂函数返回
   >            propE: {
   >              type: Object,
   >              default: function () {
   >                return { message: 'hello' }
   >              }
   >            },
   >            // 自定义验证函数
   >            propF: {
   >              validator: function (value) {
   >                return value > 10
   >              }
   >            }
   >          }
   >        })
   >        ```
   >
   >      - `type` 可以是下面原生构造器：
   >
   >        - String
   >        - Number
   >        - Boolean
   >        - Function
   >        - Object
   >        - Array
   >        - Symbol
   >
   >      - `type` 也可以是一个自定义构造器函数，使用 `instanceof` 检测。
   >
   >      - prop检测是在组件实例创建之前，所以在`default` 或 `validator` 函数里，诸如 `data`、`computed` 或 `methods` 等实例属性还无法使用。
   >
   > 3. #### 非Prop特性
   >
   >    - **替换/合并现有的特性：**
   >
   >      简而言之就是：
   >
   >      组件可以接受任意传入的特性，这些特性都会被添加到组件的根元素上。直接传入组件而没有定义相应的prop的特性就是**非prop特性**，根元素上的特性和模板上的特性如果重合，合并特性，不覆盖
   >
   > 4. #### 自定义事件
   >
   >    - **使用`v-on`绑定自定义事件：**
   >
   >      - 使用`$on(eventName)`监听事件，`$emit(eventName)` 触发
   >
   >      - 父组件可以在使用子组件的地方用`v-on`监听子组件触发的事件，不能用`$on`侦听，必须在模板里直接用`v-on`绑定，下例：
   >
   >        ```html
   >        <div id="counter-event-example">
   >          <p>{{ total }}</p>
   >          <!-- v-on监听自定义事件increment，监听到了用Vue实例中定义的incrementTotal函数处理 -->
   >          <button-counter v-on:increment="incrementTotal"></button-counter>
   >          <button-counter v-on:increment="incrementTotal"></button-counter>
   >        </div>
   >        ```
   >
   >        ```js
   >        // 定义组件
   >        Vue.component('button-counter', {
   >          // 组件模板中，监听click事件，发生后调用组件中定义的incrementCounter函数处理
   >          template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
   >          // 为每个组件返回独立的{ counter: 0 }
   >          data: function () {
   >            return {
   >              counter: 0
   >            }
   >          },
   >          methods: {
   >            // 此方法先自增一次自己的属性，再触发increment事件，导致父组件调用incrementTotal函数也自增一次实例的属性total
   >            //最终达成的效果见教程原文，实际上做到了——无论实例指定的元素内有多少这种自定义组件，total始终显示所有组件的数值之和
   >            //实际上，这里要表达的是，子组件只是在干自己的事情，和父组件没有太大关系，它只是报告了自己的内部事件给父组件，然后父组件怎么做就是父组件的事了，教程原文说这是“子组件和外部完全解耦”
   >            incrementCounter: function () {
   >              this.counter += 1
   >              this.$emit('increment')
   >            }
   >          },
   >        })
   >
   >        //实例
   >        new Vue({
   >          el: '#counter-event-example',
   >          data: {
   >            total: 0
   >          },
   >          methods: {
   >            incrementTotal: function () {
   >              this.total += 1
   >            }
   >          }
   >        ```
   >
   >    - **给组件绑定原生事件：**
   >
   >      ```html
   >      <!-- 在组件根元素上监听一个原生事件 -->
   >      <my-component @click.native="doTheThing"></my-component>
   >      ```
   >
   >    - **`.sync`修饰符：**
   >
   >      2.3.0重新引入，可以破坏单向数据流，对prop进行”双向绑定“：当子组件改了带`.sync`的prop的值是，改动会同步到父组件中绑定的值。实际上，它编译后会被扩展为一个自动更新父组件属性的`v-on`监视器
   >
   >      ```html
   >      <comp :foo.sync="bar"></comp>
   >      ```
   >
   >    - **使用自定义事件的表单输入组件：**
   >
   >      具体原理见[教程原文](https://cn.vuejs.org/v2/guide/components.html#使用自定义事件的表单输入组件)：
   >
   >      ```html
   >      <!-- v-model -->
   >      <input v-model="something">
   >
   >      <!-- 等价于 -->
   >      <input :value="something" @input="something = $event.target.value">
   >
   >      <!-- 在组件中使用则等价于 -->
   >      <my-comp :value="something" @input="something = arguments[0]"></my-comp>
   >      ```
   >
   >      使用自定义事件来创建自定义的表单输入组件，用`v-model`进行数据双向绑定。
   >
   >      要让`v-model`生效，它应该 (从 2.2.0 起是可配置的)：
   >
   >      - 接受一个 `value` prop
   >      - 在有新的值时触发 `input` 事件并将新值作为参数
   >
   >      ```html
   >      <!-- 自定义的表单输入控件，一个简单的不完善的货币过滤器 -->
   >      <currency-input v-model="price"></currency-input>
   >      ```
   >
   >      ```js
   >      Vue.component('currency-input', {
   >        template: '\
   >          <span>\
   >            $\
   >            <input\
   >              ref="input"\
   >              v-bind:value="value"\
   >              v-on:input="updateValue($event.target.value)"\
   >            >\
   >          </span>\
   >        ',
   >        props: ['value'],
   >        methods: {
   >          // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
   >          updateValue: function (value) {
   >            var formattedValue = value
   >              // 删除两侧的空格符
   >              .trim()
   >              // 保留 2 位小数
   >              .slice(
   >                0,
   >                value.indexOf('.') === -1
   >                  ? value.length
   >                  : value.indexOf('.') + 3
   >              )
   >            // 如果值尚不合规，则手动覆盖为合规的值
   >            if (formattedValue !== value) {
   >              this.$refs.input.value = formattedValue
   >            }
   >            // 通过 input 事件带出数值
   >            this.$emit('input', Number(formattedValue))
   >          }
   >        }
   >      })
   >      ```
   >
   >    - **自定义组件的`v-model`：**
   >
   >      由之前的`v-model`原理可知，它的实现要用到`value`特性和`input`事件，但像单选框复选框等输入类型需要把`value`用作其他目的，此时可以用自定义组件中的`model`选项指定新的特性和事件，这样，触发指定事件的特性不再是`value`，而是我们指定的新特性：
   >
   >      ```js
   >      // 简单的model示例
   >      Vue.component('my-checkbox', {
   >          model: {
   >              prop: 'checked',
   >            	event: 'change'
   >          },
   >        	props: {
   >            	// 别忘了还是要在props里声明要接受的数据名，另外这里用到了类型检测
   >              checked: Boolean,
   >            	value: String
   >          }
   >      })
   >      ```
   >
   >      ```html
   >      <!-- 使用 -->
   >      <my-checkbox v-model="foo" value="some value"></my-checkbox>
   >
   >      <!-- 等价于 -->
   >      <my-checkbox :checked="foo" @change="val => { foo = val }" value="some value"></my-checkbox>
   >      ```
   >
   >    - **非父子组件的通信：**
   >
   >      复制粘贴的：
   >
   >      有时候，非父子关系的两个组件之间也需要通信。在简单的场景下，可以使用一个空的 Vue 实例作为事件总线：
   >
   >      ```js
   >      var bus = new Vue();
   >
   >      // 触发组件 A 中的事件
   >      bus.$emit('id-selected', 1);
   >      // 在组件 B 创建的钩子中监听事件
   >      bus.$on('id-selected', function (id) {
   >        // ...
   >      })
   >      ```
   >
   >      在复杂的情况下，我们应该考虑使用专门的[状态管理模式](https://cn.vuejs.org/v2/guide/state-management.html)。
   >
   > 5. #### 使用插槽分发内容
   >
   >    内容分发：在子组件的模板混合父组件的内容（先理解为父组件的innerHTML吧）
   >
   >    - **编译作用域：**
   >
   >      父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。
   >
   >      ```html
   >      <!-- 教程上说，此时message绑定到父组件的数据上 -->
   >      <!-- 结合之前我理解的父组件概念，这里我理解的是：如果子组件和子组件绑定的Vue实例中都有一个同名数据属性message，那么在父组件，也就是组件标签上使用的message是Vue实例的message -->
   >      <child-component> {{ message }} </child-component>
   >
   >      <!-- 假设someChildProperty是子组件的独有属性，此例不会如预期那样工作，即，无效 -->
   >      <!-- 因为父组件是在自己的作用域中找这个属性的，它不管子组件，要绑定子组件数据应当去组件的template里绑定 -->
   >      <child-component v-show="someChildProperty"></child-component>
   >      ```
   >
   >    - **单个插槽：**
   >
   >      ```html
   >      <div id="test">
   >        <!-- 组件应该在有vue实例挂载的元素内用 -->
   >        <my-component>插入数据</my-component>
   >      </div>
   >
   >      <!-- 渲染结果 -->
   >      <span>始终有我，后面的是：插入数据</span>
   >      ```
   >
   >      ```js
   >      Vue.component('my-component', {
   >        // 这里用es6的模板字符串
   >        // 如果没有slot标签，则父组件里面包裹的内容会被丢弃
   >        // 当里面只有一个简单的<slot>标签，则包裹内容全部传到这个标签里面， 并替换掉模板中这个标签本身
   >        // 当里面有这个标签而父组件里没有内容，才显示标签里的“默认内容”
   >        template: `<span>始终有我，后面的是：<slot>默认内容</slot></span>`
   >      });
   >      ```
   >
   >    - **具名插槽：**
   >
   >      之前用到的单个插槽，就是一个简单的`<slot>`标签，它是**匿名插槽**。
   >
   >      `<slot>`元素还可以用`name`来配置如何分发父组件的内容，子组件的`template`中同时使用多个带不同`name`的插槽，父组件内容中相应地使用一些带`slot`特性的元素，`slot`特性的值即是各个不同的`name`，以此替换对应的插槽。
   >
   >      除了这些带不同`name`的插槽外，还可以有一个不带`name`的插槽，作为**默认插槽**，以此作为找不到匹配内容片段的备用插槽，如果没有它，找不到匹配的内容片段会被丢弃。下例：
   >
   >      ```html
   >      <div id="test">
   >          <my-component>
   >            	<!-- 这里没有在标签里加入内容，但是默认数据还是没有显示出来，这个例子表明了slot的“替换”的意思 -->
   >              <h1 slot="header"></h1>
   >              找不到匹配的内容
   >              <h1 slot="footer">页脚</h1>
   >              另一处找不到匹配的内容
   >          </my-component>
   >      </div>
   >
   >      <!-- 渲染结果 -->
   >      <div id="test">
   >        <div>
   >          <h1></h1> 
   >          	<!-- 可以看到所有找不到匹配的内容都被替换到了匿名插槽中，不管原来它们是不是在一块儿 -->
   >              找不到匹配的内容
   >              另一处找不到匹配的内容
   >           <h1>页脚</h1>
   >        </div>
   >      </div>
   >      ```
   >
   >      ```js
   >      Vue.component('my-component', {
   >        template: `<div>
   >                    <slot name="header">默认数据</slot>
   >      			  // 如果有多个默认插槽，那就会重复渲染多个出来
   >                    <slot></slot>
   >                    <slot name="footer"></slot>
   >                   </div>`
   >      });
   >
   >      var test = new Vue({
   >        el: '#test'
   >      });
   >      ```
   >
   >    - **作用域插槽：**
   >
   >      简单来说，这种插槽可以让子组件传递数据给父组件：首先子组件传递数据给插槽，然后由父级配合使用特殊元素接受数据，随后父组件可以随意使用这些数据。
   >
   >      - **2.1.0新增初级用法**：
   >
   >        ```html
   >        <!-- 此例中的注释只针对2.1.0新增作用域插槽 -->
   >
   >        <div id="test">
   >            <my-component>
   >              	<!-- 父级必须有带slot-scope特性的template元素，它是作用域插槽的模板 -->
   >              	<!-- slot-scope的值被用作临时变量名，这个变量接受子组件传来的prop对象，textA、textB都是子组件传过来的属性 -->
   >              	<!-- 如果浏览器支持，你还可以在slot-scope的值里使用es6的解构 -->
   >                <template slot="main" slot-scope="props">
   >                    \{{ props.textA }}
   >                    <br>
   >                    \{{ props.textB }}
   >                    <br>
   >                    scope内的孤儿数据
   >                </template>
   >                孤儿数据
   >            </my-component>
   >        </div>
   >
   >        <!-- 渲染结果 -->
   >        <div id="test">
   >          <div>
   >            a
   >            <br>
   >            b
   >            <br>
   >            scope内的孤儿数据
   >            <br> 
   >            孤儿数据
   >            <br> 
   >            孤儿数据
   >           </div>
   >        </div>
   >        <!-- 子组件模板中用了两次匿名插槽，渲染结果也有了两个孤儿数据 -->
   >        ```
   >
   >        ```js
   >        Vue.component('my-component', {
   >          template: `
   >            <div>
   >                <slot name="main" textA="a" textB="b"></slot>
   >                <br>
   >                <slot></slot>
   >                <br>
   >                <slot></slot>
   >            </div>`
   >        });
   >        ```
   >
   >      - **2.5.0用法变化**：
   >
   >        `slot-scope`能被用在任意元素和组件中，不再局限于`<template>`。
   >
   >        这里官网的例子不懂到底起了个啥作用，自己看吧：[作用域插槽](https://cn.vuejs.org/v2/guide/components.html#作用域插槽)
   >
   >    - **如果没有插槽**：
   >
   >      组件中如果没有slot，则内容会被放进`$slots.default`，它是一个数组，里面装着内容对象。注意，要调用的话使用`this.$slots.default`的`this`指的是组件自身。
   >
   >      ![QQ图片20171120105029](https://raw.githubusercontent.com/tyf914/practice_newTech/master/public/images/QQ图片20171120105029.png)
   >
   > 6. #### 动态组件
   >
   >    ```html
   >    <!-- 通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换 -->
   >    <component :is="currentView">
   >      <!-- 组件在 vm.currentview 变化时改变！ -->
   >    </component>
   >
   >    <!-- 使用keep-alive将切换出去的组件保留在内容中，可保留它的状态或避免重复渲染 -->
   >    <keep-alive>
   >      <component :is="currentView">
   >        <!-- 非活动组件将被缓存！ -->
   >      </component>
   >    </keep-alive>
   >    ```
   >
   >    - **通过`component`元素动态切换**：
   >
   >      ```js
   >      var vm = new Vue({
   >        el: '#example',
   >        data: {
   >          currentView: 'home'
   >        },
   >        components: {
   >          home: { /* ... */ },
   >          posts: { /* ... */ },
   >          archive: { /* ... */ }
   >        }
   >      });
   >      ```
   >
   >    - **直接绑定到组件对象动态切换**：
   >
   >      ```js
   >      var Home = {
   >        template: '<p>Welcome home!</p>'
   >      }
   >
   >      var vm = new Vue({
   >        el: '#example',
   >        data: {
   >          currentView: Home
   >        }
   >      });
   >      ```
   >
   > 7. #### 杂项
   >
   >    - **编写可复用组件：**
   >
   >      1. 应当定义一个清晰的公开接口，同时不要对外层数据做任何假设。
   >      2. Vue 组件的 API 来自三部分——prop、事件和插槽：
   >         - **Prop** 允许外部环境传递数据给组件；
   >         - **事件**允许从组件内触发外部环境的副作用；
   >         - **插槽**允许外部环境将额外的内容组合在组件中。
   >
   >    - **子组件引用：**
   >
   >      - **直接在JS中访问子组件**：
   >
   >        ```js
   >        var parent = new Vue({
   >            el: '#parent'
   >        });
   >
   >        // 访问子组件实例
   >        var child = parent.$refs.test
   >        ```
   >
   >        ```html
   >        <div id="parent">
   >          <!-- 在子组件上使用ref特性为子组件指定一个引用id -->
   >          <my-component ref="test"></my-component>
   >        </div>
   >
   >        <!-- 组件上配合v-for一起使用 -->
   >        <div id="magnets">
   >          	<!-- 此时ref -->
   >            <magnet-item
   >                v-for="magnet in magnets"
   >                v-bind="magnet"
   >                ref="magnets">
   >            </magnet-item>
   >        </div>
   >        <!-- 此时的ref所指向的是一个包含和循环数据源对应的子组件的数组 -->
   >        ```
   >
   >        ![QQ图片20171108104402](https://raw.githubusercontent.com/tyf914/practice_newTech/master/public/images/QQ图片20171108104402.png)
   >
   >        ![QQ图片20171108104627](https://raw.githubusercontent.com/tyf914/practice_newTech/master/public/images/QQ图片20171108104627.png)
   >
   >      - **注意事项**：
   >
   >        1. `$refs` 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅是一个直接操作子组件的应急方案——应当避免在模板或计算属性中使用 `$refs`。
   >        2. 代码测试以后，说它不是响应式是因为：改数据源ref会跟着改，但是改ref不会影响数据源和页面渲染
   >
   >      - ​
   >
   >    - **异步组件：**
   >
   >      看不懂，以后再看：[异步组件](https://cn.vuejs.org/v2/guide/components.html#异步组件)
   >
   >    - **高级异步组件：**
   >
   >      更不用说了，看不懂：[高级异步组件](https://cn.vuejs.org/v2/guide/components.html#高级异步组件)
   >
   >    - **组件命名约定：**
   >
   >      [组件命名约定](https://cn.vuejs.org/v2/guide/components.html#组件命名约定)比较简单，自己看。
   >
   >    - **递归组件：**
   >
   >      ```js
   >      // 只有当组件有 name 选项时它才能在模板里自己调用自己
   >      name: 'unique-name-of-my-component'
   >
   >      // 使用 Vue.component 注册组件时，全局的ID会被自动设置为组件的name
   >      Vue.component('unique-name-of-my-component', {
   >        // ...
   >      })
   >
   >      // 递归组件可能导致死循环，所以要确保递归调用有终止条件 (比如递归调用时使用 v-if 并最终解析为 false)。
   >      ```
   >
   >    - **组件间的循环引用：**
   >
   >      [组件间的循环引用](https://cn.vuejs.org/v2/guide/components.html#组件间的循环引用)牵扯到webpack，以后再说。
   >
   >    - **内联模板：**
   >
   >      ```html
   >      <!-- inline-template : 让组件把它的内容当做它的模板，而不是分发内容 -->
   >      <my-component inline-template>
   >        <div>
   >          <p>这些将作为组件自身的模板。</p>
   >          <p>而非父组件传进来的内容。</p>
   >        </div>
   >      </my-component>
   >
   >      <!-- inline-template 让模板的作用域难以理解。使用 template 选项在组件内定义模板或者在 .vue 文件(单文件组件)中使用 template 元素才是最佳实践。 -->
   >      ```
   >
   >    - **X-Template：**
   >
   >      ```js
   >      // 另一种定义模板的方式
   >      <script type="text/x-template" id="hello-world-template">
   >        <p>Hello hello hello</p>
   >      </script>
   >
   >      Vue.component('hello-world', {
   >        template: '#hello-world-template'
   >      })
   >
   >      // 在有很多大模板的演示应用或者特别小的应用中可能有用，其它场合应该避免使用，因为这将模板和组件的其它定义分离了。
   >      ```
   >
   >    - **对低开销的静态组件使用`v-once`：**
   >
   >      当组件包含大量静态内容时，可以考虑在模板里使用`v-once`将静态内容缓存起来。
   >

   ​


## 过渡&动画

1. ### 进入/离开 & 列表过渡

   > 1. #### 概述
   >
   >    四大应用过渡效果的方式：
   >
   >    - 在 CSS 过渡和动画中自动应用 class
   >    - 可以配合使用第三方 CSS 动画库，如 Animate.css
   >    - 在过渡钩子函数中使用 JavaScript 直接操作 DOM
   >    - 可以配合使用第三方 JavaScript 动画库，如 Velocity.js
   >
   > 2. #### 单元素/组件的过渡
   >
   >
   >
   >    - `<transtion>`标签：
   >
   >      使用此标签包裹改变的元素，给元素和组件添加entering/leaving过渡。应用范围：
   >
   >      - 条件渲染 (使用 `v-if`)
   >      - 条件展示 (使用 `v-show`)
   >      - 动态组件
   >      - 组件根节点
   >
   >      | 特性名                                      | 特性值                                      | 效果                                       |
   >      | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
   >      | name                                     | 新的前缀名                                    | 重置[过渡类名](https://cn.vuejs.org/v2/guide/transitions.html#过渡的类名)的前缀 |
   >      | enter-class等[自定义过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#自定义过渡的类名) | 一般是第三方动画库的类名字符串                          | 优先级高于普通类名，可用于结合第三方CSS动画库使用               |
   >      | type                                     | animation或transition                     | 同时使用两种过渡效果时使用此特性明确声明需要Vue监听过渡是否完成的类型，是监听CSS动画还是监听CSS过渡 |
   >      | :duration，[显性的过渡持续时间](https://cn.vuejs.org/v2/guide/transitions.html#显性的过渡持续时间) | "Number"或"{ enter: Number, leave: Number }" | 定制一个显性的过度持续时间（单位ms）                      |
   >      | v-on绑定系列[js钩子](https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-钩子) | methods中的方法名                             | 上面四大方法中的后两种                              |
   >      | `v-bind:css`                             | 一般是false                                 | 跳过CSS的检测，一般对仅适用js过渡的元素使用，可以避免过渡过程中CSS的影响 |
   >      | appear                                   | 无                                        | 设置节点在初始渲染的过渡                             |
   >      | appear-class等自定义CSS类名，v-on绑定before-appear等自定义JS钩子 | 字符串                                      | 跟之前的类似                                   |
   >      | mode                                     | in-out或out-in                            | `<transition>`的默认行为：进入和离开同时发生，使用此特性可修改过渡模式，in在前就是新元素先过渡，out在前当前元素先过渡，完成后另一个元素再进入 |
   >
   >    - **处理`transition`组件内变动元素的流程**：
   >
   >      1. 检测元素是否应用了CSS过渡/动画，如有，在恰当时机添加/删除CSS类名；
   >      2. 如果过渡组件提供了JS钩子函数，在恰当时机调用之；
   >      3. 如果前两个都没有，DOM操作（插入/删除）在下一帧动画中立即执行
   >
   >    - **CSS过渡和CSS动画**：
   >
   >      - **CSS过渡**：
   >
   >        在CSS中设置自定义前缀（如果有）+ 过渡类名，类的样式里面是[`transition`](http://www.runoob.com/cssref/css3-pr-transition.html)，这种比较常见。
   >
   >      - **CSS动画**：
   >
   >        类的样式里设置的不是`transition`而是[`animation`](http://www.runoob.com/cssref/css3-pr-animation.html)和[`@keyframes`](http://www.runoob.com/cssref/css3-pr-animation-keyframes.html)，教程中的例子：[CSS动画](https://cn.vuejs.org/v2/guide/transitions.html#CSS-动画)
   >
   >      - **差异**：
   >
   >        动画中`v-enter`类名在节点插入DOM后不会立即删除，而是在`animationend`事件触发时删除。
   >
   >
   > 3. #### 初始渲染的过渡
   >
   >    [初始渲染的过渡](https://cn.vuejs.org/v2/guide/transitions.html#初始渲染的过渡)
   >
   > 4. #### 多个元素的过渡
   >
   >    [多个元素的过渡](https://cn.vuejs.org/v2/guide/transitions.html#多个元素的过渡)
   >
   > 5. #### 多个组件的过渡
   >
   >    [多个组件的过渡](https://cn.vuejs.org/v2/guide/transitions.html#多个组件的过渡)
   >
   > 6. #### 列表过渡
   >
   >    针对“同时渲染整个列表”（比如使用`v-for`）这种场景，使用`<transition-group>`标签包裹。
   >
   >    - **标签限定**：
   >
   >      -  不同于之前的`<transition>`，`<transition-group>`会真的在DOM中出现一个对应标签，默认`<span>`，可以通过`tag`特性设置要渲染的标签
   >      -  内部元素一定要有唯一的`key`。
   >      -  默认的，例子中列表元素变化后周围的元素会瞬间移动到它们新布局的位置，而不是平滑过渡
   >
   >    - **与`<transition>`的使用差异**：
   >
   >      同：和之前的CSS类名一样，同样也可以由`name`属性自定义前缀，其他的没说，应该一样吧？
   >
   >      异：新增属性`v-move`，用法是：在CSS类里定义`.v-move`或自定义前缀的类设置样式，作用是：在元素改变定位时设置CSS过渡（例子里只有过渡没动画），可以用这个实现平滑过渡。
   >
   >      ​        还可以用`move-class`特性设置，跟之前的自定义过渡类名一样。
   >
   >      ​        **注意**：内部原理见原文，由内部原理要求过渡元素不能设置`display:inline`，可以使用`inline-box`
   >
   >    - **列表交错过渡**：
   >
   >      [列表交错过渡](https://cn.vuejs.org/v2/guide/transitions.html#列表的交错过渡)，简单来说就是平滑过渡的输入input框后备选词数组也跟着筛选。
   >
   > 7. #### 可复用的过渡
   >
   >    [可复用的过渡](https://cn.vuejs.org/v2/guide/transitions.html#可复用的过渡)通过Vue的组件系统实现复用。
   >
   >    ​	创建一个可复用过渡组件，重点是将`<transition>`或`transition-group`作为根组件，然后将子组件放入其中。
   >
   >    实现方法：
   >
   >    1. 简单的：在template写根组件，methods里写JS钩子
   >    2. 函数组件，这里还看不明白，函数式组件的内容在后面
   >
   > 8. #### 动态过渡
   >
   >    [动态过渡](https://cn.vuejs.org/v2/guide/transitions.html#动态过渡)中举了几个例子
   >
   >    1. 最基本的，通过`name`绑定动态值，在不同过渡之前切换；
   >    2. 通过钩子函数获取相应上下文数据，可以根据组件的状态通过JS过渡设置不同的过渡效果；
   >    3. 最后只提了一句，最终方案是组件通过接受 props 来动态修改之前的过渡。

2. ### 状态过渡

   这章讲数据元素本身的动效呢，比如：

   - 数字和运算
   - 颜色的显示
   - SVG 节点的位置
   - 元素的大小和其他的属性

   例子全是一堆没用过的第三方库，懒得看，以后再看。



## 可复用性&组合

1. ### 混合

   > 1. #### 基础
   >
   >    简单来说，就是定义一个含有部分属性的对象，组件或实例定义时可以引入它从而达到代码复用的效果，下例：
   >
   >    ```js
   >    // 定义一个混合对象
   >    var myMixin = {
   >      created: function () {
   >        this.hello()
   >      },
   >      methods: {
   >        hello: function () {
   >          console.log('hello from mixin!')
   >        }
   >      }
   >    }
   >    // 定义一个使用混合对象的组件
   >    var Component = Vue.extend({
   >      mixins: [myMixin]
   >      // 剩下的属性还可以有与mixin同名的属性
   >    })
   >    var component = new Component() // => "hello from mixin!"
   >    ```
   >
   >    - **额外提示**：
   >
   >      上面的`Vue.extend`出自[全局API](https://cn.vuejs.org/v2/api/#全局-API)，作用是创建一个组件构造器，不用管太多，一般就用`Vue.component`
   >
   > 2. #### 选项合并
   >
   >    有同名选项时：
   >
   >    - 同名钩子函数会被混合为一个数组，数组中的函数都将被调用，混合的钩子先调用。
   >    - 值为对象的选项将被混为同一个对象，键名冲突时取组件对象的键值对
   >    - `Vue.extend()`也是这么合并的
   >
   > 3. #### 全局混合
   >
   >    ```js
   >    // 使用Vue.mixin注册全局混合对象，注册后将会影响到所有创建的Vue实例（包括第三方模板）。
   >    // 大多数情况下，只应当用于下面的自定义选项这种用法
   >    // 也可以将其用作plugins（本章第四部分：插件）以避免产生重复应用
   >
   >    // 为自定义的选项 'myOption' 注入一个处理器。
   >    Vue.mixin({
   >      created: function () {
   >        var myOption = this.$options.myOption
   >        if (myOption) {
   >          console.log(myOption)
   >        }
   >      }
   >    })
   >    new Vue({
   >      myOption: 'hello!'
   >    })
   >    // => "hello!"
   >    ```
   >
   > 4. #### 自定义选项合并策略
   >
   >    不想简单地覆盖已有值时可以[自定义选项合并策略](https://cn.vuejs.org/v2/guide/mixins.html#自定义选项合并策略)

2. ### 自定义指令

   >1. #### 简介
   >
   >   有时，我们仍需要对纯DOM元素进行底层操作，这是会用到自定义指令。
   >
   >   ```html
   >   <input v-focus>
   >   ```
   >
   >   - **全局**：
   >
   >     ```js
   >     // 注册一个全局自定义指令 v-focus，作用是页面载入时聚焦元素
   >     Vue.directive('focus', {
   >       // 当绑定元素插入到 DOM 中。
   >       inserted: function (el) {
   >         // 聚焦元素
   >         el.focus()
   >       }
   >     })
   >     ```
   >
   >   - **局部**：
   >
   >     ```js
   >     // 组件中设置directives选项
   >     directives: {
   >       focus: {
   >         // 指令的定义
   >         inserted: function (el) {
   >           el.focus()
   >         }
   >       }
   >     }
   >     ```
   >
   >2. #### 钩子函数
   >
   >   - `bind`：只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
   >   - `inserted`：被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
   >   - `update`：所在组件的 VNode 更新时调用，**但是可能发生在其孩子的 VNode 更新之前**。指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
   >   - `componentUpdated`：所在组件的 VNode **及其孩子的 VNode** 全部更新时调用。
   >   - `unbind`：只调用一次，指令与元素解绑时调用。
   >
   >3. #### 钩子函数参数
   >
   >   钩子函数被赋予了以下参数：
   >
   >   - **el**：指令所绑定的元素，可以用来直接操作 DOM ，除这个参数外尽量不要修改其他参数。（如果想在钩子函数之间共享数据，可以在元素上取数据，比如通过HTML5的dataset）
   >   - **binding**：一个对象，包含以下属性：
   >     - **name**：指令名，不包括 `v-` 前缀。
   >     - **value**：指令的绑定值，例如：`v-my-directive="1 + 1"`, value 的值是 `2`。
   >     - **oldValue**：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
   >     - **expression**：绑定值的字符串形式。例如 `v-my-directive="1 + 1"` ，expression 的值是 `"1 + 1"`。
   >     - **arg**：传给指令的参数。例如 `v-my-directive:foo`，arg 的值是 `"foo"`。
   >     - **modifiers**：一个包含修饰符的对象。例如：`v-my-directive.foo.bar`, 修饰符对象 modifiers 的值是 `{ foo: true, bar: true }`。
   >   - **vnode**：Vue 编译生成的虚拟节点，查阅 [VNode API](https://cn.vuejs.org/v2/api/#VNode-接口) 了解更多详情。
   >   - **oldVnode**：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。
   >
   >4. #### 函数简写
   >
   >   若只绑定`bind`和`update`钩子，可以简写成：
   >
   >   ```js
   >   Vue.directive('color-swatch', function (el, binding) {
   >     el.style.backgroundColor = binding.value
   >   })
   >   ```
   >
   >5. #### 对象字面量
   >
   >   ```html
   >   <!-- 直接传入一个js对象字面量 -->
   >   <div v-demo="{ color: 'white', text: 'hello!' }"></div>
   >   ```

3. ### 渲染函数&JSX

   > ```html
   > <anchored-heading :level="1">Hello world!</anchored-heading>
   > ```
   >
   > ```javascript
   > Vue.component('anchored-heading', {
   >   render: function (createElement) {
   >     return createElement(	// createNodeDescription，它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，及其子节点。这样的节点描述为“虚拟节点 (Virtual Node)”，简写为“VNode”
   >       'h' + this.level,   // tag name 标签名称
   >       this.$slots.default // 子组件中的阵列
   >     )
   >   },
   >   props: {
   >     level: {
   >       type: Number,
   >       required: true
   >     }
   >   }
   > })
   > ```
   >
   > 1. #### createElement参数
   >
   >    1. **必要参数**：HTML标签字符串/组件选项对象/或返回值为String/Object的函数，
   >
   >    2. **可选参数**：
   >
   >       - 数据对象，包含各种模板相关属性，这样可以在template中使用这些属性
   >       - VNodes子结点，可以是字符串—生成文本节点，可以是数组—包含一系列字符串/新的createElement
   >
   >    3. **示例**：
   >
   >       ```javascript
   >       // 仅写VNodes可选参数的数组形式，这个比较有代表性
   >       [
   >           '先写一些文字',
   >           createElement('h1', '一则头条'),
   >           createElement(MyComponent, {
   >             props: {
   >               someProp: 'foobar'
   >             }
   >           })
   >       ]
   >       ```
   >
   >
   >    - **深入data对象**：
   >
   >      [深入 data 对象](https://cn.vuejs.org/v2/guide/render-function.html#深入-data-对象)
   >
   >    - **完整示例**：
   >
   >      [完整示例](https://cn.vuejs.org/v2/guide/render-function.html#完整示例)
   >
   >    - **约束**：
   >
   >      组件树中的所有VNodes必须是唯一的
   >
   > 2. #### 使用JavaScript代替模板功能
   >
   >    - `v-if`和`v-for`，render函数不提供，直接用js
   >    - [`v-model`](https://cn.vuejs.org/v2/guide/render-function.html#v-model)，没有，自己实现逻辑，见原文
   >    - [事件 & 按键修饰符](https://cn.vuejs.org/v2/guide/render-function.html#事件-amp-按键修饰符)，提供部分修饰符的简写形式，其余给出了js的变通方法
   >    - [插槽](https://cn.vuejs.org/v2/guide/render-function.html#插槽)，通过`this.$slots`获取VNodes列表中的静态内容；`this.$scopedSlots`获取作用域插槽，能做函数用，返回VNodes；要用render函数向子组件传递作用域插槽，可用data对象中的`scopedSlots`域
   >
   > 3. #### JSX
   >
   >    原生的一层层写VNodes很麻烦，所以用 [Babel 插件](https://github.com/vuejs/babel-plugin-transform-vue-jsx)在 Vue 中使用 JSX 语法，这种更接近模板。具体见原文：[JSX](https://cn.vuejs.org/v2/guide/render-function.html#JSX)
   >
   > 4. #### 函数式组件
   >
   >    ```javascript
   >    Vue.component('my-component', {
   >      // 标记组件为functional，意味着它与之前的anchored-heading不同，是无状态（data），无实例（没有this上下文）的。
   >      functional: true,
   >      // 为了弥补缺少的实例，提供context作为上下文
   >      render: function (createElement, context) {
   >        // this.$slots.default 更新为 context.children
   >        // this.level 更新为 context.props.level。
   >        
   >        //组件需要的一切都是通过上下文传递，包括：
   >    // props：提供 props 的对象,2.3.0版本以后可以省略此选项，所有组件上的属性自动解析为props，此前想接受props则必须有此选项。
   >    // children: VNode 子节点的数组
   >    // slots: slots 对象，slots().default和children类似，但 slots().name可传递具名段落标签，slots().default只能传递匿名段落标签
   >    // data：传递给组件的 data 对象
   >    // parent：对父组件的引用
   >    // listeners: (2.3.0+) 一个包含了组件上所注册的 v-on 侦听器的对象。这只是一个指向 data.on 的别名。
   >    // injections: (2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的属性。
   >      },
   >      // Props 可选
   >      props: {
   >        // ...
   >      }
   >    })
   >    ```
   >
   >    函数式组件优点：
   >
   >    1. 开销低（然而，对持久化实例的缺乏也意味着函数式组件不会出现在 [Vue devtools](https://github.com/vuejs/vue-devtools) 的组件树里）。
   >    2. 程序化的在多个组件中选一个。
   >    3. 在将children，props，data传递给子组件之前操作它们
   >
   >    具体应用实例见[`slots()`和`children` 对比](https://cn.vuejs.org/v2/guide/render-function.html#slots-和-children-对比)上面的代码。
   >
   > 5. #### 模板编译
   >
   >    说Vue的模板实际编译成了render函数，可以用[模板编译](https://cn.vuejs.org/v2/guide/render-function.html#模板编译)中的`Vue.compile`实时编译模板字符串的简单demo来观察这个**通常不用关心**的实现细节。
   >

4. ### 插件

   > 1. #### 开发插件
   >
   >    ```javascript
   >    // 插件通常会为 Vue 添加全局功能。插件的范围没有限制
   >    // 插件应有一个公开方法install。第一个参数是Vue构造器，第二个参数是一个可选的选项对象。
   >    MyPlugin.install = function (Vue, options) {
   >      // 四大用法，以及提供API以使用一个或多个用法的库
   >      // 1. 添加全局方法或属性
   >      Vue.myGlobalMethod = function () {
   >        // 逻辑...
   >      }
   >      // 2. 添加全局资源
   >      Vue.directive('my-directive', {
   >        bind (el, binding, vnode, oldVnode) {
   >          // 逻辑...
   >        }
   >        ...
   >      })
   >      // 3. 注入组件
   >      Vue.mixin({
   >        created: function () {
   >          // 逻辑...
   >        }
   >        ...
   >      })
   >      // 4. 添加实例方法
   >      Vue.prototype.$myMethod = function (methodOptions) {
   >        // 逻辑...
   >      }
   >    }
   >    ```
   >
   > 2. #### 使用插件
   >
   >    ```js
   >    // 通过全局方法Vue.use()使用插件，可选参数——选项对象
   >    Vue.use(MyPlugin, { someOption: true })
   >
   >    // Vue.js的某些官方插件检测到Vue是可访问的全局变量时会自动调用Vue.use()。然而在例如 CommonJS 的模块环境中，官方插件也要显式地调用 Vue.use()
   >    // Vue.use自动阻止重复注册相同插件。
   >    ```
   >
   >    插件和库资源：[awesome-vue](https://github.com/vuejs/awesome-vue#components--libraries)
   >

5. ### 过滤器


   > ```js
   > // 组件选项内定义本地的过滤器
   > filters: {
   >   capitalize: function (value) {  // 总接收表达式的值 (之前的操作链的结果) 作为第一个参数
   >     if (!value) return ''
   >     value = value.toString()
   >     return value.charAt(0).toUpperCase() + value.slice(1)
   >   }
   > }
   >
   > // 全局定义
   > Vue.filter('capitalize', function (value) {
   >   if (!value) return ''
   >   value = value.toString()
   >   return value.charAt(0).toUpperCase() + value.slice(1)
   > })
   > ```
   >
   > ```html
   > <!-- 在双花括号中 -->
   > {{ message | capitalize }}
   > <!-- 在 v-bind 中 -->
   > <div v-bind:id="rawId | formatId"></div>
   > <!-- 过滤器可以串联 -->
   > {{ message | filterA | filterB }}
   > <!-- 过滤器是 JavaScript 函数，因此可以接收参数 -->
   > <!-- 此时操作链的结果作为第一个参数，普通字符串arg1作为第二个参数，表达式 arg2 的值作为第三个参数。 -->
   > {{ message | filterA('arg1', arg2) }}
   > ```
   >
   > 


## 工具

[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)要注意，其他的等学完Webpack再说，没耐心做测试，测试部分以后再说，Typescript还不会，不用管。



## 规模化

说的东西非常少，自己去看，主要是选择性学习页面里的扩展链接




## 内在

1. ### 深入响应式原理

   > 1. #### 如何追踪变化
   >
   >    > 1. 传入JS对象给Vue实例的`data`选项；
   >    > 2. Vue遍历此对象所有属性，使用 [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 把这些属性全部转为 getter/setter。因为此方法是ES5的一个无法shim的特性，所以Vue不支持IE8及更低版本浏览器；
   >    > 3. 在内部，getter/setter让Vue追踪以来，在属性变化时通知变化；
   >    > 4. Vue实例都有相应的watcher实例对象，它在组件渲染过程中将属性记录为依赖。之后每当setter被调用，都会通知watcher重新计算，从而更新与属性关联的组件
   >
   > 2. #### 检测变化的注意事项
   >
   >    本文最开始提到过，Vue不能检测到对象属性的添加/删除。
   >
   >    Vue初始化实例时对属性执行getter/setter转化，所以属性必须在初始化时的`data`对象上存在才会是响应式的，即————
   >
   >    **Vue不允许在已创建的实例上动态添加新的根级响应式属性。**
   >
   >    - **变通方法**：
   >
   >      ```js
   >      // 这些方法在前面的数组渲染里面讲过
   >
   >      // 将响应式属性添加到data对象里嵌套的对象上
   >      Vue.set(vm.someObject, 'b', 2);
   >
   >      // 别名方法vm.$set
   >      this.$set(this.someObject, 'b', 2);
   >
   >      // 添加多个属性
   >      // 使用 Object.assign() 或 _.extend() 方法来添加的新属性不会触发更新，解决办法是创建一个新的对象，让它包含原对象的属性和新的属性
   >      this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
   >
   >      // 另外列表渲染中还讲过一些变动数组相关的响应式检测问题
   >      ```
   >
   > 3. #### 声明响应式属性
   >
   >    之前说过：如果初始化实例时要添加的响应式属性的值还不确定，也要先在data对象里声明一个空属性，以后再设置
   >
   >    技术原因：
   >
   >    1. 更高效
   >    2. 可维护性好
   >
   > 4. #### 异步更新队列
   >
   >    Vue异步执行DOM更新：观察到数据变化时Vue开启一个队列，同一个watcher被多次触发，只会推一次到队列中。然后下一个时间循环“tick"中Vue刷新队列并执行实际（已去重）工作。（异步队列原理方法见原文：[异步更新队列](https://cn.vuejs.org/v2/guide/reactivity.html#异步更新队列)）
   >
   >    这样一来，当data属性发生变化时，组件不会立即重新渲染，而是在刷新队列机制中队列清空的下一个“tick”更新。如果想在DOM状态更新后立即操作，可以在数据变化后立即使用`Vue.nextTick(callback)`。这样callback就会在DOM更新完成后调用，组件内可以使用`this.$nextTick(callback)`，具体例子见原文。



## 迁移



略