import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "../product-card/product-card.component";


const routes:Routes= [{path:'',component: ProductsComponent}];

@NgModule({
    declarations: [ProductsComponent],
    imports: [RouterModule.forChild(routes),CommonModule,ProductCardComponent]
})

export class ProductsModule{}