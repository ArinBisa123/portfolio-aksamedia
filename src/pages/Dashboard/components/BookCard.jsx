const BookCard = ({ book }) => {
  return (
    <li className="border-2 border-primary rounded-xl p-4  text-foreground shadow-sm hover:shadow-md transition duration-200">
      <div className="text-lg font-semibold mb-1">{book.title}</div>
      <div className="text-sm text-muted-foreground">
        {book.author} &bull; {book.year} &bull; {book.genre}
      </div>
    </li>
  );
};

export default BookCard;
