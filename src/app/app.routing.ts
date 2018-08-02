import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumberParentComponent } from '../app/number-parent/number-parent.component';
import { StopwatchParentComponent } from '../app/stopwatch-parent/stopwatch-parent.component';
import { CpcolorParentComponent } from '../app/cpcolor-parent/cpcolor-parent.component';
import { CpthemeComponent } from '../app/cptheme/cptheme.component';
import { UiElementComponent } from '../app/ui-element/ui-element.component';
import { AppparentComponent } from '../app/appparent/appparent.component';
import { TestvcParentComponent } from '../app/testvc-parent/testvc-parent.component';
import { PersonComponent } from '../app/person/person.component';

let appRoutes: Routes = [
    { path: 'number', component: NumberParentComponent },
    { path: 'watch', component: StopwatchParentComponent },
    { path: 'color', component: CpcolorParentComponent },
    { path: 'theme', component: CpthemeComponent },
    { path: 'ui', component: UiElementComponent },
    { path: 'output', component: AppparentComponent },
    { path: 'testvc', component: TestvcParentComponent },
    { path: 'testcc', component: PersonComponent },
    { path: '', component: NumberParentComponent, pathMatch: 'full' } // redirect to home page on load
];

export let routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);