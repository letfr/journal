<template>
  <div class="new-note container">
  <a class="back" @click="redirect"></a>
  <form @submit.prevent>
    <h1>{{ date }}</h1>
    <h2> BY {{ userProfile.name }}</h2>
    <textarea v-model="note.content" name="note-area"></textarea>
    <div class="mood-tracker">
      <h3>MOOD</h3>
      <div class="emojis">
        <a class="emoji happy" @click="setMood('happy')">
          <img src="../assets/happy.png" alt="">
        </a>
        <a class="emoji lovely" @click="setMood('lovely')">
          <img src="../assets/lovely.png" alt="">
        </a>
        <a class="emoji normal" @click="setMood('normal')">
          <img src="../assets/normal.png" alt="">
        </a>
        <a class="emoji sad" @click="setMood('sad')">
          <img src="../assets/sad.png" alt="">
          </a>
        <a class="emoji angry" @click="setMood('angry')">
          <img src="../assets/angry.png" alt="">
        </a>
        <a class="emoji shit" @click="setMood('shit')">
          <img src="../assets/shit.png" alt="">
          </a>
      </div>
    </div>
    <button class="btn" :disabled="note.content == ''" @click="createNote">
      THAT'S ALL FOLKS
    </button>
      <output v-if="sended" name="success" for="note-area">
        NOTE CREATED AT {{ time }}
      </output>
  </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';

const fb = require('../firebaseConfig.js');

export default {
  name: 'NewNote',
  data() {
    return {
      sended: false,
      timestamp: moment().format(),
      date: moment().format('dddd - DDDD.MM.YYYY'),
      time: moment().format('LT'),
      mood: '',
      note: {
        content: '',
      },
    };
  },
  created() {
    this.$store.dispatch('fetchUser');
  },
  computed: { ...mapState(['userProfile']) },
  methods: {
    redirect() {
      event.preventDefault();
      this.$router.push({ name: 'Home' });
    },
    setMood(mood) {
      event.preventDefault();
      this.mood = mood;
      // [BUG]
      document.getElementsByClassName('emoji').forEach((el) => {
        (el.children[0] !== event.target)
          ? el.style.opacity = '20%'
          : event.target.style.opacity = 'none';
      });
      //
    },
    async createNote() {
      await fb.notes.add({
        createdOn: this.date,
        time: this.time,
        mood: this.mood,
        author: this.userProfile.name,
        content: this.note.content,
      }).catch((err) => {
        console.log(err);
      });

      this.note.content = '';
      this.sended = true;
      this.mood = '';
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
.new-note {
  h1 {
    margin-top: 10px;
    font-size: 16px;
  }
  h2 {
    font-size: 12px;
  }
  h3 {
    font-size: 14px;
  }
  form {
    textarea {
      width: calc(70vw - 60px);
      height: 40vh;
    }
    button {
      width: 200px;
      margin: 30px;
      padding: 8px;
    }
  }
  .mood-tracker {
    width: 70vw;
    padding: 15px 0;
    background: #7E7E7E;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .emojis {
    width: 70%;
    display: flex;
    justify-content: space-between;
    .emoji {
      cursor: pointer;
      img {
        width: 50px;
      }
      &:hover {
        opacity: none;
      }
    }
  }
}
</style>
