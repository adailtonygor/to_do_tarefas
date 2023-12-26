import { makeStyles } from "@material-ui/styles";
import appColors from "../../theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },

  list: {
    maxWidth: "800px",
    padding: "0",
    zIndex: 2,
    "&.MuiList-root": {
      margin: "0 auto",
    },
  },

  cardContainer: {
    marginTop: "15px",
    backgroundColor: appColors.backgroundColor,
    borderRadius: "10px",
  },

  listaItem: {
    "& .MuiTypography-root": {
      color: appColors.whiteColor,
      fontWeight: "bold",
    },
  },

  editIcon: {
    color: appColors.whiteColor,
  },

  deleteIcon: {
    color: appColors.whiteColor,
  },

  "@global": {
    "*::-webkit-scrollbar": {
      width: "12px",
    },
    "*::-webkit-scrollbar-track": {
      backgroundColor: appColors.black,
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: appColors.greenCard,
      borderRadius: "4px",
      border: `2px solid ${appColors.dividerBlue}`,
    },
  },
});

export default useStyles;
