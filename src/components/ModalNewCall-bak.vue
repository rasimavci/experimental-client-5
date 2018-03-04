<template>
  <div id='ModalNewCall' @click='closeModal' class="modal-mask" v-if="newCallModal">
    <div class="modal-container">
      <div class="input-group">
      <input type="text" class="form-control" v-model="callee" placeholder="Username or Number...">
      <span class="input-group-btn">
        <button class="backspace-button" type="button" @click='callee = ""'><i class="material-icons">backspace</i></button>
      </span>
    </div>
      <!-- <input v-model="callee" class="input-number" value="" placeholder="Username or Number"> -->
      <div class="keypad">
        <div class="keypad-container" :class="[activeCall? 'hide-keypad': '']">
          <div>
            <button class="button" @click="make()">
              <div class="keypad-button-number">1</div>
              <div class="keypad-button-text"></div>
            </button>
            <button class="button" @click="make()">
              <div class="keypad-button-number">2</div>
              <div class="keypad-button-text">
                ABC
              </div>
            </button>
            <button class="button" @click="make()">
              <div class="keypad-button-number">3</div>
              <div class="keypad-button-text">
                DEF
              </div>
            </button>
          </div>
          <div>
            <button class="button" @click="make()">
              <div class="keypad-button-number">4</div>
              <div class="keypad-button-text">
                GHI
              </div>
            </button>
            <button class="button" @click="make()">
              <div class="keypad-button-number">5</div>
              <div class="keypad-button-text">
                JKL
              </div>
            </button>
            <button class="button" @click="make()">
              <div class="keypad-button-number">6</div>
              <div class="keypad-button-text">
                MNO
              </div>
            </button>
          </div>
          <div>
            <button class="button" @click="make()">
              <div class="keypad-button-number">7</div>
              <div class="keypad-button-text">
                PQRS
              </div>
            </button>
            <button class="button" @click="make()">
              <div class="keypad-button-number">8</div>
              <div class="keypad-button-text">
                TUV
              </div>
            </button>
            <button class="button" @click="make()">
              <div class="keypad-button-number">9</div>
              <div class="keypad-button-text">
                WXYZ
              </div>
            </button>
          </div>
          <div>
            <button class="button glyphicon glyphicon-asterisk" @click="make()">
            </button>
            <button class="button" @click="make()">
            0
            </button>
            <button class="button" @click="make()">
              <i class="fas fa-hashtag"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="keypad-menu">
        <button class="button" @click="makeCall()">
          <i class="material-icons">{{!activeCall?  "local_phone" : "phone_in_talk" }}</i>
        </button>
        <button class='button' @click="toggleVideo()">
        <i class="material-icons">{{!activeVideoCall ? "videocam" : "videocam_off"}}</i>
        </button>
      </div>
      <div class="dropdown filterbox" :class="{ 'open': filterToggle }" v-show='activeCall'>
        <button type="button" class="button glyphicon glyphicon-option-horizontal" v-on:click="filterToggle = !filterToggle"><i class="option-horizontal"></i></button>
        <ul class="dropdown-menu list-group">
          <li class="list-group-item" @click="transferCall()">
            Transfer
          </li>
          <li class="list-group-item" @click="transferCall()">
            <label>Join</label>
          </li>
          <li class="list-group-item" @click="transferCall()">
            Mute
          </li>
          <li class="list-group-item" @click="transferCall()">
            <label>Send Conference Link</label>
          </li>
          <li class="list-group-item" @click="transferCall()">
            Hold
          </li>
          <li class="list-group-item" @click="transferCall()">
            <label>End Call</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import KandyJs from '../kandy'
import { mapActions, mapGetters } from 'vuex'
import { activeCall } from '../store/getters';

