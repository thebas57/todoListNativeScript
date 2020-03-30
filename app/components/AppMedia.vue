<template>
    <Page>
        <ActionBar title="TodoList Epicerie">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="accueil"/>
        </ActionBar>
         <GridLayout columns="250,*" rows="75,75,100">
			<Button  col="5" row="1" class="button" text="Prendre une photo" @tap="takePicture" />
			<Button  col="5" row="0" class="button" text="Choisir une photo" @tap="selectPicture" />
			<WrapLayout class="test" col="1" row="2">
				<Image class="test" v-for="img in images" :src="img.src" width="75" height="75" />
			</WrapLayout>
        </GridLayout>
        
    </Page>
</template>

<script>
import * as camera from "nativescript-camera";
import * as imagepicker from "nativescript-imagepicker";

import { Image } from "tns-core-modules/ui/image";

export default {
	data() {
		return {
			images:[]
		}
	},
	methods:{
		selectPicture() {

			let context = imagepicker.create({
				mode: 'multiple' 
			});

			context.authorize()
			.then(function() {
				return context.present();
			})
			.then(selection => {
				selection.forEach(selected => {
					
					console.log(JSON.stringify(selected));

					let img = new Image();
					img.src = selected;
					this.images.push(img);
				});
			}).catch(function (e) {
				console.log('error in selectPicture', e);
			});

		},
		takePicture() {
			camera.requestPermissions()
			.then(() => {
				camera.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery:false })
				.then(imageAsset => {
					let img = new Image();
					img.src = imageAsset;
					this.images.push(img);
					console.log('ive got '+this.images.length+' images now.');
				})
				.catch(e => {
					console.log('error:', e);
				});
			})
			.catch(e => {
				console.log('Error requesting permission');
			});
        },
        accueil() {
            this.$navigateBack(); 
      },
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
    .test {
        
    }
</style>