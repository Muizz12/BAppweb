import { createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';
import { makeStyles } from '@mui/styles';

export const theme = createTheme({
    palette: {
        primary: { main: "#3CA6CF", contrastText: "#fff" },
        secondary: { main: "#B3DDEB", contrastText: "#fff" },
        // default: {main: '#FFFFFF'}

    },
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 20,
        "fontWeightLight": 700,
        "fontWeightRegular": 700,
        "fontWeightMedium": 700,
    },
})

export const ButtonTheme = createTheme({
    palette: {
        background: {
            default: "#FFFFFF"
        },
        primary: { main: "#1D3C5F", contrastText: "#fff" },
        secondary: { main: "#B3DDEB", contrastText: "#fff" }
    },
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 10,
        "fontWeightLight": 200,
        "fontWeightRegular": 200,
        "fontWeightMedium": 200,
        button: {
            textTransform: 'none'
        }
    }
})

export const ErrorMessageTheme = createTheme({
    typography: {
        fontSize: 15
    },
    palette: {
        primary: {
            main: "#FF0000"
        }
    }
})

export const VenuDetails = createTheme({
    typography: {
        fontSize: 15
    },
    // palette: {
    //     primary: {
    //         main: "#FF0000"
    //     }
    // }
})

export const useStyles = makeStyles({
    drawerPaper: {
        marginTop: "6%",
    }
});

export const dropdownTheme = createTheme({
    typography: {
        fontSize: 13
    },
    // palette: {
    //     primary: {
    //         main: "#FF0000"
    //     }
    // },
})
export const generalFormTheme = createTheme({
    typography: {
        fontSize: 13
    },
    palette: {
        background: {
            default: "#FFFFFF"
        },
        primary: { main: "#3CA6CF", contrastText: "#fff" },
        secondary: { main: "#112338", contrastText: "#fff" }
    },
})

export const TimePickerTheme = createTheme({
    palette: {
        background: {
            default: "#FFFFFF"
        },
        primary: { main: "#3CA6CF", contrastText: "#fff" },
        secondary: { main: "#B3DDEB", contrastText: "#fff" }
    },
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 15,

    },
})
export const globalTheme = createTheme({
    typography: {
        fontSize: 13,
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        h5: {
            fontSize: 35,
            fontWeight: "bold",
            color: '#252525'
        },
        button: {
            textTransform: 'none'
        },
    },
    palette: {
        primary: {
            light: '#FFFFFF',
            main: '#112338',
            dark: '#112338'
        },
        error: {
            main: '#FF0000'
        },
        secondary: {
            main: '#1D3C5F',
            light: '#236486'
        },
    },
})

export const sideMenuSeleted = makeStyles(theme => ({
    selected: {
        backgroundColor: "rgba(29, 60, 95, 0.1) !important",
    }
}))





