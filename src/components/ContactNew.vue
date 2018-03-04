<template>
    <div class="modal-container">
      <div class="dial-pad-wrap">
        <div class="left-pan">
          <div class="contacts">
            <div class="title">Contacts</div>
            <div v-for='contact in contacts' :key='contact.entryId' @click='call(contact)'>
              <div class="people clearfix">
                <div class="photo pull-left">
                  <img :src="contact.photoUrl || noImg">
                </div>
                <div class="info pull-left">
                  <div class="name"><span class="full-name">{{contact.firstName}} {{contact.lastName}} ({{contact.nickname}})</span></div>
                  <div class="phone"><span class="number">{{contact.mobilePhone || contact.workPhone}}</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="calling">
            <div class="title fadeIn animated infinite">Calling</div>
            <div class="photo bounceInDown animated">
              <img :src="callingContact.img" alt="contact img">
            </div>
            <div class="name rubberBand animated">{{callingContact.name}}</div>
            <div class="number">{{callingContact.number}}</div>
            <div class="action">
              <div class="call-mute"><button class="btn fadeInLeftBig animated"><i class="fas fa-microphone-slash"></i></button></div>
              <div class="call-volume"><button class="btn fadeInLeftBig animated"><i class="fas fa-volume-up"></i></button></div>
              <div class="call-hold"><button class="btn fadeInRightBig animated"><i class="fas fa-pause"></i></button></div>
              <div class="call-video"><button class="btn fadeInRightBig animated"><i class="fas fa-video"></i></button></div>
            </div>
            <div class="call-end bounceInUp animated">
              <button class="btn"><i class="fa fa-phone"></i></button>
            </div>
          </div>
        </div>
        <div class="dial-pad">
          <div class="dial-screen" contenteditable="false">
            <input type="text" @keyup="filter" v-model="dialValue" placeholder="Enter name or number...">
          </div>

              <div class="dial-table-col">
                <div class="dial-key-wrap" data-key="#">
                  <div class="dial-key">#</div>
                  <div class="dial-sub-key">&nbsp;</div>
                </div>
              </div>
            </div>
            <div class="dial-table-row no-sub-key">
              <div class="dial-table-col">
              </div>
              <div class="dial-table-col">
                <div class="dial-key-wrap" data-key="call">
                  <div class="dial-key"><i class="fa fa-phone"></i></div>
                  <div class="dial-sub-key">Call</div>
                </div>
              </div>
              <div class="dial-table-col">
                <div class="dial-key-wrap" data-key="back">
                  <div class="dial-key"><i class="fas fa-long-arrow-alt-left"></i></div>
                  <div class="dial-sub-key">Back</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import KandyJs from '../kandy'
import { mapActions, mapGetters } from 'vuex'
import store from "../store";

