<template>
    <div>
        <ul>
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
    }
</script>

