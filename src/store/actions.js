import * as types from "./mutation-types";
let callId;
let local = document.getElementById("local-container");
let remote = document.getElementById("remote-container");
const myVideoResolution = {
  height: 640,
  width: 480
};

const options = {
  isAudioEnabled: true, //document.getElementById ('isAudioEnabled').checked,
  isVideoEnabled: false, // document.getElementById ('isVideoEnabled').checked,
  sendInitialVideo: false, //document.getElementById ('sendInitialVideo').checked,
  sendScreenShare: false, //document.getElementById ('sendScreenShare').checked,
  videoResolution: myVideoResolution,
  //localVideoContainer: this.$ref.local-container, // document.getElementById('local-container'),
  //remoteVideoContainer: this.$ref.remote-container //document.getElementById('remote-container')
  localVideoContainer: local, //document.getElementById ('local-container'), //olmadi this.$refs.container1, //
  remoteVideoContainer: remote //document.getElementById ('remote-container'),
};
function addEventListeners() {
  kandy.on("auth:change", function(data) {
    console.log("auth:change Event Data: " + JSON.stringify(data));
    if (kandy.getConnection().isConnected === true) {
      Kandyjs.refreshContacts();
      Kandyjs.retrieveCallLogs();
      Kandyjs.getCallLogs();
      Kandyjs.fetchConversations();
      Kandyjs.searchDirectory();
    }
  });

  kandy.on("call:error", err => {
    if (store.getters.activeCall) store.dispatch("toggleActiveCall");
    console.log("call error: " + err);
  });

  kandy.on("call:stateChange", function(call) {
    var calls = kandy.call.getAll();
    debugger;
    store.commit("UPDATE_CALLS", calls);
    kandy.call.getAll().filter(function(call) {
      if (call.state === "IN_CALL") {
        debugger;
        store.dispatch("setActiveCallId", { callId: call.id });
      } else if (call.state === "ENDED") {
        store.dispatch("toggleActiveCall");
      }
    });
  });

  kandy.on("call:mediaStateChange", function(params) {});

  kandy.on("call:start", function(params) {
    const calls = kandy.call.getAll();
    calls.forEach(function(call) {
      console.log("all call ids curently : " + params.callId);
      if (call.id === params.callId) {
        store.commit("SET_ACTIVE_CALL", call);
        store.dispatch("toggleActiveCall");
        // store.commit (types.SET_ACTIVE_CALL, call);
      }
    });
  });

  kandy.on("call:receive", params => {
    let callId = params.callId;
    let incomingCallData = {
      callId: params.callId,
      active: true
    };
    store.dispatch("setIncomingCall", incomingCallData);
    store.dispatch("toggleNewIncomingCallModal");
  });

  kandy.on("contacts:change", params => {
    store.commit("REFRESH_CONTACTS", params.contacts);
  });

  kandy.on("directory:change", params => {
    debugger;
    tore.commit("REFRESH_DIRECTORY", params.results);
  });

  kandy.on("conversations:new", function(params) {
    console.log("new conversation" + params.conversation);
    store.commit("ADD_CONVERSATION", params.conversation);
  });
}
// This line is used to create a new instans of Kandy
const kandy = createKandy({
  authentication: {
    subscription: {
      expires: 3600,
      service: ["IM", "Presence", "call"],
      protocol: "https",
      server: "spidr-ucc.genband.com",
      version: "1",
      port: "443"
    },
    websocket: {
      protocol: "wss",
      server: "spidr-ucc.genband.com",
      port: "443"
    }
  },
  logs: {
    logLevel: "debug",
    enableFcsLogs: true
  },
  call: {
    chromeExtensionId: "put real extension ID here",
    serverProvidedTurnCredentials: true,
    iceserver: [
      {
        url: "stun:turn-ucc-1.genband.com:3478?transport=udp"
      },
      {
        url: "stun:turn-ucc-2.genband.com:3478?transport=udp"
      },
      {
        url: "turns:turn-ucc-1.genband.com:443?transport=tcp",
        credential: ""
      },
      {
        url: "turns:turn-ucc-2.genband.com:443?transport=tcp",
        credential: ""
      }
    ]
  }
});

//createKandy()

// const Kandyjs = {
//   connect: credentials =>
//     new Promise((resolve, reject) => {
//       if (credentials.username && credentials.password) {
//         kandy.connect(credentials);
//         addEventListeners();
//         resolve("OK");
//       } else {
//         reject("Bad credentials");
//       }
//     }),
function disconnect1() {
  console.log("disconnect method runs for ");
  kandy.disconnect();
}
// This is new, to know if kandy is connected!
// function isConnected (){
//   new Promise((resolve, reject) => {
//     try {
//       let res = kandy.getConnection().isConnected;
//       resolve(res);
//     } catch (err) {
//       reject(err);
//     }
//   }),
// }
// getConnection: () => {
//   try {
//     let res = kandy.getConnection();
//     resolve(res);
//   } catch (err) {
//     reject(err);
//   }
// }
function makeCall(callee) {
  // console.log("aradiniz: " + callee)
  kandy.call.make(callee, options);
}

