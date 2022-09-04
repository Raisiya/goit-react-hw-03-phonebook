import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import {Form, FormInput, FormLabel, FormBtn} from './ContactForm.styled';

const INITIAL_STATE = {
    name: '',
    number: ''
};

export class ContactForm extends Component {
    state = { ...INITIAL_STATE };

    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const { onAddContact } = this.props;
        onAddContact({ ...this.state, id: nanoid(10) });
        this.reset();
    };

    reset = () => {
        this.setState({ ...INITIAL_STATE })
    };

        render() {
            const { name, number } = this.state;
            return (
                <Form onSubmit={this.handleSubmit}>
                    <FormLabel htmlFor="name">
                        Name
                        <FormInput
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={this.handleChange}
                        />
                    </FormLabel>
                    <FormLabel htmlFor="number">
                        Number
                        <FormInput
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={this.handleChange}
                        />
                    </FormLabel>
                    <FormBtn type="submit">Add contact</FormBtn>
                </Form>
            );
        }
    }
