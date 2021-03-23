<template>
  <div>
    <h2>著者新規登録</h2>
    <div class="form">
      <label for="name">著者名</label>
      <input v-model="name" type="text" required />
    </div>
    <my-button value="登録する" @click="onClickSubmitButton"></my-button>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: { MyButton },
  layout: "default",
  data: {
    name: "",
  },
  methods: {
    async onClickSubmitButton() {
      try {
        await this.$axios.post("/authors", { name: this.name });
        this.$router.push("/authors");
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss">
.form {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