function answerCall() {
  console.log("answer call for id: " + callId);
  kandy.call.answer(store.state.incomingCall.callId, options);
}

export const setLoginData = ({ commit }, loginData) => {
  if (loginData) {
    commit(types.SET_LOGIN_DATA, loginData);
  }
};

export const toggleNewCallModal = ({ commit }) => {
  commit(types.TOGGLE_NEW_CaLL_MODAL);
};

export const toggleNewIncomingCallModal = ({ commit }) => {
  commit(types.TOGGLE_NEW_INCOMING_CALL_MODAL);
};

export const toggleAddUserModal = ({ commit }) => {
  commit(types.TOGGLE_ADD_USER_MODAL);
};

export const toggleNewMessageModal = ({ commit }) => {
  commit(types.TOGGLE_NEW_MESSAGE_MODAL);
};

export const toggleProfileModal = ({ commit }) => {
  commit(types.TOGGLE_PROFILE_MODAL);
};

export const toggleDeviceSettingsModal = ({ commit }) => {
  commit(types.TOGGLE_DEVICESETTINGS_MODAL);
};

export const toggleActiveCall = ({ commit }) => {
  commit(types.TOGGLE_ACTIVE_CALL);
};

export const toggleActiveVideoCall = ({ commit }) => {
  commit(types.TOGGLE_ACTIVE_VIDEO_CALL);
};

export const updateActiveCall = ({ commit }, call) => {
  commit(types.SET_ACTIVE_CALL, call);
};

export const updateActiveContact = ({ commit }, contact) => {
  commit(types.SET_ACTIVE_CONTACT, contact);
};
export const updateActiveConv = ({ commit }, conv) => {
  commit(types.SET_ACTIVE_CONV, conv);
};

export const setIncomingCall = ({ commit }, incomingCall) => {
  commit(types.SET_INCOMING_CALL, incomingCall);
};

export const setActiveCallId = ({ commit }, activeCallId) => {
  commit(types.SET_ACTIVE_CALL_ID, activeCallId);
};

export const refreshContacts = ({ commit }, contacts) => {
  commit(types.REFRESH_CONTACTS, contacts);
};

export const addTask = ({ commit }, newTask) => {
  commit("ADD_TASK", newTask);
};

export const editTask = ({ commit }, e) => {
  commit("EDIT_TASK", e.target.value);
};

export const deleteTask = ({ commit }) => {
  commit("DELETE_TASK");
};

export const listTasks = ({ commit }) => {
  commit("LIST_TASKS");
};

export const connect = ({ commit }, credentials) => {
  kandy.connect(credentials);
};

export const disconnect = ({ commit }) => {
  commit(types.DISCONNECT);
};

export const call = ({ commit }, callee) => {
  commit(types.CALL_MAKE, callee);
};

export const answer = ({ commit }) => {
  commit(types.CALL_ANSWER);
};

export const reject = ({ commit }) => {
  commit(types.CALL_REJECT);
};

export const ignore = ({ commit }) => {
  commit(types.CALL_IGNORE);
};

export const send = ({ commit }, participant, message) => {
  commit(types.SEND, participant, message);
};

export const listCalls = ({ commit }) => {
  commit(types.LIST_CALLS);
};

export const retrieveCallLogs = ({ commit }) => {
  commit(types.HISTORY_FETCH);
};

export const getCallLogs = ({ commit }) => {
  commit(types.HISTORY_GET);
};

export const removeCallLog = ({ commit }) => {
  commit(types.HISTORY_REMOVE);
};

export const removeCallHistory = ({ commit }) => {
  commit(types.HISTORY_CLEAR);
};

export const hold = ({ commit }) => {
  commit(types.HOLD);
};
export const unhold = ({ commit }) => {
  commit(types.UNHOLD);
};
export const mute = ({ commit }) => {
  commit(types.MUTE);
};
export const unmute = ({ commit }) => {
  commit(types.UNMUTE);
};
export const videoStart = ({ commit }) => {
  commit(types.VIDEO_START);
};

export const videoStop = ({ commit }) => {
  commit(types.VIDEO_STOP);
};

function holdCall() {
  kandy.call.hold(store.state.activeCall.id);
}

function unholdCall() {
  kandy.call.unhold(store.state.activeCall.id);
}

/*
export const forward = ({ commit }) => {
  commit(types.HOLD);
};
export const directTransfer = ({ commit }, target) => {
  commit(types.DIRECT_TRANSFER, target);
};

export const consultativeTransfer = ({ commit }) => {
  commit(types.CONSULTATIVE_TRANSFER);
};
export const join = ({ commit }, targetId) => {
  commit(types.JOIN), targetId;
};
export const end = ({ commit }) => {
  commit(types.END);
};

export const startScreenshare = ({ commit }) => {
  commit(types.START_SCREENSHARE);
};

export const stopScreenshare = ({ commit }) => {
  commit(types.STOP_SCREENSHARE);
};

export const addContact = ({ commit }, contactObj) => {
  commit(types.CONTACT_ADD, contactObj);
};

export const searchDirectory = ({ commit }, criteria) => {
  commit(types.USER_SEARCH, criteria);
};
*/
