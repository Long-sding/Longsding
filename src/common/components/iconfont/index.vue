<template>
  <svg style="width: {{size}};height: {{size}};color: {{color}}">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    color: {
      type: String,
      default: '#eaeaea',
    },
    size: {
      type: String,
      default: '20',
    },
  },
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss"></style>
