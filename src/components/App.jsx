import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box';


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };
  
  handleChange = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  dataChecking = data =>
    this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    );

    filterItems = (arr, query) => {
      let newArray = arr.filter(
        el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      return newArray;
    };

  addContact = data => {
    this.setState(prevState => {
      if (prevState.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )) {
        return alert(`${data.name} is already in contacts`);
      } else {
        return { contacts: [...prevState.contacts, data] };
      }
    });
  };

  deleteContact = id => {
  
    this.setState(prevState => {
      const newArray = prevState.contacts.filter(el => el.id !== id);
      return { contacts: newArray };
    });
  };
  
  render() {
    const {filter} = this.state;

    return (
      <Box p="25px"
      mt={4}
      mx={'auto'}
      px={4}
      py={5}
      display={'flex'}
      flexDirection="column"
      alignItems="center"
      width={3}
      borderRadius={'large'}
      bg={'#f6f6f6'}>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        
        <Filter
          value={filter}
          title="Find contacts by name"
          onChange={this.handleChange}
        />
        
        <ContactList
          contacts={this.filterItems(this.state.contacts, filter)}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}