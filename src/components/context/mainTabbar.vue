<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" itemColor="red">
        <img slot="tabimg" src="~assets/image/tabbar/tabbar1.png">
        <div slot="tabtext">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/type" itemColor="red">
        <img slot="tabimg" src="~assets/image/tabbar/tabbar2.png">
        <div slot="tabtext">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/message" itemColor="blue">
        <img slot="tabimg" src="~assets/image/tabbar/tabbar3.png">
        <div slot="tabtext">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/mypro" itemColor="blue">
        <img slot="tabimg" src="~assets/image/tabbar/tabbar4.png">
        <div slot="tabtext">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TabBar from "../common/tabbar/TabBar";
  import TabBarItem from "../common/tabbar/TabBarItem";

  export default {
    name: "mainTabbar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>
