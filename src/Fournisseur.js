import { DataGrid } from "@mui/x-data-grid";
import * as React from 'react';
import SideBar from "./SideBar";
import "./css/AfficherCmpt.css";
import dlt from "./images/delete.svg";
import mdf from "./images/modf.svg";

const Fournisseurs = () => {
    const columns = [
    
        {
          field: 'nom',
          headerName: 'nom',
          headerClassName: 'hdr',
          width: 150,
          editable: true,
        },
        {
          field: 'prenom',
          headerName: 'prenom',
          headerClassName: 'hdr',
          width: 150,
        },
        {
          field: 'email',
          headerName: 'email',
          headerClassName: 'hdr',
          type: '',
          width: 250,
        },
        {
          field: 'tel',
          headerName: ' num de tél',
          headerClassName: 'hdr',
          width:190,
        },
       
        {
          field: "gérer",
          headerName: 'gérer',
          headerClassName: 'hdr',
          width: 160,
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
        { id: 1, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , tel:"0676054711",  access: "admin"},
        { id: 2, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , tel:"0676054711", access: "admin",},
        { id: 3, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , tel:"0676054711", access: "admin",},
        { id: 4, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , tel:"0676054711", access: "admin",},
        { id: 5, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , tel:"0676054711", access: "admin",},
        { id: 6, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , tel:"0676054711", access: "admin",},
        { id: 7, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , tel:"0676054711", access: "admin",},
        { id: 8, nom: 'souha', prenom: 'Jon', email: "souha@esi-sba.dz" , tel:"0676054711", access: "admin",},
      ];

    return (
        <div className="comptes">    
          <SideBar />
        <div className="cmpt">           
            <button style={{width: "300px"}}>ajouter une fournisseur</button>        
            <div style={{ height: 300, width: '100%' }}>
     
      <DataGrid
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
 
export default Fournisseurs;