import React, { useState, useEffect } from 'react';
import { getBooks } from '../services/api';
import SearchBar from './SearchBar';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import AddToCardModal from './AddToCardModal';

function BookRecommendation() {
    const [books, setBooks] = useState([]);
    const [my_books, setMyBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        // Fetch book data from API when component mounts
        getBooks()
            .then(data => {
                console.log('Books data:', data); // Log the data to the console
                setBooks(data.books);
                setMyBooks(data.books);
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);


    const handleBookClick = (book) => {
        if (selectedBook === book) {
            // If the same book is clicked again, collapse it
            setSelectedBook(null);
        } else {
            // Otherwise, expand the clicked book
            setSelectedBook(book);
        }
    };

    const handleAddToCart = (book) => {
        // Implement logic to add book to shopping cart
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Book Recommendations</h2>
            <SearchBar set={setBooks} books={my_books} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                {books.map(book => (
                    <Card key={book.primary_isbn10} style={{ width: '200px', cursor: 'pointer', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s' }}>
                        <img src={book.book_image} onClick={() => handleBookClick(book)} alt={book.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
                        <CardContent onClick={() => handleBookClick(book)} style={{ padding: '8px' }}>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginBottom: '0.5rem', minHeight: '3.6em', maxHeight: '3.6em', overflow: 'hidden' }}>{book.title}</Typography>
                            {selectedBook === book && (
                                <div style={{ marginTop: '1rem' }}>
                                    <Typography variant="body2"><span style={{ fontWeight: 'bold' }}>Author:</span> {book.author}</Typography>
                                    <Typography variant="body2"><span style={{ fontWeight: 'bold' }}>Description:</span> {book.description}</Typography>
                                </div>
                            )}
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center', padding: '8px' }}>
                            <Button onClick={() => {
                                handleAddToCart(book);
                                handleOpen();
                                handleSelectedBook();
                            }} variant="contained" color="primary" style={{ width: '100%' }}>Add to Cart</Button>
                        </CardActions>
                    </Card>
                ))}
                <AddToCardModal books={books} my_books={my_books} setOpen={handleOpen} handleClose={handleClose} open={open} />
            </div>
        </div >
    );
}
export default BookRecommendation;