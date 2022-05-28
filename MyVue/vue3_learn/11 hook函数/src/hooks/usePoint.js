
import { reactive,onMounted,onBeforeUnmount } from "vue"
export default function(){
    // 实现鼠标打点相关的数据
    let point = reactive({
        x:0,
        y:0
    })

    // 实现鼠标打点相关的方法
    // event是一个接口
    function savePoint(event){
        // pageX,pageY是event的属性,返回xy坐标
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX,event.pageY);
    }

    // 实现鼠标打点相关的声明周期钩子
    onMounted(() => {
        // click是事件类型
        window.addEventListener('click',savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}