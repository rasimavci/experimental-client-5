import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as types from "./mutation-types";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state,
  actions,
  getters,
  mutations: {
    [types.SET_LOGIN_DATA](state, loginData) {
      state.loginData = loginData;
    },
    [types.TOGGLE_NEW_CaLL_MODAL](state) {
      state.newCallModal = !state.newCallModal;
    },
    [types.TOGGLE_NEW_INCOMING_CALL_MODAL](state) {
      state.newIncomingCallModal = !state.newIncomingCallModal;
    },
    [types.TOGGLE_NEW_MESSAGE_MODAL](state) {
      state.newMessageModal = !state.newMessageModal;
    },
    [types.TOGGLE_PROFILE_MODAL](state) {
      state.profileModal = !state.profileModal;
    },
    [types.TOGGLE_ADD_USER_MODAL](state) {
      state.addUserModal = !state.addUserModal;
    },
    [types.TOGGLE_DEVICESETTINGS_MODAL](state) {
      state.deviceSettingsModal = !state.deviceSettingsModal;
      console.log("state.deviceSettingsModal: " + state.deviceSettingsModal);
    },
    [types.TOGGLE_ACTIVE_CALL](state) {
      state.activeCall = !state.activeCall;
    },
    [types.TOGGLE_ACTIVE_VIDEO_CALL](state) {
      state.activeVideoCall = !state.activeVideoCall;
    },
    [types.UPDATE_CALLS](state, calls) {
      state.firstState = calls[0].state;
      state.calls = calls;
    },
    [types.SET_ACTIVE_CALL](state, call) {
      Object.keys(call).forEach(function(key) {
        console.log(key, call[key]);
      });
      state.activeCall = call;
    },
    [types.SET_ACTIVE_CONTACT](state, contact) {
      Object.keys(contact).forEach(function(key) {
        console.log(key, contact[key]);
      });

      state.activeContact = contact;
    },
    [types.SET_ACTIVE_CONV](state, conv) {
      Object.keys(conv).forEach(function(key) {
        console.log(key, conv[key]);
      });
      state.activeConv = conv;
      state.messages = conv.getMessages();
      // state.messages.forEach (function (key) {
      //   console.log (key, state.messages[key]);
      // });
    },
    [types.ADD_CONVERSATION](state, conv) {
      state.conversations.push(conv);
    },
    [types.REFRESH_CONTACTS](state, contacts) {
      state.contacts = contacts;
    },
    [types.REFRESH_DIRECTORY](state, directory) {
      state.directory = directory;
      console.log("refresh directory triggered");
    },
    [types.REFRESH_CALLLOGS](state, calllogs) {
      state.history = calllogs;
    },
    [types.SET_INCOMING_CALL](state, incomingCall) {
      state.incomingCall = incomingCall;
    },
    [types.SET_ACTIVE_CALL_ID](state, activeCallId) {
      state.activeCallId = activeCallId;
    },

    [types.ADD_TASK](state, newTask) {
      state.tasks.push(newTask);
      state.activeTask = newTask;
    },

    [types.EDIT_TASK](state, text) {
      state.activeNote.text = text;
    },
    [types.DELETE_TASK](state) {
      state.notes.$remove(state.activeNote);
      state.activeNote = state.notes[0];
    },
    [types.LIST_TASKS](state) {
      console.log("total tasks" + state.tasks.length);
      state.tasks.forEach(function(task) {
        //console.log(key, call[key]);

        Object.keys(task).forEach(function(key) {
          console.log(key, task[key]);
        });
      });

      // state.notes.$remove(state.activeNote);
      // state.activeNote = state.notes[0];
    },

    [types.CALL_MAKE](state, callee) {
      makeCall(callee, options);
    },
    [types.CALL_ANSWER](state) {
      answerCall(callId, options);
      getCallLogs();
    },
    [types.SEND](state, participant, message) {
      sendMessage(participant, message);
    },
    [types.DISCONNECT](state) {
      disconnect();
    },
    [types.HISTORY_FETCH](state) {
      retrieveCallLogs();
    },

    [types.HISTORY_GET](state) {
      getCallLogs();
    },

    [types.HISTORY_REMOVE](state) {
      removeCallLog();
    },

    [types.HISTORY_CLEAR](state) {
      removeCallHistory();
    },
    [types.VIDEO_START](state) {
      startVideo1();
    },
    [types.VIDEO_STOP](state) {
      stopVideo1();
    },
    [types.HOLD](state) {
      holdCall();
    }
    /*
    [types.UNHOLD](state) {
      unholdCall();
    },
    [types.MUTE](state) {
      muteCall();
    },
    [types.UNMUTE](state) {
      unmuteCall();
    },
    [types.JOIN](state, targetId) {
      joinCall(state.activeCall.id, targetId);
    },
    [types.END](state) {
      endCall();
    },
    [types.START_SCREENSHARE](state) {
      getMediaStreamId()
        .then(function(mediaSourceId) {
          kandy.call.startScreenshare(state.activeCall.id, {
            mediaSourceId: mediaSourceId
          });
        })
        .catch();
    },
    [types.STOP_SCREENSHARE](state) {
      stopScreenShare1();
    },
    [types.DIRECT_TRANSFER](state, target) {
      directTransfer1(target);
    },
    [types.CONTACT_ADD](state, contactObj) {
      let contactObj1 = {
        firstName: "Merve",
        lastName: "Kara",
        nickname: "merv",
        email: "mkara@netas.com.tr",
        primary: "mkara@genband.com"
      };

      const dec = window.btoa(contactObj1);

      var entry = {};
      entry["entryId"] = 1;
      entry["nickname"] = "merv"; //$("#nickname").val();
      entry["primaryContact"] = "mkara@genband.com"; //$("#primaryContact").val();
      entry["firstName"] = "Merve"; //$("#firstName").val();
      entry["lastName"] = "Kara"; // $("#lastName").val();
      entry["photoUrl"] = ""; //$("#photoUrl").val();
      entry["emailAddress"] = "mkara@netas.com.tr"; //$("#emailAddress").val();
      entry["homePhone"] = ""; //$("#homePhone").val();
      entry["mobilePhone"] = ""; //$("#mobilePhone").val();
      entry["workPhone"] = ""; //$("#workPhone").val();
      entry["friendStatus"] = false; //document.getElementById("friendStatus").checked;
      entry["conferenceURL"] = ""; //$("#conferenceURL").val();
      entry["fax"] = $("#fax").val();
      entry["groupList"] = [
        {
          groupName: $("#groupList").val()
        }
      ];
      entry["pager"] = $("#pager").val();
      let entry1 = URL.createObjectURL(
        new Blob([entry], { type: "text/plain" })
      );

      entry1 = btoa(entry);

      addContact1(entry);
    },
    [types.USER_SEARCH](state, criteria) {
      console.log("searched for " + criteria);
      searchDirectory(criteria, "FIRSTNAME");
    }*/
  }
});
export default store;
