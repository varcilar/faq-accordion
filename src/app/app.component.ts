import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Índice de la pregunta abierta (-1 significa todas cerradas)
  openIndex: number | null = 0; 

  faqs = [
    {
      q: "¿Qué es Frontend Mentor?",
      a: "Frontend Mentor ofrece retos de codificación realistas para ayudar a los desarrolladores a mejorar sus habilidades..."
    },
    {
      q: "¿Es gratuito?",
      a: "Sí, puedes usar los retos gratuitos para practicar tus habilidades de HTML, CSS y JS."
    }
  ];

  toggleFaq(index: number) {
    // Si haces clic en la que ya está abierta, se cierra. Si no, se abre la nueva.
    this.openIndex = this.openIndex === index ? null : index;
  }
}