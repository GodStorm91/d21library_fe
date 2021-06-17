import { BookDTO } from "../dtos/book.dto";

export class Book {
    public bookId: string = "";
    public isbn: string = "";
    public title: string = "";
    public genre: string = "";
    public shelf: string = "";
    public authorName: string = "";

    constructor(bookDto: BookDTO) {
        this.bookId = bookDto.bookId;
        this.isbn = bookDto.isbn;
        this.title = bookDto.title;
        this.genre = bookDto.genre;
        this.shelf = bookDto.shelf;
        bookDto.authors.forEach(author => this.authorName += author.name + " & ");
        this.authorName = this.authorName.slice(0, -3);
    }
}