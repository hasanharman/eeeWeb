import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


fonksiyon() {
  $(".searchInput").toggle(500);
  $(".searchInput").focus();
  $(document).mouseup(function(e) 
{
    var container = $(".searchInput");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide(300);
    }
});
}

}

