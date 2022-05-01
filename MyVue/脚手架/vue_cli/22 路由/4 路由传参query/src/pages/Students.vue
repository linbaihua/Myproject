<template>
  <div>
      <ul>
          <li>编号：{{$route.query.id}}</li>
          <li>姓名：{{$route.query.name}}</li>
      </ul>
  </div>
</template>

<script>
    export default {
        name:'Students',
    }
</script>
