<template>
<div id='callApp'>
  <div class='content column'>
    <div>
      Remote Video:
      <div id='remote-container' class='video-box'></div>
    </div>
    <div>
      Local Video:
      <div id='local-container' class='video-box'></div>
    </div>
  </div>
</div>
</template>

<script>
import { EventBus } from './EventBus'
export default {
  data () {
    return {

    }
  },
  mounted () {
    // debugger
    var asd = EventBus
    EventBus.$on('incomingCall', this.showModal)
  },
  methods: {
    showModal () {
      alert('yey!!!')
    }
  }
}
</script>

<style>

</style>
