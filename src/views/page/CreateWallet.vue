<template>
  <div class="createWallet">
    <ul class="uls">
      <li @click="handleClick(index)" :class="curIndex===index ? 'active':''" v-for="(it,index) in tabList" :key="it">
        {{it}}
      </li>
    </ul>
    <center class="center">
      <img :src="require('@/asset/images/empty.png')" alt="">
      <p style="color: #999;padding: 10px 0;">
        {{pageText.text4}}
      </p>
      <van-button class="btn" color="#d4e3ff">{{pageText.text5}}</van-button>
    </center>
  </div>
</template>

<script>
  import i18 from '@/mixins/lang'

  export default {
    name: "CreateWallet",
    mixins: [i18('CreateWallet')],
    created() {
      const {text1,text2,text3} = this.pageText;
      [text1,text2,text3].forEach((i,j) => this.tabList[j] = i)
    },
    data: () => ({
      pageText: {
        text1: 'Swap',
        text2: 'Bridge',
        text3: 'Markets',
        text4: 'This feature is not supported in the current region',
        text5: 'Learn more',
      },
      tabList: ['Swap', 'Bridge', 'Markets'],
      curIndex: 0
    }),
    methods: {
      handleClick(index) {
        this.curIndex = index
      }
    }
  }
</script>

<style scoped lang="less">
  .uls {
    .pxrem(font-size, 25);
    .pxrem(padding-top, 20);
    .pxrem(padding-left, 200);
    .pxrem(padding-right, 200);
    display: flex;
    justify-content: space-between;

    li.active {
      font-weight: 800;
    }
  }

  .center {
    .pxrem(padding-top, 200);

    img {
      .pxrem(width, 200);
    }

    .btn {
      .pxrem(margin-top, 15);
      .pxrem(width, 250);
      .pxrem(height, 60);

      .van-button__text {
        color: #3c3ce5;
      }
    }
  }
</style>
