import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitorsComponent } from './exhibitors.component';
import { RouterModule } from '@angular/router';
import { exhibitorsRoutes } from './exhibitors.routing';
import { SingleExhibitorComponent } from './single-exhibitor/single-exhibitor.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ExhibitorsComponent, SingleExhibitorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(exhibitorsRoutes),
        SharedComponentsModule,
        FormsModule,
        SharedModule,
        MatInputModule,
    ]
})
export class ExhibitorsModule { }
