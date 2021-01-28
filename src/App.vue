<template>
  <div id="app">
    <BetterScrollDemo></BetterScrollDemo>
  </div>
</template>

<script>
  //import mainTabbar from "components/context/mainTabbar";
  import BetterScrollDemo from "./components/test/BetterScrollDemo";

export default {
  name: 'App',
  components: {
    BetterScrollDemo
    //, mainTabbar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
