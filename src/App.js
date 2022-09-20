
function App() {
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
        <button style={styles.selected}>balloon_dream</button>
        <button>bound_eye_siora</button>
        <button>raset</button>
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
