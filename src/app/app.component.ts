import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebatecnica';

  constructor(private tokenStrogateService: TokenStorageService) {}

  logout(): void {
    this.tokenStrogateService.signOut();
    window.location.reload();
  }
}
