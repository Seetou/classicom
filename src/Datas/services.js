import solfege from "../assets/images/cours-de-solfege.webp";
import piano from "../assets/images/student-piano.webp";
import logoSonore from "../assets/images/sound-design.webp";
import gospel from "../assets/images/groupe-gospel.webp";
import { v4 as uuidv4 } from "uuid";

const services = [
  {
    id: uuidv4(),
    image: solfege,
    title: "Cours de Solfège",
    description:
      "Apprenez les bases de la musique par la pratique et l'audition musicale.",
    details: "",
  },
  {
    id: uuidv4(),
    image: piano,
    title: "Cours de Piano",
    description:
      "Débutez au piano et évoluez progressivement avec nos cours personnalisés.",
    details: "",
  },
  {
    id: uuidv4(),
    image: logoSonore,
    title: "Logo Sonore",
    description:
      "Communiquez les valeurs de votre marque ou entreprise à travers un logo sonore.",
    details: "",
  },
  {
    id: uuidv4(),
    image: gospel,
    title: "Évènementiel",
    description:
      "Réservez un musicien talentueux pour vos soirées et évènements réligieux.",
    details: "",
  },
];

export default services;
