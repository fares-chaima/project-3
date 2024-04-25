import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useState } from 'react';
import "../css/AfficherCmpt.css";
import dlt from "../images/delete.svg";
import mdf from "../images/modf.svg";
import AsaSideBar from "./AsaSideBar";
const AddBce = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const columns = [
    
        {
          field: 'num',
          headerName: 'N° produit',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'design',
          headerName: 'Désignation',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'quant',
          headerName: 'Quantité',
          headerClassName: 'hdr',
          flex: 1,
         
        },
        {
          field: 'mont',
          headerName: ' Montant',
          headerClassName: 'hdr',
          flex: 1,
        },
       
        {
          field: "action",
          headerName: 'Action',
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
        { id: 1,  num: '1', design: "produit1" , quant:"20",  mont: "1000",},
        { id: 2, num: '2', design: "produit2" , quant:"20",  mont: "1000",},
        { id: 3, num: '3', design: "produit3" , quant:"20",  mont: "1000",},
        { id: 4, num: '4', design: "produit4" , quant:"20",  mont: "1000",},
       
      ];

      //les donnees de produits ajoutes dans le bce


      const columnsp = [
    
        {
          field: 'id',
          headerName: 'Id',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'produit',
          headerName: 'Produit',
          headerClassName: 'hdr',
          flex: 1,
          
          
        },
      
       
       
        {
          field: "select",
          headerName: 'Selection',
          headerClassName: 'hdr',
          flex: 1,
          renderCell: (cellValues) => {
            return (
              <>
              <div className="change">
              <button className="slct">Select</button>
              </div>
              </>
            );
              }
        },
        {
            field: 'quant',
            headerName: ' Quantité',
            headerClassName: 'hdr',
            flex: 1,
            type: 'number',
            editable: true,
          },
      ];
      const rowsp = [
        { id: 1,  produit: "prohhhhhhhhhhhhh" , quant:"20",  },
        { id: 2,  produit: "produit2" , quant:"20",  },
        { id: 3,  produit: "produit3" , quant:"20",  },
        { id: 4,  produit: "produit4" , quant:"20",  },
       
      ];

    return ( 
        <>
        
<div className="comptes">    
        <AsaSideBar />
<div className="cmpt">   
           <div className="bce">     
          <h1>Creation de Bon de  <br />Commande</h1>

          <div className="d1">
            <div className="lf">
                <span>Identification du <br /> service contractant</span>
            </div>
            <div className="rt">
                <span>Dénomination :</span>
                <input type="text" name="" id="" />
                <span>Code Gestionnaire :</span>
                <input type="text" name="" id="" />
                <span>Adresse :</span>
                <input type="text" name="" id="" />
                <span>Telephone et Fax :</span>
                <input type="text" name="" id="" />
            </div>
          </div>

<hr />

          <div className="d2">
          <div className="lf">
            <span>Identification du <br /> prestataire</span>
          </div>
            <div className="rt">
                <span>Nom ou raison sociale (mentionner la forme juridique):</span>
                <select name="" id="">
                    <option value="nom1">nom1</option>
                </select>
                <span>Adresse:</span>
                <input type="text"  />
                <span>Téléphone et Fax:</span>
                <input type="text"  />
                <span>N° R.C:</span>
                <input type="text"  />
            </div>
          </div>

<hr />

          <div className="d3">
          <div className="lf">
            <span>Caractéristiques de la <br /> commande</span>
          </div>
            <div className="rt">
                <span>Chapitre :</span>
                <select name="" id="">
                    <option value="chapitre2">chapitre1</option>
                </select>
                <span>Article :</span>
                <select name="" id="">
                    <option value="article1">atricle</option>
                </select>
            </div>
          </div>

          <div className="d4">
            <div className="sd1">
            <span>Produit :</span>
            <div className="sd2">
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
      <button  onClick={toggleModal} className="btn-modal">ajouter un produit +</button>

      </div>
      </div>
          </div>
          <div className="d5">
            <div className="rt1">
                <div className="rtf">
                <span>TOTAL HT :</span>
                <span>TVA 19% :</span>
                <span>TOTAL TTC :</span>
                </div>
                <div className="rtr">
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                </div>
            
           
            
          </div>
          <div className="lf1">
            <button>Confirmer</button>
          </div>
          </div>

          </div>   
 </div>
        
</div>


{modal && (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h2>Ajouter un produit</h2>
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
      className='grid1'
      style={{height: "66vh"}}
      rowHeight={70}
     // getRowHeight={() => 'auto'}
        rows={rowsp}
        columns={columnsp}    
        
        autoPageSize
        
       getRowClassName={(params) =>
    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
  }
     
      />
      <div className="btnn">
       <button className="close-modal" onClick={toggleModal}>
         Annuler
        </button>
        <button className="cnr"> Confirmer</button>
        </div>
      </div>
    </div>
  )}
</> 
    );
}
 
export default AddBce;