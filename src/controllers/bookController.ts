import { Router, Request, Response } from "express";
import Book from "../models/book.js";

interface IResponse {
  success: boolean;
  message: string;
  data?: any;
}

const getBooks = (req: Request, res: Response) => {
  return res.json({ success: false, message: "No Books found in record" });
};

const addBook = async (req: Request, res: Response) => {
  const { name, author, publishYear, description } = req.body;
  try {
    const book = await Book.create({
      author,
      description,
      name,
      publishYear,
    });
    return res.status(201).json({ success: true, data: book });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { getBooks, addBook };
