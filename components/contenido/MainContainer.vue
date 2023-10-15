<template>
    <main class="main">
        <div class="main__container">
            <slot />
        </div>
    </main>
</template>

<style scoped lang="scss">
.main {
    background-color: transparent;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    max-height: 100%;

    &__container {
        max-height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto;
        padding: 0.5rem;
        gap: 0.5rem;
    }
}
</style>