
<template>
  <div class="modal-mask" v-if="newCallModal">
    <div class="modal-container">
      <div class="modal-header">
        <h3>Edit Profile</h3>
      </div>
      <div class="modal-body">
        <label class="form-label">
        First Name
        <input v-model="participant" class="form-control">
        </label>
        <label class="form-label">
        Last Name
        <input v-model="participant" class="form-control">
        </label>
        <label class="form-label">
        Nickname <input v-model="participant" class="form-control">
        </label>
        <label class="form-label">
        Mobile
        <input v-model="participant" class="form-control">
        </label>
        <label class="form-label">
        Work
        <input v-model="participant" class="form-control">
        </label>
        <label class="form-label">
        User Id
        <input v-model="participant" class="form-control">
        </label>
        <label class="form-label">
        EMail
        <input v-model="participant" class="form-control">
        </label>
      </div>
      <button class="btn btn-success" @click="addContact1()">
      ACCEPT
      </button>
      <button class="btn btn-warning" @click="close()">
      CANCEL
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'modalNewCall',
  data () {
    return {
      participant: '',
      message: ''
    }
  },
  computed: {
    ...mapGetters(['newCallModal'])
  },
  methods: {
        ...mapActions(['addContact']),
    make () {
      this.Participant += event.target.innerText.trim()
    },
    addContact1 () {
      let contactObj = {
        firstName: 'Merve',
        lastName: 'Kara',
        nickname: 'merv',
        email: 'mkara@netas.com.tr',
        primary: 'mkara@genband.com'
      };
      this.addContact(this.participant, this.contactObj)
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

.input-group {
    float: right;
}
</style>
