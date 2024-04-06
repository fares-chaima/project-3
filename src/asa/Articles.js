import { DataGrid } from "@mui/x-data-grid";
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import "../css/AfficherCmpt.css";
import dlt from "../images/delete.svg";
import mdf from "../images/modf.svg";
import AsaSideBar from "./AsaSideBar";

const Articles = () => {
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
          field: 'chapitre',
          headerName: 'chapitre',
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
        { id: 1,nom: 'aricle',description: 'pc', chapitre:'chapitre',  },
        { id: 2, nom: 'aricle', description: 'pc', chapitre:'chapitre',},
        { id: 3, nom: 'aricle',description: 'pc', chapitre:'chapitre',},
        { id: 4,nom: 'aricle',description: 'pc', chapitre:'chapitre',},
        { id: 5, nom: 'aricle', description: 'pc', chapitre:'chapitre',},
        { id: 6,nom: 'aricle', description: 'pc', chapitre:'chapitre',},
        { id: 7, nom: 'aricle', description: 'pc', chapitre:'chapitre',},
        { id: 8, nom: 'aricle',description: 'pc', chapitre:'chapitre',},
      ];
    
    return ( 
            
<div className="comptes">    
          <AsaSideBar />
        <div className="cmpt">           
            <button style={{width: "300px"}}  onClick={()=> history.push("/AddArticle")}>ajouter un article</button>        
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
 
export default Articles;