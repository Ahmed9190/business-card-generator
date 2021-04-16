import './home.scss';
import HorizontalSlider from './../../components/horizontal-slider/horizontal-slider';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button';

function HomePage({ history: { push } }) {
  return (
    <div className="home-container">
      <div className="header-main-container">
        {/* <div className="home-header"> */}
        <Header />
        {/* </div> */}
        <div className="main">
          <span>Business Card Generator</span>
          <span>Want a free card ?</span>
          <button
            className="create-one-button"
            onClick={() => push('/card/create')}
          >
            Create one
          </button>
        </div>
      </div>
      <div className="carousel">
        <HorizontalSlider />
      </div>
      <div className="show-all-div">
        <Link to="/CardsPage">
          {/* <span className="show-all-button"></span> */}
          <CustomButton text="Show All" style={{ padding: '7px' }} />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
