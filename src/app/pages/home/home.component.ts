import { Component, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeAnimationEl1 = false;
  activeAnimationEl2 = false;
  activeAnimationEl3 = false;
  activeAnimationEl4 = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    if (window.scrollY >= 1891 && window.scrollY <= 1929) {
      this.activeAnimationEl1 = true;
    } else if (window.scrollY < 1929) {
      this.activeAnimationEl1 = false;
    }
    if (window.scrollY >= 2042 && window.scrollY <= 2110) {
      this.activeAnimationEl2 = true;
    } else if (window.scrollY < 2110) {
      this.activeAnimationEl2 = false;
    }
    if (window.scrollY >= 2228 && window.scrollY <= 2265) {
      this.activeAnimationEl3 = true;
    } else if (window.scrollY < 2265) {
      this.activeAnimationEl3 = false;
    }
    if (window.scrollY >= 2374 && window.scrollY <= 2460) {
      this.activeAnimationEl4 = true;
    } else if (window.scrollY < 2460) {
      this.activeAnimationEl4 = false;
    }

    if (window.scrollY > 2460) {
      this.activeAnimationEl1 = true;
      this.activeAnimationEl2 = true;
      this.activeAnimationEl3 = true;
      this.activeAnimationEl4 = true;
    }
  }

  ngOnInit(): void {

  }



}
