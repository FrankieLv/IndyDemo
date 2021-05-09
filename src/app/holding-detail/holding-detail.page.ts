import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { DummyData } from '../providers/data';

@Component({
  selector: 'app-holding-detail',
  templateUrl: './holding-detail.page.html',
  styleUrls: ['./holding-detail.page.scss'],
})
export class HoldingDetailPage {
  holdingDetail: any;

  constructor(
    public dummyData: DummyData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController
  ) { 

  }

  ionViewDidEnter() {
    this.showLoadingOverlay();
  }


  async handleManageHoldingButtonClick() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Manage Holding ',
      buttons: [
        { text: 'Update', icon: 'pencil'},
        { text: 'Trasfer', icon: 'arrow-redo', },
        { text: 'Copy', icon: 'copy', },
        { text: 'Dispose', icon: 'trash'}
      ],
      cssClass: "holding-management"
    });

    await actionSheet.present();
  }

  async showLoadingOverlay() {
    const loading = await this.loadingCtrl.create({
      spinner: "circular",
      duration: 500,
      message: 'Loading',
      translucent: true
    });
    await loading.present();
    await loading.onDidDismiss().then((overlayDetail) => {
      const holdingId = this.route.snapshot.paramMap.get('id');
      this.dummyData.getHoldingDetail(holdingId).subscribe((data: any) => {
        for(const holdingDetail of data){
          if(holdingDetail && holdingDetail.id === holdingId){
            this.holdingDetail = holdingDetail;
            break;
          }
        }
      });
    });
  }

}
