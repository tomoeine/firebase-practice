<template>
  <div>
    <my-input @my-blur="myMethod"></my-input>
    {{ myValue }}
  </div>
</template>

<script>
import MyInput from "@/components/MyInput.vue";

export default {
  components: {
    MyInput,
  },
  data() {
    return {
      myValue: "",
    };
  },
  methods: {
    myMethod(inputedValue) {
      console.log(inputedValue);
      this.myValue = inputedValue;
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
