import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app/app.component';

import {DATA as ProjectConfigData} from './../configs/registration';
import {
    ArrayWrapperFactory, CoreFunctionalModule,
    DataManipulation, functionFactoryDataConfig, ManagerConfigFactory,
    REGISTRATION_CONFIG_DATA_TOKEN
} from 'md-core-new';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreFunctionalModule
    ],
    providers: [
        DataManipulation,
        ArrayWrapperFactory,
        ManagerConfigFactory,
        {
            provide: REGISTRATION_CONFIG_DATA_TOKEN,
            useFactory: functionFactoryDataConfig(ProjectConfigData),
            deps: [DataManipulation],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
