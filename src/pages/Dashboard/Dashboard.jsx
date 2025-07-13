import SearchInput from "@/components/SearchInput/SearchInput";
import Pagination from "@/components/Pagination/Pagination";
import BookCard from "@/pages/Dashboard/components/BookCard";
import books from "@/data/dummyBook";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

const Dashboard = () => {
  const [bookList, setBookList] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    setBookList(books);
  }, []);

  useEffect(() => {
    const result = bookList.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredBooks(result);
  }, [bookList, keyword]);

  const paginatedBooks = filteredBooks.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

  const handleSearchChange = (e) => {
    setSearchParams({ q: e.target.value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ q: keyword, page: newPage });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Book List</h2>

      <SearchInput value={keyword} onChange={handleSearchChange} />

      <ul className="space-y-2">
        {paginatedBooks.length > 0 ? (
          paginatedBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <li className="text-primary-foreground">
            Tidak ada buku yang ditemukan.
          </li>
        )}
      </ul>

      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Dashboard;
