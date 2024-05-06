import React from 'react'
import './Creerbci.css'
import { IoMdListBox } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useHistory } from 'react-router-dom';

import { IoMdAdd } from "react-icons/io";

function Creerbci() {
    const history = useHistory();
    const columns = [
    
        {
          field: 'numerp',
          headerName: 'N° de produit',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'produit',
          headerName: 'produit',
          headerClassName: 'hdr',
          flex: 1,
          
        },
        
        {
            field: 'quantité demandé ',
            headerName: 'quantité demandé',
            headerClassName: 'hdr',
            flex: 1,
            
          },
          {
            field: 'quantité accord"e',
            headerName: 'quantité accordée',
            headerClassName: 'hdr',
            flex: 1,
            renderCell: (cellValues) => {
                const handleChange = (e) => {
                  // Ajoutez ici la logique pour mettre à jour la valeur de la quantité
                  console.log("Nouvelle valeur de quantité :", e.target.value);
                };
            
                return (
                  <div className="change">
                    <input type="number" className="quantity-input" onChange={handleChange} />
                  </div>
                );
              }
            
          },
          
        
       
       
    
      ];
      const rows = [
        { id: 1,num:'pro N° 31', qtdemandée: '100',qtaccordée:'50' },
        { id: 2,num:'pro N° 31', qtdemandée: '100',qtaccordée:'50' },
        { id: 3,num:'pro N° 31', qtdemandée: '100',qtaccordée:'50' },
        { id: 4,num:' N° 31', qtdemandée: '100',qtaccordée:'50' },
 
        
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
                                <label className='labeldirection' htmlFor="textInput">Direcetion</label>
                            
                                <input className='inputdirection'
                                    type="text"
                                    id="textInput"
                                    value=''
                                    onChange=''
                                    placeholder='secretriat generale'
                                />
                                        
                                
      
                            </div>
                            <div className='partiedemandeur'>
                            <label className='labeldemandeur' htmlFor="textInput">Le demandeur</label>
                            
                            <input className='inputdemandeur'
                                type="text"
                                id="textInput"
                                value=''
                                onChange=''
                                placeholder='Comite des ouevre sociales'
                            />
      
                            </div>
                            <div className='partierestant'>
                            <label  className='labelrestant' htmlFor="textInput">Les produits reste au niveau de l'école</label>
                            <select className='inputrestant'
        id="selectList"
        value=''
        onChange=''
      >
        <option value=""></option>
        <option value="oui">Oui</option>
        <option value="non">Non</option>
      </select>
      
                            </div>



                            </form>
      
                         </div>

                       
                        
                        </div>


                        <div className='partie3'>
                        <div className='partieproduit'>
                                            <div>
                                            <MdOutlineProductionQuantityLimits size='2rem'   />

                                            </div>
                                            <h3 >Les produits</h3>
                         </div>
                         <div className="cmpt">           
              
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
          
         getRowClassName={(params) =>
      params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
    }
       
        />
     
      </div>
                  </div>

      
                        </div>
      <div className='partiebouton'>
        <div >
       
            <button className='ajouter'>  <IoMdAdd size="1.5rem"/>ajouter</button>

        </div>
        <div className='btngroup'>
    
        <button className='annuler'>annuler</button>
        <button className='confirmer'>confirmer</button>
            
            </div>
      
      </div>



      
    </div>















      
    </div>
  )
}

export default Creerbci