<template>
  <div>
    <a-button type="primary" @click="showModal">Добавить задачу </a-button>
    <a-modal v-model="visible" title="Добавить задачу">
      <template slot="footer">
        <a-button key="back" @click="handleOk"> Закрыть </a-button>
      </template>
      <FormModal></FormModal>
    </a-modal>
  </div>
</template>
<script>
import FormModal from "./FormModal.vue";
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.visible = false;
    },
  },
  components: { FormModal },
};
</script>
