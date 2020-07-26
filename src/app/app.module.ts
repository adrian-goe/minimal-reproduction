import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectDetailComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        ScrollToModule.forRoot(),
        MarkdownModule.forRoot({
            loader: HttpClient,
            /*markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    breaks: false,
                    pedantic: false,
                    smartLists: true,
                    smartypants: false,
                },
            }*/
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
