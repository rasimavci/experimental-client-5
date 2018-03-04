// eslint-disable-next-line
import state from "./state";

const loginData = state => state.loginData;
const newCallModal = state => state.newCallModal;
const newIncomingCallModal = state => state.newIncomingCallModal;
const newMessageModal = state => state.newMessageModal;
const addUserModal = state => state.addUserModal;
const profileModal = state => state.profileModal;
const deviceSettingsModal = state => state.deviceSettingsModal;
const history = state => state.history;
const calls = state => state.calls;
const activeCall = state => state.activeCall;
const activeCallState = state => state.activeCall.state;
const activeVideoCall = state => state.activeVideoCall;
const incomingCall = state => state.incomingCall;
const activeCallId = state => state.activeCallId;
const contacts = state => state.contacts;

//const callId = state => state.callId

export {
  loginData,
  newCallModal,
  newIncomingCallModal,
  newMessageModal,
  profileModal,
  addUserModal,
  deviceSettingsModal,
  history,
  calls,
  activeCall,
  activeCallState,
  activeVideoCall,
  incomingCall,
  activeCallId,
  contacts
};
