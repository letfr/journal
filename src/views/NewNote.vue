<template>
  <div class="new-note container">
  <a class="back" href="/"></a>
  <form @submit.prevent>
    <h1>{{ date  }}</h1>
    <h2> BY {{ userProfile.name }}</h2>
    <textarea v-model="note.content"></textarea>
    <button :disabled="note.content == ''" @click="createNote">That's it.</button>
  </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '@/store';
import moment from 'moment';

const fb = require('../firebaseConfig.js');

export default {
  name: 'NewNote',
  data() {
    return {
      date: moment().format('dddd - D.MM.YYYY'),
      note: {
        content: '',
      },
    };
  },
  created() {
    this.fetchUser();
  },
  computed: { ...mapState(['userProfile']) },
  methods: {
    async fetchUser() {
      await fb.user.doc('Xt5Hj5xbvt6kw12ITzKV').get()
        .then((res) => store.dispatch('userProfile', res.data()));
    },
    async createNote() {
      await fb.notes.add({
        createdOn: this.date,
        time: moment().format('LT'),
        author: this.userProfile.name,
        content: this.note.content,
      }).then(() => {
        this.note.content = '';
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="scss">
.back{
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 25px;
  background: #fff;
  -webkit-mask: url('../assets/arrow-back.svg') center / contain no-repeat;
  mask: url('../assets/arrow-back.svg') center / contain no-repeat;
}
.new-note {
  h1 {
    margin-top: 10px;
    font-size: 14px;
  }
  h2 {
    font-size: 10px;
  }
  form {
    textarea {
      width: 70vw;
      height: 40vh;
    }
  }
}
</style>
