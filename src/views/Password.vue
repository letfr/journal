<template>
  <form class="password container" v-on:submit.prevent="onSubmit">
    <label for="password">ENTER THE PASSWORD</label>
    <input v-model="inputedPassword" type="password" name="password" />
    <output v-if="sended" name="error" for="password">WRONG PASSWORD</output>
    <button class="btn">GO!</button>
  </form>
</template>

<script>
export default {
  name: 'Password',
  data() {
    return {
      inputedPassword: '',
      sended: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.inputedPassword === process.env.appPassword) {
        this.$router.push({ name: 'Home' });
      }
      this.sended = true;
    },
  },
};
</script>

<style lang="scss">
.password {
  align-items: center;
  justify-content: center;
  label {
    padding: 20px;
    font-size: 14px;
    letter-spacing: 4px;
  }
  input {
    width: 230px;
    padding: 8px;
    color: #fff;
    font-size: 18px;
  }
  button {
    width: 100px;
    margin: 20px;
    padding: 8px;
  }
  output {
    margin-top: 5px;
    font-size: 14px;
  }
}
</style>