export default {
  name: 'modalNewCall',
  created () {
    this.filter()
  },
  data () {
    return {
      noImg: 'http://voice4thought.org/wp-content/uploads/2016/08/default1.jpg',
      callingContact: {
        img: '',
        name: '',
        number: ''
      },
      dialValue: ''
    }
  },
  computed: {
    ...mapGetters(['contacts']),
       getState () {
       return store.state.activeCall.state
    }
       },
  mounted () {
    this.$nextTick(()=>{
      this.bindModalEvents()
    })
  },
  methods: {
    //...mapActions([]),
    ...mapActions(['hold','unhold','mute','unmute','call','join','videoStart','videoStop','startScreenshare','stopScreenshare','directTransfer','end','updateActiveCall']),
    keymonitor () {
    },
    makecall(){
      this.$kandyJS.makeCall('bkocak@genband.com')
    },
    bindModalEvents () {
      this.keypad()
      this.dialing()
      this.filter()
    },
    keypad () {
      let vm = this
      $('.dial-key-wrap').on('click',function(){
        let key = $(this).data('key');
        vm.dialValue = vm.dialValue
        // let display = $('.dial-screen').text();
        switch(key){
          case 'back':
            vm.press($('.dial-key-wrap[data-key="back"]'));
            vm.dialValue = vm.dialValue.substring(0,vm.dialValue.length - 1)
            vm.longClick();
            break;
          case 'call':
            vm.press($('.dial-key-wrap[data-key="call"]'));
            vm.call();
            break;
          case 0:
            vm.press($('.dial-key-wrap[data-key="0"]'));
            vm.dialValue = vm.dialValue + '0'
            break;
          case 1:
            vm.press($('.dial-key-wrap[data-key="1"]'));
            vm.dialValue = vm.dialValue + '1'
            break;
          case 2:
            vm.press($('.dial-key-wrap[data-key="2"]'));
            vm.dialValue = vm.dialValue + '2'
            break;
          case 3:
            vm.press($('.dial-key-wrap[data-key="3"]'));
            vm.dialValue = vm.dialValue + '3'
            break;
          case 4:
            vm.press($('.dial-key-wrap[data-key="4"]'));
            vm.dialValue = vm.dialValue + '4'
            break;
          case 5:
            vm.press($('.dial-key-wrap[data-key="5"]'));
            vm.dialValue = vm.dialValue + '5'
            break;
          case 6:
            vm.press($('.dial-key-wrap[data-key="6"]'));
            vm.dialValue = vm.dialValue + '6'
            break;
          case 7:
            vm.press($('.dial-key-wrap[data-key="7"]'));
            vm.dialValue = vm.dialValue + '7'
            break;
          case 8:
            vm.press($('.dial-key-wrap[data-key="8"]'));
            vm.dialValue = vm.dialValue + '8'
            break;
          case 9:
            vm.press($('.dial-key-wrap[data-key="9"]'));
            vm.dialValue = vm.dialValue + '9'
            break;
          case '*':
            vm.press($('.dial-key-wrap[data-key="*"]'));
            vm.dialValue = vm.dialValue + '*'
            break;
          case '#':
            vm.press($('.dial-key-wrap[data-key="#"]'));
            vm.dialValue = vm.dialValue + '#'
            break;
        }
        vm.filter();
      })
    },
    dialing () {
      let vm = this
      $('.action .btn').click(function(){
        $(this).toggleClass('active');
      });
      $('.call-end').click(function(){
        vm.$kandyJS.endCall()
        $('.left-pan').removeClass('active');
        $('.calling').fadeOut(100);
        $('.contacts').fadeIn(800);
        // $('.calling .photo').html('');
        // $('.calling .name').html('Unknown');
        // $('.calling .number').html('');
      });
      $('.call-mute').click(function(){
        if(store.state.activeCall.muted)
     {
        vm.$kandyJS.unmuteCall()
     } else {vm.$kandyJS.muteCall()
        }
      });
      $('.call-hold').click(function(){
        if(store.state.activeCall.state === 'ON_HOLD')
     {
        vm.$kandyJS.unholdCall()
     } else {vm.$kandyJS.holdCall()
        }
      });
      $('.call-video').click(function(){
        if(store.state.activeCall.isSendingVideo)
     {
        vm.$kandyJS.stopVideo()
     } else {vm.$kandyJS.startVideo()
        }
      });
    },
    press (obj){
      let button = obj.addClass('active')
      setTimeout(function () {
        button.removeClass('active')
      }, 200);
    },
    filter (){
      let vm = this
      let highlight = function(string){
        if(vm.isNumber()) {
          $('.people .number.match').each(function(){
            let matchStart = $(this).text().toLowerCase().indexOf('' + string.toLowerCase() + '');
            let matchEnd = matchStart + string.length - 1;
            let beforeMatch = $(this).text().slice(0, matchStart);
            let matchText = $(this).text().slice(matchStart, matchEnd + 1);
            let afterMatch = $(this).text().slice(matchEnd + 1);
            $(this).html(beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch);
          })
        } else {
          $('.people .full-name.match').each(function(){
            let matchStart = $(this).text().toLowerCase().indexOf('' + string.toLowerCase() + '');
            let matchEnd = matchStart + string.length - 1;
            let beforeMatch = $(this).text().slice(0, matchStart);
            let matchText = $(this).text().slice(matchStart, matchEnd + 1);
            let afterMatch = $(this).text().slice(matchEnd + 1);
            $(this).html(beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch);
          })
        }
      };
      let showcontact = function(){
        if(vm.isNumber()) {
          $('.people .number').each(function(){
          if($(this).css('display')=='inline'){
            $(this).parent().parent().parent().show();
          }else{
            $(this).parent().parent().parent().hide();
          }
        })
        } else {
          $('.people .full-name').each(function(){
          if($(this).css('display')=='inline'){
            $(this).parent().parent().parent().show();
          }else{
            $(this).parent().parent().parent().hide();
          }
        });
        }
      };
      if(this.dialValue !== ''){
        if(this.isNumber()){
          console.log('numero')
          $('.people .number').removeClass('match').hide().filter(function(){
            return $(this).text().toLowerCase().indexOf(vm.dialValue.toLowerCase()) != -1;
          }).addClass('match').show();
          highlight(vm.dialValue);
          $('.people').show();
          showcontact();
        } else{
          console.log('letra')
          $('.people .full-name').removeClass('match').hide().filter(function(){
            return $(this).text().toLowerCase().indexOf(vm.dialValue.toLowerCase()) != -1;
          }).addClass('match').show();
          highlight(vm.dialValue);
          $('.people').show();
          showcontact();
        }
      }else{
        $('.people,.people .number').removeClass('match').hide();
        $('.people,.people .full-name').removeClass('match').hide();
      }
    },
    call (info) {
      // let num = $('.dial-screen').text().length;
      if(this.dialValue > 0){
        let photo,name,number;
        $('.left-pan').addClass('active');
        $('.contacts').fadeOut(100);
        $('.calling').fadeIn(800);
        if(info){
          this.callingContact.img = info.photoUrl || this.noImg
          this.callingContact.name = (info.firstName + ' ' + info.lastName) || 'Unknown'
          this.callingContact.number = info.workPhone || info.mobilePhone
          this.callingContact.primaryContact = info.primaryContact
        }else{
          this.callingContact.number = this.dialValue
        }
        setTimeout(function(){
          $('.call-end .btn').focus();
        },800);
        this.$kandyJS.makeCall(this.callingContact.primaryContact)
      }
    },
    longClick (){
      let vm = this
      var pressTimer
      $('.dial-key-wrap[data-key="back"]').mouseup(function(){
        clearTimeout(pressTimer)
      return false;
      }).mousedown(function(){
      pressTimer = window.setTimeout(function() {
        vm.dialValue = ''
      },1000)
      return false;
      });
    },
    isNumber () {
      return !isNaN(+this.dialValue) && isFinite(this.dialValue)
    },
    openNewCallModal () {
      this.toggleNewCallModal()
    },
    closeModal (){
      if(event.target.id === 'ModalNewCall'){
        this.callee = ''
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

*,:after,:before{box-sizing:border-box}
.pull-left{float:left}
.pull-right{float:right}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}

.contacts{
  overflow-y: scroll;
  height: 500px;
}

.dial-screen input {
  font-size: 28px;
  font-weight: 400;
  line-height: 50px;
}
</style>
