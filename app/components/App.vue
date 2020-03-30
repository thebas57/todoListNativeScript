<template>
  <Page>

    <ActionBar title="TodoList Epicerie">
      <ActionItem text="Ajouter" @tap="onAddTap"></ActionItem>
      <ActionItem text="Afficher tout" @tap="showAll"></ActionItem>
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="accueil"/>
    </ActionBar>
    <StackLayout>
      <EpicerieList :items ="items" />
    </StackLayout>
  </Page> 
</template>

<script>
import epicerieData from "../epicerie-data.json";
import EpicerieList from './EpicerieList';
import * as localStroage from "nativescript-localstorage";
import AddItem from './AddItem';
import * as btoa from 'btoa';
import {encode, decode} from "base-64";
import * as utf8 from "utf8";
const axios = require("axios");

  export default {
    components: { EpicerieList, AddItem},
    data() {
      return {
        items:epicerieData.epicerieItems
      };
    },
    methods: {
      onAddTap() {
        const newId = new Date().getTime();
        this.$showModal(AddItem, {props: { id: newId}}). then (newItem => {
          if (newItem) {
            this.items.push(newItem);
          }
        });
      },
      showAll() {
        this.items.forEach(element => {
          element.deleted = false;
        });   
      },
      accueil() {
        this.$navigateBack(); 
      },
      getTodos() {
      if (localStorage.getItem("items")) {
        this.items = JSON.parse(localStorage.getItem("items"));
      }
    },
    },
    mounted() {
      this.getTodos();

      if(!global.btoa) {
      global.btoa = encode;
    }
    },
    watch: {
      items: {
        handler: function(updatedList) {
          localStorage.setItem("items", JSON.stringify(updatedList));
        },
        deep: true
      }
    }
  };
</script>

<style scoped>
    ActionBar {
        background-color: brown;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
 