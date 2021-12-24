import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CountryModule } from './country/country.module';

const routes: Route[] = [
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  { path: '', loadChildren: () => CountryModule },
];
// ovo tsconfig : esnext
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
  