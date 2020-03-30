<template>
    <Page>
        <StackLayout>
            <Label style="color:white;" text="Connexion"></Label>
            <TextField v-model="adresse" hint="Adresse"></TextField>
            <TextField v-model="mdp" hint="Mot de passe" secure="true"></TextField>
            <Button text="Se connecter" @tap="connect"></Button>
        </StackLayout>
    </Page>
</template>

<script>
const axios = require("axios");
import * as btoa from 'btoa';
import {encode, decode} from "base-64";
import * as utf8 from "utf8";
import ApiTodo from "./ApiTodo";

    export default {    

    data: function() {
        return {
            adresse: 'theohelf@gmail.com',
            mdp: 'baoBhPb0eC',
            token: '',
        };
    },
    methods: {       
        saveSession(result) {
            axios.defaults.headers.Authorization = 'Bearer '+ result.token;
            axios({
            method: "get",
            url: "https://api.todolist.sherpa.one/users/"+ result.user.uuid + "/todos",
            })
            .then(result => {
                console.log(result.data);
                this.$navigateTo(ApiTodo, {
                    props : {
                        nom:result.data.firstname,
                        data:result.data
                    }
                }); 
                //this.connected = true;
            })
            .catch(err => {
                console.error(err);
                alert("Problème récupération de la liste");
            });
        },
        connect() {
            axios({
            method: "post",
            url: "https://api.todolist.sherpa.one/users/signin",
            auth: {
                username: this.adresse,
                password: this.mdp
            }
            })
            .then(result => {
                console.log(result.data);
                this.saveSession(result.data);
                //this.connected = true;
            })
            .catch(err => {
                console.error(err);
                alert("Identification impossible");
            });
            this.$modal.close();
        },

    },
    mounted() {
      if(!global.btoa) {
      global.btoa = encode;
    }
    },
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