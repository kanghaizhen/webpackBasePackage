<template>
  <div class="k-container">
    <k-left :userInfo="userInfo" :skills="skills"></k-left>
    <k-right></k-right>
  </div>
</template>

<script>
import kLeft from '@/components/left'
import kRight from '@/components/right'
import { userInfo, skills } from '@/data/data'
export default {
  name: 'App',
  components: {
    kLeft,
    kRight
  },
  data() {
    return {
      userInfo: userInfo,
      skills: skills
    }
  }
}
</script>
