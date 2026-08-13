const A = "/assets/";

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Projeto 01",
    category: "Produção mobile",
    year: "2025",
    image: `${A}lines-01.webp`,
    featured: true,
  },
  {
    id: "02",
    title: "Projeto 02",
    category: "Conteúdo / Social",
    year: "2025",
    image: `${A}lines-03.webp`,
    featured: false,
  },
  {
    id: "03",
    title: "Projeto 03",
    category: "One Sessions",
    year: "2025",
    image: `${A}lines-05.webp`,
    featured: true,
  },
  {
    id: "04",
    title: "Projeto 04",
    category: "Campanha",
    year: "2024",
    image: `${A}lines-02.webp`,
    featured: false,
  },
  {
    id: "05",
    title: "Projeto 05",
    category: "Conteúdo recorrente",
    year: "2024",
    image: `${A}lines-04.webp`,
    featured: false,
  },
  {
    id: "06",
    title: "Projeto 06",
    category: "Produção mobile",
    year: "2024",
    image: `${A}lines-06.webp`,
    featured: true,
  },
];
