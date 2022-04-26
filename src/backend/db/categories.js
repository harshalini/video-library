import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Popular",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
    categoryImg: "./assets/genreImgs/Popular-genre.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Rock",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
      categoryImg: "./assets/genreImgs/Rock-genre.jpg"
    },
  {
    _id: uuid(),
    categoryName: "Classical",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
      categoryImg: "./assets/genreImgs/Classical-genre.jpg"
    },
  {
    _id: uuid(),
    categoryName: "Pop",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
      categoryImg: "./assets/genreImgs/pop-genre.jpg"
    }
];
