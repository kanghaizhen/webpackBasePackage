<template>
  <div class="k-user">
    <div class="k-user-icon">
      <img class="k-user-img" src='../assets/images/user.jpg' alt="" width="200" height="200">
    </div>
    <div class="k-user-name">Kanghz</div>
  </div>
</template>

<script>
import logo from '@/assets/images/user.jpg'
export default {
}
</script>
<style lang="less">
.k-user{
  padding: 20px 0;
  background: #eeeeee;
}
.k-user-icon{
  width: 204px;
  margin: 0 auto;
  border-radius: 1000px;
  overflow: hidden;
  border: 2px solid #fff;
  .k-user-img {
    display: block;
    border-radius: 1000px;
    border: 2px solid #ddd;
  }
}
.k-user-name{
  margin: 20px 0;
  text-align: center;
  font-size: 24px;
}
</style>
