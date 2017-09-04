<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Demo Project</h2>
  </div>
</template>

<script>
import test from '~~/components/utils/index'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    test()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
