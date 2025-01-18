/// import { NextResponse } from "next/server";

// // In-memory database (for demonstration purposes)
// let books = [
//     { id: 1, title: "Harry Potter", author: "J.K. Rowling", available: true },
//     { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", available: true },
//     { id: 3, title: "1984", author: "George Orwell", available: true },
//     { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
//     { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", available: true },
//     { id: 6, title: "The Odyssey", author: "Homer", available: true },
//     { id: 7, title: "Pride and Prejudice", author: "Jane Austen", available: true },
//     { id: 8, title: "The Adventures of Tom Sawyer", author: "Mark Twain", available: true },
//     { id: 9, title: "The Lord of the Rings", author: "J.R.R. Tolkien", available: true },
//     { id: 10, title: "Moby Dick", author: "Herman Melville", available: true },
//     { id: 11, title: "To the Lighthouse", author: "Edgar Allan Poe", available: true },
// ];

// // GET: Fetch all books
// export async function GET(request: NextResponse) {
//     try {
//         return NextResponse.json(books, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: "Error fetching books" }, { status: 500 });
//     }
// }

// // POST: Add a new book
// export async function POST(request: NextResponse) {
//     try {
//         const body = await request.json();  // Parse the incoming request body

//         if (!body.title || !body.author) {
//             return NextResponse.json({ message: "Missing required fields (title, author)" }, { status: 400 });
//         }

//         // Assign a new id based on the highest current id + 1
//         const newId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;

//         const newBook = { id: newId, ...body };
//         books.push(newBook);  // Add the new book to the array

//         return NextResponse.json(newBook, { status: 201 });  // Respond with the new book data
//     } catch (error) {
//         return NextResponse.json({ message: "Error adding book" }, { status: 500 });
//     }
// }

// // PUT: Update an existing book by id
// export async function PUT(request: NextResponse) {
//     try {
//         const { id, title, author, available } = await request.json();  // Parse the incoming request body

//         if (!id || !title || !author) {
//             return NextResponse.json({ message: "Missing required fields (id, title, author)" }, { status: 400 });
//         }

//         const bookIndex = books.findIndex(b => b.id === id);

//         if (bookIndex === -1) {
//             return NextResponse.json({ message: "Book not found" }, { status: 404 });
//         }

//         // Update the book at the specified index
//         books[bookIndex] = { id, title, author, available };

//         return NextResponse.json(books[bookIndex], { status: 200 });  // Return the updated book
//     } catch (error) {
//         return NextResponse.json({ message: "Error updating book" }, { status: 500 });
//     }
// }

// // DELETE: Delete a book by id
// export async function DELETE(request: NextResponse) {
//     try {
//         const { id } = await request.json();  // Get the book id from the request body

//         if (!id) {
//             return NextResponse.json({ message: "Missing book id" }, { status: 400 });
//         }

//         const bookIndex = books.findIndex(b => b.id === id);

//         if (bookIndex === -1) {
//             return NextResponse.json({ message: "Book not found" }, { status: 404 });
//         }

//         // Remove the book from the array
//         books.splice(bookIndex, 1);

//         return NextResponse.json({ message: "Book deleted successfully" }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: "Error deleting book" }, { status: 500 });
//     }
// }

// pages/api/books.ts
// import { NextApiRequest, NextApiResponse } from 'next';

// let books = [
//   { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', available: true },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: true },
//   { id: 3, title: '1984', author: 'George Orwell', available: true },
// ];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     // Return all books
//     return res.status(200).json(books);
//   }

//   if (req.method === 'POST') {
//     // Add a new book
//     const { title, author, available } = req.body;
//     if (!title || !author) {
//       return res.status(400).json({ message: 'Title and Author are required.' });
//     }

//     const newBook = {
//       id: books.length + 1,
//       title,
//       author,
//       available,
//     };
//     books.push(newBook);

//     return res.status(201).json(newBook);
//   }

//   if (req.method === 'DELETE') {
//     // Delete a book by ID
//     const { id } = req.body;
//     books = books.filter((book) => book.id !== id);

//     return res.status(200).json({ message: 'Book deleted successfully' });
//   }

//   res.status(405).json({ message: 'Method not allowed' });
// }

import { NextResponse, NextRequest } from "next/server";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  available: boolean;
}


let books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", image: "/harry.jpg", available: true },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", image: "/kill.jpg", available: true },
    { id: 3, title: "1984", author: "George Orwell", image: "/1984.jpg", available: true },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "/gats.png", available: true },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", image: "/catcher.jpg", available: true },
    { id: 6, title: "The Odyssey", author: "Homer", image: "/odey.jpg", available: true },
    { id: 7, title: "Pride and Prejudice", author: "Jane Austen", image: "/pride.jpg", available: true },
    { id: 8, title: "The Adventures of Tom Sawyer", author: "Mark Twain", image: "/advan.jpg", available: true },
    { id: 9, title: "The Lord of the Rings", author: "J.R.R. Tolkien", image: "/the.jpg", available: true },
]



// GET Method
export async function GET() {
  return NextResponse.json(books, { status: 200 });
}

// POST Method
export async function POST(req: NextRequest) {
  try {
    const newBook: Book = await req.json();
    books.push({ ...newBook, id: books.length + 1 });
    return NextResponse.json({ message: "Book added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding book!", error }, { status: 500 });
  }
}

// PUT Method
export async function PUT(req: NextRequest) {
  try {
    const updatedBook: Book = await req.json();
    books = books.map((book) =>
      book.id === updatedBook.id ? { ...book, ...updatedBook } : book
    );
    return NextResponse.json({ message: "Book updated successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating book!", error }, { status: 500 });
  }
}

// DELETE Method
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    books = books.filter((book) => book.id !== id);
    return NextResponse.json({ message: "Book deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting book!", error }, { status: 500 });
  }
}



