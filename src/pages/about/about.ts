import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public photos: any;
  public base64image; string;
  constructor(public navCtrl: NavController, private camera: Camera, private alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.photos = [];
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      targetWidth: 900,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64image);
        }, (err) => {
      // Handle error
    });
  }

  deletePhoto(index) {
    const confirm = this.alertCtrl.create({
      title: 'Are you sure you want to delete this?',
      message: '',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
           
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.photos.splice(index,1);
          }
        }
      ]
    });
    confirm.present();

  }
}



