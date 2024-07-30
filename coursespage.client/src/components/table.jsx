import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Typography, MenuItem, Select, FormControl, InputLabel, Paper
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp, ExpandMore } from '@mui/icons-material';
import axios from 'axios';

function CollapsibleRow(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="medium" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{row.id}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{row.name}</TableCell>
                <TableCell>{row.prerequisite}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h5" gutterBottom component="div">Description</Typography>
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
    const [sortDirection, setSortDirection] = useState('asc');
    const [orderBy, setOrderBy] = useState('subject');

    useEffect(() => {
        axios
            .get('https://localhost:7221/api/Table')
            .then((response) => {
                if (response.data) {
                    const sortedData = [...response.data].sort((a, b) => {
                        if (a.subject < b.subject) return sortDirection === 'asc' ? -1 : 1;
                        if (a.subject > b.subject) return sortDirection === 'asc' ? 1 : -1;
                        return 0;
                    });
                    setTableData(sortedData);
                    setFilteredData(sortedData);
                } else {
                    console.error('Response data is undefined');
                }
            })
            .catch((error) => {
                console.log('Error fetching data from the database:', error.message);
            });
    }, [orderBy, sortDirection]);

    useEffect(() => {
        let updatedData = tableData.filter(course => chosenSubject === '' || course.subject === chosenSubject);

        setFilteredData(updatedData);
    }, [chosenSubject, tableData]);

    const handleSort = (column) => {
        const isAsc = orderBy === column && sortDirection === 'asc';
        setSortDirection(isAsc ? 'desc' : 'asc');
        setOrderBy(column);
    };

    return (
        <>
            <div>
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel>Filter by Subject</InputLabel>
                    <Select
                        value={chosenSubject}
                        onChange={(e) => setChosenSubject(e.target.value)}
                        label="Subject">
                        <MenuItem value=""><em>All Subjects</em></MenuItem>
                        {[...new Set(tableData.map(course => course.subject))].map(subject => (
                            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
            <Paper elevation={7}>
                <Box id="table-box" sx={{ height: '60vh', overflow: 'auto', borderRadius: '10px' }}>

                    <TableContainer>
                    <Table id="table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '3%' }} />
                                <TableCell
                                    onClick={() => handleSort('subject')}
                                    style={{ width: '15%', fontSize: '1rem' }}
                                >
                                    Subject
                                    <ExpandMore
                                        sx={{
                                            fontSize: 20,
                                            background: 'none',
                                            ml: 1,
                                            transition: '0.3s',
                                            transform: orderBy === 'subject' ? (sortDirection === 'asc' ? 'rotate(0deg)' : 'rotate(180deg)') : 'rotate(0deg)',
                                        }}
                                    />
                                </TableCell>
                                <TableCell style={{ width: '10%', fontSize: '1rem' }}>Course ID</TableCell>
                                <TableCell style={{ width: '30%', fontSize: '1rem' }}>Course Name</TableCell>
                                <TableCell style={{ width: '33%', fontSize: '1rem' }}>Prerequisite(s)</TableCell>
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
            </Paper>
            </div>
        </>
    );
};

export default CoursesTable;

