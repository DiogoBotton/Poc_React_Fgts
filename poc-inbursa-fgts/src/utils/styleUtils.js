export const disabledBorderInTextField = {
    '& .MuiInput-root': {
        '&:before, :after, :hover:not(.Mui-disabled):before': {
            borderBottom: 0,
        },
    }
}

const palette = {
    primaryBlue: "#17335e",
    secondaryBlue: "#1B3255",
    white: "#fff",
    gray: "#6C6C6C",
    grayDivider: "#CBCBCB",
    lightGray: "#f9f9f9"
}

export const themes = {
    colors: {
        primaryBlue: palette.primaryBlue,
        secondaryBlue: palette.secondaryBlue,
        white: palette.white,
        text: palette.gray,
        lightGrayBackground: palette.lightGray,
        divider: palette.grayDivider
    }
}