<template>
    <Page>
        <ActionBar title="TodoList Epicerie API">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="accueil" />
        </ActionBar>
         <GridLayout columns="250,*" rows="75,75,100">
             <Label col="1" row="0" class="button" text="Vous êtes bien connecté " ></Label>
        </GridLayout>
        
    </Page>
</template>

<script>
import Connect from "./Connect"
import Accueil from "./Accueil"

export default {
    props:['nom','data'],
	data() {

	},
	methods:{
        accueil() {
            this.$navigateTo(Accueil);
      },
        connect() {
            this.$showModal(Connect).then(console.log("ok"));
      },
    },
    mounted() {
        alert(this.data.todos[0].content);
    }
}
</script>

<style scoped>
    ActionBar {
        background-color: brown;
        color: #ffffff;
    }
    .button {
        color:white;
        width:100%;
        margin-top : 10px;
        margin-bottom: 10px;
        margin-right: 31%;
    }
</style>