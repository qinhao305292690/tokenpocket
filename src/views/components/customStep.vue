<template>
  <div class="custom-step">
    <ul class="custom-ul">
      <li :class="active===index ? 'active':''" :key="index" v-for="(item,index) in data">
        <div :class="['line' + index, 'line']" v-if="data.length > index + 1"/>
        <div class="step-cir">{{index+1}}</div>
        <p class="step-desc">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "customStep",
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style scoped lang="less">
  .custom-step {
    .pxrem(width, 640);

    .custom-ul {
      text-align: center;
      display: flex;
      justify-content: space-between;

      li {
        color: #999;
        position: relative;

        .step-cir {
          margin: 0 auto;
          .pxrem(width, 32);
          .pxrem(height, 32);
          .pxrem(line-height, 32);
          border: 1px solid #999;
          border-radius: 50%;
          background: #fff;
          position: relative;
        }

        .step-desc {
          .pxrem(padding-top, 10);
        }

        .line {
          position: absolute;
          .pxrem(top, 16);
          .pxrem(left, 60);
          height: 1px;
          background: #999;
        }

        .line0 {
          .pxrem(width, 260);
        }

        .line1 {
          .pxrem(width, 270);
        }
      }
      li.active {
        color: #1286ff;
        .step-cir {
          border: 1px solid #1286ff;
        }
      }
    }
  }

</style>
