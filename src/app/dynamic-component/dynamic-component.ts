import { CommonModule } from '@angular/common';
import { Component, inject, ViewContainerRef } from '@angular/core';

@Component({ 
  selector: 'app-admin-bio',
  template: `
    Admin Bio
  `,
})
export class AdminBio { }

@Component({ 
  selector: 'app-standard-bio',
  template: `
    Standard Bio
  `,
})
export class StandardBio { }
@Component({
  selector: 'app-custom-dynamic',
  imports: [
    CommonModule
  ],
  template: `
    <p>Example of ngComponentOutlet</p>
    <ng-container *ngComponentOutlet="getBioComponent()" /> 
    <button (click)="isAdmin = !isAdmin">Change Bio</button>
  `,
})
export class CustomDynamicComp {
  isAdmin = true;
  getBioComponent() {
    return this.isAdmin ? AdminBio : StandardBio;
  }
}

@Component({
  selector: 'leaf-content',
  template: `
    This is the leaf content
  `,
})
export class LeafContent {}

@Component({
  selector: 'inner-item',
  template: `
    <button (click)="loadContent()">Load content</button>
  `,
})
export class InnerItem {
  private viewContainer = inject(ViewContainerRef);
  loadContent() {
    this.viewContainer.createComponent(LeafContent);
  }
}


@Component({
  selector: 'outer-container',
  template: `
    <p>This is the example of ViewContainerRef</p>
    <p>This is the start of the outer container</p>
    <inner-item />
    <p>This is the end of the outer container</p>
  `,
  imports: [
    InnerItem
  ]
})
export class OuterContainer {}

@Component({
  selector: 'app-dynamic-component',
  imports: [OuterContainer, CustomDynamicComp],
  template: `
    <h1> Uses ViewContainerRef </h1>
    <outer-container></outer-container>
    <h1> Uses NgComponentOutlet </h1>
    <app-custom-dynamic></app-custom-dynamic>
  `,
  styles: ``
})
export class DynamicComponent {

}


