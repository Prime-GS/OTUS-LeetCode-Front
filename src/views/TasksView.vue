<template>
  <h2>Задания</h2>
  <div class="row">
    <div v-for="task in result?.tasks.data" :key="task.id" class="card col-12">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasks } from "../graphql/hooks/tasks";

const { result } = useTasks();
</script>
