import { Routes } from "@angular/router";
import { UserHomeComponent } from "./user-home/user-home.component";
import { AccountAccountConceptComponent } from "./components/accounts/account-account-concept/account-account-concept.component";
import { NotFoundComponent } from "./components/commons/not-found/not-found.component";
import { FilesFormComponent } from "./components/files/files-form/files-form.component";
import { FilesViewComponent } from "./components/files/files-view/files-view.component";
import { OwnerFilesViewComponent } from "./components/files/owner-files-view/owner-files-view.component";
import { CadastreOwnerPlotListComponent } from "./components/owners-X-plots/cadastre-owner-plot-list/cadastre-owner-plot-list.component";
import { CadastrePlotOwnerListComponent } from "./components/owners-X-plots/cadastre-plot-owner-list/cadastre-plot-owner-list.component";
import { OwnerDetailComponent } from "./components/owners/owner-detail/owner-detail.component";
import { OwnerFormComponent } from "./components/owners/owner-form/owner-form.component";
import { OwnerListComponent } from "./components/owners/owner-list/owner-list.component";
import { CadastrePlotDetailComponent } from "./components/plots/cadastre-plot-detail/cadastre-plot-detail.component";
import { PlotFormComponent } from "./components/plots/plot-form/plot-form.component";
import { PlotsListComponent } from "./components/plots/plots-list/plots-list.component";
import { RolesDetailComponent } from "./components/roles/roles-detail/roles-detail.component";
import { RolesFormComponent } from "./components/roles/roles-form/roles-form.component";
import { RolesListComponent } from "./components/roles/roles-list/roles-list.component";
import { UserUserDetailComponent } from "./components/users/user-user-detail/user-user-detail.component";
import { UserUserFormComponent } from "./components/users/user-user-form/user-user-form.component";
import { UserUserListComponent } from "./components/users/user-user-list/user-user-list.component";
import { UserUserTenantFormComponent } from "./components/users/user-user-tenant-form/user-user-tenant-form.component";
import {CadastreOwnerReportComponent} from './components/reports/cadastre-owner-report/cadastre-owner-report.component';
import {UsersUserReportComponent} from './components/reports/users-user-report/users-user-report.component';
import {
  CadastreOwnerAssignPlotComponent
} from './components/owners/cadastre-owner-assign-plot/cadastre-owner-assign-plot.component';
import { authGuard } from "./guards/auth.guard";

export const USER_ROUTES: Routes = [
    /* { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, */
    //{ path: '', component: UserHomeComponent },
    { path: '', redirectTo: '/owner/reports', pathMatch: 'full', /* canActivate: [authGuard] */ },
    { path: 'owner/form', component: OwnerFormComponent, canActivate: [authGuard] },
    { path: 'owner/form/:id', component: OwnerFormComponent, canActivate: [authGuard] },
    { path: 'owner/detail/:id', component: OwnerDetailComponent, canActivate: [authGuard] },
    { path: 'owner/list', component: OwnerListComponent, canActivate: [authGuard] },
    { path: 'plot/form', component: PlotFormComponent, canActivate: [authGuard] },
    { path: 'plot/form/:id', component: PlotFormComponent, canActivate: [authGuard] },
    { path: 'plot/list', component: PlotsListComponent, canActivate: [authGuard] },
    { path: 'files/form', component: FilesFormComponent, canActivate: [authGuard] },
    { path: 'files/view', component: FilesViewComponent, canActivate: [authGuard] },
    { path: 'files/:ownerId/view', component: OwnerFilesViewComponent, canActivate: [authGuard] },
    { path: 'user/list', component: UserUserListComponent, canActivate: [authGuard] },
    { path: 'user/form', component: UserUserFormComponent, canActivate: [authGuard] },
    { path: 'user/form/:id', component: UserUserFormComponent, canActivate: [authGuard] },
    { path: 'user/detail/:id', component: UserUserDetailComponent, canActivate: [authGuard] },
    { path: 'roles/list', component: RolesListComponent, canActivate: [authGuard] },
    { path: 'user/tenant/form', component: UserUserTenantFormComponent, canActivate: [authGuard] },
    { path: 'user/tenant/form/:id', component: UserUserTenantFormComponent, canActivate: [authGuard] },
    { path: 'roles/form', component: RolesFormComponent, canActivate: [authGuard] },
    { path: 'roles/form/:roleId', component: RolesFormComponent, canActivate: [authGuard] },
    { path: 'roles/detail/:roleId', component: RolesDetailComponent, canActivate: [authGuard] },
    { path: 'owners/plot/:plotId', component: CadastreOwnerPlotListComponent, canActivate: [authGuard] },
    { path: 'owner/reports', component: CadastreOwnerReportComponent, canActivate: [authGuard] },
    { path: 'user/reports', component: UsersUserReportComponent, canActivate: [authGuard] },
    { path: 'plots/owner/:ownerId', component: CadastrePlotOwnerListComponent, canActivate: [authGuard] },
    { path: 'plot/detail/:id', component: CadastrePlotDetailComponent, canActivate: [authGuard] },
    { path: 'account/concept/:plotId', component: AccountAccountConceptComponent, canActivate: [authGuard] },
    { path: 'owner/assign', component: CadastreOwnerAssignPlotComponent, canActivate: [authGuard] },
    { path: '**', component: NotFoundComponent, canActivate: [authGuard] },
];
