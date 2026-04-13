import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

/**
 * Main Layout Component
 * Manages the global structure of the dashboard, including:
 * - Theme switching (Light/Dark)
 * - Navigation Sidebar
 * - User Profile Header
 * - Floating Settings Menu
 */
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isDark = signal(false);
  showUserDropdown = signal(false);
  isCollapsed = signal(false);
  currentLang = signal('ES');

  ngOnInit() {
    // Initial theme check if needed
  }

  toggleTheme() {
    this.isDark.set(!this.isDark());
    document.body.setAttribute('data-theme', this.isDark() ? 'dark' : 'light');
  }

  toggleSidebar() {
    this.isCollapsed.set(!this.isCollapsed());
  }

  toggleUserDropdown(event: Event) {
    event.stopPropagation();
    this.showUserDropdown.set(!this.showUserDropdown());
  }

  closeAllDropdowns() {
    this.showUserDropdown.set(false);
  }

  setLang(lang: string) {
    this.currentLang.set(lang);
  }
}
