
import React,{useState} from 'react'
import MinNavBar from '../MinNavBar'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from 'react-router-dom';
import '../consomateur/Bci.css';


function Listbnrecep() {
    const [rows, setRows] = useState([
        { id: 1, num: 'reception N° 31', date: '20-04-2023'},
        { id: 2, num: 'reception N° 32', date: '20-04-2023'},
        { id: 3, num: 'reception N° 33', date: '20-04-2023'},
        { id: 4, num: 'reception N° 34', date: '20-04-2023'},
        { id: 5, num: 'reception N° 35', date: '20-04-2023'},
        { id: 6, num: 'reception N° 36', date: '20-04-2023'},
        { id: 7, num: 'reception N° 37', date: '20-04-2023'},
        { id: 8, num: 'reception N° 338', date: '20-04-2023 '},
        { id: 9, num: 'reception N° 39', date: '20-04-2023'},
        { id: 10, num: 'reception N° 34', date: '20-04-2023' },
      ]);
    
      const history = useHistory();
    
      const handleEnvoyerClick = (id) => {
        setRows(rows.map((row) => {
          if (row.id === id) {
            return { ...row, etat: 'Envoyée' };
          }
          return row;
        }));
      };
    
      const handleSupprimer = (id) => {
        setRows(rows.filter((row) => row.id !== id));
      };
    
      const handleModifier = (id) => {
        // Vous pouvez rediriger vers une nouvelle page avec les détails de la commande ici
        history.push(`/details-commande/${id}`);
      };
    
      const columns = [
        { field: 'num', headerName: 'N° DE BCE', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 },
       
        {
          field: 'action',
          headerName: 'Action',
          flex: 1,
          renderCell: (params) => (
            <div>
              <DeleteIcon fontSize="small" className='send2' onClick={() => handleSupprimer(params.row.id)} />
              <EditIcon fontSize="small" className='send1 supprimer' onClick={() => handleModifier(params.row.id)} />
              <PrintIcon fontSize="small" className='send1' />
            </div>
          ),
        },
        {
          field: 'envoyer',
          headerName: 'Envoyer',
          flex: 1,
          renderCell: (params) => (
            <div>
              <SendIcon onClick={() => handleEnvoyerClick(params.row.id)} fontSize="small" className='send'/>
            </div>
          ),
        },
      ];
  return (


    <div className='contbci'>
    <div>
      <div className='groupe1'>
        <h1 className='listedebci'>Liste Bon de reception</h1>
      
      </div>

      <div>
        <div className="cmpt">
          <div style={{ height: 300, width: '100%' }}>
            <DataGrid
              sx={{
                '.MuiDataGrid-columnSeparator': { display: 'none' },
                '&.MuiDataGrid-root': { border: 'none' },
              }}
              slots={{ toolbar: GridToolbar }}
              className='grid'
              style={{height: "66vh"}}
              rows={rows}
              columns={columns}
              rowHeight={70}
              autoPageSize
              getRowClassName={(params) => params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);


   
  
}

export default Listbnrecep
