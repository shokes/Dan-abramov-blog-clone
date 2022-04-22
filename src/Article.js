import moment from 'moment';

const Article = function ({ title, date, length, snippet }) {
  const formattedDate = moment(date).format('MMMM Do, YYYY');
  return (
    <main className='article'>
      <div>
        {/* <h2>{title}</h2> */}
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
  );
};

export default Article;