export default {
  name: 'modalNewCall',
  created () {
  },
  data () {
    return {
      callee: '',
      joinClicked: false,
      activeNote: '',
      filterByStatus: '',
      filterToggle: false,
      target: '',
      show: 'all',
      options: [{
        label: 'Personal Address Book',
        value: 1
      }, {
        label: 'Global Address Book',
        value: 2
      }]
    }
  },
  computed: {
    ...mapGetters(['newCallModal', 'calls', 'history', 'activeCall', 'activeVideoCall', 'incomingCall', 'activeCallId']),
    getContacts () {
      if (this.show === 'all'){
        console.log(this.history)
        return state.calls
      } else if (this.show === 'favorites') {
        return this.calls.filter(call => call.state !== 'ENDED')
      }
    },
   getState () {
     if(this.activeCall){
       return this.activeCall.state
     } else{
        return this.calls[0].state
      }
    }
  },
   methods: {
       ...mapActions(['hold','unhold','mute','unmute','call','join','directTransfer','end','updateActiveCall', 'toggleActiveVideoCall', 'toggleActiveCall', 'setIncomingCall']),
    openNewCallModal () {
      this.toggleNewCallModal()
    },
    changed(selected) {
      console.log(selected)
    },
    updateCall (call) {
      if(this.joinClicked){
      this.join(call.id)
      this.joinClicked = false
      console.log('call to join selected: ' + this.activeCall.id + ' with ' + call.id)
      } else {
        this.updateActiveCall(call)
        console.log('update active call')
      }
    },
    makeCall () {
      if (this.incomingCall.active){
        let incomingCallData = {
          callId: this.incomingCall.callId,
          active: false
        }
        this.setIncomingCall(incomingCallData)
        this.$kandyJS.answerCall(this.incomingCall.callId)
      } else if(!this.activeCall){
        this.$kandyJS.makeCall('bkocak@genband.com', this.options)
      }
      else{
        debugger
        this.toggleActiveCall()
        debugger
        this.$kandyJS.endCall(this.activeCallId.callId)
      }
      console.log('make call')
    },
    holdCall (durum) {
     if(durum === 'ON_HOLD')
     {
      console.log('unhold call')
      this.$kandyJS.unhold()
     } else {
        console.log('hold call')
        this.$kandyJS.hold()
     }
    },
    toggleVideo () {
      if(this.activeVideoCall)
      {
        this.toggleActiveVideoCall()
        console.log('stop video')
        this.$kandyJS.stopVideo()
      } else {
        this.toggleActiveVideoCall()
        console.log('start video')
        this.$kandyJS.startVideo()
     }
    },
    toggleMute (muted) {
      if(muted)
      {
        this.$kandyJS.unmute()
      } else {
        this.$kandyJS.mute()
        console.log('mute call')
      }
    },
    endCall () {
      this.end()
    },
    joinCall () {
      this.joinClicked = true;
      console.log('select a cal to merge with ' + this.activeCall.id)
    },
    toggleCall (state) {
      if(state === 'ENDED')
      {
        this.$kandyJS.call('bkocak@genband.com')
      } else {
        this.$kandyJS.end()
        console.log('unhold call')
      }
    },
    toggleScreenshare (isScreensharing) {
     if(isScreensharing)
     {
      this.$kandyJS.stopScreenshare()
     } else {
        this.$kandyJS.startScreenshare()
        console.log('start Screenshare')
     }
    },
   transferCall () {
      this.$kandyJS.directTransfer(this.target)
      console.log('started transfer call to ' + this.target)
    },
   endCall () {
      this.$kandyJS.end()
      console.log('end call')
    },
    closeModal (){
      if(event.target.id === 'ModalNewCall'){
        this.callee = ''
        this.$emit('close')
      }
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
  width: 300px;
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
  margin: 0;
}

.keypad{
  text-align: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.input-number{
  width: 100%;
  margin: 0 auto;
  /* margin-top: 5px; */
  border: 0;
  background-color: #eceff0;
  height: 50px;
  font-size: 1.5em;
  text-align: center;
}
.keypad-container {
  overflow: hidden;
}
.keypad-container div{
  width: 100%;
}
.keypad-container div button{
  width: 33.33%;
  padding: 0;
  margin: 0;
  display: block;
  float: left;
  height: 70px;
  border: 1px solid gray;
  background: white;
  color: rgba(0,0,0,.8);
  border-radius: 5px;
  font-size: 1.5em;
  margin: 5px 0;
}
.keypad-container div button:hover{
  background-color:lightgray;
}
.keypad-button-number{
  font-size: 28px;
  display: block;
  margin: 18px auto 5px;
  color: rgba(0,0,0,.8);
  line-height: 22px;
  text-align: center;
}
.keypad-button-text{
  font-size: 12px;
  display: block;
  margin: 0 auto;
  color: rgba(0,0,0,.5);
  line-height: 12px;
  text-align: center;
  height: 12px;
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
  height: 50px;
  width: 10px;
}

.dialpad-button {
  width: 84px;
  height: 72px;
  border-bottom: 1px solid ;
  float: left;
}

.keypad-menu{
  text-align: center;
}
.keypad-menu button{
  width: 64px;
  height: 64px;
  margin: 10px;
  border-radius: 32px;
  background-color: gray;
  padding: 0;
}
.keypad-menu button:hover{
  background-color: rgba(0,0,0,.8)
}
.dialpad-button:hover {
  background-color: blue;
}

.dialpad-button .number {
  font-size: 28px;
  display: block;
  margin: 18px auto 5px;
  color: black;
  line-height: 22px;
  text-align: center;
}
.dialpad-button .letters {
  font-size: 12px;
  display: block;
  margin: 0 auto;
  color: darkgray;
  line-height: 12px;
  text-align: center;
}

.hide-keypad{
  max-height: 0px;
  transition: max-height 0.25s ease-in;
}
.backspace-button{
  background: white;
  border: 0px;
}
</style>
