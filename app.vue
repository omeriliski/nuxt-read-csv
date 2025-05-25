<script setup>
const { data, error, pending } = await useAsyncData('users', () =>
  $fetch('/api/users')
)

console.log("users==>", data);
console.log("error==>", error);
console.log("pending==>", pending);
</script>

<template>
  <ul>
  hallo
    <li v-for="user in data" :key="user.id">
      {{ user.Name }} ({{ user.Text }})
    </li>
  </ul>
</template>

