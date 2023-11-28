import { Component } from 'react';
import { Button, FormSearch, Header, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <Header className="searchbar">
        <FormSearch className="form" onSubmit={this.handleSubmit}>
          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>
        </FormSearch>
      </Header>
    );
  }
}
