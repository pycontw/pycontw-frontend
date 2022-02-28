<template>
    <div class="error">
        <img
            src="~/static/img/error/Error.svg"
            alt="Error picture of PyConTW 2021"
            width="93px"
            height="93px"
        />
        <h2>{{ $t('errorTitle') }}</h2>
        <p>{{ $t('errorDescription') }}</p>
    </div>
</template>

<script>
import i18n from './Error.i18n'
export default {
    i18n,
    name: 'Error',
}
</script>

<style scoped>
.error {
    position: relative;
    width: 100vw;
    height: 1000px;
    background-color: #121023;
    top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.error h2,
.error p {
    color: #c386ae;
    font-weight: 700;
    padding-top: 40px;
}

.error h2 {
    font-size: 40px;
}

.error p {
    font-size: 18px;
}

@media (max-width: 767px) {
    .error {
        height: 800px;
    }

    .error h2 {
        font-size: 28px;
    }

    .error p {
        font-size: 13px;
    }

    .error img {
        width: 80px;
        height: 80px;
    }
}

@media (max-width: 567px) {
    .error {
        height: 700px;
    }

    .error h2 {
        font-size: 24px;
    }

    .error img {
        width: 70px;
        height: 70px;
    }
}
</style>
