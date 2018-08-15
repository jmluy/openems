import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';
import { Service, Websocket } from '../shared';

import { environment } from '../../../environments';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss'],
})
export class PopoverPage implements OnInit {

    public env = environment;


    constructor(
        public popoverController: PopoverController,
        public websocket: Websocket,
        public router: Router
    ) { }

    ngOnInit() {
    }

    close() {
        this.popoverController.dismiss();
    }

}
