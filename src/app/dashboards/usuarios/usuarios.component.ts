import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Usuarios Page Component
 * Handles the display and management of the system user directory.
 * Features:
 * - Searchable user table
 * - User status badges
 * - Registration flow trigger
 */
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  users = [
    {
      id: 1,
      name: 'Administrador Sistema',
      username: 'admin',
      email: 'admin@ejemplo.com',
      dni: '1711111111',
      status: 'ACTIVO',
      avatar: 'A'
    }
  ];
}
