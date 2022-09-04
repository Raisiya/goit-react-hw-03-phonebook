import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem.jsx';
import { Box } from '../Box';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <Box as='ul' width='80%'>
            {contacts.map(({ id, name, number }) => {
                return (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onClick={onDeleteContact}
                    />
                );
            })}
        </Box>
    );
};

ContactList.propType = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func
};