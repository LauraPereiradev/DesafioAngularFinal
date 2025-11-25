import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  vehicles: any[] = [];
  selectedModel: string = '';
  selectedVehicle: any = null;

  vinCode: string = '';
  vinData: any = null;

  constructor(private http: HttpClient) {
    this.loadVehicles();
  }

  // Carrega a lista de veículos
  loadVehicles() {
    this.http.get<any>('http://localhost:3001/vehicles').subscribe({
      next: (data) => {
        this.vehicles = data.vehicles;
      },
      error: () => alert('Erro ao carregar veículos')
    });
  }

  // Seleciona o veículo baseado no nome
  selectVehicle() {
    const found = this.vehicles.find(v => v.vehicle === this.selectedModel);
    this.selectedVehicle = found || null;
  }

  // Buscar dados do VIN
  searchByVin() {
    if (!this.vinCode) return;

    this.http.post<any>('http://localhost:3001/vehicleData', { vin: this.vinCode }).subscribe({
      next: (data) => {
        this.vinData = data;
      },
      error: () => {
        this.vinData = null;
        alert('VIN não encontrado!');
      }
    });
  }
}