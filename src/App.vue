<template>
  <div class="container">
    <header class="header">Список задач</header>
    <div class="currentTask">
      <span>Выполняется: </span>
      <span class="text">{{ currentTask || "Ничего" }}</span>
    </div>
    <main class="content">
      <my-modal />
      <a-divider />
      <a-row :gutter="[32, 15]">
        <a-col :span="8" v-for="todo in items" :key="todo.id">
          <my-card :span="8" :todo="todo" />
        </a-col>
      </a-row>
    </main>
    <div class="drag-zone" v-on:drop="drop" v-on:dragover="allowDrop">
      Drop здесь
    </div>
  </div>
</template>

<script>
import MyModal from "./components/MyModal.vue";
import MyCard from "./components/MyCard.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    MyModal,
    MyCard,
  },
  data() {
    return {
      currentTask: "",
    };
  },
  computed: mapState({
    items: (state) => state.items,
  }),
  methods: {
    allowDrop: function (event) {
      console.log(event, "allowDrop");
      event.preventDefault();
    },
    drop: function (event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("task");
      this.currentTask = data;
    },
  },
};
</script>

<style scoped>
.container {
  color: #1890ff;
  width: 100%;
  height: 100%;
  padding: 20px 20px 0;
}

.header {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 30px;
}

.drag-zone {
  border: 1px solid darkgray;
  border-radius: 10px;
  color: darkgray;
  font-size: 34px;
  margin: 20px 0 300px;
  width: 100%;
  height: 15%;
  padding-top: 15px;
  padding-bottom: 30px;
  text-align: center;
}
.currentTask {
  margin-bottom: 15px;
  color: black;
}
.text {
  font-weight: bold;
  color: #1890ff;
}
</style>
