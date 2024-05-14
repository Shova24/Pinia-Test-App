<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<script>
import { useTaskStores } from "@/stores/Task.Store";
import { ref } from "vue";
export default {
  setup() {
    const taskStore = useTaskStores();

    const newTask = ref("");

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 10000),
        });
        newTask.value = "";
      }
    };

    return { handleSubmit, newTask };
  },
};
</script>