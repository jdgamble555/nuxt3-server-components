<template>
    <div class="flex flex-col items-center">
        <p class="flex gap-3">
            <span class="font-semibold">
                Number:
            </span>
            {{ count }}
        </p>
        <button class="p-3 mt-3 border border-1 rounded-lg" @click="increment">
            Increment
        </button>
    </div>
</template>

<script setup lang="ts">

const count = ref<number>(0)

function increment() {
    count.value++
}
</script>