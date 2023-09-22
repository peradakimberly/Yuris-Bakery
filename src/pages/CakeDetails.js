import { useLoaderData, useParams } from 'react-router-dom';
import { cakes } from './Cake';
import Breadcrumb from '../Breadcrumb';


function CakeDetails() {
    const cakeDetails = useLoaderData();
    const {id} = useParams();

    let cakeItem;
    for (let index = 0; index < cakes.length; index++){
        if (id == cakes[index].id){
            cakeItem = cakes[index];
        }
    }

    return (
        <div>
            <Breadcrumb />
            <div className='product-panel'>
            <div className='product-show'>
                <img src={cakeItem.image} className='productimage'/>
                <span className='font-face'>
                    <div className='product-show-description'>
                        <h2 className="product-name">{cakeItem.cakename}</h2><br></br>
                        <p className='description'>{cakeItem.description}</p><br></br>
                        <br></br>
                        <p className="price-details">
                            <h3>Price :</h3>
                            {cakeItem.price} <br></br>                     
                        </p>
                    </div>               
                </span>
            </div>        
            </div> 
        </div>
        
    );
}

export default CakeDetails;