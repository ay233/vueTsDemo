# ay-color
一个瞎搞的颜色插件

## 安装
```JS
yarn add ay-color
or
npm i ay-color --S
```

## 使用
```JS
//ES6引入
import colorsel from 'ay-color' 
Vue.use(colorsel);
//require引入
var colorsel = require('colorsel_ay')
Vue.use(colorsel)

//组件中使用
```html
        <ay-color :colorArr=colorArr :show=show @getColor=getc></ay-color>
```

### Props说明

|    参数    |    作用   |   类型   | 默认值 |
| -----------------  | ---------------- | :--------: | :----------: |
| colorArr        | 定义的颜色数组 | array  | ['red','yellow','pink','white','black','orange']|
| show       | 展示与隐藏 |bool|false|


### 事件

| name | Description   |  
| :--------:   | -----  |
|    getColor    |  获取选中的颜色
###方法说明
|    参数    |    作用   |   类型   | 值解释 |
| -----------------  | ---------------- | :--------: | :----------: |
| e        | 获取change的对象 | object  | e.val:当前值,e.oldVal:老值|


