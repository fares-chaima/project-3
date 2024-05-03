import React from 'react'
import './Bci.css'
import DataTable from 'react-data-table-component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FaList } from "react-icons/fa";
import { IoMdList } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import AddIcon from '@mui/icons-material/Add'; 
function Bci() {
    const handleAddProduct = () => {
        // Implémentez la logique pour ajouter un produit ici
        console.log("Ajouter un produit");
    };

    


    

    const data = [
        { numeroProduit: 'souris', designation: '1', quantiteDemandee: '30', quantiteAccordee: '20', gerer: 'vide' },
        { numeroProduit: 'souris', designation: 'bic-196', quantiteDemandee: '50', quantiteAccordee: '0', gerer: '20000' },
        { numeroProduit: 'sécurité', designation: 'sécurité', quantiteDemandee: '2', quantiteAccordee: 'bic-196', gerer: '20000' },
        { numeroProduit: 'souris', designation: '1', quantiteDemandee: '30', quantiteAccordee: '20', gerer: 'vide' },
        { numeroProduit: 'souris', designation: 'bic-196', quantiteDemandee: '50', quantiteAccordee: '0', gerer: '20000' },
        { numeroProduit: 'sécurité', designation: 'sécurité', quantiteDemandee: '2', quantiteAccordee: 'bic-196', gerer: '20000' },
        // Ajoutez d'autres lignes de données ici
    ];
    const handleSupprimer = (index) => {
        // Mettre en œuvre la logique de suppression ici
        console.log("Supprimer la ligne avec l'index :", index);
    };

    // Fonction de modification d'une ligne
    const handleModifier = (index) => {
        // Mettre en œuvre la logique de modification ici
        console.log("Modifier la ligne avec l'index :", index);
    };
 
  
  return (
 <div className="bci">
      <form action="#" className="cont" method="post">
    <div className="section section1">

     <div className='t1' >
     <div className='t111'> <FaList size='2rem'/> </div>
         <h2 className='t11'>Bon de commande interne</h2>

     </div>
      <div className='g1'> 

  <div className='gauche'>

  <div className='d d1'>
      <label for="num_commande">Numéro de commande :</label>
      <input className='inp' type="number" id="num_commande" name="num_commande" min="0"/>
    </div> 

   

    <div className='d d3'>      
        <label for="date_commande">Date de commande :</label>
      <input  className='inp' type="date" id="date_commande" name="date_commande"/>
    </div>



  </div>

    <div className='droite'>

    <div className='d d2'> 
        <label for="verification_responsable">Vérification de responsable :</label>
        <input className='inp'list="verify" id="verification_responsable" name="verification_responsable" value="vide" readOnly/>
            <datalist id="verify">
            <option value="accepter"/>
            <option value="refuser"/>
            <option value="en attente"/>
            <option value="vide"/>
            </datalist>
    </div>
    <div className='d d2'> 
        <label for="verification_responsable">Vérification de directeur:</label>
        <input className='inp' list="verify" id="verification_responsable" name="verification_responsable" value="vide" readOnly/>
            <datalist id="verify">
            <option value="accepter"/>
            <option value="refuser"/>
            <option value="en attente"/>
            <option value="vide"/>
            </datalist>
    </div>
    </div> 
 </div>

 <div className="section section2">
    <div className='t2'>
    <div className='t22'>
    <IoMdList size='2rem'/>

    </div>
    <h2 className='t222'>Information de demandeur</h2>
    </div>

    <div className='dd1'>
      <label className='l2'   for="direction">Direction :</label>
      <input className='i2'   type="text" id="direction" name="direction"/> 
    </div>

    <div className='dd2'>
        <label className='l3'  for="email">Email :</label>
        <input className='i3'  type="email" id="email" name="email"/>
    </div>
     
      
    </div>





    <div class="section section3">
        <div className='t3'>

        <div className='t33'><MdProductionQuantityLimits size='2rem' /></div> 
        <h2 className='t333'>Les produits</h2>
        </div>
 <table>
            <thead>
                <tr>
                    <th className='first'>N° Produit</th>
                    <th className='first'>Désignation</th>
                    <th className='first'>Quantité demandée</th>
                    <th className='first'>Quantité accordée</th>
                    <th className='first'>Gérer</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}  className="table-row">
                        <td>{item.numeroProduit}</td>
                        <td>{item.designation}</td>
                        <td>{item.quantiteDemandee}</td>
                        <td>{item.quantiteAccordee}</td>
                        <td style={{ display: 'flex', gap: '5px' }}> 
                        <DeleteIcon onClick={() => handleSupprimer(index)} />
                            <EditIcon onClick={() => handleModifier(index)} />

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={handleAddProduct}>
                <AddIcon />
                Ajouter Produit
            </button>

        



       <div>





        </div>




   
     
    
    </div>
    </div>
  </form>  
     

 
</div>
  )
}

export default Bci
