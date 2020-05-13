<template>
  <div class="home container">
    <a href="/">ALL NOTES</a>
    <a href="/new-note">CREATE NEW NOTE</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
.home {
  align-items: center;
  justify-content: center;
  a {
    padding: 10px;
    letter-spacing: 2px;
    font-size: 14px;
  }
}
</style>
