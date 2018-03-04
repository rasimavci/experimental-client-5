<template>
  <div id="message-list">
    <div id="list-header">
      <h2>Messages</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Contacts button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
          All Messages
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
          Unread Messages
          </button>
        </div>
      </div>
    </div>
    <!-- render conversations in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="conv in getConversations"
          class="list-group-item" href="#"
          :class="{active: activeConv === conv}"
          @click="updateConv(conv)">
          <h4 class="list-group-item-heading">
            {{conv.destination}}  {{conv.type}}
          </h4>
        </a>
      </div>
    </div>
    <!-- render messages in a conversation -->


      <div class="conversation">
        <div class="message-line" v-for="message in getMessages">
<div class="message-line" :key="idx" v-for="(message, idx) in getMessages">
                 {{message.parts[0].text}}  {{message.timestamp}}
                 </div>
        </div>
      </div>


    <input v-model="message" class="form-control" value="bkocak@genband.com">
    <button class="button glyphicon glyphicon-send" @click="sendMessage(message)"> </button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import store from '../store'

var Datas = {
 txt: '',
 messages: []
}

export default {
  data () {
    return {
      show: 'all',
      activeConv: {},
      activeMsg: {},
      message: ''
    }
  },
  computed: {
    getConversations () {
      if (this.show === 'all'){
        return store.state.conversations
      } else if (this.show === 'favorites') {
        return store.state.conversations.filter(conv => conv.favorite)
      }
    },
    getMessages () {
      if (this.show === 'all'){
        console.log('-------------------------------------------------')
  //      store.state.messages.forEach (function (key) {
  //      console.log ('mesaj ' + key, store.state.messages[key].parts[0].text);
 //     });
        return store.state.messages
      } else if (this.show === 'favorites') {
        return store.state.messages.parts[0].filter(message => message.read)
      }
    },
    getDestination () {
        return store.state.activeConvo.destination
    }
  },
   methods: {
       ...mapActions(['updateActiveConv', 'send']),
    openNewCallModal () {
      this.toggleNewCallModal()
    },
    changed(selected) {
      console.log(selected)
    },
    updateConv (conv) {
          this.updateActiveConv(conv)
      console.log('update active conv')
    },
    updateMsg (msg) {
          //this.updateActiveConv(conv)
      console.log('update active conv')
    },
    sendMessage () {
      let conv2 = getDestination()
      consolog.log('current coversation: ' + conv2)
      this.$kandyJS.send(conv.destination, this.message)
      //console.log('send message to: ' +this.activeConv.destination)
    },
   }
}
</script>

<style>
chat{
  position:relative;
  display:inline-block;
  box-shadow: 2px 2px 5px black;
  width:100%;
  height:360px;
  background-color:#eee;
  border: 1px solid #fff;
}
/* End Chat TAG */

/* Start Conversation TAG */
conversation{
  display:block;
  width:100%;
  height:310px;
  overflow:auto;
  background-color:#eee;
}
/* End Conversation TAG */

/* Start Texting TAG */
texting{
  display:block;
  text-align:center;
  padding:10px;
}
/* End Texting TAG */

/* Start message TAG */
message-line{
  position:relative;
  display:block;
  width:100%;
  min-height:40px;
}

message{
  display:block;
  float:left;
  max-width:80%;
  padding:5px 10px;
  margin:5px;
  color:#fff;
  background-color:#00c6da;
  border-radius:10px;
}

message.me{
  float:right;
  background-color:white;
  background-color:#ee591f;
}

.dialpad-button {
    width: 84px;
    height: 72px;
    border-bottom: 1px solid $dialpad-border;
    float: left;
    @extend .cursorpointer;
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

/* End message TAG */
</style>
