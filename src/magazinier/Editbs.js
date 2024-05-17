import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { useHistory, useParams } from 'react-router-dom';

function Editbs() {
    const [rows, setRows] = useState([]);
    const history = useHistory();
    const { id } = useParams(); 
    useEffect(() => {
        // Fetch data from the API endpoint
        fetch(`http://localhost:3001/api/bs/${id}`) // Replace '1' with the desired ID or use useParams() to get it dynamically
            .then(response => response.json())
            .then(data => {console.log(data)
                // Update the rows state with fetched data
                const bdRows = data.bd.map(row => ({ ...row, id: row.bd_id }));
                const bciRows = data.bci.map(row => ({
                    ...row,
                    id: row.bci_id,
                    observations: calculateObservation(row.produit),
                }));

                setRows([...bdRows, ...bciRows]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const calculateObservation = (productId) => {
        // Implement your observation logic here based on productId
        // Example logic:
        // If productId is even, observation is 'in stock', else 'out of stock'
        return productId % 2 === 0 ? 'in stock' : 'out of stock';
    };

    const columns = [
        { field: 'id', headerName: 'N°', flex: 1 },
        { field: 'name', headerName: 'Désignation', flex: 1 },
        { field: 'quantiteDemandee', headerName: 'Quantité demandée', flex: 1 },
        { field: 'quantite', headerName: 'Quantité Servie', flex: 1, align: 'center', editable: true },
        { field: 'numero_inventaire', headerName: 'N° inventaire', flex: 1, editable: true },
        { field: 'observations', headerName: 'Observations', flex: 1, editable: true },
    ];

    return (
        <div className='contcreerbci'>
            <div className='partie1'>
                <div className='icnbci'>
                    <ReceiptLongIcon fontSize='large' />
                </div>
                <h3 className='titrebci' style={{ paddingTop: '25px' }}>Bon de sortie</h3>
            </div>

            <div className='partiesec'>
                <div>
                    <div>
                        <form className='partieform'>
                            <div className='partieservice'>
                                <label className='servicelab' htmlFor="textInput">Le Service</label>
                                <input className='serviceinput' type="text" id="textInput" value='' onChange='' placeholder='Comite des oeuvres sociales' />
                            </div>
                            <div className='partieservice partiedate'>
                                <label className='servicelab' htmlFor="textInput">La Date</label>
                                <input className='serviceinput' type="text" id="textInput" value='' onChange='' />
                            </div>
                        </form>
                    </div>
                </div>

                <div className='partie3'>
                    <div className='partieproduit'>
                        <div>
                            <MdOutlineProductionQuantityLimits size='2rem' />
                        </div>
                        <h3 className='lesproduits'>Les produits</h3>
                    </div>
                    <div className="cmpt">
                        <div style={{ height: 300, width: '100%' }}>
                            <DataGrid
                                sx={{
                                    '.MuiDataGrid-columnSeparator': { display: 'none' },
                                    '&.MuiDataGrid-root': { border: 'none' },
                                }}
                                slots={{ toolbar: GridToolbar }}
                                className='grid'
                                style={{ height: "66vh" }}
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
    );
}

export default Editbs;
