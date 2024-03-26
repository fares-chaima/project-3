import { Box } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import SideBar from "./SideBar";
import "./css/AfficherCmpt.css";
import dlt from "./images/delete.svg";
import mdf from "./images/modf.svg";

const AfficherComptes = () => {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    
    {
      field: 'nom',
      headerName: 'nom',
      headerClassName: 'hdr',
      width: 160,
      editable: true,
    },
    {
      field: 'prenom',
      headerName: 'prenom',
      headerClassName: 'hdr',
      width: 160,
    },
    {
      field: 'email',
      headerName: 'email',
      headerClassName: 'hdr',
      type: '',
      width: 250,
    },
    {
      field: 'role',
      headerName: ' role',
      headerClassName: 'hdr',
      width:195,
    },
   
    {
      field: "gérer",
      headerName: 'gérer',
      headerClassName: 'hdr',
      width: 150,
      renderCell: (cellValues) => {
        return (
          <>
          <div className="change">
          <img src={dlt} />
          <img src={mdf}  />
          </div>
          </>
        );
          }
    },
  ];
  const rows = [
    { id: 1, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur",  access: "admin"},
    { id: 1, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 1, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 1, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 1, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",}
  ];

    return (  
        
        <div className="comptes">    
          <SideBar />
        <div className="cmpt">           
            <button>ajouter une compte</button>        
            <div style={{ height: 300, width: '100%' }}>
      <Box  sx={{ height: 400, width: '100%' , border: 'none'} }>
      <DataGrid
      style={({height : "120%"})}
      className='grid'
        rows={rows}
        columns={columns}    
        pageSizeOptions={[6]}      
        disableRowSelectionOnClick
       fontGrid= "20px"
       getRowClassName={(params) =>
    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
  }
      />
    </Box>
    </div>
                </div>
            
        </div>
        
    );
}
 
export default AfficherComptes;