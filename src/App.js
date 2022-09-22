import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeBooks, selectBook } from './reducers/booksReducer';
import { selectChapter } from './reducers/chaptersReducer';

function App() {
  const dispatch = useDispatch();
  const { books, chapters, pages, currentPage } = useSelector(state => state);

  useEffect(() => {
    dispatch(initializeBooks());
  }, [dispatch]);

  const styles = {
    container: {
      maxWidth: '1200px',
      marginTop: '4px',
      marginBottom: '4px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
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
      marginTop: '4px',
      display: 'flex',
      justifyContent: 'center'
    }
  };

  const BookRow = () => {
    const onBookBtnClick = (book) => dispatch(selectBook(book));
    return (
      <div style={styles.bookRow}>
        {books.map(book => {
          const { id, isSelected, title } = book;
          return <button key={id} style={isSelected ? styles.selected : null}
            onClick={() => onBookBtnClick(book)}>{title}</button>
        })}
      </div>
    );
  };
  const ChapterRow = () => {
    const onChapterBtnClick = (chapter) => dispatch(selectChapter(chapter));
    return (
      <div style={styles.chapterRow}>
        {chapters.map(chapter => {
          const { id, isSelected, title } = chapter;
          return <button key={id} style={isSelected ? styles.selected : null}
            onClick={() => onChapterBtnClick(chapter)}>{title}</button>
        })}
      </div>
    );
  };
  const Page = ({ page, totalPages }) => {
    const { image, page_index } = page;
    const { width, height, file } = image;
    const pageNumber = (page_index + 1);
    const pageStyles = {
      container: {
        marginTop: '4px',
      },
      image: {
        width: '100%',
        maxWidth: `${width}px`,
        maxHeight: `${height}px`
      },
      numberText: {
        marginTop: '4px',
        textAlign: 'center'
      }
    };
    const onImageClick = (e) => {
      console.log(e);
    };
    return (
      <div style={pageStyles.container}>
        {page && <img src={file} alt={`page-${pageNumber}`} style={pageStyles.image}
          onClick={onImageClick} />}
        <div style={pageStyles.numberText}>{`${pageNumber} / ${totalPages}`}</div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <BookRow />
      <ChapterRow />
      {currentPage && <Page page={currentPage} totalPages={pages.length} />}
    </div>
  );
}

export default App;
