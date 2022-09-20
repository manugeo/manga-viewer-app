import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBooks, selectBook } from './reducers/booksReducer';

function App() {
  const dispatch = useDispatch();
  const { books } = useSelector(state => state);

  useEffect(() => {
    dispatch(initializeBooks());
  }, [dispatch]);


  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      background: 'pink',
      height: '300px'
    },
    bookRow: {
      display: 'flex',
      justifyContent: 'center'
    },
    selected: {
      color: '#ffffff',
      background: '#015a5a'
    },
    chapterRow: {
      background: 'cyan',

      margin: '4px',
      display: 'flex',
      justifyContent: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.bookRow}>
        {books.map(book => <button key={book.id} style={book.isSelected ? styles.selected : null} onClick={() => dispatch(selectBook(book.id))}>
          {book.title}
        </button>)}
      </div>

      <div style={styles.chapterRow}>
        <button style={styles.selected}>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
}

export default App;
