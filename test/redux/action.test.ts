import  {loading, getTotalResults, setSearch, setArticles} from '../../src/redux/action';
import { ArticleInfo } from '../../src/shared/articleInfo';
import { ISearch } from '../../src/shared/searchInfo';
import { SortType } from '../../src/shared/sortType';

it('Test action Loading', () => {
  const actionResult = loading(true);
  expect(actionResult.payload).toBe(true);
  expect(actionResult.type).toBe('LOADING');
});

it('Test action getTotalResults', () => {
  const actionResult = getTotalResults(3);
  expect(actionResult.payload).toBe(3);
  expect(actionResult.type).toBe('TOTAL_RESULTS');
});

it('Test action setArticles', () => {
  const articles: ArticleInfo[] = [
    {
      author: 'Simon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.',
      publishedAt: '26.08.2021',
      title: 'Lorem ipsum dolor',
      urlToImage: 'https://i2.wp.com/dogcentr.ru/wp-content/uploads/2016/10/33-1.jpg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.',
      url: 'https://i2.wp.com/dogcentr.ru/wp-content/uploads/2016/10/33-1.jpg',
      source: {id: '123', name: 'Simon'}
    },
    {
      author: 'Simon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.',
      publishedAt: '26.08.2021',
      title: 'Lorem ipsum dolor',
      urlToImage: 'https://i2.wp.com/dogcentr.ru/wp-content/uploads/2016/10/33-1.jpg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.',
      url: 'https://i2.wp.com/dogcentr.ru/wp-content/uploads/2016/10/33-1.jpg',
      source: {id: '123', name: 'Simon'}
    }
  ]
  const actionResult = setArticles(articles);
  expect(actionResult.payload).toBe(articles);
  expect(actionResult.type).toBe('SET_ARTICLES');
});

it('Test action setSearch', () => {
  const search: ISearch =   {
    searchValue: 'dog',
    sortBy: SortType.popularity,
    amount: 10,
    page: 8
  };
  const actionResult = setSearch(search);
  expect(actionResult.payload).toBe(search);
  expect(actionResult.type).toBe('SET_SEARCH');
});