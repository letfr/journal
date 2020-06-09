<template>
  <div class="all-notes container">
  <a class="back" @click="redirect"></a>
  <div class="note" v-for="note in notes" :key="note.id">
    <header>
      <div class="note-header">
        <h1> {{ note.createdOn }} </h1>
        <h2> {{ note.time }} </h2>
      </div>
    <img class="emoji" :src="require(`../assets/${note.mood}.png`)" alt="">
    </header>
    <p> {{ note.content }} </p>
  </div>
  </div>
</template>

<script>
const fb = require('../firebaseConfig.js');

export default {
  name: 'AllNotes',
  data() {
    return {
      notes: [],
    };
  },
  created() {
    this.allNotes();
  },
  methods: {
    redirect() {
      event.preventDefault();
      this.$router.push({ name: 'Home' });
    },
    async allNotes() {
      await fb.notes.orderBy('time').get().then((docs) => {
        docs.forEach((doc) => this.notes.push(doc.data()));
      });
    },
  },
};
</script>

<style lang="scss">
.all-notes {
  overflow: auto;
}

.back {
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 25px;
  background: #fff;
  -webkit-mask: url('../assets/arrow-back.svg') center / contain no-repeat;
  mask: url('../assets/arrow-back.svg') center / contain no-repeat;
}

.note {
  margin: 20px auto 10px auto;
  padding: 20px;
  background: #7E7E7E;
  width: 70%;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  p {
    padding: 10px;
    margin-top: 20px;
    font-size: 14px;
  }
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
