<template>
  <div class="my">
    <van-nav-bar :title="pageText.text9">
      <template #right>
        <div class="my-right">
          <img :src="require('@/asset/images/my/月亮.png')" alt="">
          <img :src="require('@/asset/images/my/铃铛.png')" alt="">
        </div>
      </template>
    </van-nav-bar>
    <section class="container">
      <van-cell :title="item.title" is-link v-for="item in cell1" :key="item.title">
        <template #icon>
          <img class="my-img" :src="item.icon" alt="">
        </template>
      </van-cell>
    </section>
    <section class="container">
      <van-cell :title="pageText.text8" is-link>
        <template #icon>
          <img class="my-img" :src="require('@/asset/images/my/contact.png')" alt="">
        </template>
      </van-cell>
    </section>
    <section class="container">
      <van-cell :title="item.title" is-link v-for="item in cell2" :key="item.title">
        <template #icon>
          <img class="my-img" :src="item.icon" alt="">
        </template>
      </van-cell>
    </section>
  </div>
</template>

<script>
  import i18 from '@/mixins/lang'

  export default {
    name: "my",
    mixins: [i18('my')],
    created() {
      this.cell1[0].title = this.pageText.text1;
      this.cell1[1].title = this.pageText.text2;
      this.cell1[2].title = this.pageText.text3;
      let idx = 0;
      Object.keys(this.pageText).forEach((keys, index) => {
        if (index >= 3 && index <= 6) {
          this.cell2[idx].title = this.pageText[keys]
          idx += 1
        }
      })
    },
    data: () => ({
      pageText: {
        text1: 'Asset Overview',
        text2: 'Manage Wallets',
        text3: 'Transaction Records',
        text4: 'Invite Friends',
        text5: 'Wallet Guide',
        text6: 'About Us',
        text7: 'Settings',
        text8: 'Address Book',
        text9: 'My',
      },
      cell1: [
        {
          title: 'Asset Overview',
          icon: require('@/asset/images/my/preview.png')
        }, {
          title: 'Manage Wallets',
          icon: require('@/asset/images/my/manage.png')
        }, {
          title: 'Transaction Records',
          icon: require('@/asset/images/my/record.png')
        },
      ], cell2: [
        {
          title: 'Invite Friends',
          icon: require('@/asset/images/my/invite.png')
        }, {
          title: 'Wallet Guide',
          icon: require('@/asset/images/my/guide.png')
        }, {
          title: 'About Us',
          icon: require('@/asset/images/my/guanyu.png')
        }, {
          title: 'Settings',
          icon: require('@/asset/images/my/setting.png')
        },
      ],
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
  /deep/ .van-nav-bar__title {
    .pxrem(font-size, 38);
  }

  .my {
    overflow: hidden;
    height: 100%;
    background: #efefef;

    .container {
      margin-top: 12px;

      /deep/ .van-cell {
        .pxrem(padding, 20);
        .pxrem(padding-left, 45);

        .van-cell__title {
          text-align: left;
          .pxrem(font-size, 38);
          .pxrem(padding-left, 25);
        }
      }

      .my-img {
        .pxrem(width, 42);
        .pxrem(height, 42);
      }
    }

    .my-right {
      img {
        .pxrem(width, 36);
        .pxrem(margin-left, 24);

        &:active {
          opacity: .5;
        }
      }
    }
  }
</style>
