<template>
  <div id='modalContainer'>
    <div class='modal-header'>
      <h3>
        {{modalData.title || "ModalTitle"}}
      </h3>
    </div>
    <div class='modal-body'></div>
    <div class='modal-footer'>
      <button type="button" class="btn btn-primary" @click="close">{{modalData.closeButtonText || "Close modal"}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalData: {
      type: Object,
      required: true
    }
  },
  methods: {
    close (){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
#modalContainer{
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: linear-gradient(#00fffc, #00ff09);
    border-radius: 50px;
}
.modal-footer{
      position: fixed;
    width: 100%;
    bottom: 0;
}
</style>
