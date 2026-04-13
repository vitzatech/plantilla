import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard-global',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="view-content active" style="padding: 24px;">
      <div class="page-header" style="margin-bottom: 32px;">
          <div class="page-title">
              <h2>Dashboard Global</h2>
              <p>Estado general del ecosistema y servicios críticos</p>
          </div>
          <div style="display: flex; gap: 12px;">
              <button class="btn-paco-white">
                  REPORTE PDF
              </button>
              <button class="btn-paco-orange">
                  REFRESCAR
              </button>
          </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid-stats">
          <div class="stat-card">
              <span class="stat-label">Usuarios Activos</span>
              <span class="stat-value">1,284</span>
              <div style="color: var(--success); font-size: 0.75rem; font-weight: 700;">+12% esta semana</div>
          </div>
          <div class="stat-card">
              <span class="stat-label">Aplicaciones</span>
              <span class="stat-value">24</span>
              <div style="color: var(--text-muted); font-size: 0.75rem;">6 servicios críticos</div>
          </div>
          <div class="stat-card">
              <span class="stat-label">Uso de CPU</span>
              <span class="stat-value">42%</span>
              <div class="progress-container">
                  <div class="progress-bar" style="width: 42%;"></div>
              </div>
          </div>
          <div class="stat-card">
              <span class="stat-label">Alertas</span>
              <span class="stat-value" style="color: var(--danger);">3</span>
              <div style="color: var(--danger); font-size: 0.75rem; font-weight: 700;">Requieren atención</div>
          </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid-dashboard">
          <!-- Activity Card -->
          <div class="data-card">
              <div class="card-header">
                  <h3 style="font-size: 1rem;">Actividad Reciente</h3>
                  <span class="badge bg-blue">LOGS</span>
              </div>
              <div class="card-body">
                  <div class="list-item-minimal">
                      <div>
                          <div style="font-weight: 600; font-size: 0.85rem;">Ingreso de administrador</div>
                          <div style="font-size: 0.75rem; color: var(--text-muted);">Hace 2 minutos • IP: 192.168.1.1</div>
                      </div>
                      <span class="badge bg-success">OK</span>
                  </div>
                  <div class="list-item-minimal">
                      <div>
                          <div style="font-weight: 600; font-size: 0.85rem;">Fallo de autenticación</div>
                          <div style="font-size: 0.75rem; color: var(--text-muted);">Hace 15 minutos • IP: 10.0.0.45</div>
                      </div>
                      <span class="badge bg-danger">ERROR</span>
                  </div>
                  <div class="list-item-minimal">
                      <div>
                          <div style="font-weight: 600; font-size: 0.85rem;">Actualización de servicio</div>
                          <div style="font-size: 0.75rem; color: var(--text-muted);">Hace 1 hora • Auth-Service</div>
                      </div>
                      <span class="badge bg-warning">WARN</span>
                  </div>
              </div>
          </div>

          <!-- Services Health -->
          <div class="data-card">
              <div class="card-header">
                  <h3 style="font-size: 1rem;">Estado de Servicios</h3>
              </div>
              <div class="card-body">
                  <div style="margin-bottom: 20px;">
                      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                          <span style="font-size: 0.85rem; font-weight: 600;">API Gateway</span>
                          <span style="font-size: 0.85rem; color: var(--success);">Online</span>
                      </div>
                      <div class="progress-container">
                          <div class="progress-bar" style="width: 100%; background: var(--success);"></div>
                      </div>
                  </div>
                  <div style="margin-bottom: 20px;">
                      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                          <span style="font-size: 0.85rem; font-weight: 600;">Auth Database</span>
                          <span style="font-size: 0.85rem; color: var(--success);">Healthy</span>
                      </div>
                      <div class="progress-container">
                          <div class="progress-bar" style="width: 85%; background: var(--success);"></div>
                      </div>
                  </div>
                  <div>
                      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                          <span style="font-size: 0.85rem; font-weight: 600;">Mail Server</span>
                          <span style="font-size: 0.85rem; color: var(--warning);">Latency</span>
                      </div>
                      <div class="progress-container">
                          <div class="progress-bar" style="width: 45%; background: var(--warning);"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  `,
    styles: []
})
export class DashboardGlobalComponent { }
