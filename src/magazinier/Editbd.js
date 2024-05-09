
import React,{useState} from 'react'
import '../consomateur/Creerbci.css'
import { IoMdListBox } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from 'react-router-dom';
import './Editbs.css';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function Editbd() {

    const [selectedReceipt, setSelectedReceipt] = useState('');

    const handleRowClick = (num) => {
      setSelectedReceipt(num);
    };


       
    const [rows, setRows] = useState([
        { id:'1', designation: 'Produit A', numerodereference: '12345', observations: 'Aucune' },
        { id:'2',  designation: 'Produit B', numerodereference: '67890', observations: 'OK' },
        { id:'3',  designation: 'Produit C', numerodereference: '54321', observations: 'En attente' },
        { id:'4',  designation: 'Produit D', numerodereference: '09876', observations: 'Erreur' },
    ]);

  const history = useHistory();

 

 

  const columns = [
  
    { field: 'designation', headerName: 'Désignation', flex: 1 },
 
    { 
      field: 'numerodereference', 
      headerName: 'N° de reference', 
      flex: 1, 
      editable: true,
      cellRenderer: 'agAnimateShowChangeCellRenderer',
      cellRendererParams: {
        cellRenderer: 'agNumericCellEditor',
        renderCell: (params) => (
            <input style={{backgroundColor:'#838383',width:'400 px'}} type="number" value={params.value} onChange={(e) => params.setValue(e.target.value)} />
          )
      }
    },
    { 
      field: 'observations', 
      headerName: 'Observations', 
      flex: 1, 
      editable: true,
      cellRenderer: 'agAnimateShowChangeCellRenderer',
      cellRendererParams: {
        renderCell: (params) => (
          <input style={{backgroundColor:'#838383',width:'400 px'}} type="text" value={params.value} onChange={(e) => params.setValue(e.target.value)} />
        )
      }
    }
];

  return (
      
<div className='contcreerbci'>

<div className='partie1' >
              <div className='icnbci' >
              <ReceiptLongIcon fontSize='large' />
              </div>
              
              <h3 className='titrebci' style={{paddingTop:'25px'}}>Bon de décharge N°: {selectedReceipt}</h3>
</div>

<div className='partiesec'>
                  <div>
                
                   <div >
                      <form className='partieform'>
                      <div className='partieservice partiepreneur'>
                          <label className='servicelab' htmlFor="textInput">Le Preneur</label>
                      
                          <input className='serviceinput'
                              type="text"
                              id="textInput"
                              value=''
                              onChange=''
                              placeholder='Comite des ouevre sociales'
                          />
                                  
                          

                      </div>
                    
                     



                      </form>

                   </div>

                 
                  
                  </div>


                  <div className='partie3'>
                  <div className='partieproduit'>
                                      <div>
                                      <MdOutlineProductionQuantityLimits size='2rem'   />

                                      </div>
                                      <h3 className='lesproduits' >Les produits</h3>
                   </div>
                 

                   <div className="cmpt">
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          sx={{
            '.MuiDataGrid-columnSeparator': { display: 'none' },
            '&.MuiDataGrid-root': { border: 'none' },
          }}
          slots={{ toolbar: GridToolbar }}
          className='grid '
          style={{height: "66vh"}}
          rows={rows}
          columns={columns}
          rowHeight={70}
          autoPageSize
        />
      </div>
    </div>





                  </div>
<div className='partiebouton'>
 
  <div className='btngroup'>

  <button className='annuler' onClick={() => history.push("/Listbd")}>annuler</button>
  <button className='confirmer' onClick={() => history.push("/Listbd")}>confirmer</button>
      
      </div>

</div>

</div>

</div>
  )
}

export default Editbd
