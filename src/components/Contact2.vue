<template>
  <div id="message-list">
    <div id="list-header">
      <h2>Contacts</h2>
      <dropdown :data="options" :cbChanged="changed" :width="170"></dropdown>
      <main id="main">
        <div class="container">
          <div id="ssfcrud" v-cloak>
            <table class="table table-bordered table-hover table-striped table-xs-block">
              <caption>
                <div class="pull-right multiple-action">
                  <div class="search">
                    <div class="input-group">
                      <input v-model="person" class="form-control" @change="show = 'filter'">
                      <span class="input-group-addon">
                      <i class="glyphicon glyphicon-search"></i>
                      </span>
                    </div>
                  </div>
                  <button type="button" class="btn btn-danger" v-if="checkedList.length > 0"><i class="glyphicon glyphicon-trash"></i></button>
                  <div class="dropdown filterbox" :class="{ 'open': filterToggle }">
                    <button type="button" class="btn btn-success" v-on:click="filterToggle = !filterToggle"><i class="glyphicon glyphicon-filter"></i></button>
                    <ul class="dropdown-menu list-group">
                      <li class="list-group-item">
                        <label>Filter by Status</label>
                      </li>
                      <li class="list-group-item">
                        <input type="checkbox" value="actived" v-model="filterByStatus"> Actived
                      </li>
                      <li class="list-group-item">
                        <input type="checkbox" value="deactived" v-model="filterByStatus"> Deactived
                      </li>
                      <li class="list-group-item">
                        <input type="checkbox" value="created" v-model="filterByStatus"> Created
                      </li>
                    </ul>
                  </div>
                  <button type="button" class="btn btn-primary" v-on:click.stop="dialog = !dialog"><i class="glyphicon glyphicon-plus"></i></button>
                </div>
                <div class="notifications">
                  <p class="alert bg-success" v-if="notification"></p>
                  <p class="alert bg-warning" v-if="checkedAll">
                    All <strong v-text="checkedList.length"></strong> items checked
                    <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </p>
                </div>
              </caption>
            </table>
          </div>
        </div>
      </main>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Contacts button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
          All Contacts
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
          Favorites
          </button>
        </div>
      </div>
    </div>
    <div class="btn-group btn-group-justified" role="group">
      <i class="glyphicon glyphicon-plus"></i>
    </div>
    <!-- render contacts in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="contact in getContacts"
          class="list-group-item" href="#"
          :class="{active: activeNote === contact}"
          @click="openProfileModal(contact)">
          <h4 class="list-group-item-heading">
            <i class="glyphicon glyphicon-user"></i>
            {{contact.firstName}} {{contact.lastName}}
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
    ...mapActions(['toggleNewCallModal','toggleProfileModal','updateActiveContact', 'searchDirectory']),
    openNewCallModal () {
      this.toggleProfileModal()
    },
    changed(selected) {
      this.selectedBook = selected[0].value
      console.log('selected option: ' + selected[0].value)
    },
    someHandler(writtenWord) {
      console.log(writtenWord)
    },
    openProfileModal (contact) {
      this.updateActiveContact(contact);
      this.toggleProfileModal()
    },
    updateContact (contact) {
      this.updateActiveContact(contact)
      console.log('update active contact')
    },
    search (criteria) {
      this.searchDirectory(criteria,'')
      console.log('update active contact')
    }
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
    getContacts () {
      if (this.show === 'all'){
        console.log(store.state.contacts)
        return store.state.contacts
      } else if (this.show === 'favorites') {
        return store.state.directory
      } else if (this.show === 'favorited') {
        return store.state.contacts.filter(note => note.favorite)
      }
      else if (this.show === 'filter') {
        if(this.selectedBook === 2) {
          var name2 = this.person.toLowerCase()
            if(store.state.directory[0]){
              if(store.state.directory[0].firstName.toLowerCase() !== this.person.toLowerCase()) {
                this.$kandyJS.searchDirectory(this.person)
              }
            } else {
                this.$kandyJS.searchDirectory(this.person)
              }
            return store.state.directory
          } else {
            return store.state.contacts.filter(contact => contact.firstName.startsWith(this.person))
          }
        }
    },
    checkedAll() {
    },
  }
}
</script>

<style>
.search {
	display: inline-block;
	vertical-align: top;
	zoom: 1; /* Fix for IE7 */
	*display: inline; /* Fix for IE7 */
  width: 200px;
	max-width: 260px;
}

.lim {
    padding: 0 0 50px 0;
    display: inline-block;
    background: url('http://www.martin.com/color/small/red305.1.gif') no-repeat bottom center;
}
</style>
