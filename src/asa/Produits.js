import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import "../css/AfficherCmpt.css";
import dlt from "../images/delete.svg";
import mdf from "../images/modf.svg";
import AsaSideBar from "./AsaSideBar";
const Produits = () => {

    const history = useHistory();


    const columns = [
    
        {
          field: 'id',
          headerName: 'id',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'nom',
          headerName: 'nom',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'article',
          headerName: 'article',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'description',
          headerName: 'Description',
          headerClassName: 'hdr',
          flex: 1,
         
        },
        {
          field: 'quantite',
          headerName: 'Quantite',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'stock',
          headerName: ' Stock',
          headerClassName: 'hdr',
          flex: 1,
          renderCell: ({ row: { stock } }) => {
            return (
              <Box
                width="75%"
                
                p="5px"
               marginLeft="-10px"
               marginTop="5%"
                backgroundColor={
                  stock === "in stock"
                    ?  "#83E173"
                    : stock === "low stock"
                    ? "#D2AB5E"
                    : "#C76969"
                }
                borderRadius="24px"
              >
                
                <Typography color="#222020" id="etat">
                  {stock}
                </Typography>
              </Box>
            );
          },
        },
       
        {
          field: "gérer",
          headerName: 'gérer',
          headerClassName: 'hdr',
          flex: 1,
          renderCell: (cellValues) => {
            return (
              <>
              <div className="change">
              <img src={dlt} alt="dlt" />
              <img src={mdf} alt="mdf" />
              </div>
              </>
            );
              }
        },
      ];
      const rows = [
        { id: 1, nom: 'pc',article:'article1', description: 'i5',quantite:'20', stock: "in stock", },
        { id: 2,  nom: 'pc',article:'article1', description: 'i5',quantite:'20', stock: "low stock",},
        { id: 3,  nom: 'pc',article:'article1', description: 'i5',quantite:'20', stock: "out of stock"},
        { id: 4,  nom: 'pc',article:'article1', description: 'i5',quantite:'20', stock: "in stock"},
        { id: 5,  nom: 'pc',article:'article1', description: 'i5',quantite:'20', stock: "in stock"},
        { id: 6, nom: 'pc',article:'article1', description: 'i5',quantite:'20', stock: "in stock"},
        { id: 7, nom: 'pc',article:'article1', description: 'i5',quantite:'20', stock: "in stock"},
        { id: 8, nom: 'pc',article:'article1', description: 'i5',quantite:'20', stock: "in stock"},
      ];
    return ( 
        
<div className="comptes">    
          <AsaSideBar />
        <div className="cmpt">           
            <button style={{width: "300px"}}  onClick={()=> history.push("/AddProduit")}>ajouter un produit</button>        
            <div style={{ height: 300, width: '100%' }}>
     
      <DataGrid
      sx={{
        '.MuiDataGrid-columnSeparator': {
          display: 'none',
          
        },
        '&.MuiDataGrid-root': {
          border: 'none',
        },
        
       
        
      }}
      slots={{ toolbar: GridToolbar }}
      className='grid'
      style={{height: "66vh"}}
        rows={rows}
        columns={columns}    
        rowHeight={70}
        autoPageSize
        disableRowSelectionOnClick
       getRowClassName={(params) =>
    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
  }
     
      />
   
    </div>
                </div>
            
        </div>
    
     );
}
 
export default Produits;