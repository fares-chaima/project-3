
import React,{useState} from 'react'
import MinNavBar from '../MinNavBar'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from 'react-router-dom';
import '../consomateur/Bci.css';
import './Listbs.css';
import { LuEye } from "react-icons/lu";


function Listbs() {
    const [rows, setRows] = useState([
      { id: 1, num: 'sortie N° 31', date: '20-04-2023' },
      { id: 2, num: 'sortie N° 32', date: '20-04-2023' },
      { id: 3, num: 'sortie N° 33', date: '20-04-2023' },
      { id: 4, num: 'sortie N° 34', date: '20-04-2023' },
      { id: 5, num: 'sortie N° 35', date: '20-04-2023' },
      { id: 6, num: 'sortie N° 36', date: '20-04-2023' },
      { id: 7, num: 'sortie N° 37', date: '20-04-2023' },
      { id: 8, num: 'sortie N° 338', date: '20-04-2023' },
      { id: 9, num: 'sortie N° 39', date: '20-04-2023' },
      { id: 10, num: 'sortie N° 34', date: '20-04-2023' },
    ]);
  
    const history = useHistory();
  
   
    const handleConsulter = (id) => {
     
      history.push(`/details-commande/${id}`)
      console.log(`Générer le bon de sortie pour l'ID : ${id}`);}
  
    const handleSupprimer = (id) => {
      setRows(rows.filter((row) => row.id !== id));
    };
  
    const handleModifier = (id) => {
      // Vous pouvez rediriger vers une nouvelle page avec les détails de la commande ici
      history.push(`/details-sortie'/${id}`);
    };
  
    const columns = [
      { field: 'num', headerName: 'N° DE Bs', flex: 1 },
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
        field: 'consulter',
        headerName: 'consulter',
        flex: 1,
        renderCell: (params) => (
          <div>
             
               <LuEye  onClick={() => handleConsulter(params.row.id)} fontSize="small" className='send' style={{ marginLeft:'50px'}} />

          </div>
        ),
      },
    ];
  
    return (
      <div className='contbci'>
        <div>
          <div className='groupe1'>
            <h1 className='listedebs'>Liste de Bon de sortie</h1>
           
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

export default Listbs
