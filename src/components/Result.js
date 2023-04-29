import React, { useEffect, useCallback, useState } from 'react';
import to from "await-to-js";
import { Box, TextField, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { StarshipsCards } from "./starship/StarshipCard";
import { services } from "../api/StarwarsAPI";
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
    },
  },
})(TextField);

export const Result = () => {
    const [starships, setStarships] = useState(null);
    const [searchText, setSearchText] = useState("");

    const handleTextChange = (event) => {
      setSearchText(event.target.value);
    };

    const handleSearch = useCallback(async () => {
      try {
        const [err, { data: response }] = await to(services.searchStarships(searchText));
        setStarships(response.results);
      } catch (error) {
          console.log('Error: ', error);
          setStarships(null);
      }
    }, [searchText]);

    const fetchStarships = useCallback(async () => {
        try {
          const [err, { data: response }] = await to(services.getStarships());
          setStarships(response.results);
        } catch (error) {
          console.log('Error: ', error);
          setStarships(null);
        }
    });

    useEffect(() => {
        fetchStarships();
      }, []);

    return (
        <>
          <Box style={{margin: 35}}>
            <CssTextField
                className = "textfield"
                  label="Name/Model"
                  placeholder="Name/Model"
                  InputLabelProps={{
                      style: { 
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          color: 'yellow' 
                      }
                  }}
                  size="small"
                  value={searchText}
                  onChange={handleTextChange}
                  InputProps={{
                      style: { color: 'yellow' },
                      placeholderTextColor: 'yellow',
                      startAdornment: (
                      <InputAdornment position="start">
                          <IconButton style={{color: 'yellow'}} onClick={handleSearch}><SearchIcon/></IconButton>
                      </InputAdornment>
                      ),
                  }}
                  sx={{ marginLeft: 1 }}
              />
        </Box>
        <StarshipsCards starships={starships}/>
      </>
    )
}

export default Result;