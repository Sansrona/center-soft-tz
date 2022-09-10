import Vue from "vue";
import App from "./App.vue";
import Button from "ant-design-vue/lib/button";
import Divider from "ant-design-vue/lib/divider";
import Modal from "ant-design-vue/lib/modal";
import Row from "ant-design-vue/lib/row";
import Col from "ant-design-vue/lib/col";
import Switch from "ant-design-vue/lib/switch";
import FormModel from "ant-design-vue/lib/form-model";
import FormModelItem from "ant-design-vue/lib/form-model/FormItem";
import Input from "ant-design-vue/lib/input";
import Icon from "ant-design-vue/lib/icon";
import "ant-design-vue/dist/antd.css";
import store from "./store";
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Divider.name, Divider);
Vue.component(Modal.name, Modal);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Switch.name, Switch);
Vue.component(Icon.name, Icon);
Vue.component(FormModel.name, FormModel);
Vue.component(FormModelItem.name, FormModelItem);
Vue.component(Input.name, Input);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
