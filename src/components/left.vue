<template>
  <div class="k-left">
    <k-logo></k-logo>
    <k-info :userInfo="userInfo" :skills="skills"></k-info>
  </div>
</template>

<script>
import kLogo from '@/components/logo'
import kInfo from '@/components/info'
export default {
  components: {
    kLogo,
    kInfo
  },
  props: ['userInfo', 'skills']
}
</script>
<style lang="less">
.k-left{
  width: 380px;
  background: #fff;
  align-self: stretch;
  border-right: 1px solid #ddd;
}
</style>
