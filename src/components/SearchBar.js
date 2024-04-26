import React, { useState} from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  margin-bottom: 100px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* To ensure rounded corners are applied 
`;

const SearchBarInput = styled(TextField)`
  && {
    flex: 1;
    margin-right: 0;
    border-radius: 0;
    border: none;

    .MuiInput-root {
      border-radius: 0;
      padding: 12px 16px;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    .MuiInput-input::placeholder {
      color: #999999;
    }

    .MuiInput-root:focus {
      background-color: #f5f5f5;
    }

    .MuiInput-underline::before {
      display: none; /* Removes the underline */
    }
  }
`;

function SearchBar(props) {
  const [name, setName] = useState({ name: "" });

  const handleSearch = (e) => {
    const value = e.target.value;
    const result = props.books.filter((el) => {
      return el.title.toLowerCase().includes(value);
    });

    props.set(result);
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        label="Search books"
        variant="outlined"
        value={name.value}
        onChange={handleSearch}
      />
    </SearchBarContainer>
  );
}
export default SearchBar;
