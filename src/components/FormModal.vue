<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="title" prop="title" label="Задача">
      <a-input
        v-model="form.title"
        @blur="
          () => {
            $refs.title.onFieldBlur();
          }
        "
      />
    </a-form-model-item>
    <a-form-model-item
      ref="description"
      prop="description"
      label="Описание задачи"
    >
      <a-input
        v-model="form.description"
        @blur="
          () => {
            $refs.description.onFieldBlur();
          }
        "
        type="textarea"
      />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 8 }">
      <a-button type="primary" @click="onSubmit"> Добавить </a-button>
      <a-button style="margin-left: 10px" @click="resetForm">
        Очистить
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import { mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
      form: {
        title: "",
        description: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "Введите название Задачи",
            trigger: "blur",
          },
          {
            min: 3,
            max: 20,
            message: "Длина от 3 до 20 символов",
            trigger: "blur",
          },
        ],
        description: [
          {
            required: true,
            message: "Введите описание Задачи",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(["addItem"]),
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.addItem({
            id: uuidv4(),
            title: this.form.title,
            description: this.form.description,
            createdAt: new Date(),
            done: false,
          });

          this.resetForm();
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
