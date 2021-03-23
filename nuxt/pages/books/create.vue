<template>
  <div>
    <h2>書籍新規登録</h2>
    <div class="form">
      <div>
        <label for="title">タイトル</label>
        <input v-model="title" type="text" required />
      </div>
      <div>
        <label for="author">著者</label>
        <select v-model="authorId" type="text" required>
          <option v-for="author in authors" :key="author.id" :value="author.id">
            {{ author.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="title">説明</label>
        <textarea v-model="description" type="text" required></textarea>
      </div>
    </div>
    <my-button value="登録する" @click="onClickSubmitButton"></my-button>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: { MyButton },
  layout: "default",
  data() {
    return {
      title: "",
      authorId: "",
      description: "",
      authors: "",
    };
  },
  async created() {
    try {
      const { data } = await this.$axios.get("/authors", { name: this.name });
      this.authors = data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async onClickSubmitButton() {
      try {
        await this.$axios.post("/books", {
          book: {
            title: this.title,
            author_id: this.authorId,
            description: this.description,
          },
        });
        this.$router.push("/books");
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
