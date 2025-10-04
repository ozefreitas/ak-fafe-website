export const NavOptions: {
  link?: string;
  label: string;
  children?: { link: string; label: string }[];
}[] = [
  { link: "#about", label: "Sobre" },
  {
    link: "#personel",
    label: "Dep. Técnico",
    children: [{ link: "personel/trainners", label: "Treinadores" }],
  },
  {
    link: "#training_plan",
    label: "Plano de Treino",
    children: [
      { link: "training_plan/basic_plan", label: "Plano Básico" },
      { link: "training_plan/inter_plan", label: "Plano Intermédio" },
    ],
  },
  { link: "#schedules", label: "Horários" },
  { link: "#contacts", label: "Contactos" },
];
