<template>
  <div class="container">
    <div id="message-list">
      <div id="list-header">
        <h2>Sessions</h2>
        <div class="btn-group btn-group-justified" role="group">
          <!-- All Calls button -->
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default"
              @click="show = 'all'"
              :class="{active: show === 'all'}">
            All Sessions
            </button>
          </div>
          <!-- Active Sessions Button -->
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default"
              @click="show = 'active'"
              :class="{active: show === 'active'}">
            Active Sessions
            </button>
          </div>
        </div>
      </div>
      <!-- render calls in a list -->
      <div class="container">
        <div class="list-group">
          <a v-for="call in getCalls"
            class="list-group-item" href="#"
            :class="{active: activeCall === call}"
            @click="updateCall(call)">
            <h4 class="list-group-item-heading">
              <i class="glyphicon glyphicon-earphone"></i>
              {{call.to}} {{call.state}}
            </h4>
          </a>
        </div>
      </div>
      <div class="keypad">
        <button @click="holdCall(getState)"
          :class="[
          'button glyphicon ',
          getState === 'ON_HOLD' ? 'glyphicon-pause starred' : 'glyphicon-pause'
          ]"
          ></button>
        <button @click="toggleVideo(getSendingVideo)"
          :class="[
          'button glyphicon ',
          getSendingVideo === true ? 'glyphicon-facetime-video starred' : 'glyphicon-facetime-video'
          ]"
          ></button>
        <button @click="toggleCall(getState)"
          :class="[
          'button glyphicon ',
          getState !== 'ENDED' ? 'glyphicon-earphone starred' : 'glyphicon-earphone'
          ]"
          ></button>
        <div class="keypad"></div>
        <button @click="toggleScreenshare(getIsScreensharing)"
          :class="[
          'button glyphicon ',
          getIsScreensharing === true ? 'glyphicon-blackboard starred' : 'glyphicon-blackboard'
          ]"
          ></button>
        <div class="dropdown filterbox" :class="{ 'open': filterToggle }">
          <button type="button" class="button glyphicon glyphicon-transfer" v-on:click="filterToggle = !filterToggle"><i class="glyphicon glyphicon-trnasfer"></i></button>
          <ul class="dropdown-menu list-group">
            <li class="list-group-item">
              <input type="search" v-model="target" class="form-control" placeholder="Id to Transfer"></input>
            </li>
            <li>
              <button class="button glyphicon glyphicon-ok" @click="transferCall()"> Transfer
              </button>
            </li>
            <li class="list-group-item">
              <label>Filter by Status</label>
            </li>
            <li class="list-group-item">
              <input type="checkbox" value="actived" v-model="filterByStatus"> Actived
            </li>
          </ul>
        </div>
        <button @click="toggleMute(getMuted)"
          :class="[
          'button glyphicon ',
          getMuted === true && getState !== 'ENDED'? 'glyphicon-volume-off starred' : 'glyphicon-volume-off'
          ]"
          ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import store from '../store'
import * as types from '../store/mutation-types';

export default {
data () {
    return {
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
    ...mapGetters(['newCallModal', 'calls', 'history']),
    getCalls () {
      if (this.show === 'all'){
        console.log(this.history)
        return store.state.calls
      } else if (this.show === 'active') {
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
     if(this.activeCall){
       return store.state.activeCall.mediaState
     } else{
        return store.state.calls[0].mediaState
      }
    },
   getSendingVideo () {
     if(this.activeCall){
       return store.state.activeCall.sendingVideo
     } else{
        return store.state.calls[0].sendingVideo
      }
    },
   getMuted () {
      if(this.activeCall){
        return store.state.activeCall.muted
      } else{
        return store.state.calls[0].muted
      }
    },
    getIsScreensharing () {
      if(this.activeCall){
        return store.state.activeCall.isScreensharing
     } else{
        return store.state.calls[0].isScreensharing
      }
    }
  },
   methods: {
       ...mapActions(['hold','unhold','mute','unmute','call','join','videoStart','videoStop','startScreenshare','stopScreenshare','directTransfer','end','updateActiveCall']),
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
        //console.log('call to join selected: ' + state.activeCall.id + ' with ' + call.id)
      } else {
        store.commit (types.SET_ACTIVE_CALL, call)
        //this.updateActiveCall(call)
        console.log('update active call')
      }
    },
    makeCall () {
      this.call('bkocak@genband.com')
      console.log('make call')
    },
    holdCall (state) {
     if(state === 'ON_HOLD')
     {
      console.log('unhold call')
      this.$kandyJS.unholdCall()
      //this.unhold()
     } else {
        console.log('hold call')
        //this.hold()
        this.$kandyJS.holdCall()
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
    this.$kandyJS.endCall() //this.end()
 },
 joinCall () {
   this.joinClicked = true;
   console.log('select a cal to merge with ' + state.activeCall.id)
 },
    toggleCall (state) {
     if(state === 'ENDED')
     {
      this.$kandyJS.makeCall()//this.call('bkocak@genband.com')
     } else {
             this.$kandyJS.endCall() //this.end()
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
    }
  }
}
</script>

<style scoped>
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

.lim {
  padding: 0 0 50px 0;
  display: inline-block;
  background: url('http://www.martin.com/color/small/red305.1.gif') no-repeat bottom center;
}

.starred {
  color: #F7AE4F;
}

</style>
