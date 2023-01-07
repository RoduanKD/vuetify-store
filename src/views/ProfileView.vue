<template>
  {{ userInfo }}
</template>

<script>
import axios from 'axios'
import { mapState } from 'pinia';
import user from '@/store/user';
export default {
  data: () => ({
    userInfo: {},
  }),
  computed: {
    ...mapState(user, ['user'])
  },
  created() {
    axios.get('https://dummyjson.com/users/' + this.user.id, {
      headers: {
        Authorization: 'Bearer ' + this.user.token
      },
    })
      .then(response => {
        this.userInfo = response.data
      })
  },
}
</script>

<style>

</style>
