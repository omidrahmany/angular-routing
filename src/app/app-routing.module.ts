import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./services/auth-guard.service";
import {CanDeactivateGuard} from "./services/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolverService} from "./services/server-resolver.service";

const appRoutes: Routes = [
  {path: "", component: HomeComponent}, /* http://localhost:4200 */
  {
    path: "users", component: UsersComponent,
    children: [{path: ":id/:name", component: UserComponent}]
  },
  {
    path: "servers",
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard], component: ServersComponent,
    children: [
      {path: ":id", component: ServerComponent, resolve: {selectedServer: ServerResolverService}},
      {path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGuard],}]
  },
  // {path: "not-found", component: PageNotFoundComponent},
  {path: "not-found", component: ErrorPageComponent, data: {msg: "the page is not found!", code: 404}},
  {path: "**", redirectTo: "/not-found"}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
