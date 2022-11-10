import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import Box from "@mui/material/Box";

const DataTable = ({ rows, columns, loading, getRowId, sx }) => {
  const [pageSize, setPageSize] = useState(2)
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        loading={loading}
        sx={sx}
        pageSize={pageSize}
        onPageSizeChange = {(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[2,5,10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default DataTable;
