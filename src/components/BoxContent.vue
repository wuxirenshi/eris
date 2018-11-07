<template>
  <div :class="`col-md-${span}`">
    <div class="ibox float-e-margins">
      <div class="ibox-title" @click="clickIcon">
        <h5 style="font-size: 14px">{{title}}</h5>
        <at-tag
          color="primary"
          style="float: left;margin-left: 10px" v-if="tagName">
          {{tagName}}
        </at-tag>
      </div>
      <collapse-transition>
      <div class="ibox-content" v-show="isShow">
        <slot></slot>
      </div>
      </collapse-transition>
    </div>
  </div>
</template>

<script>
  import CollapseTransition from "at-ui/src/utils/collapse-transition";

  export default {
    name: "BoxContent",
    components: {CollapseTransition},
    data() {
      return {
        isClickIcon: true,
        isShow: true
      }
    },
    watch: {
      isClickIcon(value) {
        this.isShow = !this.isShow
      }
    },
    props: {
      title: {
        type: String
      },
      tagName: {
        type: String
      },
      span: {
        type: Number
      }
    },
    methods: {
      clickIcon() {
        this.isClickIcon = !this.isClickIcon
      },
      classIcon() {
        return {
          'fa fa-angle-down': this.isClickIcon,
          'fa fa-angle-right': !this.isClickIcon,
        }
      }
    }
  }
</script>

<style scoped>
  .ibox-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #c0ccda;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0px;
  }

  .ibox-title {
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-width: 4px 0px 0;
    color: inherit;
    margin-bottom: 0;
    padding: 10px 10px 0px;
    min-height: 40px;
    cursor: pointer
  }

  .ibox-title h5 {
    display: inline-block;
    font-size: 14px;
    margin: 0 0 7px;
    padding: 0;
    text-overflow: ellipsis;
    float: left;
  }

  .ibox-title .label {
    float: left;
    margin-left: 4px;
  }

  .ibox-title h5 {
    float: left;
  }

  .ibox {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
    border:1px solid #e7eaec;
  }
</style>
