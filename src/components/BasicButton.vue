<template>
    <button type="button" class="btn_primary">
        <span>{{btnText}}</span>
    </button>
</template>

<script>
export default {
    props: ['btnText']
}
</script>
<style lang="scss">
    @import '../assets/css/common.scss';
    .btn_primary {
        color: #fff;
        background-color: $bg_primary;
    }
</style>