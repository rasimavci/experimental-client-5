<template>
  <div id="message-list">
    <div id="list-header">
      <h2>History</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Contacts button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
          All
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'incoming'"
            :class="{active: show === 'incoming'}">
          Incoming
          </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'outgoing'"
            :class="{active: show === 'outgoing'}">
          Outgoing
          </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'missed'"
            :class="{active: show === 'missed'}">
          Missed
          </button>
        </div>
      </div>
    </div>
    <!-- render calllogs in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="contact in getContacts"
          class="list-group-item" href="#"
          :class="{active: activeNote === contact}"
          @click="updateActiveCall(contact)">
          <h4 class="list-group-item-heading">
            <i
              :class="[
              'glyphicon',
              contact['direction'] === 'incoming' ? 'glyphicon-import' : 'glyphicon-export'
              ]"
              ></i>
            {{contact.callerName}} {{contact.startTime.trim ().substring (0, 4)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import store from '../store'

export default {
    methods: {
    ...mapActions(['toggleNewCallModal']),
    openNewCallModal () {
      this.toggleNewCallModal()
    }
  },
  data () {
    return {
      activeNote: function (){},
      updateActiveCall: '',
      show: 'all'
    }
  },
  computed: {
    getContacts () {
      if (this.show === 'all'){
        console.log(store.state.history)
        return store.state.history
      } else if (this.show === 'incoming') {
        return store.state.history.filter(note => note.direction === 'incoming')
      } else if (this.show === 'outgoing') {
        return store.state.history.filter(note => note.direction === 'outgoing')
      } else if (this.show === 'missed') {
        return store.state.history.filter(note => note.direction === 'missed')
      }
    }
  },
   methods: {
    changed(selected) {
      console.log(selected)
    }
  }
}
</script>

<style scoped>
.lim {
    padding: 0 0 50px 0;
    display: inline-block;
    background: url('http://www.martin.com/color/small/red305.1.gif') no-repeat bottom center;
}
#message-list{
  float: left;
  width: calc(100% - 80px);
  /* width: 390px; */
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  margin: 0;
}
</style>
