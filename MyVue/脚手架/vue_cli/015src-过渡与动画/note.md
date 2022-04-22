
# ----使用动画写过渡 test----
# 准备一个按钮用于控制动画显示或者不显示

# 开始写css3的动画，在style中
* 使用 @keyframes写动画效果
* 来的动画
* 走的动画

# 使用transition标签包裹动画

# 使用vue改写动画style
* vue中默认来的动画是 v-enter-active
* 走的动画是 v-leave-active
* 当然这个 v如果在transition中没有起名就是默认的v，如果
    起名了就写成名字


# ----只使用过渡本身写-test2----
# 给transition起名
* 当一个组件中有多个过渡时，如果不给每个transition起名，vue就找
    不到相应的transition

# vue中的过渡样式类
* v-enter 进入的起点，是使用左边位置为起点的
* v-enter-to 进入的终点
* v-leave 离开的起点（也是以左边的位置为起点）
* v-leave-to 离开的终点
* v-enter-active 进入的过渡效果
* v-leave-active 离开的过渡效果

# ----使用相同的过渡----
* 一个transition中只可以放一个过渡
* transition-group 可以放多个过渡，不过得指定key

# ----使用第三方库-------
* animate.css（第三发动画效果库）
* npm 安装一下
* 然后import
* 使用类名
    * v-enter-class 代替原来的 v-enter-active
    * v-leave-class 代替原来的 v-leave-active
    * class就是引入的类名，不用自己写过渡效果了