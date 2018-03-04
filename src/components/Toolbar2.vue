<template>
<div class="contain">
  <aside class="sidenav">
      <ul>
        <li>
          <router-link to='/contact'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><path d="M21.2 10H20c-.5-4.2-3.8-7.5-7.9-7.9V.8c-.1-.4-.5-.8-.9-.8h-.3c-.5 0-.9.4-.9.8V2c-4.2.5-7.5 3.8-7.9 8H.8c-.4 0-.8.4-.8.8v.3c0 .5.4.9.8.9H2c.5 4.2 3.8 7.5 7.9 7.9v1.2c0 .5.4.8.8.8h.3c.5 0 .8-.4.8-.8v-1.2c4.2-.5 7.5-3.8 7.9-7.9h1.2c.5 0 .8-.4.8-.8v-.3c.3-.5-.1-.9-.5-.9zM12 17.9v-1.1c0-.5-.4-.8-.8-.8h-.3c-.5 0-.8.4-.8.8v1.1C7 17.5 4.6 15 4.2 12h1.1c.3 0 .7-.4.7-.8v-.3c0-.5-.4-.9-.8-.9H4.1c.4-3.1 2.8-5.5 5.9-5.9v1.1c0 .4.4.8.8.8h.3c.5 0 .9-.4.9-.8V4.1c3.1.4 5.5 2.9 5.9 5.9h-1.1c-.5 0-.8.4-.8.8v.3c0 .5.4.8.8.8h1.1c-.4 3.2-2.8 5.6-5.9 6zM11.8 12.8c-.6-.4-1.3-.7-1.6-1-.3-.3-.7-1-1-1.6.6 0 1-.1 1-.8L8.6 7C7.7 7 7 7.7 7 8.6c0 .3.1.5.2.7.5 1.7 2.1 5.7 6.2 5.7.9 0 1.6-.7 1.6-1.6l-2.4-1.6c-.7 0-.8.4-.8 1z"/></svg>
                <span>Phone</span>
          </router-link>
        </li>
        <li>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><circle cx="11" cy="7" r="2"/><path d="M14.1 16l2.9-4.6c.8-1.4 1-2.5 1-4.1C18 3.2 14.9 0 11 0S4 3.2 4 7.3c0 1.6.2 2.7 1 4.1L7.9 16c-5.3.4-7.9 1.8-7.9 3 0 1.4 4.9 3 11 3s11-1.6 11-3c0-1.2-2.6-2.6-7.9-3zM6 7.3C6 4.3 8.2 2 11 2s5 2.4 5 5.3c0 2-.7 3-.7 3L11 17.2l-4.3-6.8c0-.1-.7-1.1-.7-3.1zM9 18v-.3l1.1 1.8c.2.3.5.5.9.5-5.6 0-8.1-.4-9-1 .8-.6 2-1 7-1zm2 2c.3 0 .7-.2.9-.5l1.1-1.8v.3c5 0 6.2.4 7 1-.9.6-3.4 1-9 1z"/></svg>
                <span>Place</span>
            </a>
        </li>
        <li>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><path d="M21.1 10.3l-3.3-1.5 3.3-1.5c1.2-.6 1.2-1.5 0-2l-7.8-3.6c-.6-.3-1.4-.4-2.2-.4s-1.7.2-2.3.5L.9 5.3c-1.2.6-1.2 1.5 0 2l3.3 1.5-3.3 1.5c-1.2.6-1.2 1.5 0 2l3.3 1.5-3.3 1.5c-1.2.6-1.2 1.5 0 2l7.8 3.6c.6.3 1.4.4 2.2.4s1.6-.1 2.2-.4l7.8-3.6c1.2-.6 1.2-1.5 0-2l-3.3-1.5 3.3-1.5c1.4-.5 1.4-1.4.2-2zm-17.6-4l6.1-2.8c.3-.2.9-.2 1.4-.2s1.1.1 1.4.2l6.1 2.8-3.1 1.4L13 8.8l-.6.3c-.3.2-.9.2-1.4.2s-1.1-.1-1.4-.2L9 8.8 6.6 7.7 3.5 6.3zm15 10l-6.1 2.8c-.3.2-.9.2-1.4.2s-1.1-.1-1.4-.2l-6.1-2.8 3.1-1.4 2.2 1c.6.3 1.4.4 2.2.4s1.6-.1 2.2-.4l2.2-1 3.1 1.4zm-3.1-3.6L13 13.8l-.6.3c-.3.2-.9.2-1.4.2s-1.1-.1-1.4-.2l-.6-.3-2.4-1.1-3.1-1.4 3.1-1.4 2.2 1c.6.3 1.4.4 2.2.4s1.6-.1 2.2-.4l2.2-1 3.1 1.4-3.1 1.4z"/></svg>
                <span>Label Three</span>
            </a>
        </li>
        <li>
    <router-link to='/contact2'>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><path d="M18 4c0-2.2-1.8-4-4-4H4C1.8 0 0 1.8 0 4v10c0 2.2 1.8 4 4 4 0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM2 14V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2zm18 4c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2h8c2.2 0 4-1.8 4-4V6c1.1 0 2 .9 2 2v10z"/><ellipse cx="9" cy="8" rx="3" ry="4"/><path d="M4 16c0-1.7 2.2-3 5-3s5 1.3 5 3"/></svg>
                <span>Contacts</span>
            </a>
    </router-link>
        </li>
        <li>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><path d="M19 2h-2V1c0-.6-.4-1-1-1s-1 .4-1 1v1H7V1c0-.6-.4-1-1-1S5 .4 5 1v1H3C1.3 2 0 3.3 0 5v14c0 1.6 1.3 3 3 3h16c1.7 0 3-1.4 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1V5c0-.5.5-1 1-1h2v1c0 .6.4 1 1 1s1-.4 1-1V4h8v1c0 .6.4 1 1 1s1-.4 1-1V4h2c.5 0 1 .5 1 1v14zM4 7h2v2H4zM8 7h2v2H8zM12 7h2v2h-2zM16 7h2v2h-2zM4 11h2v2H4zM8 11h2v2H8zM12 11h2v2h-2zM16 11h2v2h-2zM4 15h2v2H4zM8 15h2v2H8zM12 15h2v2h-2zM16 15h2v2h-2z"/></svg>
                <span>Calender</span>
            </a>
        </li>
        <li>
            <a href="#" @click="openNewCallModal">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><path d="M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm0 20c-2.1 0-4.1-.7-5.6-2l2.5-2.5c-.5-.4-.9-.9-1.3-1.5L4 16.6c-1.2-1.5-2-3.5-2-5.6 0-5 4-9 9-9 2.1 0 4.1.7 5.6 2L12 8.6V9c0 .3 0 .7-.2 1.2.5-.2 1-.2 1.2-.2h.4L18 5.4c1.2 1.5 2 3.5 2 5.6 0 5-4 9-9 9zM12 13.3c-.8-.5-1.6-.9-2-1.3-.4-.3-.8-1.2-1.3-2 .8 0 1.3-.1 1.3-1L8 6c-1.1 0-2 .9-2 2 0 .3.1.6.2.9C6.8 11 8.8 16 14 16c1.1 0 2-.9 2-2l-3-2c-.8 0-1 .5-1 1.3z"/></svg>
                <span>Dialpad</span>
            </a>
        </li>
        <li>
    <router-link to='/session'>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><path d="M18 4c0-2.2-1.8-4-4-4H4C1.8 0 0 1.8 0 4v10c0 2.2 1.8 4 4 4 0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM2 14V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2zm18 4c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2h8c2.2 0 4-1.8 4-4V6c1.1 0 2 .9 2 2v10zM11 10c-.8 0-1 .5-1 1.3-.8-.5-1.6-.9-2-1.3-.4-.3-.8-1.2-1.3-2C7.5 8 8 7.9 8 7L6 4c-1.1 0-2 .9-2 2 0 .3.1.6.2.9C4.8 9 6.8 14 12 14c1.1 0 2-.9 2-2l-3-2z"/></svg>
                <span>Sessions</span>
            </a>
    </router-link>
        </li>
        <li>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><path d="M5.4 9c.4.4 1 .4 1.3 0 .4-.4.4-.5 0-.9L5.2 7h8.2c2.3 0 4.3 1.8 4.7 4.1.1.5.5.9.9.9.6 0 1-.7.9-1.2-.4-3.2-3.2-5.8-6.5-5.8H5.2l1.5-1.9c.4-.4.4-1.2 0-1.6-.3-.4-.9-.5-1.3-.1L2.3 4.5c-.4.4-.4 1 0 1.3L5.4 9zM19.7 16.2L16.6 13c-.4-.4-1-.4-1.3 0-.4.4-.4 1.5 0 1.9l1.5 2.1H8.6c-2.3 0-4.3-1.8-4.7-4.1-.1-.4-.5-.9-.9-.9-.6 0-1 .7-.9 1.2.4 3.2 3.2 5.8 6.5 5.8h8.2l-1.5.9c-.4.4-.4.7 0 1.1.4.4 1 .2 1.3-.1l3.1-3.2c.4-.5.4-1.1 0-1.5z"/></svg>
                <span>Label Eight</span>
            </a>
        </li>
        <li>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" enable-background="new 0 0 22 22"><path d="M9.9 16.2c.4.1.7.1 1.1.1.3 0 .7 0 1-.1l1.6 2.7c-.8.3-1.7.4-2.6.4-.9 0-1.8-.1-2.7-.4l1.6-2.7M9 13.7l-3.5 6.1c1.6.9 3.5 1.5 5.5 1.5s3.8-.5 5.4-1.4L13 13.8c-.6.3-1.2.5-1.9.5-.8 0-1.5-.2-2.1-.6zM4.9 3.9l1.6 2.8c-.2.3-.5.5-.7.9C5.6 8 5.4 9 5.2 9h-3c.2-1 .5-2 1-2.9.6-.9 1.1-1.6 1.7-2.2M5.5.8c-1.6.9-3 2.6-4 4.3C.5 6.9 0 9 0 11h7c0-1 .1-1.8.5-2.4C7.9 8 8.4 7.3 9 7L5.5.8zM17.1 3.7c.6.6 1.2 1.3 1.6 2.1.5.8.8 1.6 1 2.5h-3.1c-.1-.4-.3-.7-.5-1-.2-.3-.4-.6-.6-.9l1.6-2.7m-.6-3L13 6.8c.9.5 1.1.8 1.4 1.4.4.6.5 1.3.5 2h7c0-1.9-.5-3.8-1.5-5.5-.9-1.7-2.2-3-3.9-4z"/><circle cx="11" cy="10.3" r="2"/></svg>
                <span>Label Nine</span>
            </a>
        </li>
      </ul>
  </aside>
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

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Hind:500);
html, body {
  position: relative;
  box-sixing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
  background: #f5f7f9;
  font-family: "Hind", sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
}
.contain {
  overflow: scroll;
  position: relative;
  width: 15em;
  height: 100%;
  background: #2e3946;
}
aside.sidenav {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 4.25em;
  background: #19232d;
  -webkit-transform: translateZ(0px);
}
aside.sidenav ul {
  list-style-type: none;
  margin: 0;
  padding: 0.375em 0;
}
aside.sidenav ul li {
  position: relative;
  display: block;
  padding: 1em 1.375em;
  background: #19232d;
}
aside.sidenav ul li svg {
  fill: #cbd5df;
  width: 1.35em;
  height: 1.35em;
  vertical-align: middle;
  transition: opacity 0.3s ease;
}
aside.sidenav ul li span {
  position: absolute;
  z-index: -1;
  font-size: 0.75em;
  color: #434f5b;
  text-transform: uppercase;
  font-weight: 500;
  white-space: nowrap;
  top: 50%;
  left: 100%;
  background: white;
  padding: 0.5em 1em;
  display: block;
  transform: translate(-100%, -50%);
  transition: transform 0.3s ease-in-out;
}
aside.sidenav ul li span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  border: 0.5em solid transparent;
  border-right-color: white;
  border-left: none;
  transform: translate(0, -50%);
  transition: transform 0.15s 0.3s ease-in-out;
}
aside.sidenav ul li:hover {
  background: rgba(25, 35, 45, 0);
  transition: background 0 0.3s;
}
aside.sidenav ul li:hover svg {
  opacity: 0.8;
}
aside.sidenav ul li:hover span {
  transform: translate(0, -50%);
}
aside.sidenav ul li:hover span::before {
  transform: translate(-100%, -50%);
}

</style>
