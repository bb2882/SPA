import { notFound } from "./common/not-found.component";
import { directivePageComponent } from "./pages/directve-page.component";
import { homePageComponent } from "./pages/home-page.component";
import { pipePageComponent } from "./pages/pipes-page.component";
import { tabsPageComponent } from "./pages/tabs-page.component";

export const appRoutes = [
    { path: '', component: homePageComponent },
    { path: 'tabs', component: tabsPageComponent },
    { path: 'directive', component: directivePageComponent },
    { path: 'pipe', component: pipePageComponent },
    { path: '**', component: notFound }
]