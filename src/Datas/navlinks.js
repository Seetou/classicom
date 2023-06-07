import { v4 as uuidv4 } from "uuid";

export const navlinks = [
  { id: uuidv4(), page: "Services", link: "/:service" },
  { id: uuidv4(), page: "À propos", link: "/about" },
  { id: uuidv4(), page: "Contact", link: "/contact" },
];
