<template>
  <div class="home container">
    <a class="all-notes" @click="redirect('AllNotes')">ALL NOTES</a>
    <a class="new-note" @click="redirect('NewNote')">CREATE NEW NOTE</a>
    <a class="habit-tracker" @click="redirect('NewNote')">HABIT TRACKER</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    redirect(to) {
      event.preventDefault();
      this.$router.push({ name: to });
    },
  },
};
</script>

<style lang="scss">
.home {
  align-items: center;
  justify-content: center;
  a {
    padding: 15px;
    letter-spacing: 4px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: #FAC2B3;
    }
  }
}
</style>
