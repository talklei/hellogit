<template>
  <div class="tab-bar-item" @click="itemClick">
    <div>
      <slot name="tabimg"></slot>
    </div>
    <div :style="itemDivStyle">
      <slot name="tabtext"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String
      },
      itemColor: {
        type: String,
        default: 'yellow'
      }
    },
    computed:{
      itemDivStyle(){
        let isactive = this.$route.path.indexOf(this.path);
        return !isactive?{color:this.itemColor}:{};
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 1px;
  }
</style>
