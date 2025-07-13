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
    <div className="w-full min-h-screen px-4 py-8 sm:px-6 md:px-12 lg:px-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center sm:text-left">
          Book List
        </h2>

        {/* Search */}
        <SearchInput value={keyword} onChange={handleSearchChange} />

        {/* Book Cards */}
        <ul className="space-y-4">
          {paginatedBooks.length > 0 ? (
            paginatedBooks.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <li className="text-center text-sm text-muted-foreground">
              Tidak ada buku yang ditemukan.
            </li>
          )}
        </ul>

        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        />

        {/* Footer */}
        <div className="pt-6 text-sm text-center text-muted-foreground border-t">
          Copyright &copy; Arin 2025
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
