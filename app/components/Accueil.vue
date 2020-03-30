<template>
  <Page>

    <ActionBar title="TodoList Epicerie">
    </ActionBar>
     <GridLayout columns="250,*" rows="100,100,100">
        <Button col="5" row="1" class="button" text="Application Todo List TEXTE" @tap="texte"></Button>
        <Button col="5" row="0" class="button" text="Application Todo List MEDIA" @tap="media" ></Button>
        <Button col="5" row="2" class="button" text="Application Todo List API" @tap="api" ></Button>
    </GridLayout>

  </Page> 
</template>

<script>
import * as localStroage from "nativescript-localstorage";
import App from "./App";
import AppMedia from "./AppMedia";
import AppApi from "./AppApi";

  export default {
    data() {
      return {
      };
    },
    methods: {
        texte() {
            this.$navigateTo(App);
        },
        media() {
            this.$navigateTo(AppMedia).catch(error => console.log(error));
        },
        api() {
            this.$navigateTo(AppApi).catch(error => console.log(error));
        }
    },
    mounted() {
    },
    watch: {

    }
  };
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
 