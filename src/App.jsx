import Cards from './components/Cards';
import {articleData} from './data';

export default function App() {

  return (
    <main className='main'>
      <h1 className='main__title'>Reliable, efficient delivery <span className='main__title-bold'>Powered by Technology</span></h1>
      <p className='main__desc'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      <div className='main__card_wrapper'>
        {articleData.map((e)=><Cards key={e.id} {...e}/>)}
      </div>
    </main>
  )
}