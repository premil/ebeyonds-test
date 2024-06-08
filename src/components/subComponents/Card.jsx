import { NewsCard } from './List';
import newsData from '../../data/mockData';

function NewsList() {

  return (
    <>
      <div>
        <div className="m-3">
          <div className="row ">
            {newsData.map((data) => {
              console.log(data);
              return <NewsCard key={data.news_id} productInfo={data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsList;