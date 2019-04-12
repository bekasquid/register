<template>
    <span class="ps_box int_id" :class="{ focus }">
        <input type="text" class="int"
            @focus="inputEvent" 
            @focusout="inputEvent"
            @keyup="inputEvent">
    </span>
    
</template>

<script>
export default {
    data() {
        return {
            focus: false
        }
    },
    methods: {
        inputEvent(e) {
            console.log(e);
            this.$emit('inputEvent', e);
            if ((e.type == 'focus' || e.type == 'keyup') ) {
                // activate the effect
                this.focus = true;
            }
            else {
                this.focus = false;
            }
        }
    }
}
</script>
