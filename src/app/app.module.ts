import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';

import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ChooseProgramComponent } from './components/choose-program/choose-program.component';
import { MainComponent } from './components/main.component/main.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { LogRegComponent } from './components/log-reg/log-reg.component';
import { SelectLevelComponent } from './components/select-level/select-level.component';
import { SelectThemeComponent } from './components/select-theme/select-theme.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterSocialComponent } from './components/footer-social/footer-social.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { FooterAccountComponent } from './components/footer-account/footer-account.component';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';
import { SearchComponent } from './components/search/search.component';
import { LessonPageMainComponent } from './components/lesson-page-main/lesson-page-main.component';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderOtherPagesComponent } from './components/header-other-pages/header-other-pages.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationMainComponent } from './components/registration-main/registration-main.component';
import { LessonPageContentComponent } from './components/lesson-page-content/lesson-page-content.component';
import { HomeWorkComponent } from './components/home-work/home-work.component';
import { LessonPageInfoComponent } from './components/lesson-page-info/lesson-page-info.component';
import { LessonSideComponent } from './components/lesson-side/lesson-side.component';
import { LessonSideListComponent } from './components/lesson-side-list/lesson-side-list.component';
import { LessonSideItemComponent } from './components/lesson-side-item/lesson-side-item.component';
import { LessonSideHeaderComponent } from './components/lesson-side-header/lesson-side-header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { NotFoundContentComponent } from './components/not-found-content/not-found-content.component';

import { LocalStoreService } from './services/local-store.service';
import { GetCardsService } from './services/get-cards.service';
import { ShareService } from './services/shared.service';
import { LocalStoreLessonsService } from './services/local-store-lessons';
import { GetLessonsService } from './services/get-lessons.service';
import { LocalStoreNavLessonsService } from './services/local-store-nav-lesson';
import { GetNavLessonsService } from './services/get-nav-lessons';
import { PathFieldsService } from './services/path-fields.service';
import { NavNameLessonsService } from './services/local-store-nav-name.service';
import { GetNavNameLessonsService } from './services/get-nav-name.service';
import { NameCoursesSearchService } from './services/name-courses-search.service';
import { GetPromiseService } from './services/get-promise.service';
import { FieldsLocalStoreService } from './services/fields-local-store.service';

const appRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'login', component: LoginMainComponent },
  { path: 'registration', component: RegistrationMainComponent },
  { path: 'lesson/:id', component: LessonPageMainComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
  ],
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    NavigationHeaderComponent,
    MainComponent,
    AdvantagesComponent,
    LogRegComponent,
    SelectLevelComponent,
    ChooseProgramComponent,
    SelectThemeComponent,
    LessonCardComponent,
    ListCardsComponent,
    FooterComponent,
    FooterSocialComponent,
    FooterMainComponent,
    FooterAccountComponent,
    FooterContactComponent,
    SearchComponent,
    LessonPageMainComponent,
    LoginMainComponent,
    LoginComponent,
    HeaderOtherPagesComponent,
    RegistrationComponent,
    RegistrationMainComponent,
    LessonPageContentComponent,
    HomeWorkComponent,
    LessonPageInfoComponent,
    LessonSideComponent,
    LessonSideListComponent,
    LessonSideItemComponent,
    LessonSideHeaderComponent,
    NotFoundComponent,
    PreloaderComponent,
    NotFoundContentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [LocalStoreService,
              GetCardsService,
              ShareService,
              LocalStoreLessonsService,
              GetLessonsService,
              LocalStoreNavLessonsService,
              GetNavLessonsService,
              PathFieldsService,
              NavNameLessonsService,
              GetNavNameLessonsService,
              NameCoursesSearchService,
              GetPromiseService,
              FieldsLocalStoreService,
             ],
})

export class AppModule {

}
