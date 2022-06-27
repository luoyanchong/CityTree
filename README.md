-- Markdown, please read in UTF-8



# 001-行政机构树

## 概述

考虑在如下行政区划数据，CSV 格式（[Comma-Separated Values](https://edoceo.com/dev/csv-file-format)），具体数据文件见当前目录下的 `001.csv`（可以使用 Excel 打开）：

```
  ID         PID             Name
  --------------------------------
  28          76             无锡       
  24          76             南京       
  7           75             北京       
  75          0              中国       
  48          7              海淀区     
  37          103            普陀区
  1           37             中江路 118 弄 12 号楼, 海亮大厦B座 4F-7F
  103         75             上海
  17          103            静安区
  76          75             江苏
  ...         ...            ......
```

注意以上数据的特点为：
 1. 层次结构，层级不确定，理论上可以具有无限层级;
  2. 无序，比如父节点的ID不一定就小于子节点, 一个省下面的市也不一定排在一起，等等;
 3. `PID=0`的是顶层节点，**顶层节点只有一个**;

假设有一个 Tree 组件需要如下格式的 JSON 数据才能展现：

```json
{
  id: 75,
  name: "中国",
  children: [{
       id: 7,
       name: "北京",
       children: [... ...]
    }, {
       id: 75,
       name: "江苏",
       children: [... ...]
    }, {
       id: 103,
       name: "上海",
       children: [... ...]
    },
    ... ...
  ]
}
```

## 功能需求

**在浏览器环境下（可以只支持 Chrome），解析 `001.csv` 文件（建议使用现有的开源 js 模块），构造出符合上述格式的 JSON 数据对象。**



下面的设计思路可以作为参考：

 1. 解析 CSV 之后，查找 `PID=0` 的顶层节点数据:
   
 2. 查找到数据之后，创建顶层节点（此时还没法知道它有多少子节点）:

     ```js
     //按照上面的数据, 这里 id=75,name=中国
     var topNode  = {
         id：nnn, name: "XXXX", children: []
     };
     ```

 3. 编写一个方法 “`fillChildren`”：

     ```js
     var fillChildren = function(node){
         //待实现
     };
     //对 topNode 对象执行 fillChildren，
     //通过递归算法，可以完成整颗树的遍历.
     fillChildren(topNode);
     return topNode;
     ```

 4. 此时 `topNode` 对象就可以作为结果返回或者输出为 JSON 了。

## 要求

1. 选择一个解析 CSV 的开源 js 库；
2. 阐述实现思路，要求详细到代 码步骤，比说明你准备如何去实现 ”`fillChildren`“ 方法。

## 讨论

 1. 评估一下你的实现方法需要多少次循环？
 2. 你所说的实现有没有可改进的地方？

## END