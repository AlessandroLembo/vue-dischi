<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <header class="bg-body-tertiary">
        <div class="container py-2">
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="nav-link d-lg-none" href="/">
                    <img class="page-icon img-fluid rounded" src="../../public/logo myvideogames.png" alt="">
                </a>
                <div class="collapse navbar-collapse" id="navbar">
                    <div class="navbar-nav">
                        <a class="nav-link d-none d-lg-block" href="/">
                            <img class="page-icon img-fluid rounded" src="../../public/logo myvideogames.png" alt="">
                        </a>
                        <router-link :to="{ name: 'home' }" class="text nav-link d-flex align-items-center">
                            Home
                        </router-link>
                        <router-link :to="{ name: 'games' }" class="text nav-link d-flex align-items-center">
                            Videogames
                        </router-link>
                        <router-link :to="{ name: 'contact_page' }" class="text nav-link d-flex align-items-center">
                            Contact
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    .text {
        text-transform: uppercase;

        &:hover {
            text-shadow: 0 0 1px rgba(255, 0, 0, 0.444);
        }
    }
}

.page-icon {
    width: 50px;
    height: 50px;
}

img {



    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
}
</style>