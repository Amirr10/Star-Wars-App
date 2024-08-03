export const styles = {
  container: {
    width: "100%",
    height: `calc(100vh - 200px)`,
    overflow: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "#718096 #edf2f7",
  },
	catalogueCard: {
    avatar: {
      backgroundColor: "#164BA1",
      fontSize: "18px"
    },
    leftSide: {
      fontFamily: "Arial, Helvetica, sans-serif",
      paddingLeft: "16px",
      fontSize: "18px",
    },
    rightSide: {
      fontFamily: "Arial, Helvetica, sans-serif",
      paddingRight: "20px",
      fontSize: "22px",
      fontWeight: "500",
      color: "#2F2F2F"
    },
	},
  catalogueList: {
    listItem: {
      padding: 2,
      border: "1px solid #ddd",
      borderRadius: "8px",
    }
  },
  spinner: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.paper',
    p: 2, 
    borderRadius: '50%',
    boxShadow: 3
  }
};