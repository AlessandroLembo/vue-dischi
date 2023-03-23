<script>
export default {
    name: 'GameCard',
    props: { game: Object }
}
</script>

<template>
    <router-link :to="{ name: 'game-detail', params: { slug: game.slug } }">
        <div class="card h-100">
            <img v-if="game.image" :src="game.image" class="rounded" :alt="game.slug">
            <img v-else src='https://marcolanci.it/utils/placeholder.jpg' class="rounded" :alt="game.slug">
            <div class="card-body m-0 p-0">
                <h5 class="card-title">{{ game.title }}</h5>
                <!-- <p class="card-text">{{ game.description }}</p> -->
                <span class="card-price">€ {{ game.price }}</span>
                <!-- <a id="card-button" href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </router-link>
</template>
<style lang="scss" scoped>
.card {
    position: relative;
    height: 240px;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.249);
    border: 0;
    cursor: pointer;

    &:hover .card-price {
        background-color: rgb(17, 0, 255);
    }

    &:hover {
        border: 1px solid blue;
    }




    .card-title {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    #card-button {
        position: absolute;
        bottom: -15px;
        right: -15px;
        box-shadow: 7px 5px 13px 0px rgba(0, 0, 0, 0.61);


    }

    .card-price {
        height: 50px;
        width: 50px;
        position: absolute;
        bottom: 7px;
        left: 5px;
        background-color: rgb(255, 1, 1);
        color: #ffffff;
        border-radius: 50%;
        padding: 8px 2px;
        display: block;
        font-size: 10px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 5px 3px 10px 0px rgba(0, 0, 0, 0.534);

        &:hover {
            transform: scale(1.1);
        }
    }
}

img {
    height: 100%;
    object-fit: cover;
    transition: all 0.2s ease-in-out;


    // width: 450px;
    &:hover {
        transform: scale(1.05);
        filter: grayscale(1);
    }
}



h5 {
    // background-color: rgba(0, 0, 0, 0.507);
    text-shadow: 1px 1px 30px rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    font-size: 1.5rem;

}
</style>