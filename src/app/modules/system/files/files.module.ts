import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files.component';
import {NbCardModule, NbIconModule, NbListModule} from "@nebular/theme";



@NgModule({
  declarations: [
    FilesComponent
  ],
    imports: [
        CommonModule,
        NbCardModule,
        NbListModule,
        NbIconModule,
    ]
})
export class FilesModule { }
