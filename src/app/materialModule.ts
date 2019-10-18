import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule,MatButtonModule,
        MatMenuModule,MatCardModule,MatSidenavModule, 
        MatListModule,MatBadgeModule,MatGridListModule,
        MatDatepickerModule,MatFormFieldModule,MatSelectModule,
        MatAutocompleteModule,MatCheckboxModule,MatInputModule,MatExpansionModule,MatNativeDateModule
      } from '@angular/material'; 

@NgModule({
    
    imports: [
      MatNativeDateModule,
      MatExpansionModule,
      MatInputModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatSidenavModule,
      MatListModule,
      MatBadgeModule,
      MatGridListModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatSelectModule,
      MatAutocompleteModule,
      MatCheckboxModule
      
    ],
    exports:[
      MatNativeDateModule,
      MatExpansionModule,
      MatInputModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule,
      MatSidenavModule,
      MatListModule,
      MatBadgeModule,
      MatGridListModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatSelectModule,
      MatAutocompleteModule,
      MatCheckboxModule
    ]
    })
  export class MaterialModule { }
  