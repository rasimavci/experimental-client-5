<template>
<div class='app1' id="app">
    <h3>{{title}}</h3>
    <div class="form">
        <div class="form-group">
            <div class="form-group">
                <label>Note title</label>
                <input type="text" class="form-control" v-model="note.title">
            </div>
            <div class="form-group">
                <label>Note color</label>
                <select class="form-control" v-model="note.color">
                    <option selected>yellow</option>
                    <option>blue</option>
                    <option>red</option>
                </select>
            </div>
            <div class="form-group">
                <label>Note text</label>
                <textarea class="form-control" v-model="note.text"></textarea>
            </div>
        </div>
        <button class="btn btn-primary" @click="saveNote">Save note</button>
    </div>
    <div class="col-sm-12">
        <div class="col-sm-4 note" v-for="note in allNotes">
                <div class="card-block">
            <div class="card" v-bind:class="[ note.color ]">
                    <h4 class="card-title">{{note.title}}</h4>
                    <h6 class="card-subtitle text-muted">{{note.date}}</h6>
                    <p class="card-text">{{note.text}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import store from '../store'
//doesnt show antyhing except title..
//https://codepen.io/Cissou/pen/weavoj
export default {
data () {
    return {
           title: 'Notemaster',
            note: {
                title: '',
                text: '',
                color: '',
            },
            allNotes : [
                {
                    title: 'Mekong',
                    text: 'Thai food, nice service, several veg options',
                    date: new Date(Date.now()).toLocaleString(),
                    color: 'yellow'
                },
                {
                    title: 'Naope',
                    text: 'Japaneese food, good taste but few veg options',
                    date: new Date(Date.now()).toLocaleString(),
                    color: 'blue'
                },
            ]
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
       ...mapActions(['']),
            saveNote() {
                let { title, text, color } = this.note
                this.allNotes.push({
                    title,
                    text,
                    color,
                    date: new Date(Date.now()).toLocaleString()
                })
            }
  }
}
</script>

<style scoped>

.app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
.form {
  text-align: left;
}

.card {
  text-align: left;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
}

.note {
  padding: 5px;
}
.yellow {
  border: 1px solid #FFFF00;
  background-color: #fff3c2;
}
.blue {
  border: 1px solid #0099FF;
  background-color: #d4f0ff;
}
.red {
  border: 1px solid #FF0000;
  background-color: #ffdbd6 ;
}
</style>
