import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import axios from 'axios';

function CollapsibleRow(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </TableCell>
            <TableCell>{row.subject}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{row.id}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{row.name}</TableCell>
            <TableCell>{row.prerequisite}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant ="h5" gutterBottom component="div">Description</Typography>
                  <p>{row.description}</p>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      );
}

CollapsibleRow.propTypes = {
    row: PropTypes.shape({
        subject: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        prerequisite: PropTypes.string,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

function CoursesTable() {

    const [tableData, setTableData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [chosenSubject, setChosenSubject] = useState('');

    useEffect(() => {
        axios
        .get('https://localhost:7221/api/Table')
            .then((response) => {
                if (response.data) {
                    setTableData(response.data);
                    setFilteredData(response.data);
                } else {
                    console.error('Response data is undefined');
                }
        })
        .catch((error) => {
            console.log('Error fetching data from the database:', error.message);
        });
    }, []);

    useEffect(() => {
        setFilteredData(tableData.filter(course => chosenSubject === '' || course.subject === chosenSubject)
        );
    }, [chosenSubject, tableData]);

    return (
        <div id="table-container">
        <div>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Filter by Subject</InputLabel>
                    <Select
                        value={chosenSubject}
                        onChange={(e) => setChosenSubject(e.target.value)}
                        label="Subject">
                        <MenuItem value=""><em>All Subjects</em></MenuItem>
                        {}
                        {[...new Set(tableData.map(course => course.subject))].map(subject => (
                            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                        ))}
                    </Select>               
            </FormControl>
        </div> 
            <Box id="table-box" sx={{ height: '60vh', overflow: 'auto' }}>
                <TableContainer>
                    <Table>
                        <TableHead id="table-header">
                            <TableRow>
                                <TableCell />
                                <TableCell>Subject</TableCell>
                                <TableCell>Course ID</TableCell>
                                <TableCell>Course Name</TableCell>
                                <TableCell>Prerequisite</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((row) => (
                                <CollapsibleRow key={row.id} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>         
        </div>
      );
};

export default CoursesTable;