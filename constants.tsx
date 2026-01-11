
import React from 'react';
import { ServicePlan, HostingOption, Addon } from './types';

export const PLANS: ServicePlan[] = [
  {
    id: 'express',
    name: 'Plan Express',
    description: 'Perfecto para darle vida a tu Airbnb, estudio o apartamento modelo. ¡Rapidez y calidad para que empieces a recibir huéspedes ya!',
    features: [
      'Ideal para espacios de hasta 60 m²',
      'Listo en solo 24 Horas',
      'Recorrido 3D fluido y detallado',
      '2 meses de alojamiento gratis',
      '🎁 Eliges un regalo: Fotos HDR, Planos o Street View'
    ],
    price: 290000,
    maxArea: 60
  },
  {
    id: 'inmobiliario',
    name: 'Plan Inmobiliario',
    description: 'Nuestra opción más querida. La "Vista Dollhouse" ayudará a tus clientes a enamorarse de la distribución de su futuro hogar.',
    features: [
      'Para casas y aptos hasta 160 m²',
      'Increíble Vista Dollhouse (Maqueta 3D)',
      'Entrega en 48 Horas',
      '6 meses de alojamiento incluidos',
      '🚁 Tip: Si pagas antes, te regalamos la Toma con Dron',
      '🎁 Si pagas al recibir, eliges un Addon Digital gratis'
    ],
    price: 570000,
    maxArea: 160,
    popular: true,
  },
  {
    id: 'business',
    name: 'Business / Comercial',
    description: 'Haz que tu negocio destaque. Tus clientes podrán explorar tu local y conocer tus productos con etiquetas interactivas.',
    features: [
      'Espacios amplios hasta 360 m²',
      'Etiquetas interactivas (Mattertags)',
      'Incluye Toma con Dron profesional',
      'Incluye 10 Fotos HDR de revista',
      'Entrega en 72 Horas',
      '12 meses de alojamiento incluidos'
    ],
    price: 900000,
    maxArea: 360
  },
  {
    id: 'corporativo',
    name: 'Corporativo / Enterprise',
    description: 'Proyectos a gran escala como hoteles, museos o bodegas. Diseñamos una solución a la medida de tus necesidades.',
    features: [
      'Para grandes espacios (+360 m²)',
      'Visitemos el lugar para planear todo',
      'Atención y soporte prioritario',
      'Personalización absoluta de cada rincón',
      'Formatos técnicos (BIM/Revit) disponibles'
    ],
    price: 0, 
    maxArea: 9999
  }
];

export const ADDONS: Addon[] = [
  { name: 'Fotos HDR (5)', price: 100000, description: 'Fotos en alta resolución que parecen sacadas de una revista.' },
  { name: 'Planos 2D', price: 80000, description: 'Un mapa claro y medido de tu propiedad para mayor seguridad.' },
  { name: 'Google Street View', price: 150000, description: 'Pon tu negocio en el mapa y mejora tu visibilidad en Google.' },
  { name: 'Toma con Dron', price: 180000, description: 'Captura la mejor perspectiva aérea de la ubicación.' },
  { name: 'Video Walkthrough 4K', price: 120000, description: 'Un video dinámico ideal para lucirte en Instagram o TikTok.' },
  { name: 'Archivo BIM (Revit)', price: 0, description: 'Información técnica valiosa para arquitectos e ingenieros.' }
];

export const PLATFORM_FEATURES = [
  {
    title: 'Cero Riesgo 🛡️',
    desc: 'Agenda con total tranquilidad. No cobramos nada por adelantado, pagas solo cuando el resultado te encante.'
  },
  {
    title: 'Experiencia Real',
    desc: 'No son solo fotos, es la sensación de estar ahí. Ayudamos a que tus clientes sientan el espacio como suyo.'
  },
  {
    title: 'Ahorra Tiempo',
    desc: 'Filtra a los curiosos. Quien agenda una visita física es porque ya conoce y ama el lugar digitalmente.'
  },
  {
    title: 'Siempre Cerca',
    desc: 'Somos tus vecinos en Medellín. Estamos listos para visitarte en Envigado, Sabaneta o cualquier rincón del Valle.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Agendamos Gratis',
    desc: 'Nos ponemos de acuerdo y visitamos tu propiedad sin compromisos económicos iniciales.'
  },
  {
    step: '02',
    title: 'Hacemos la Magia',
    desc: 'Llevamos nuestros equipos y capturamos cada rincón en un par de horas.'
  },
  {
    step: '03',
    title: 'Lo Preparamos',
    desc: 'Nuestro equipo edita y procesa todo para que tu tour luzca espectacular.'
  },
  {
    step: '04',
    title: 'Revisas y Pagas',
    desc: 'Te mostramos cómo quedó. Si te gusta, realizas el pago y te entregamos tu activo digital.'
  }
];

export const WHATSAPP_NUMBER = "573105549119";
