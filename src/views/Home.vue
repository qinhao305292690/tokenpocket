<template>
  <div class="home">
    <aside v-if="!load" class="model">
      <van-loading class="loading" type="spinner" color="#1989fa"/>
    </aside>
    <nav class="banner">
      <span class="title">{{pageText.text1}}</span>
      <img @load="init" :src="require('@/asset/images/logo.png')" alt="">
    </nav>

    <main class="container">
      <section>
        <p>{{pageText.text2}}</p>
        <span class="label">{{pageText.text3}}</span>
        <ul class="uls">
          <li>
            <van-cell @click="$router.push('myWallet')" :label="pageText.text5" :title="pageText.text4" is-link>
              <template #icon>
                <div class="cell-icon">
                  <img :src="require('@/asset/images/import.png')" alt="">
                </div>
              </template>
            </van-cell>
            <van-cell @click="$router.push('myWalletCOPY')" :label="pageText.text7" :title="pageText.text6" is-link>
              <template #icon>
                <div class="cell-icon">
                  <img :src="require('@/asset/images/create.png')" alt="">
                </div>
              </template>
            </van-cell>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
<script>
  import i18 from '@/mixins/lang'

  export default {
    name: "home",
    mixins: [i18('home')],
    methods: {
      init() {
        this.load = true
      }
    },
    data() {
      return {
        pageText: {
          text1: 'A Multi-Chain Wallet Your Assets, Your Control',
          text2: 'Wallets',
          text3: 'Supports blockchain such as BTC, ETH, BSC, TR…',
          text4: 'Import Wallet, KeyPal, MultiSig Wa…',
          text5: 'I have an account',
          text6: 'Create Now',
          text7: 'No accounts'
        },
        load: false,
      };
    },
  };
</script>
<style scoped lang="less">
  .home {
    .model {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #fff;
    }

    .banner {
      position: relative;
      .pxrem(padding-top, 25);

      .title {
        .pxrem(font-size, 30);
        .pxrem(margin-top, 15);
        font-weight: 400;
      }

      .pxrem(height, 450);
      background: #f0f9ff;

      img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }

    .container {
      position: relative;
      .pxrem(top, -40);
      background: #fff;
      text-align: left;
      border-radius: 12px 12px 0 0;

      section {
        p {
          font-weight: 400;
          .pxrem(font-size, 40);
        }

        .pxrem(padding, 30);

        .label {
          color: #999;
          .pxrem(margin-top, 15);
        }

        .uls {
          .pxrem(margin-top, 24);

          .cell-icon {
            .pxrem(margin, 10);
            .pxrem(margin-right, 10 + 10);

            img {
              .pxrem(width, 48);
            }
          }
        }
      }
    }
  }

  /deep/ .van-cell {
    align-items: center;
  }

  /deep/ .van-cell__label {
    .pxrem(padding-bottom, 20);
  }
</style>
