<template>
  <div class="k-list">
    <ul class="k-list-ul">
      <li class="k-list-li" v-for="(value, key) in data" :key="key">
        <span class="k-list-key">{{lang[key]}}：</span>
        <span v-if="type == 'value'" class="k-list-value">
          <a v-if="key == 'phone'" :href="'tel:' + value" class="k-link">{{value}}</a>
          <a v-else-if="key == 'email'" :href="'mailto:' + value" class="k-link">{{value}}</a>
          <a v-else-if="key == 'github'" :href="'https://' + value" target="_blank" class="k-link">{{value}}</a>
          <span v-else>{{value}}</span>
        </span>
        <div v-else-if="type == 'process'" class="k-process" :title="value">
          <span :style="'width:' + value + '%;'" class="k-process-item"></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import cnZh from '@/lang/cnZh'
export default {
  data () {
    return {
      lang: cnZh
    }
  },
 props: ['data', 'type']
}
</script>
<style lang="less">
.k-list{
  margin: 20px;
  .k-list-ul{
    list-style: none;
    padding: 0 10px;
    font-size: 14px;
  }
  .k-list-li{
    line-height: 30px;
    display: flex;
  }
  .k-list-key{
    width: 80px;
    text-align: right;
    flex-shrink: 0;
  }
  .k-process{
    height: 14px;
    background: #909399;
    flex-grow: 1;
    margin: 8px 10px;
    border-radius: 100px;
    overflow: hidden;
    .k-process-item{
      display: block;
      height: 100%;
      border-radius: 100px;
      background: #67c23a;
      text-align: right;
      font-size: 12px;
      line-height: 14px;
      padding: 0 6px;
      user-select: none;
    }
  }
}
</style>
