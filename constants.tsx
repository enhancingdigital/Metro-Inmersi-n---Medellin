
import React from 'react';
import { ServicePlan, Addon } from './types';

export const PLANS: ServicePlan[] = [
  {
    id: 'express',
    name: 'Plan Express',
    description: 'La opción ideal para que su Airbnb o apartamento destaque. Diseñado para maximizar clics y asegurar reservas inmediatas.',
    features: [
      'Ideal para espacios de hasta 60 m²',
      'Aumente sus visitas digitales en un 300%',
      'Recorrido fluido de alta definición',
      '2 meses de visualización premium incluidos',
      '🎁 PROMO: 2 meses adicionales de hosting gratis (Válido hasta el 31 Marzo)'
    ],
    price: 290000,
    maxArea: 60
  },
  {
    id: 'inmobiliario',
    name: 'Plan Inmobiliario Pro',
    description: 'Acelere la venta de su propiedad. Evite visitas innecesarias filtrando solo a clientes realmente interesados que ya conocen el espacio.',
    features: [
      'Perfecto para hogares de hasta 160 m²',
      'Vista de Maqueta 3D (Entendimiento total)',
      'Filtre clientes: Menos paseos, más cierres',
      '6 meses de alojamiento incluidos',
      '🚁 REGALO: Si realiza pago anticipado, ¡Toma con Dron incluida!',
      '🎁 PROMO: Si paga al final, le obsequiamos un Addon Digital'
    ],
    price: 570000,
    maxArea: 160,
    popular: true,
  },
  {
    id: 'commercial',
    name: 'Plan Commercial',
    description: 'Convierta su local en un destino digital. Permita que sus clientes exploren su marca y productos desde cualquier lugar del mundo.',
    features: [
      'Para locales comerciales de hasta 360 m²',
      'Etiquetas interactivas de productos/servicios',
      'Incluye Toma con Dron profesional',
      'Incluye 10 Fotos HDR de alta calidad',
      'Incluye Google Street View (Oficial)',
      'Incluye Planos de Planta (2D) detallados',
      '12 meses de alojamiento incluidos'
    ],
    price: 900000,
    maxArea: 360
  },
  {
    id: 'corporativo',
    name: 'Proyectos Especiales',
    description: 'Hoteles y centros comerciales. Soluciones de visualización masiva para proyectos que requieren un impacto visual sin precedentes.',
    features: [
      'Para grandes superficies (+360 m²)',
      'Recorridos de alta fidelidad para inversores',
      'Soporte corporativo y personalización total',
      'Ideal para preventas en el sector lujo',
      'Visualización de espacios complejos'
    ],
    price: 0, 
    maxArea: 9999
  }
];

export const ADDONS: Addon[] = [
  { name: 'Fotos HDR (10)', price: 100000, description: 'Pack de 10 fotografías profesionales para portales inmobiliarios.' },
  { name: 'Planos de Planta', price: 80000, description: 'Mapa detallado con medidas. A partir de $80K COP.' },
  { name: 'Desmueblar', price: 20000, description: 'Limpieza digital de mobiliario para mostrar el espacio vacío.' },
  { name: 'Recorrido Vrbo 360', price: 20000, description: 'Publicación oficial de tour virtual en Vrbo y Expedia.' },
  { name: 'Google Street View', price: 150000, description: 'Integre su negocio directamente en el mapa de Google.' },
  { name: 'Toma con Dron', price: 180000, description: 'Perspectiva aérea para resaltar ubicación y zonas comunes.' },
  { name: 'Recorrido de Video 4K', price: 140000, description: 'Video walkthrough ideal para reels y redes sociales.' },
  { name: 'Archivo CAD (.DWG)', price: 120000, description: 'Plano técnico editable para arquitectos e ingenieros.' },
  { name: 'Archivo BIM', price: 0, description: 'de Matterport. Transforme sus datos en modelos .RVT y .DWG LOD 200.' },
  { name: 'Mes de Hosting Extra', price: 20000, description: 'Mantenga su tour activo por más tiempo.' },
  { name: 'APIs, Embed', price: 0, description: 'Integración avanzada en su sitio web corporativo.' },
  { name: 'Badge Digital', price: 0, description: 'Sello de propiedad verificada (Aumenta confianza).' }
];

export const PLATFORM_FEATURES = [
  {
    title: 'Cero Riesgo, Total Confianza',
    desc: 'Agende sin compromisos. No cobramos anticipos; usted solo paga cuando el resultado final supere sus expectativas.'
  },
  {
    title: 'Ventas en Piloto Automático',
    desc: 'Su propiedad abierta al público las 24 horas del día. Reciba ofertas mientras usted se dedica a cerrar negocios.'
  },
  {
    title: 'Adiós a los Paseos Inútiles',
    desc: 'Ahorre horas de tráfico y coordinación. Quien solicita una visita física ya está convencido por el tour virtual.'
  },
  {
    title: 'Impacto Visual Superior',
    desc: 'Diferénciese de la competencia con tecnología de visualización que hace que los espacios luzcan impecables.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Cita de Captura',
    desc: 'Visitamos su espacio y en tiempo récord capturamos cada rincón con tecnología de alta gama.'
  },
  {
    step: '02',
    title: 'Creación Digital',
    desc: 'Procesamos los datos para crear una réplica digital perfecta y fluida de su propiedad.'
  },
  {
    step: '03',
    title: 'Revisión de Calidad',
    desc: 'Usted recibe un enlace privado para validar que cada detalle luzca increíble.'
  },
  {
    step: '04',
    title: 'Lanzamiento y Venta',
    desc: 'Una vez satisfecho, activa el servicio y empieza a recibir visitas de calidad mundial.'
  }
];

export const WHATSAPP_NUMBER = "573105549119";
