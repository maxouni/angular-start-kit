import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeModule} from './home/home.module';
// import {AuthGuardService} from "./shared/services/auth-guard.service";

const routes: Routes = [
    {
      path: '', // Главная страница
      // canActivate: [AuthGuardService],
      loadChildren: 'app/home/home.module#HomeModule'
    },
    // {
    //   path: 'auth', // Добавление турнира
    //   component: AuthComponent
    // },
    // {
    //   path: 'add-tournament', // Добавление турнира
    //   // canActivate: [AuthGuardService],
    //   component: AddTournamentComponent
    // }
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
