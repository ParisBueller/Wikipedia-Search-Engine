var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
var input;

//Search Bar Component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { term: ''};
}  
  render() {
    
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} /> 
      </div>
    ); 
  }
}

ReactDOM.render(<SearchBar />, document.getElementById('search'));