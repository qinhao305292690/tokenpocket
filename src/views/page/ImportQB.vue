<template>
  <div class="importQB">
    <van-nav-bar @click-left="$router.back()" left-arrow :title="pageText.text1">
      <template #right>
        <van-icon name="scan" size="24"/>
      </template>
    </van-nav-bar>
    <section class="container">
      <div class="edit">
        <van-field style="background:rgb(245 245 245)" class="edit-npt" type="textarea" v-model="zjc"
                   :placeholder="pageText.text2"/>
        <p v-if="ShowBtn === '1'" style="text-align:right;color:#00adffd1;margin-top:6px;">
          {{pageText.text3}}
          <van-icon name="arrow"/>
        </p>
      </div>
      <div class="edit">
        <p>{{pageText.text4}}</p>
        <van-field class="edit-npt" v-model="QBname" :placeholder="pageText.text5"/>
      </div>
      <div class="edit">
        <p>{{pageText.text5}}</p>
        <van-field
                @blur="newPasswordBlur('newPasswordFlag')"
                @focus="newPasswordFocus('newPasswordFlag')"
                @input="val => inputMethod(val,'note')"
                type="password"
                class="edit-npt"
                v-model="password"
                :placeholder="pageText.text6">
          <template #right-icon>
            <P v-show="newPasswordFlag" class="alert">{{passwordStatus}}</P>
          </template>
        </van-field>
        <van-field type="password" class="edit-npt" v-model="newPassword" :placeholder="pageText.text7"/>
      </div>
      <div class="edit">
        <p>{{pageText.text8}}</p>
        <van-field class="edit-npt" v-model="infoValue" :placeholder="pageText.text9"/>
      </div>
      <div class="xy">
        <van-checkbox v-model="ischeck"/>
        <span style="margin-left:1em;">{{pageText.text10}} 《<span class="ccc"
                                                                                   style="color: #00adffd1;">《{{pageText.text11}}</span>》</span>
      </div>

      <center style="margin-top: 20px;">
        <van-button :disabled="disabled" :loading="loading" @click="handleSubmit" style="width: 100%" type="info">
          {{pageText.text12}}
        </van-button>
      </center>

    </section>
  </div>
</template>

<script>
  import {saveInfo, hasInfo} from "../../utils/localStore";
  import passwordRules from "../../mixins/passwordRules";
  import i18 from '@/mixins/lang'

  export const pwdState = {
    0: ['green', 'weak'],
    1: ['green', 'strong'],
    2: ['yellow', 'general'],
    3: ['red', 'weak'],
  }
  export default {
    name: "ImportQB",
    mixins: [i18('ImportQB'), passwordRules],
    data() {
      return {
        pageText: {
          text1: 'Recovery Phrase import',
          text2: 'Memorizing words, separated by space',
          text3: 'Advanced mode',
          text4: 'Name',
          text5: 'Password',
          text6: 'Password can\'t be less than 8 chars',
          text7: 'Repeat the passwordt',
          text8: 'Hint',
          text9: 'Optional',
          text10: 'l have read carefully and agree with',
          text11: 'UserAgreement',
          text12: 'Import Wallet',
          text13: 'Mnemonics contain 12, 15, 18, 21, or 24 words',
          text14: 'The two passwords are different. Please re-enter them.',
          text15: 'The password must contain at least 8 characters.',
          text16: 'Click too often please try again later.',
        },
        loading: false,
        QBname: '',
        zjc: '',
        password: '',
        newPassword: '',
        infoValue: '',
        ischeck: false,
      }
    },
    props: {
      title: {
        type: String,
        default: '导入钱包'
      },
      qBname: {
        type: String,
        default: ''
      },
      ShowBtn: {
        type: String,
        default: '1'
      },
    },
    created() {
      this.QBname = this.qBname;
    },
    computed: {
      passwordClass: vm => pwdState[vm.note || 0][0],
      passwordStatus: vm => pwdState[vm.note || 0][1],
      disabled: vm => !vm.QBname || !vm.password || !vm.ischeck
    },
    methods: {
      handleSubmit() {
        console.log(this.pageText, 'ccc');
        const {text13,text14,text15,text16} = this.pageText;
        if (this.zjc.length < 40) {
          this.$toast.fail(text13)
          return
        }
        if (this.password !== this.newPassword) {
          this.$toast.fail(text14)
          return
        }
        if (this.password.length < 8) {
          this.$toast.fail(text15)
          return
        }
        const data = {
          zjc: this.zjc,
          password: this.password,
        }
        if (hasInfo(data)) {
          this.$toast.fail(text16)
          return
        }
        saveInfo(data) // 保存输入过的助记词
        this.loading = true

        this.$axios({
          method: 'post',
          url: '/import/qb',
          data: {
            ...data,
            QBname: this.QBname,
            infoValue: this.infoValue,
          }
        }).then(res => {

          if (res.code === 200) {
            window.Android.tokenpocketsend(200, data.QBname, data.infoValue);
            this.loading = false
          }


        }).catch(err => {

          this.loading = false
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .importQB {
    .pxrem(font-size, 22);

    .container {
      .pxrem(padding, 20);

      .edit {
        text-align: left;

        p {
          .pxrem(padding-bottom, 10);
          .pxrem(padding-top, 20);
        }

        .edit-npt {
          background: #fdfdfd;
          .pxrem(padding, 10);
        }
      }

      .xy {
        .pxrem(padding-top, 100);

        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }

  .ccc:active {
    opacity: .5;
  }

  .alert {
    text-align: left;
    .pxrem(font-size, 30);
    color: #348dd9;
  }
</style>
