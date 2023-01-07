<template>
  {{ userInfo }}
</template>

<script>
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
    this.axios.get('https://dummyjson.com/users/' + this.user.id)
      .then(response => {
        this.userInfo = response.data
      })
  },
}
</script>

<style>

</style>
