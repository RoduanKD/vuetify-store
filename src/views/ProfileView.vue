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
    fetch('https://dummyjson.com/users/' + this.user.id, {
      headers: {
        Authorization: 'Bearer ' + this.user.token
      },
    })
      .then(res => res.json())
      .then(data => this.userInfo = data);
  },
}
</script>

<style>

</style>
