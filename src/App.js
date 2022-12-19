import { Card } from './Card/Card';
import './App.css';

const info1 = {
  title: 'Card title',
  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}

const info2 = {
  title: 'Card title',
  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}

function App() {
  return (
    <>
      <Card info={info1}>
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      </Card>
      <Card info={info2} />
    </>
  );
}

export default App;
