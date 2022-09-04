import { StyleItem, StyleBtn } from '../ContactItem/ContactItem.styled';

export const ContactItem  = ({ id, name, number, onClick }) => {
  return (
    <StyleItem>
      <p>{name}:</p>
      <p>{number}</p>
      <StyleBtn id={id} onClick={() => onClick(id)}>
        Delete
      </StyleBtn>
    </StyleItem>
  );
};