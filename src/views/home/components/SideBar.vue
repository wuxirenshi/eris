<template>
  <at-menu
    router
    :active-name="$route.path"
    inline-collapsed
    style="height: 100%;"
    >
    <template v-for="(item,index) in routes" v-if="!item.hidden">
      <at-submenu opened v-if="!item.leaf&&item.children.length>0">
        <template slot="title">
          <i :class="item.iconCls"></i>
          {{ item.name }}
        </template>
        <at-menu-item
          :name="child.path"
          :key="child.path"
          v-for="child in item.children"
          v-if="!child.hidden"
          :to="child.path">
          {{ child.name }}
        </at-menu-item>
      </at-submenu>
      <at-menu-item :to="item.children[0].path" :name="item.children[0].path" v-if="item.leaf&&item.children.length>0">
        <i :class="item.iconCls"></i>
        {{ item.children[0].name }}
      </at-menu-item>
    </template>
  </at-menu>
</template>

<script>
    export default {
        name: "SideBar",
        props: {
            routes: {
                type: Array
            },
        },
    }
</script>
