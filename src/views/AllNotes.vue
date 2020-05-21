<template>
  <div class="all-notes container">
  <a class="back" @click="redirect"></a>
  <div class="note" v-for="note in notes" :key="note.id">
    <div>
      <h1> {{ note.createdOn }} </h1>
      <h2> {{ note.time }} </h2>
    </div>
    <span class="emoji" :style="`
    -webkit-mask: url('../assets/${note.mood}.svg') center / contain no-repeat;
    mask: url('../assets/${note.mood}.svg') center / contain no-repeat;`"></span>
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
      await fb.notes.get().then((docs) => {
        docs.forEach((doc) => this.notes.push(doc.data()));
      });
    },
  },
};
</script>

<style lang="scss">
.back{
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 25px;
  background: #fff;
  -webkit-mask: url('../assets/arrow-back.svg') center / contain no-repeat;
  mask: url('../assets/arrow-back.svg') center / contain no-repeat;
}

.all-notes {
  flex-direction: row;
  flex-flow: wrap;
}

.note {
  margin: 20px auto 10px auto;
  padding: 20px;
  background: #7E7E7E;
  width: 360px;
  height: 60px;
  p {
    padding: 5px 0;
    font-size: 14px;
  }
  .emoji {
    width: 20px;
    height: 20px;
    margin: 25px;
    padding: 20px;
    background: #fff;
  }
}
</style>
