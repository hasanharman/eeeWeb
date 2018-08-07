 import { Component } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from 'ng2-translate'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  langToogleImg = "assets/image/en.png"
  lang = "tr";
  constructor(private translate: TranslateService){
    translate.addLangs(["en", "tr"]); // add lang. array
    translate.setDefaultLang("tr");

    let browserLang = translate.getBrowserLang(); // detech which lang. user is using
   // translate.use(browserLang.match(/en|tr/) ?  browserLang : "tr")

  
   }

  changeLanguage(lang) {
    if( lang == "tr") {
          this.translate.use("en");
          this.langToogleImg = "assets/image/tr.png";
          this.lang = "en"

    } 
    if(lang == "en") {
      this.translate.use("tr")
      this.langToogleImg = "assets/image/en.png"
      this.lang = "tr"

    }
  }

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

