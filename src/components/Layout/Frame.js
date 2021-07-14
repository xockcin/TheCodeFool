import './Frame.css'

const Frame = (props) => {
  return (
    <>
      <header>
        <nav>
          <h2>Why Tarot</h2>
        </nav>
      </header>
      {props.children}
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
};

export default Frame