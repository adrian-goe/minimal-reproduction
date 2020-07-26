import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent {

    onLoad(event: string) {
        console.log(event);
    }

    onError(event: string) {
        console.log(event);
    }
}
