import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import "../css/AfficherCmpt.css";
import dlt from "../images/delete.svg";
import mdf from "../images/modf.svg";
import AsaSideBar from "./AsaSideBar";

const Chapitres = () => {
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
          field: 'description',
          headerName: 'description',
          headerClassName: 'hdr',
          flex: 1,
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
        { id: 1,nom:'chapitre', description: 'pc', },
        { id: 2,nom:'chapitre',  description: 'pc',},
        { id: 3, nom:'chapitre', description: 'pc',},
        { id: 4, nom:'chapitre', description: 'pc',},
        { id: 5,nom:'chapitre', description: 'pc',},
        { id: 6,nom:'chapitre', description: 'pc',},
        { id: 7,nom:'chapitre',  description: 'pc',},
        { id: 8,nom:'chapitre', description: 'pc',},
      ];
    
    return ( 
        <div className="comptes">    
          <AsaSideBar />
        <div className="cmpt">           
            <button style={{width: "300px"}}  onClick={()=> history.push("/AddChapitre")}>ajouter un chapitre</button>        
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
 
export default Chapitres;