<template>
    <Page ios:class="plat-ios" android:class="plat-android">
        <ActionBar title="TodoList Epicerie">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onBackTap"/>
        </ActionBar>
            <GridLayout columns="250,*" rows="75,75">
            <Button col="2" row="0" class="retour" style="color:white" text="Retour" @tap="onBackTap"></Button>
            <Label row="0" style="color:white" col="0" :text="epicerieItem.name"></Label>
            <Button row="1" style="color:white" col="0" :text="statusText" @tap="toggle"></Button>
            <Label v-if="epicerieItem.done==true" @tap="deleteItem(epicerieItem)" style="margin-top:30px;" row="1" col="1" text="🗑️"></Label>
            </GridLayout>
        
    </Page>
</template>

<script>
    export default {    
    props: ['epicerieItem'],
    data: function() {
        return {
            
        };
    },
    computed: {
        statusText: function() {
            return this.epicerieItem.done ? 'Acheté' : 'Pas acheté'; 
        }
    },
    methods: {
        onBackTap() {
            this.$navigateBack(); 
        },
        
        toggle: function() {
            this.epicerieItem.done = !this.epicerieItem.done;
            //this.status = this.status === 0 ? 1:0;
            //this.$emit('toggleDone', this.epicerieItem);
        },
        deleteItem: function(epicerieItem) {
            confirm("Voulez-vous vraiment supprimer "+ this.epicerieItem.name + "?")
                .then(result=> {
                    if(result){
                        this.epicerieItem.deleted = true;
                        this.$navigateBack(); 
                    }                    
                })
                .catch(function () {
		            console.log('Clicked on cancel');
	            });
            }  
    }
};
    
</script>

<style scoped>
.plat-ios {
    color:black;
}
.plat-android {
    color:black;
}
button {
    width:50%;
}
ActionBar {
        background-color: brown;
        color: #ffffff;
    }

</style>