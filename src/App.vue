<template>
  <div class="k-container">
    <k-left :userInfo="userInfo" :skills="skills"></k-left>
    <div style="height:500px;align-self: stretch;"></div>
  </div>
</template>

<script>
import kLeft from '@/components/left'
import { userInfo, skills } from '@/data/data'
export default {
  name: 'App',
  components: {
    kLeft
  },
  data() {
    return {
      userInfo: userInfo,
      skills: skills
    }
  }
}
</script>
