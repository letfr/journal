<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  async created() {
    await this.$store.dispatch('clearData');
    this.$router.push({ name: 'Password' });
  },
});
</script>
<style lang="scss">
  @import './styles/main.scss';
</style>
