
# props

* 要动态的传入student组件的值，就在student中设置props
* 如果要对数值就行修改，使用一个中间变量，不能直接修改后后面动态传入的值
* 传入的如果是number类型，使用 v-bind，因为v-bind引号中是表达式，引号不是
    字符串

# scoped

* vue中所有组件style最后会汇总到一个文件中，所以组件很多的话，名字
    容易起冲突，这时候我们就使用scoped说明这个样式是（局部的），其实
    是scoped给我们的每个style添加唯一的标识符，避免名字冲突
* 写法 <style scoped>

# 在vue中使用less

* 默认安装的less都是最新的，但是vue中不一定支持最新的less,所以需要
    使用命令 npm view查看版本呢，然后安装对应的版本
* 具体安装命令网上搜

# TodoList案例

* 组件化编码流程