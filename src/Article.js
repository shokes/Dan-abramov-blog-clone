import moment from 'moment';
import { Slide } from 'react-awesome-reveal';

const Article = function ({ title, date, length, snippet }) {
  const formattedDate = moment(date).format('MMMM Do, YYYY');
  return (
    <Slide direction='up' triggerOnce>
      <main className='article'>
        <div>
          <a className='article-heading' href='#'>
            {title}
          </a>
          <div className='time-flex'>
            <p>{formattedDate}.</p>
            <p className='emoji'>{length} min read</p>
          </div>

          <p className='para'>{snippet}</p>
        </div>
      </main>
    </Slide>
  );
};

export default Article;
