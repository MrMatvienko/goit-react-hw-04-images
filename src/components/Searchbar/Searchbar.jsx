import { Button, FormSearch, Header, Input } from './Searchbar.styled';
import { useState } from 'react';

export const Searchbar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch(query);
    setQuery('');
  };

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
  return (
    <Header className="searchbar">
      <FormSearch className="form" onSubmit={handleSubmit}>
        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>
      </FormSearch>
    </Header>
  );
};

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.handleSearch(this.state.query);
//     this.setState({ query: '' });
//   };

//   handleChange = event => {
//     this.setState({ query: event.currentTarget.value.toLowerCase() });
//   };

//   render() {
//     return (
//       <Header className="searchbar">
//         <FormSearch className="form" onSubmit={this.handleSubmit}>
//           <Input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             name="query"
//             value={this.state.query}
//             onChange={this.handleChange}
//           />
//           <Button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </Button>
//         </FormSearch>
//       </Header>
//     );
//   }
// }
