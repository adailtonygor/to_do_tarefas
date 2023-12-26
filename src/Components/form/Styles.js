import { makeStyles } from "@material-ui/styles";
import appColors from "../../theme";

const useStyles = makeStyles({
    
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "10px",
      background: appColors.backgroundColor,
      borderRadius: "10px",
      width: "80vh",
      height: "65vh",
      zIndex: 2,
    },
    
    titulo: {
      "&.MuiTypography-root": {
        marginBottom: "10px",
        color: appColors.whiteColor,
      },
    },

  nomeTarefa: {
    "& .MuiOutlinedInput-root": {
      marginBottom: "10px",
    },
    "& .MuiInputLabel-root": {
      color: appColors.whiteColor,
      fontSize: 17,
      marginTop: 5,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: appColors.whiteColor,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: appColors.whiteColor,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: appColors.whiteColor,
    },
    "& .MuiInputBase-input": {
      color: appColors.whiteColor,
    },
    "&:hover .MuiInputBase-input": {
      color: appColors.whiteColor,
    },
    "& .MuiInputBase-input.Mui-focused": {
      color: appColors.whiteColor,
    },
    " & .MuiFormHelperText-root": {
      marginLeft: "1px",
      marginTop:"-9px",
    },
    "& .MuiInputLabel-root.Mui-focused":{
      color:appColors.whiteColor,
    },
  },

  dataConclusao: {
    "& .MuiInputBase-input": {
      padding: "16.5px 35px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: appColors.whiteColor,
    },
    "& .MuiOutlinedInput-input": {
      color: appColors.whiteColor,
    },
    " & .MuiFormHelperText-root": {
      marginLeft: "1px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: appColors.whiteColor,
    },
    
  },

  labelImportante: {
    color: appColors.whiteColor,
    "& .MuiSvgIcon-root": {
      color: appColors.whiteColor,
    },
  },

  

  
});

export default useStyles;
