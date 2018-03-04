<template>
  <div id='footerContainer' @click='footerClicked'>
    click footer to open modal
  </div>
</template>

<script>
export default {
  methods: {
    footerClicked (){
      this.$emit('footerClicked',{})
    }
  }
}
</script>

<style>
#footerContainer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
