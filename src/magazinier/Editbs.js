
import React,{useState} from 'react'
import '../consomateur/Creerbci.css'
import { IoMdListBox } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from 'react-router-dom';
import './Editbs.css';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
function Editbs() {



    

      
    const [rows, setRows] = useState([
        { id: 1, designation: 'Produit A', quantiteDemandee: 10, quantiteServie: 50, numeroInventaire: '12345', observations: 'Aucune' },
        { id: 2, designation: 'Produit B', quantiteDemandee: 20, quantiteServie: 40, numeroInventaire: '67890', observations: 'OK' },
        { id: 3, designation: 'Produit C', quantiteDemandee: 30, quantiteServie: 30, numeroInventaire: '54321', observations: 'En attente' },
        { id: 4, designation: 'Produit D', quantiteDemandee: 40, quantiteServie: 20, numeroInventaire: '09876', observations: 'Erreur' },
    ]);

  const history = useHistory();

 

 

  const columns = [
    { field: 'id', headerName: 'N°', flex: 1 },
    { field: 'designation', headerName: 'Désignation', flex: 1 },
    { field: 'quantiteDemandee', headerName: 'Quantité demandée', flex: 1 },
    { 
      field: 'quantiteServie', 
      headerName: 'Quantité Servie', 
      flex: 1, 
      align: 'center',
      editable: true,
      cellRenderer: 'agAnimateShowChangeCellRenderer',
      cellRendererParams: {
        cellRenderer: 'agNumericCellEditor',
        cellRendererParams: {
          min: 0
        }
      }
    },
    { 
      field: 'numeroInventaire', 
      headerName: 'N° inventaire', 
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
              
              <h3 className='titrebci' style={{paddingTop:'25px'}}>Bon de sortie</h3>
</div>

<div className='partiesec'>
                  <div>
                
                   <div >
                      <form className='partieform'>
                      <div className='partieservice'>
                          <label className='servicelab' htmlFor="textInput">Le Service</label>
                      
                          <input className='serviceinput'
                              type="text"
                              id="textInput"
                              value=''
                              onChange=''
                              placeholder='Comite des ouevre sociales'
                          />
                                  
                          

                      </div>
                      <div className='partieservice partiedate'>
                      <label className='servicelab' htmlFor="textInput">La Date</label>
                      
                      <input className='serviceinput'
                          type="text"
                          id="textInput"
                          value=''
                          onChange=''
                        
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

  <button className='annuler'>annuler</button>
  <button className='confirmer'>confirmer</button>
      
      </div>

</div>




</div>
















</div>



















      
  
  )
}

export default Editbs
