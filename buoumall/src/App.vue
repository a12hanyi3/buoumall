<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}

html,body{
  height:100%;
}

ul{
	list-style: none;
}
#app{
	height: 100%;
}
</style>


