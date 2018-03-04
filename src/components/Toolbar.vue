<template>
  <div id="toolbar">
    <router-link to='/'>
      <i class="glyphicon glyphicon-user" data-popover='true'></i>
    </router-link>
    <i class="glyphicon glyphicon-phone-alt" @click="openNewCallModal"></i>
    <router-link to='/'>
      <i class="glyphicon glyphicon-home"></i>
    </router-link>
      <i class="glyphicon glyphicon-plus" @click="openWindow"></i>
    <router-link to='/session'>
    <i class="glyphicon glyphicon-th-list"></i>
    </router-link>
    <router-link to='/taskmanager'>
    <i class="glyphicon glyphicon-list-alt"></i>
    </router-link>
    <router-link to='/star'>
      <i class="glyphicon glyphicon-star"></i>
    </router-link>
    <i class="glyphicon glyphicon-remove"></i>
    <router-link to='/contact'>
    <i class="glyphicon glyphicon-book"></i>
    </router-link>
    <router-link to='/contact2'>
    <i class="glyphicon glyphicon-book"></i>
    </router-link>
    <router-link to='/contact3'>
    <i class="glyphicon glyphicon-book"></i>
    </router-link>
    <router-link to='/notes'>
    <i class="glyphicon glyphicon-edit"></i>
    </router-link>
    <router-link to='/calendar'>
    <i class="glyphicon glyphicon-calendar"></i>
    </router-link>
    <router-link to='/message'>
    <i class="glyphicon glyphicon-download-alt"></i>
          </router-link>
    <i class="glyphicon glyphicon-envelope" @click="openNewMessageModal"></i>
       <router-link to='/history'>
    <i class="glyphicon glyphicon-time"></i>
        </router-link>
    <router-link to='/login'>
    <i class="glyphicon glyphicon-off" @click="disconnect"></i>
    </router-link>
    <router-link to='/weather'>
    <i class="glyphicon glyphicon-cloud"></i>
    </router-link>
    <i class="glyphicon glyphicon-share" @click="openDeviceSettingsModal"></i>
    <i class="glyphicon glyphicon-blackboard" @click="openAddUserModal"></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'toolbar',
  methods: {
    ...mapActions(['toggleNewCallModal','toggleNewMessageModal', 'toggleAddUserModal','toggleDeviceSettingsModal', 'disconnect', 'answer','getCallLogs']),
    openNewCallModal () {
      this.toggleNewCallModal()
    },
    openNewMessageModal () {
      this.toggleNewMessageModal()
    },
    openAddUserModal () {
      this.toggleAddUserModal()
    },
    openDeviceSettingsModal () {
      this.toggleDeviceSettingsModal()
    },
    get () {
      this.getCallLogs()
    },
    openWindow() {
      //window.localStorage = { setItem: 'noop', getItem: 'noop', removeItem: 'noop' };
      window.localStorage.setItem('noop', 'deneme')
const sharingKey = 'some-subscribe-key';
  const fakeStorageData = { type: 'action2', payload: { some: 'extra data' } };
  this.dispatchFakeStorageEvent(sharingKey, fakeStorageData)
    //window.open('http://localhost:8081/#/message', '_blank', 'location=yes,height=570,width=400,scrollbars=yes,status=yes')
},
dispatchFakeStorageEvent(key, data) {
  const fakeEvent = new window.Event('storage');
  fakeEvent.key = key;
  fakeEvent.newValue = JSON.stringify(data);
  window.dispatchEvent(fakeEvent);
}
  }
}
</script>

<style>

</style>
