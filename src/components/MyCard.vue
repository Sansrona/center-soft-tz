<template>
  <div class="card" :draggable="true" v-on:dragstart="dragStart">
    <div class="card-header">
      <h5 class="title">
        {{ todo.title }}
      </h5>
      <div class="btns">
        <a-switch :default-checked="todo.done" @change="onChange(todo.id)" />
        <a-icon type="delete" class="icon" @click="onDelete(todo.id)" />
      </div>
    </div>
    <a-divider />
    <p class="description">{{ todo.description }}</p>
    <div class="meta">
      <div class="date">
        Дата создания: {{ todo.createdAt.toLocaleDateString() }}
      </div>
      <div class="status">
        Статус:
        <span v-if="todo.done" class="green">Завершен</span>
        <span v-else class="red">Еще действует</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["todo"],
  methods: {
    ...mapMutations(["changeStatus", "removeItem"]),
    onChange(id) {
      this.changeStatus(id);
    },
    onDelete(id) {
      this.removeItem(id);
    },
    dragStart(event) {
      event.dataTransfer.setData("task", this.todo.title);
    },
  },
};
</script>
<style scoped>
.card {
  border: 1px solid darkgray;
  border-radius: 10px;
  padding: 10px 15px;
}

.card-header {
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 15px;
  font-weight: bold;
}

.description {
  color: #1890ff;
}

.meta {
  display: flex;
  color: darkgray;
  justify-content: space-between;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon {
  font-size: 20px;
  color: darkgray;
  margin-left: 5px;
  cursor: pointer;
}
.icon:hover {
  color: #1890ff;
  transition: all 0.3s;
}

.green {
  color: green;
}

.red {
  color: red;
}
</style>
