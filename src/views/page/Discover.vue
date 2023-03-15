<template>
  <div class="discover">
    <van-search show-action v-model="value" :placeholder="pageText.text1">
      <template #action>
        <van-icon name="scan" size="24"/>
      </template>
    </van-search>
    <van-swipe :autoplay="2000">
      <van-swipe-item>
        <img class="banner" :src="require('@/asset/images/discover/bg.png')" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img class="banner" :src="require('@/asset/images/discover/bg.png')" alt="">
      </van-swipe-item>
    </van-swipe>
    <p class="label">
      <span>{{pageText.text2}}</span>
      <span class="edit">{{pageText.text3}}</span>
    </p>
    <div style="text-align: left;margin-top:10px;">
      <img class="link" :src="require('@/asset/images/discover/ic_tp_link_browser.png')" alt="">
      <p class="linkText">{{pageText.text4}}</p>
    </div>
    <div class="cell">
      <van-cell :title="pageText.text5" is-link />
    </div>
  </div>
</template>

<script>
  import i18 from '@/mixins/lang'
  export default {
    name: "discover",
    mixins: [i18('discover')],
    data: () => ({
      pageText: {
        text1: 'Search for DApp or enter link',
        text2: 'My DApps',
        text3: 'Edit',
        text4: 'DApp Bro...',
        text5: 'How to bookmark DApp and TIP protocol',
      },
      value: ''
    }),
    methods: {
      handleClick(index) {
        this.curIndex = index
      }
    }
  }
</script>

<style scoped lang="less">
  .discover {
    .pxrem(padding, 25);
    .qrcode {
      .pxrem(padding-left, 25);
      .pxrem(padding-top, 10);
      .pxrem(width, 44);
    }
    .banner {
      width: 100%;
      height: 100%;
      .pxrem(padding-top, 10);
      border-radius: 8px;
    }
    .label {
      display: flex;
      justify-content: space-between;
      .pxrem(padding-top, 20);
      .pxrem(font-size, 30);
      .pxrem(padding-bottom, 10);
      .edit {
        .pxrem(font-size, 25);
        color: #999;
      }

    }
    .link {
      .pxrem(width, 160);
      border-radius: 8px;
      border: 1px solid #e3e3e3;
      &:active {
        opacity: .5;
      }
    }
    .linkText {
      .pxrem(font-size, 32);
    }
    .cell {
      margin-top: 30px;
      /deep/ .van-cell {
        background: #f6f6f6;
        padding: 20px;
        text-align: left;
      }
      &:active {
        opacity: .5;
      }
    }
  }
  .edit:active {
    opacity: .5;
  }
  /deep/ .van-search__action {
    line-height: 0;
    .pxrem(padding-left, 10);
  }
</style>
