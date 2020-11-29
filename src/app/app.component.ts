import { Component } from '@angular/core';
import { faHome, faUserFriends, faChessBoard, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Explore Heroes';
  faHome = faHome;
  faUserFriends = faUserFriends;
  faChessBoard = faChessBoard;
  faInfoCircle = faInfoCircle;
}
