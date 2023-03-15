<template>
  <div class="switch">
    <van-switch
            size="24px"
            :class="{'custom-arc': check}"
            @change="handleChange"
            active-color="#b2dad6"
            v-model="check"
            inactive-color="#dcdee0"/>
  </div>
</template>

<script>
  export default {
    name: "CustomSwitch",
    props: {
      value: {
        type: Boolean
      }
    },
    computed: {

    },
    methods: {
      handleChange (bool) {
        this.check = bool
      }
    },
    data() {
      return {
        check: false
      }
    }
  }
</script>

<style scoped lang="less">
  /deep/ .van-switch {
    height: .5rem;
    .van-switch__node {
      top: -0.08rem;
    }
  }
  .custom-arc {
    /deep/ .van-switch__node {
      background: #009966;
    }
  }
</style>
