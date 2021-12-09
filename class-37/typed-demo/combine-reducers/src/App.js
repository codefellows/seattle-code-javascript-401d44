import './App.css';
import { connect } from 'react-redux';
import { selectCategory } from './store/storefront.js';


function App(props) {

  return (
    <div className="App">
      {props.categories.map(category => (
        <button
          onClick={() => props.selectCategory(category.normalizedName)}>
          Select {category.displayName}
        </button>
      ))}
    </div>
  );
}

// mapStateToProps is a function, that receive state as a parameter
const mapStateToProps = (state) => ({
  categories: state.storefront.categories,
  products: state.storefront.products,
  activeCategory: state.storefront.activeCategory,
});


const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch(selectCategory(category)),
});

// for any child of the provider we can do the same things
export default connect(mapStateToProps, mapDispatchToProps)(App);
