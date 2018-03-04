<template>
  <div class="modal-mask" v-if="newIncomingCallModal">
    <div class="modal-container">
      <div class="modal-header">
        <h5>
          Incoming Call !
          {{ getState }}
        </h5>
      </div>
      <div class="keypad modal-body">

        <button class="button" @click="answerCall()">
          <i class="material-icons">{{!activeCall?  "local_phone" : "phone_in_talk" }}</i>
        </button>





        </button>
        <button class="btn btn-danger" @click="rejectCall()">
        Reject
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import store from '../store';

export default {
  name: 'modalNewIncomingCall',
  created () {
activeCall: {}
},
data () {
    return {
      callee: '',
      joinClicked: false,
      activeNote: '',
      filterByStatus: '',
      filterToggle: false,
      target: '',
      activeCall: {},
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
    ...mapGetters(['newIncomingCallModal']),
    getContacts () {
      if (this.show === 'all'){
        console.log(state.history)
        return store.state.calls
      } else if (this.show === 'favorites') {
        return store.state.calls.filter(call => call.state !== 'ENDED')
      }
    },
   getState () {
     if(store.state.activeCall){
       return store.state.activeCall.state
     } else{
        return store.state.calls[0].state
             }
    },
   getMediaState () {
     if(store.state.activeCall){
       return store.state.activeCall.mediaState
     } else{
        return store.state.calls[0].mediaState
             }
    },
   getSendingVideo () {
     if(store.state.activeCall){
       return store.state.activeCall.sendingVideo
     } else{
        return store.state.calls[0].sendingVideo
             }
    },
   getMuted () {
     if(store.state.activeCall){
       return store.state.activeCall.muted
     } else{
        return store.state.calls[0].muted
             }
    }
    ,
   getIsScreensharing () {
     if(store.state.activeCall){
       return store.state.activeCall.isScreensharing
     } else{
        return store.state.calls[0].isScreensharing
             }
    }
  },
   methods: {
       ...mapActions(['answer','hold','unhold','mute','unmute','call','join','videoStart','videoStop','startScreenshare','stopScreenshare','directTransfer','end','updateActiveCall']),
    openNewCallModal () {
      this.toggleNewCallModal()
    },
    changed(selected) {
      console.log(selected)
    },
    answerCall(){
      this.$kandyJS.answerCall() //this.answer()
    },
    rejectCall(){
      this.$emit('close')
      //this.reject()
    },
    updateCall (call) {
      if(this.joinClicked){
      this.join(call.id)
      this.joinClicked = false
      console.log('call to join selected: ' + store.state.activeCall.id + ' with ' + call.id)
      } else {
          this.updateActiveCall(call)
      console.log('update active call')
      }

    },
    makeCall () {
      this.call('bkocak@genband.com')
      console.log('make call')
    },
    holdCall (durum) {
     if(durum === 'ON_HOLD')
     {
      console.log('unhold call')
      this.unhold()
     } else {
             console.log('hold call')
             this.hold()
     }
    },
    toggleVideo (sendingVideo) {
     if(sendingVideo)
     {
             console.log('stop video')
             this.videoStop()
     } else {
             console.log('start video')
             this.videoStart()
     }
    },
    toggleMute (muted) {
     if(muted)
     {
      this.unmute()
     } else {
             this.mute()
             console.log('mute call')
     }

      console.log('mute call')
    },
 endCall () {
    this.end()
 },
 joinCall () {
   this.joinClicked = true;
   console.log('select a cal to merge with ' + state.activeCall.id)
 //this.end()
 },
    toggleCall (state) {
     if(state === 'ENDED')
     {
      this.call('bkocak@genband.com')
     } else {
             this.end()
      console.log('unhold call')
     }
    },
    toggleScreenshare (isScreensharing) {
     if(isScreensharing)
     {
      this.stopScreenshare()
     } else {
             this.startScreenshare()
      console.log('start Screenshare')
     }
    },
   transferCall () {
      this.directTransfer(this.target)
      console.log('started transfer call to ' + this.target)
    },
   endCall () {
      this.end()
      console.log('end call')
    },
    close (){
      this.callee = ''
      this.$emit('close')
    },
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
  height: 50px;
  width: 10px;
}

.dialpad-button {
  width: 84px;
  height: 72px;
  border-bottom: 1px solid black;
  float: left;
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
  color: black;
  line-height: 12px;
  text-align: center;
}
</style>
