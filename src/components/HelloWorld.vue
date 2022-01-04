<template>
  <div class="hello">
    This is the default view. Navigate as below

    <ul>
      <li>
        <a href="/profile.html">profile</a>
      </li>
      <li>
        <a href="/settings.html">Settings</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
