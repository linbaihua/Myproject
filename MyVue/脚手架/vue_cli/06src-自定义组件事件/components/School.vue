<template>
    <div class="school">
        <h2>{{schoolName}}</h2>
        <h2>{{schoolAddress}}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            schoolName:'厦门理工',
            schoolAddress:'福建厦门'
        }
    },
    props:['getSchoolName'],
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.schoolName)
        }
    },
}
</script>

<style>
    .school{
        background-color: rgb(44, 85, 85);
        padding: 5px;
    }
</style>