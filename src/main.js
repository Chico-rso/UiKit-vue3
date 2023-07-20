import {createApp, reactive} from "vue";
import App from "./App.vue";
import {useVuelidate} from "@vuelidate/core";
import {required, email} from "@vuelidate/validators";

import router from "@/router/index.js";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass} from "@fortawesome/free-regular-svg-icons";

library.add([faHeart, faHand, faAddressBook, faCreditCard, faLemon, faHourglass]);


createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");

export default {
	setup()
	{
		const state = reactive({
			firstName: "",
			lastName: "",
			contact: {
				email: "",
			},
		});
		const rules = {
			firstName: {required}, // Matches state.firstName
			lastName: {required}, // Matches state.lastName
			contact: {
				email: {required, email}, // Matches state.contact.email
			},
		};
		
		const v$ = useVuelidate(rules, state);
		
		return {state, v$};
	},
};
