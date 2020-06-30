import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHatWizard,
  faScroll,
  faUserPlus,
  faChessRook,
  faChessQueen,
  faDiceD20,
  faMobileAlt,
  faEnvelope,
  faTrophy,
  faMap,
  faFileCode,faRunning
} from "@fortawesome/free-solid-svg-icons";
import {
  faVuejs,
  faReact,
  faGithub,
  faGitAlt,
  faJs,
  faLaravel,
  faPhp,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "vue-template-compiler";

library.add(faHatWizard);
library.add(faScroll);
library.add(faUserPlus);
library.add(faChessRook);
library.add(faChessQueen);
library.add(faDiceD20);
library.add(faMobileAlt);
library.add(faEnvelope);
library.add(faTrophy);
library.add(faMap),
library.add(faVuejs),
library.add(faReact),
library.add(faGithub),
library.add(faGitAlt),
library.add(faJs),
library.add(faLaravel),
library.add(faPhp),
library.add(faNodeJs),
library.add(faFileCode),
library.add(faRunning),
  Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
