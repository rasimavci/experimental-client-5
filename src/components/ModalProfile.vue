<template>
  <div class="modal-mask" v-if="profileModal">
    <div class="modal-container">
      <div class="modal-header">
        <h3>Profile</h3>
      </div>
      <div class="keypad modal-body">
        <p>
          <label class="form-label">
          {{  showContact.firstName }}
          </label>
          <label class="form-label">
          {{  showContact.lastName }}
          </label>
        </p>
        <p>
          <label class="form-label">
          Nickame {{  showContact.nickname }}
          </label>
        </p>
        <p>
          <label class="form-label">
          Home {{  showContact.homePhone }}
          </label>
        </p>
        <p>
          <label class="form-label">
          Work {{  showContact.workPhone }}
          </label>
        </p>
        <p>
          <label class="form-label">
          Mobile {{  showContact.mobilePhone }}
          </label>
        </p>
      </div>
      <div class="modal-header">
        <h3></h3>
      </div>
      <div class="keypad">
        <button class="button glyphicon glyphicon-star" @click="makeCall()">
        </button>
        <button class="button glyphicon glyphicon-pencil" @click="close()">
        </button>
        <button class="button glyphicon glyphicon-off" @click="close()">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import store from '../store'

export default {
  name: 'modalProfile',
  data () {
    return {
      participant: '',
      message: '',
      gett: ''
    }
  },
  computed: {
    ...mapGetters(['profileModal',]),
    showContact () {
      return store.state.activeContact
    }
  },
  methods: {
    ...mapActions(['call']),
    make () {
      this.Participant += event.target.innerText.trim()
    },
    makeCall () {
      document.getElementById('gett').innerHTML = getContact()
      console.log('make call')
    },
    changeStatus () {
      console.log('changeStatus')
    },
    close (){
      this.participant = ''
      this.$emit('close')
    },
    getContact(){
      return store.state.activeContact.firstName
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
