const BookCard = ({ book }) => {
  return (
    <li className="border-3 border-primary p-2 text-primary-foreground rounded">
      <div className="font-semibold">{book.title}</div>
      <div className="text-sm">
        {book.author} ({book.year}) - {book.genre}
      </div>
    </li>
  );
};

export default BookCard;
