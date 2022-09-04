import PropTypes from 'prop-types';
import { FilterForm, FilterLable, FilterInput} from '../Filter/Filter.styled'

export const Filter = ({ value, onChange }) => {
    return (
    <>
    <FilterForm >
        <h3>Find contacts by name</h3>
        <FilterLable htmlFor='filter'>
            <FilterInput type="text"
            name="filter"
            value={value}
            onChange={onChange}
            />
        </FilterLable>
    </FilterForm> 
    </>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};