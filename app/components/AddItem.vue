<template>
    <Page>
        <StackLayout>
            <Label style="color:white;" text="Ajouter un element"></Label>
            <TextField v-model="name" hint="Entrer un nom"></TextField>
            <Button text="Enregistrer" @tap="onSaveTap"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    export default {    
    props: ['id'],
    data: function() {
        return {
            name: ''
        };
    },
    methods: {
        onSaveTap() {
            const newItem = {
                id: this.id,
                name: this.name,
                done: false,  
                deleted: false
            };
            this.$modal.close(newItem);
        }
    }
};
    
</script>

<style lang="scss">

textField {
    background-color: transparent;
    color: white;
}
textField:focus {
    background-color: transparent;
    color: white;
}
label,button {
        color:black;
    }
</style>