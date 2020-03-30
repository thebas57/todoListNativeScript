<template>
    <GridLayout columns="200,*" >
        <Label @tap="toggle" col="0" :text="statusText"></Label>
        <Label :class="{'line-through':epicerieItem.done}" class="item-name" col="1" :text="epicerieItem.name"></Label>
            <GridLayout col="2" class="delete-container" >
                    <Label v-if="epicerieItem.done==true" @tap="deleteItem(epicerieItem)" text="🗑️"></Label>
            </GridLayout>
    </GridLayout>
</template>

<script>
    export default {
    props: ['epicerieItem'],
    template: `
    <GridLayout columns="200,*" >
        <Button col="0" @tap="toggle" :text="statusText"></Button>
        <Label col="1" @tap="toggle" :text="epicerieItem.name"></Label>
    </GridLayout>
    `,
    data: function() {
        return {
            
        };
    },
    computed: {
        statusText: function() {
            return this.epicerieItem.done ? 'Acheté' : 'Pas acheté';
        },

        
    },
    methods: {
        toggle: function() {
            //this.status = this.status === 0 ? 1:0;
            this.$emit('toggleDone', this.epicerieItem);
        },
        deleteItem: function(epicerieItem) {
            confirm("Voulez-vous vraiment supprimer "+ this.epicerieItem.name + "?")
                .then(result=> {
                    if(result){
                        this.epicerieItem.deleted = true; 
                    }                    
                })
                .catch(function () {
		            console.log('Clicked on cancel');
	            });
            }   
        }
    }
</script>

<style lang="scss" scoped>
page {
    label {
        color:white;
    }
    .line-through {
        text-decoration: line-through;
    }
}

.item-name {
    animation-name: show;
    animation-duration: 0s;
    animation-fill-mode: forwards;
}
.delete {
    display:none;
}

@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

<style scoped lang="scss">

label {
    background-color: transparent;
}

.delete-container {
    width : 10%;
    padding: 10 15;
    vertical-align: middle;
    image {
        background-color: transparent;
        height: 25;
    }
    StackLayout {
        padding: 5;
    }
}

</style>