<template>
  <div id="app">
    <toolbar v-if='loginData.username'></toolbar>
    <router-view class="has-toolbar"/>
    <popover></popover>
    <modal v-show="openModal" :modalData='customData' @close='openModal = !openModal'></modal>
    <modal-new-call v-if='newCallModal' @close='closeNewCallModal'></modal-new-call>
    <modal-new-incoming-call @close='closeNewIncomingCallModal'></modal-new-incoming-call>
    <modal-new-message @close='closeNewMessageModal'></modal-new-message>
    <modal-add-user @close='closeAddUserModal'></modal-add-user>
    <modal-profile @close='closeProfileModal'></modal-profile>
    <modal-deviceSettings @close='closeDeviceSettingsModal'></modal-deviceSettings>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Popover from './components/Popover.vue'
import Modal from './components/Modal'
import ModalNewCall from './components/Call'
import ModalNewIncomingCall from './components/ModalNewIncomingCall'
import ModalNewMessage from './components/ModalNewMessage'
import ModalAddUser from './components/ModalNewContact'
import ModalProfile from './components/ModalProfile'
import ModalDeviceSettings from './components/ModalDeviceSettings'
import Toolbar from './components/Toolbar2'
import FooterMenu from './components/FooterMenu'
export default {
  name: 'App',
  data () {
    return {
      openModal: false,
      customData: {
        title: 'Awesom title!',
        closeButtonText: 'Close me!'
      }
    }
  },
  components: {
    footerMenu: FooterMenu,
    modal: Modal,
    modalNewCall: ModalNewCall,
    modalNewIncomingCall: ModalNewIncomingCall,
    modalNewMessage: ModalNewMessage,
    modalAddUser: ModalAddUser,
    modalProfile: ModalProfile,
    modalDeviceSettings: ModalDeviceSettings,
    popover: Popover,
    toolbar: Toolbar
  },
  computed: {
    ...mapGetters(['loginData', 'newCallModal'])
  },
  mounted () {
    console.log('app mnt')
  },
  methods: {
    ...mapActions(['toggleNewCallModal', 'toggleNewIncomingCallModal', 'toggleNewMessageModal', 'toggleAddUserModal', 'toggleProfileModal', 'toggleDeviceSettingsModal']),
    showModal(){
      this.openModal = true
    },
    closeNewCallModal () {
      this.toggleNewCallModal()
    },
    closeNewIncomingCallModal () {
      this.toggleNewIncomingCallModal()
    },
    closeNewMessageModal () {
      this.toggleNewMessageModal()
    },
    closeProfileModal () {
      this.toggleProfileModal()
    },
    closeDeviceSettingsModal () {
      this.toggleDeviceSettingsModal()
    },
    closeAddUserModal () {
      this.toggleAddUserModal()
    }
  }
}
</script>

<style>
html, body{
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
}
#app{
  margin: 0 auto;
}
.has-toolbar{
  margin-left: 80px;
}
</style>
