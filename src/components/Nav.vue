<template>
  <nav>
    <router-link to="/labels" class="nav-item" active-class="selected">
      <Icon name="labels" class="icon"/>
      <span>明细</span>
    </router-link>
    <router-link to="/money" class="nav-item" active-class="selected">
      <Icon name="money" class="icon"/>
      <span>记账</span>
    </router-link>
    <router-link to="/charts" class="nav-item" active-class="selected">
      <Icon name="charts" class="icon"/>
      <span>图表</span>
    </router-link>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({components: {Icon}})
export default class Nav extends Vue {
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 24px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: $color-background;
  color: #b0adad;
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 28px;
      height: 28px;
    }
    &.selected {
      color: #fff;
    }
  }
}
</style>