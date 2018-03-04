<template>
  <div class="modal-mask" v-if="newMessageModal">
    <div class="modal-container">
      <div class="modal-header">
        <h3>New Message</h3>
      </div>
      <div class="keypad modal-body">
        <label class="form-label">
        Participant
        <input v-model="participant" class="form-control">
        </label>
        <label class="form-label">
        Message
        <textarea v-model="message" rows="5" class="form-control"></textarea>
        </label>
      </div>
      <div class="keypad">
        <button class="button glyphicon glyphicon-send" @click="sendMessage(participant, message)">
        </button>
        <button class="button glyphicon glyphicon-remove-circle" @click="close()">
        </button>
        <button class="button glyphicon glyphicon-map-marker" @click="close()">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'modalNewMessage',
  data () {
    return {
      participant: '',
      message: ''
    }
  },
  computed: {
    ...mapGetters(['newMessageModal'])
  },
  methods: {
    //...mapActions(['send']),
    make () {
      this.Participant += event.target.innerText.trim()
    },
    sendMessage () {
      const message = {
        participant: this.participant,
        message: this.message
      }
        this.$kandyJS.sendMessage(this.participant, this.message) //   this.send(message)
      console.log('make call')
    },
    changeStatus () {
      console.log('changeStatus')
    },
    close (){
      this.participant = ''
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-container {
  width: 350px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.keypad{
  text-align: center;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
