import { CircularProgress, Grid, Snackbar, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "GraphQl/Query/Query";
import moment from "moment";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    sortable: false,
  },
  {
    field: "model",
    headerName: "Catagory",
    flex: 1,
    sortable: false,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 1,
    sortable: false,
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
  },
  {
    field: "amount",
    headerName: "Amount",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
  },
];

function Dashboard() {
  const { data, loading, error } = useQuery(GET_DATA, {
    pollInterval: 5000,
  });
  const [rows, setRows] = React.useState<any>([]);

  React.useEffect(() => {
    let tempArr: any = [];
    if (data) {
      console.log("daa=====>");
      data.getData?.map((item: any) => {
        tempArr.push({
          id: item.id,
          name: item.name,
          model: item.model,
          quantity: item.quantity,
          date: moment(item.year).format("DD/MM/YYYY"),
          amount: item.amount,
        });
      });
      setRows(tempArr);
    }
  }, [data]);

  if (loading) {
    return (
      <div
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return (
      <Snackbar open={true} autoHideDuration={5000} message={error.message} />
    );
  }
  return (
    <Box sx={{ width: "100%", height: "40rem" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
}

export default Dashboard;
