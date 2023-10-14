<template>
    <main class="main">
        <div class="main__container">
            <slot/>        
        </div>
    </main>
</template>

<style scoped lang="scss">
@mixin gradient($deg:0deg){
    content: '';
    position: fixed;
    height: 5%;
    width: 100%;
    background-color: $background-color;
    background: linear-gradient($deg, transparent, $background-color);
}
.main{
    background-color: transparent;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    max-height: 100%;
    &__container{
        max-height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0.5rem;
        gap: 0.5rem;
    }
    &::before {
        @include gradient(0deg);
        top:20;
    }
    &::after {
        @include gradient(180deg);
        bottom: 0;
    }
}
</style>