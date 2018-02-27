import {Component, OnInit} from '@angular/core';
import {Manager as ManagerConfig, ManagerConfigFactory} from 'md-core-new';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    myManagerConfig: ManagerConfig;

    constructor(
        private managerConfig: ManagerConfigFactory
    ) { }

    ngOnInit(): void {
        this.myManagerConfig = this.managerConfig.create();

        console.log(this.myManagerConfig.get('/system/main/'));
    }
}
