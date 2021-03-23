<template>
  <div>
    MyInput
    <input v-model="myValue" type="text" @blur="$emit('my-blur', value)" />
    <input type="submit" :value="myValue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      myValue: "",
    };
  },
};
</script>

<style lang="scss">
.button {
  background-color: $color_blue;
  color: $color_white;
  font-size: 16px;
  line-height: 30px;
  font-weight: 700;
  border-radius: 10px;
  width: 160px;
  height: 30px;
}
</style>