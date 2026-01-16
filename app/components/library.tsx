"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "./section";

const spinnerFrames = ["|", "/", "-", "\\"];

function Spinner() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % spinnerFrames.length);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-gray-500">[ {spinnerFrames[frame]} ]</span>;
}

interface Book {
  isbn: string;
  title: string;
  author: string;
  notes?: string;
}

const books: Book[] = [
  {
    isbn: "9781501135927",
    title: "Shoe Dog",
    author: "Phil Knight",
  },
  {
    isbn: "9781544514215",
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
  },
  {
    isbn: "9780735211292",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    isbn: "9781608685486",
    title: "Storyworthy",
    author: "Matthew Dicks",
  },
  {
    isbn: "9780141036144",
    title: "1984",
    author: "George Orwell",
  },
  {
    isbn: "9780823423675",
    title: "Freaky Fast Frankie Joe",
    author: "Lutricia Clifton",
  },
  {
    isbn: "9780385333481",
    title: "Cat's Cradle",
    author: "Kurt Vonnegut",
  },
  {
    isbn: "9781416556961",
    title: "The Lathe of Heaven",
    author: "Ursula K. Le Guin",
  },
];

const getCoverUrl = (isbn: string) =>
  `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

function BookCard({ book }: { book: Book }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group">
      <div className="relative aspect-[2/3] bg-gray-200">
        {!imageError ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner />
              </div>
            )}
            <Image
              src={getCoverUrl(book.isbn)}
              alt={`Cover of ${book.title}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
              className="object-cover"
              preload
              onLoad={() => setIsLoading(false)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-2 text-center">
            <span className="text-xs text-gray-500">{book.title}</span>
            <span className="text-xs text-gray-400">{book.author}</span>
          </div>
        )}
      </div>
      <div className="mt-2">
        <p className="line-clamp-2 text-sm text-foreground">{book.title}</p>
        <p className="text-xs text-gray-400">{book.author}</p>
      </div>
    </div>
  );
}

const Library = () => {
  return (
    <Section title="Library">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {books.map((book) => (
          <BookCard key={book.isbn} book={book} />
        ))}
      </div>
    </Section>
  );
};

export default Library;
