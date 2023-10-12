<template>
    <main class="main">
        <div class="box" v-for="x in 40">{{ x }}</div>        
    </main>
</template>

<style scoped lang="scss">
@mixin gradient($deg:0deg){
    content: '';
    position: fixed;
    height: 10%;
    width: 100%;
    background-color: $background-color;
    background: linear-gradient($deg, transparent, $background-color);
}
.main{
    position: relative;
    background-color: $background-color;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
    padding: 0.5rem;
    &::before {
        @include gradient(0deg);
        top:20;
    }
    
    &::after {
        @include gradient(180deg);
        bottom: 0;
    }
}

.box {
    background-color:grey;
    height:400px;
}
</style>