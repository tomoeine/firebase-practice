<template>
  <div>
    <h2>著者一覧</h2>
    <my-button value="新規登録" @click="onCreateButtonClick"></my-button>
    <ul v-for="author in authors" :key="author.id">
      <li>{{ author.name }}</li>
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
      authors: [],
    };
  },
  async created() {
    try {
      const { data } = await this.$axios.get("/authors");
      this.authors = data;
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    onCreateButtonClick() {
      this.$router.push("/authors/create");
    },
  },
};
</script>
