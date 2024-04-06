<script setup lang="ts">

const data = await useAbout()

</script>

<template>
    <div class="flex flex-col items-center justify-center my-5">
        <div class="border w-[400px] p-5 flex flex-col gap-3">
            <h1 class="text-3xl font-semibold">{{ data.name }} - Server</h1>
            <p>{{ data.description }}</p>
        </div>
    </div>
    <Counter  />
</template>