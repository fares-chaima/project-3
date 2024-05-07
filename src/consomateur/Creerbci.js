import React,{useState} from 'react'
import './Creerbci.css'
import { IoMdListBox } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from 'react-router-dom';

import { IoMdAdd } from "react-icons/io";

function Creerbci() {
  const [direction, setDirection] = useState('');
  const [demandeur, setDemandeur] = useState('');
  const [produitsRestants, setProduitsRestants] = useState('');

  const effacerChamps = () => {
      setDirection('');
      setDemandeur('');
      setProduitsRestants('');
  };

  
  
const [rows, setRows] = useState([
    { id: 1, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50},
    { id: 2, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
    { id: 3, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
    { id: 4, produit: 'Produit A', quantiteDemandee: 10, quantiteaccordée: 50 },
   
  ]);

  const history = useHistory();

 

 

  const columns = [
    { field: 'id', headerName: 'id', flex: 1 },
    { field: 'produit', headerName: 'Produit', flex: 1 },
    { field: 'quantiteDemandee', headerName: 'Quantité demandée', flex: 1, editable: true },
    { 
      field: 'quantiteaccordée', 
      headerName: 'quantitée accordée', 
      flex: 1, align: 'center',
      
      editable: true,
      cellRenderer: 'agAnimateShowChangeCellRenderer', // Optionnel, cela ajoute une animation pour montrer les changements de valeur
      cellRendererParams: {
        // Définir l'éditeur de cellule comme un champ d'entrée numérique avec une valeur minimale de 0
        cellRenderer: 'agNumericCellEditor',
        cellRendererParams: {
          min: 0 // Valeur minimale de 0
        }
      }
     
  
       

    },

    
   
  ];









  return (
    <div className='contcreerbci'>

      <div className='partie1' >
                    <div className='icnbci' >
                    <IoMdListBox size='2rem'/>
                    </div>
                    <h3 className='titrebci'>Bon de commande interne</h3>
      </div>

      <div className='partiesec'>
                        <div>
                        <div  className='partie2'>
                                            <div className='icndemandeur'>
                                            <MdOutlinePerson size = '2rem' />

                                            </div>
                                            <h3 className='titredemandeur'>Information de demandeur</h3>
                         </div>
                         <div >
                         <form className='partieform'>
            <div className='partiedircetion'>
                <label className='labeldirection' htmlFor="directionInput">Direction</label>
                <input
                    className='inputdirection'
                    type="text"
                    id="directionInput"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                    placeholder='Secrétariat générale'
                />
            </div>
            <div className='partiedemandeur'>
                <label className='labeldemandeur' htmlFor="demandeurInput">Le demandeur</label>
                <input
                    className='inputdemandeur'
                    type="text"
                    id="demandeurInput"
                    value={demandeur}
                    onChange={(e) => setDemandeur(e.target.value)}
                    placeholder='Comité des œuvres sociales'
                />
            </div>
            <div className='partierestant'>
                <label className='labelrestant' htmlFor="selectList">Les produits restent au niveau de l'école</label>
                <select
                    className='inputrestant'
                    id="selectList"
                    value={produitsRestants}
                    onChange={(e) => setProduitsRestants(e.target.value)}
                >
                    <option value=""></option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                </select>
            </div>
            <button type="button" onClick={effacerChamps}>Annuler</button>
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
        <div >
       
            <button className='ajouter'>  <IoMdAdd size="2rem" onClick={() => history.push("/Addbciprod")}/>ajouter</button>

        </div>
        <div className='btngroup'>
    
        <button className='annuler' >annuler</button>
        <button className='confirmer'>confirmer</button>
            
            </div>
      
      </div>



      
    </div>















      
    </div>
  )
}

export default Creerbci
