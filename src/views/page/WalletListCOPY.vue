<template>
  <div class="my">
    <van-nav-bar @click-left="$router.back()" left-arrow :title="pageText.text1"/>
    <section class="container">
      <ul class="uls">
        <li>
          <van-cell @click="$router.push({
            path: 'ImportQB',
            query: {...$route.query}
          })" :label="pageText.text2" :title="pageText.text3" is-link>
            <template #icon>
              <div class="cell-icon">
                <img :src="require('@/asset/images/walletList/2.png')" alt="">
              </div>
            </template>
          </van-cell>
          <van-cell :label="pageText.text4" :title="pageText.text5" is-link>
            <template #icon>
              <div class="cell-icon">
                <img :src="require('@/asset/images/walletList/1.png')" alt="">
              </div>
            </template>
          </van-cell>
          <van-cell :label="pageText.text6" :title="pageText.text7" is-link>
            <template #icon>
              <div class="cell-icon">
                <img :src="require('@/asset/images/walletList/3.png')" alt="">
              </div>
            </template>
          </van-cell>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import i18 from '@/mixins/lang'
  export default {
    name: "WalletList",
    mixins: [i18('WalletList')],
    data: () => ({
      pageText: {
        text1: 'Import way',
        text2: 'Import by entering recovery phrases(mnemonics) or scanning a QR code',
        text3: 'Recovery Phrase import',
        text4: 'lmport the account with the private key asan offline wallet',
        text5: 'Cold Wallet',
        text6: 'View assets and transactions of any wallet',
        text7: 'Watch Wallet',
      },
    })
  }
</script>

<style scoped lang="less">
  .my {
    overflow: hidden;
    height: 100%;
    position: relative;

    .container {
      text-align: left;
      .pxrem(padding, 20);
      .pxrem(padding-top, 0);

      .uls {
        .pxrem(margin-top, 24);

        .cell-icon {
          display: flex;
          align-items: center;
          .pxrem(margin, 10);
          .pxrem(margin-right, 25);

          img {
            .pxrem(width, 48);
          }
        }

        .van-cell__title {
          span {
            display: inline-block;
            .pxrem(padding-top, 10);
          }
        }
      }
    }
  }

  /deep/ .van-cell {
    align-items: center;
  }

  /deep/ .van-cell__label {
    padding-top: 6px;
    padding-bottom: 10px;
  }
</style>
