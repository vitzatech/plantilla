import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-aplicaciones',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="view-content active" style="padding: 24px;">
      <div class="page-header" style="margin-bottom: 24px;">
          <div class="page-title">
              <h2>Gestión de Aplicaciones</h2>
              <p>Directorio de servicios registrados y activos</p>
          </div>
          <button class="btn-paco-orange">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14M5 12h14"></path>
              </svg>
              NUEVA APLICACIÓN
          </button>
      </div>

      <!-- Toolbar -->
      <div class="data-card" style="margin-bottom: 24px; padding: 12px 20px;">
          <div style="display: flex; gap: 15px; align-items: center;">
              <div style="position: relative; flex-grow: 1;">
                  <input type="text" class="search-box" placeholder="Buscar por nombre o ID..." style="width: 100%; padding-left: 40px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 12px; top: 10px; opacity: 0.5;">
                      <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
              </div>
              <select class="paco-select" style="width: 180px;">
                  <option>Todas las Categorías</option>
                  <option>Sistemas Core</option>
                  <option>Microservicios</option>
                  <option>Frontend</option>
              </select>
          </div>
      </div>

      <!-- Apps Grid -->
      <div class="grid-dashboard">
          <!-- App Item 1 -->
          <div class="data-card">
              <div class="card-body">
                  <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                      <div style="width: 48px; height: 48px; background: var(--blue-soft); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--blue);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      </div>
                      <div style="flex-grow: 1;">
                          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                              <h4 style="margin: 0; font-size: 1rem;">Auth-Manager</h4>
                              <span class="badge bg-success">Activo</span>
                          </div>
                          <div style="font-size: 0.8rem; color: var(--text-muted);">Core Identity Service</div>
                      </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.75rem; border-top: 1px solid var(--border-soft); padding-top: 12px;">
                      <span>Versión: 2.1.0</span>
                      <span style="font-weight: 600; color: var(--paco-oro);">DETALLES →</span>
                  </div>
              </div>
          </div>

          <!-- App Item 2 -->
          <div class="data-card">
              <div class="card-body">
                  <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                      <div style="width: 48px; height: 48px; background: rgba(244, 183, 74, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--warning);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                      </div>
                      <div style="flex-grow: 1;">
                          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                              <h4 style="margin: 0; font-size: 1rem;">ERP-Bridge</h4>
                              <span class="badge bg-warning">Inestable</span>
                          </div>
                          <div style="font-size: 0.8rem; color: var(--text-muted);">Legacy Integration</div>
                      </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.75rem; border-top: 1px solid var(--border-soft); padding-top: 12px;">
                      <span>Versión: 0.9.5-beta</span>
                      <span style="font-weight: 600; color: var(--paco-oro);">DETALLES →</span>
                  </div>
              </div>
          </div>

          <!-- App Item 3 -->
          <div class="data-card">
              <div class="card-body">
                  <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                      <div style="width: 48px; height: 48px; background: rgba(46, 204, 113, 0.15); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--success);">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6.01"></line><line x1="6" y1="18" x2="6" y2="18.01"></line></svg>
                      </div>
                      <div style="flex-grow: 1;">
                          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                              <h4 style="margin: 0; font-size: 1rem;">Storage-Hub</h4>
                              <span class="badge bg-success">Activo</span>
                          </div>
                          <div style="font-size: 0.8rem; color: var(--text-muted);">Cloud Asset Management</div>
                      </div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.75rem; border-top: 1px solid var(--border-soft); padding-top: 12px;">
                      <span>Versión: 1.4.2</span>
                      <span style="font-weight: 600; color: var(--paco-oro);">DETALLES →</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  `,
    styles: []
})
export class AplicacionesComponent { }
