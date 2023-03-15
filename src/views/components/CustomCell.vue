<template>
  <div>
    <van-row v-bind="$attrs" v-on="$listeners" class="row">
      <van-col span="24">
        <van-cell :is-link="isLink" :value="title">
          <template #icon>
            <img class="link-img" :src="icon" alt="">
          </template>
          <slot name="title"/>
        </van-cell>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: "CustomCell",
    inheritAttrs: true,
    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      isLink: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  /deep/ .van-nav-bar__title {
    .pxrem(font-size, 38);
  }

  /deep/ .van-cell {
    .pxrem(padding, 30);
    border-radius: 5px;
    background: #f7f7f7;

    .link-img {
      .pxrem(width, 50);
      .pxrem(height, 50);
      .pxrem(margin-right, 15);
    }

    .van-cell__title {
      text-align: left;
    }
    &:active {
      opacity: .5;
    }
  }

  .row {
    .pxrem(padding-right, 20);
    .pxrem(padding-left, 20);
    .pxrem(padding-bottom, 20);
  }
</style>
