//import Navigation from './Navigation';

import articles from './data';
import Navigation from './Navigation';
import Article from './Article';
import Footer from './Footer';
const Blog = function () {
  return (
    <main className='container'>
      <nav>
        <Navigation />
      </nav>
      <article>
        {articles.map((item) => {
          return <Article {...item} key={item.id} />;
        })}
      </article>
      <Footer />
    </main>
  );
};
export default Blog;
