<template>
  <div>
    <h2>書籍一覧</h2>
    <my-button value="新規登録" @click="onCreateButtonClick"></my-button>
    <ul v-for="book in books" :key="book.id">
      <li>
        {{ book.title }}({{ book.author.name }})
        <span @click="onDeleteButtonClick(book.id)">削除</span>
      </li>
    </ul>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: { MyButton },
  layout: "defualt",
  data() {
    return {
      books: [],
    };
  },
  async created() {
    try {
      const { data } = await this.$axios.get("/books");
      this.books = data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    onCreateButtonClick() {
      this.$router.push("/books/create");
    },
    async onDeleteButtonClick(bookId) {
      await this.$axios.delete(`/books/${bookId}`);
      this.books = this.books.filter((book) => {
        return book.id !== bookId;
      });
    },
  },
};
</script>
