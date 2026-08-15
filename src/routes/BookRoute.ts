import { Router } from "express";
import { getBooks, addBook } from "../controllers/bookController.js";

const bookRouter = Router();

// GET all books
bookRouter.get("/get-books", getBooks);

// POST add a new book
bookRouter.post("/add-book", addBook);

export default bookRouter;
