<template>
  <div class="row at-row no-gutter" style="background-color: white; padding: 5px 0">
    <div class="col-md-2">
    </div>
    <div class="col-md-1">
      <img :src="image" height="50" style="line-height: 50px;"/>
    </div>
    <div class="col-md-4" style="">
      <span class="span-style">PRIAMS</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderBar",
    data() {
      return {
        image: '../../../../static/m.png',
      }
    },
    props: {
      sysName: {
        type: String
      },
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  .span-style {
    line-height: 50px;
    font-size: 30px;
    color: #409eff
  }
</style>
