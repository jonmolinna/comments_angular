import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardComponent } from '../../components/card/card.component';
import { SearchSuggestionsComponent } from '../../components/search-suggestions/search-suggestions.component';
import { SuggestionsComponent } from '../../components/suggestions/suggestions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    CardComponent,
    SearchSuggestionsComponent,
    SuggestionsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
