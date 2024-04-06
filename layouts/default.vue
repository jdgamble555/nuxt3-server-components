<template>
    <main>
        <slot />
        <nav class="flex gap-3 justify-center mt-5">
            <NuxtLink to="/">Client</NuxtLink>
            <NuxtLink to="/about">Server</NuxtLink>
            <NuxtLink to="/island">Island</NuxtLink>
        </nav>
    </main>
</template>