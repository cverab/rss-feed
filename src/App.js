import { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';
import Feed from './components/Feed/';
import Dummy from './components/Dummy';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    try {
      const res = await axios.get('https://rss-server-x4h0.onrender.com/');
      const sortedArticles = res.data.sort((a, b) => new Date(b.item.pubDate) - new Date(a.item.pubDate));
      setArticles(sortedArticles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getArticles();
  }, [])

  return (
    <div className="App">
      <h2>Noticias Ibagué y Tolima</h2>
      {loading ? (
        Array(5).fill().map((_, i) => <Dummy mensaje='Cargando...' key={i} />)
      ) : (
        articles.map((item, i) =>
          <div key={i}>
            <Feed
              publisher={item.title}
              title={item.item.title}
              link={item.item.link}
              date={item.item.pubDate}
            />
          </div>
        )
      )}
    </div>
  );
};

export default App;