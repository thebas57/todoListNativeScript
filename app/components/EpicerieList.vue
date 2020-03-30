<template>
    <ListView for="item in activeItems" @itemTap="onItemTap">
        <v-template> 
            <EpicerieItem
            :epicerieItem="item" @toggleDone="onToggleDone"></EpicerieItem>
        </v-template>
    </ListView>
</template>

<script>
import EpicerieItem from "./EpicerieItem";
import Detail from "./Detail";

  export default {
    components: { EpicerieItem, Detail },
    props : ['items'],
    methods: {
        onItemTap(args) {
            this.$navigateTo(Detail, { 
                props: {
                    epicerieItem: args.item
                }
                /*
                transitioniOS: {
                    name: 'curl',
                    duration: 3000,curve: "easeIn"
                }
                */
            });
        },
        onToggleDone(epicerieItem) {
            //epicerieItem.done = !epicerieItem.done;
            const newItem = Object.assign(epicerieItem, { done: !epicerieItem.done});

            const idx = this.items.findIndex(i => i.id === epicerieItem.id);

            this.items = Object.assign([], this.items, { idx: newItem});
        }
    },
    computed: {
        activeItems: function() {
            return this.items.filter(function(item) {
                return !item.deleted;
            });
        }
    }
  };
</script>

<style lang="scss">
page {
    background-image: url("res://bg_inner");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>

