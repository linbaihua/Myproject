<template>
    <div>
        <ul>
            <li :style="{opacity}">欢迎学习Vue</li>
            <li>canon</li>
            <li>nikon</li>
            <li>sony</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'News',
        data() {
            return {
                opacity:1
            }
        },
        mounted() {
            console.log('news被销毁');
        },
        activated() {
            console.log('News组件被激活了')
			this.timer = setInterval(() => {
				console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
        },
        deactivated() {
            console.log('News组件失活了')
			clearInterval(this.timer)
        },
    }
</script>

