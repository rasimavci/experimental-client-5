import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Plus from "@/components/Plus";
import Star from "@/components/Star";
import Contact from "@/components/Contact";
import Contact2 from "@/components/Contact2";
import Contact3 from "@/components/ContactNew";
import Message from "@/components/Message";
import History1 from "@/components/History";
import Session from "@/components/Session";
import LoginScreen from "@/components/LoginScreen";
import Weather from "@/components/Weather";
import TaskManager from "@/components/TaskManager";
import Calendar from "@/components/Schedule1";
import Notes from "@/components/Notes";

import Dropdown from "hsy-vue-dropdown";
import VueResource from "vue-resource";
import moment from "moment";
import Schedule from "vue-schedule";

// import Vuetify from "vuetify";
// Vue.use(Vuetify);

Vue.use(Schedule);
Vue.use(moment);

Vue.use(VueResource);
Vue.use(Dropdown);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "LoginScreen",
      component: LoginScreen
    },
    {
      path: "/plus",
      name: "PlusPage",
      component: Plus
    },
    {
      path: "/star",
      name: "StarPage",
      component: Star
    },
    {
      path: "/contact",
      name: "ContactPage",
      component: Contact
    },
    {
      path: "/contact2",
      name: "ContactPage2",
      component: Contact2
    },
    {
      path: "/contact3",
      name: "ContactPage3",
      component: Contact3
    },
    {
      path: "/message",
      name: "messagePage",
      component: Message
    },
    {
      path: "/history",
      name: "HistoryPage",
      component: History1
    },
    {
      path: "/session",
      name: "sessionPage",
      component: Session
    },
    {
      path: "/calendar",
      name: "CalendarPage",
      component: Calendar
    },
    {
      path: "/weather",
      name: "WeatherPage",
      component: Weather
    },
    {
      path: "/taskmanager",
      name: "TaskManagerPage",
      component: TaskManager
    },
    {
      path: "/notes",
      name: "NotesPage",
      component: Notes
    }
  ]
});
