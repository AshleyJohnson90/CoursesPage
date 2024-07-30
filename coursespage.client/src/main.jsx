import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'Raleway'
        ].join(','),
    },
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    textAlign: 'left',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#fff',
                    },
                    '&:nth-of-type(even)': {
                        backgroundColor: '#d7e6f1',
                    },
                },
            },
        },

    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
