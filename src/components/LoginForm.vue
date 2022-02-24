<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="">id: </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      axios.post();
    },
  },
};
</script>

<style></style>
