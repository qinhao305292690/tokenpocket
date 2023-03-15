<template>
  <div class="my">
    <van-nav-bar @click-left="$router.back()" left-arrow :title="pageText.text1"/>
    <section class="container">
      <custom-cell @click="$router.push('importQBCOPY')"
              title="MultiSig Wallet"
              :icon="require('@/asset/images/myWallet/ic_hd_logo.png')"
      >
        <template #title>
          {{pageText.text2}}
          <van-icon style="margin-left: .1rem;" name="question-o" size="20"/>
        </template>
      </custom-cell>
      <custom-cell
              :title="pageText.text3"
              :icon="require('@/asset/images/myWallet/ic_import_phone.png')"
      />
      <custom-cell
              :title="pageText.text4"
              :icon="require('@/asset/images/myWallet/ic_import_phone.png')"
      />
      <van-row class="double-cell" v-for="(item,index) in cellList" :key="index">
        <van-col span="12" v-for="(citem,cindex) in item" :key="cindex">
          <custom-cell
                  @click="handleCellEvent(citem.title)"
                  class="td1"
                  :isLink="false"
                  :title="citem.title"
                  :icon="citem.icon"
          />
        </van-col>
      </van-row>
    </section>
    <van-button class="btn" type="default">{{pageText.text5}}</van-button>
  </div>
</template>

<script>
  import CustomCell from "../components/CustomCell";
  import {cellData} from "../../utils/enumCell";
  import i18 from '@/mixins/lang'

  export default {
    name: "MyWallet",
    mixins: [i18('MyWallet')],
    components: {CustomCell},
    data: () => ({
      cellList: cellData,
      pageText: {
        text1: 'Please select a network',
        text2: 'HD Wallet',
        text3: 'MultiSig Wallet',
        text4: 'KeyPal hardware wallet',
        text5: '私',
      },
    }),
    methods: {
      handleCellEvent(title) {
        this.$router.push({
          path: 'walletListCOPY',
          query: {
            title: '私钥导入',
            qBname: title,
            ShowBtn: '0'
          }
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .my {
    overflow: hidden;
    height: 100%;
    position: relative;

    .container {
      position: fixed;
      top: 46px;
      bottom: 46px;
      width: 100%;
      overflow: auto;
      .pxrem(padding-top, 30);

      .double-cell {
        .td1 {
          /deep/ .row {
            .pxrem(padding-right, 10);
          }
        }

        .td2 {
          /deep/ .row {
            .pxrem(padding-left, 10);
          }
        }
      }

    }

    .btn {
      position: absolute;
      bottom: 0;
      .pxrem(left, 10);
      .pxrem(right, 10);
      background: #f0f9ff;
      color: #6868e9;
    }
  }
</style>
