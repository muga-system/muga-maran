import type { Benefit, NavLink, ProcessStage } from "@/types/business";

export const navLinks: NavLink[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" }
];

export const benefits: Benefit[] = [
  {
    kicker: "Lotes urbanos y rurales",
    title: "Desmalezado integral de terrenos",
    description: "Corte de maleza alta y control de vegetación para recuperar el espacio de forma segura."
  },
  {
    kicker: "Residuos verdes",
    title: "Limpieza y retiro de restos",
    description: "Juntado, acopio y disposición de ramas, pasto y residuos orgánicos generados en el trabajo."
  },
  {
    kicker: "Mantenimiento preventivo",
    title: "Control periódico de rebrote",
    description: "Visitas programadas para mantener el terreno limpio y evitar acumulación de maleza."
  }
];

export const processStages: ProcessStage[] = [
  {
    id: "01",
    title: "Relevamiento del terreno",
    objective: "Evaluación de superficie, nivel de maleza y accesos disponibles.",
    actions: ["Diagnóstico claro antes de empezar"]
  },
  {
    id: "02",
    title: "Plan de trabajo y seguridad",
    objective: "Definición del alcance, tiempos y medidas de protección para el entorno.",
    actions: ["Ejecución ordenada y sin improvisación"]
  },
  {
    id: "03",
    title: "Desmalezado y limpieza",
    objective: "Trabajo con herramientas manuales y mecánicas según el tipo de terreno.",
    actions: ["Cobertura total del área intervenida"]
  },
  {
    id: "04",
    title: "Retiro final y entrega",
    objective: "Revisión final, retiro de residuos y entrega del lote en condiciones.",
    actions: ["Terreno limpio para uso, obra o venta"]
  }
];
