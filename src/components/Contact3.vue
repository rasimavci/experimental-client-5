


<template>
<div id="app" class="container">

  <div class="text-center" style="padding: 20px;">
    <h3>Drag 'n Drop with VueJS and SortableJS</h3>
    <span>Drag available option to the right.</span>
  </div>
   <div class="row" style="margin:5px; border-radius: 2px; padding: 5px; background-color: #F4F4F4;">
       <li class="selected card" v-for="option in selected" v-colorswatch>
        {{ option }}
      </li>    
  </div>
  
  <div class="row">
    <div class="col">
      <ul class="options list-group" v-sortable="{onAdd: pullItem, group: {name: 'options', put: ['answers']}}">
         <p>Available Options</p>
         <li v-for="option in options" :key="option.id" class="list-group-item">
            {{ option.title }}          
         </li>
      </ul>
    </div> 
    <div class="col">      
      <ul id="list" class="answers list-group" v-sortable="{onAdd: pushItem, group: {name: 'answers', put: ['options']}}">
        <p>Selected Options</p>
         <li v-for="option in answers" :key="option.id" class="list-group-item">
              {{ option }}
         </li>
      </ul>
    </div>
  </div> <!-- End of Row -->  
</div> <!-- End of Container -->
  
</template>

<script>
export default {
data () {
    return {
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
   props: {
      source: String
    }
}

    </script>
