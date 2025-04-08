import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';
import {categories} from "../../sampleData/categories.data";

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent {
  categories: Category[] = [];
  constructor(categoryService: CategoryService) {
    categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(
      (category) => parentCategoryId ? category.parent_categort_id === parentCategoryId :
        category.parent_categort_id === null
    );
  }
}
