<template>
  <div class="main-contain">
    <header class="at-header">
      <header-bar :sysName="sysName"></header-bar>
    </header>
    <div class="at-container row">
      <div class="at-sidebar col-sm-24 col-md-6 col-lg-4">
        <side-bar :routes="$router.options.routes"></side-bar>
      </div>
      <div class="at-markdown col-sm-24 col-md-18 col-lg-20">
        <div class="content-main">
          <at-breadcrumb separator="/" class="crumb">
            <at-breadcrumb-item :to="{ path: '/' }">首页</at-breadcrumb-item>
            <at-breadcrumb-item>
              {{this.$router.history.current.name}}
            </at-breadcrumb-item>
          </at-breadcrumb>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SideBar from './components/SideBar'
  import HeaderBar from './components/HeaderBar'

  export default {
    name: "Home",
    data() {
      return {
        sysName: '订单辅助',
      }
    },
    components: {
      SideBar,
      HeaderBar,
    },
    mounted() {
      console.log(this.$router.history.current.path)
    }
  }
</script>

<style scoped lang="scss">
  .at-container {
    position: relative;
    margin: 30px auto;
    width: 90%;
    height: 80%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.5);
  }

  .at-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
  }

  .at-sidebar {
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: #3F536E;
    background-color: #fff;
    border-right: 1px solid #ECECEC;
    z-index: 99;
  }

  .main-contain {
    background-color: #F8FAFF;
    height: 100%;
    min-height: 800px;
  }

  .at-markdown {
    padding: 32px 48px 48px;
  }

  .crumb {
    margin-bottom: 20px;
  }
</style>
