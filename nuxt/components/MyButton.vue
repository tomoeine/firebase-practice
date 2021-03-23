<template>
  <button class="button" @click="$emit('click')">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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