const API_KEY = 'UGp7KONVJA2G59lxV9tymyyjpHGqOIqs';
const API_URL = 'https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction';

export const getBooks = async () => {
    try {
        const response = await fetch(`${API_URL}?api-key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error('Error fetching books:', error);
    }
};