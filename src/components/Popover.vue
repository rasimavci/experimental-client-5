<template>
  <transition name="fade">
    <div id='popoverContainer' v-show="showPopover">
      <div class="list-container">
        <ul>
          <li>
            <i class="fas arrows"></i>
            Available
          </li>
          <li>
            <i class="fab minus-circle"></i>
            Busy
          </li>
          <li>
            <i class="fas arrows"></i>
            On Vacation
          </li>
          <li>
            <i class="fab minus-circle"></i>
            Away
          </li>
          <li>
            <i class="fas arrows"></i>
            Out to Lunch
          </li>
          <li>
            <i class="fab fa-adn"></i>
            Be Rigth Back
          </li>
          <li>
            <i class="fas arrows"></i>
            Appear Offline
          </li>
          <li>
            <i class="fab fa-adn"></i>
            Away
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'customPopover',
  data() {
    return {
      showPopover: false,
      elementPosX: -1,
      elementPosY: -1
    }
  },
  props: ['_event'],
  mounted() {
    document.addEventListener('click', this.bindPopoverEvent)
  },
  methods: {
    bindPopoverEvent () {
      try {
        if(event.target.dataset.popover){
          this.elementPosX = event.target.getBoundingClientRect().x + event.target.getBoundingClientRect().width + 5
          this.elementPosY = event.target.getBoundingClientRect().y
          this.openPopover()
        }
        else if (this.showPopover) this.showPopover = !this.showPopover
      } catch (err) {
        console.log(err)
      }
    },
    openPopover () {
      let el = document.getElementById('popoverContainer')
      el.style.left = this.elementPosX + 'px'
      el.style.top = this.elementPosY+'px'
      this.showPopover = true
    }
  }
}
</script>

<style>
#popoverContainer{
  width: 200px;
  overflow: hidden;
  position: absolute;
  border: 1px solid;
  background: white;
}
ul{
  margin: 0
}
li{
  list-style-type: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
