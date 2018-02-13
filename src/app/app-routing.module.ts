import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuardService} from '@services/auth/auth-guard.service';
import {GuidelineComponent} from './guideline/guideline.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
    {
      path: 'personal', // Персональный раздел
      canActivate: [AuthGuardService],
      loadChildren: 'app/personal/personal.module#PersonalModule'
    },
    {
      path: 'guideline', // Страница входа в систему,
      component: GuidelineComponent
    },
    {
      path: 'auth', // Страница входа в систему,
      component: AuthComponent
    },
    {
      path: '', // Главная страница
      loadChildren: 'app/home/home.module#HomeModule'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule {

}
