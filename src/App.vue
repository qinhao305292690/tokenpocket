<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <van-tabbar v-if="!$route.meta.tabbarHide" v-model="active">
      <van-tabbar-item :to="item.url" v-for="(item,index) in tabbarList" :key="index" icon="home-o">
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive"/>
          <span class="text">{{item.title}}</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import i18 from '@/mixins/lang'

  export default {
    name: 'App',
    mixins: [i18('App')],
    created() {
      const {text1, text2, text3, text4} = this.pageText;
      [text1, text2, text3, text4].forEach((i, inde) => {
      this.tabbarList[inde].title = i
    })
    },
    data() {
      return {
        pageText: {
          text1: 'Wallet',
          text2: 'Market',
          text3: 'Discover',
          text4: 'Me'
        },
        active: 0,
        tabbarList: [
          {
            active: require('@/asset/images/tabbar/ic_tab_asset_selected.png'),
            inactive: require('@/asset/images/tabbar/ic_tab_asset_normal.png'),
            title: 'Wallet',
            url: '/'
          },
          {
            active: require('@/asset/images/tabbar/ic_exchange_market_selected.png'),
            inactive: require('@/asset/images/tabbar/ic_exchange_market_normal.png'),
            title: 'Market',
            url: '/createWallet'
          },
          {
            active: require('@/asset/images/tabbar/ic_tab_discovery_selected.png'),
            inactive: require('@/asset/images/tabbar/ic_tab_discovery_normal.png'),
            title: 'Discover',
            url: 'discover'
          },
          {
            active: require('@/asset/images/tabbar/ic_tab_me_selected.png'),
            inactive: require('@/asset/images/tabbar/ic_tab_me_normal.png'),
            title: 'Me',
            url: 'my'
          },
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  #app {
    text-align: center;

    /deep/ .van-tabbar-item__icon img {
      margin: auto;
    }

    .text {
      .pxrem(font-size, 18);
    }
  }
</style>
