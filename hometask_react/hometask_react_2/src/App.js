import Header from './Header/Header';
import Article from './Article/Article';
import MusicBlocks from './MusicBlocks/MusicBlocks';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import './App.css';


function App(props) {
  let {navigation, db, title, textFooter} = props;
  return (
    <div className="App">
      <Header />
      <Nav navigation = {navigation}/>
      <MusicBlocks title = {title}/>
      <Article db={db} />
      <Footer  textFooter = {textFooter}/>
    </div>
  );
}

export default App;
