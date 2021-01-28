<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
  /**
   * 技巧
       a、针对请求进行封装后；再针对不同模块，进行请求的封装。
          即请求封装，形成request.js;在针对首页，创建Home.js，将涉及到首页请求的放入其中即可
       b、定义data属性保存请求变量
         在组件的声明周期函数，在created()创建后，获取请求；
         使用data属性保存请求的数据【因为使用函数中的变量，在函数使用完成后，变量就会被回收。所以需要定义data属性执行变量，将变量保存起来】
   */

  import HomeSwiper from './childComps/HomeSwiper'
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from 'network/home'
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/context/tabControl/TabControl";

  export default {
    name: "home",
    components: {NavBar,HomeSwiper,FeatureView,TabControl},
    data(){
      return {
        banners:null
      }
    },
    created() {
      this.getHomeMultidata();

    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res;
        })
      }
    }
  }
</script>

<style scoped>

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

</style>
