<template>
    <Page>
        <ActionBar title="TodoList Epicerie API">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="accueil" />
        </ActionBar>
         <GridLayout columns="250,*" rows="75,75,100">
			<Button  col="5" row="0" class="button" text="S'inscrire"  />
			<Button  col="5" row="1" class="button" text="Se connecter" @tap="connect" />
        </GridLayout>
        
    </Page>
</template>

<script>
import Connect from "./Connect"
import Accueil from "./Accueil"

export default {
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