import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { SearchSuggestionsComponent } from './components/search-suggestions/search-suggestions.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    CardComponent,
    SearchSuggestionsComponent,
    SuggestionsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'comments_angular';
}
