<template>
<ul class="main">
  <li class="date">
    <h3>Dec 18</h3>
    <p>Schedule of Events</p>
  </li>
  <li class= "events">
    <ul class="events-detail">
      <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>

       <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>

       <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>

       <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>

       <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
    </ul>


  </li>





    <li class="date">
    <h3>Dec 19</h3>
    <p>Schedule of Events</p>
  </li>
  <li class= "events cf">
    <ul class="events-detail">
      <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>

       <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>

       <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>

       <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>

       <li>
        <a href="#">
          <span class="event-time">2:00pm - </span>
          <span class="event-name">Kickoff Ceremony</span>
          <br />
          <span class="event-location">Headquarters</span>
        </a>
      </li>
    </ul>


  </li>


</ul>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store'

export default {
    methods: {
    ...mapActions(['toggleNewCallModal','toggleProfileModal','updateActiveContact',
'searchDirectory']),
    openNewCallModal () {
      this.toggleProfileModal()
    },
    },
  data () {
    return {
      selectedBook: 1,
      checkedList: [],
      filterByStatus: [],
      filterByName: [],
      filterToggle: false,
      notification: false,
      person: '',
      activeNote: '',
      activeContact: {},
      show: 'all',
      options: [{
        label: 'Personal Address Book',
        value: 1
      }, {
        label: 'Global Address Book',
        value: 2
      }],
            dialog: false,
      drawer: null,
items: [
        { icon: 'contacts', text: 'Contacts' },
        { icon: 'history', text: 'Frequently contacted' },
        { icon: 'content_copy', text: 'Duplicates' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'add', text: 'Create label' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' }
          ]
        },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Go to the old version' }
      ]
    }
  },
  computed: {
    getTasks () {
      console.log('tasks:' + store.state.tasks)
        return store.state.tasks
    },
    checkedAll() {
    },
  }
}
</script>

<style scoped>
*, *:before, *:after {
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}


ul.main {
  list-style: none;
  max-width: 75%;
  margin: 20px auto;
}
h3 {padding: 0; margin: 0;}


.date {
  width: 17%;
  padding: 15% 1% 0 0 ;
  float: left;
}

.date h3 {
  font-size: 1.5em;
}

.date p {
  font-size: .8em;
}

.events {
  float: left;
  width: 80%;
  border-left: 1px solid #ccc;
  margin-top: 10%;
  padding-top: 3%;
}

.events-detail {
  max-width: 550px;
}

.events-detail li{
  padding: 10px;
  border-bottom: 1px dashed #ccc;
  line-height: 22px;
  transition: ease .4s all;
}

.events-detail li:hover {
  background: #e9e9e9;
}

.event-time {
  font-weight: 900;
}

.events-detail li a {
  text-decoration: none;
  color: #444;
  width: 100%;
  height: 100%;
  display: block;
}

.event-location {
    font-size: .8em;
    color: tomato;
    margin-left: 70px;
}



@media all and (max-width: 641px) {
    .date {
      width: 100%;
      border-bottom: 1px solid #ccc;
      margin-bottom: 10px;
    }

  .events {
    border:none;
    width: 100%;
    margin-top: 0;
  }

  .events-detail {
    padding: 0;
  }

  li.date p {
    margin:0;
  }
}
</styled>
