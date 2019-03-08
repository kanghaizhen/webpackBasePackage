<template>
  <div class="k-info">
    <div class="k-title k-title-primary">基本信息</div>
    <k-list :data="userInfo" type="value"></k-list>
    <div class="k-title k-title-success">专业技能</div>
    <k-list :data="skills" type="process"></k-list>
  </div>
</template>
<script>
import kList from './list'
export default {
  components: {
    kList
  },
  props: ['userInfo', 'skills']
}
</script>
<style lang="less">
@color-default: #f56c6c;
@color-primary: #f56c6c;
@color-success: #67c23a;

.k-title{
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  position: relative;
  margin:20px 0;
  background: @color-default;
  color: #ffffff;
  &:after{
    display: block;
    content: '';
    position: absolute;
    border-top: 12px solid @color-default;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    left: 50px;
  }
}
.k-title-primary{
  background: @color-primary;
  &:after{
    border-top-color: @color-primary;
  }
}
.k-title-success{
  background: @color-success;
  &:after{
    border-top-color: @color-success;
  }
}
</style>
