import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
    UserService,
    DestinatarioService,
    TransferenciaService
} from './service.index';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
      UserService,
      DestinatarioService,
      TransferenciaService
    ],
    declarations: []
})

export class ServiceModule {}
