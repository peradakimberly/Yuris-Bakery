import { useLoaderData, useParams } from 'react-router-dom';
import { pastries } from './Pastry';
import Breadcrumb from '../Breadcrumb';


function PastryDetails() {
    const pastryDetails = useLoaderData();
    const {id} = useParams();

    let pastryItem;
    for (let index = 0; index < pastries.length; index++){
        if (id == pastries[index].id){
            pastryItem = pastries[index];
        }
    }

    return (
        <div>
            <Breadcrumb />
            <div className='product-panel'>      
            <div className='product-show'>
                <img src={pastryItem.image} className='productimage'/>
                <span className='font-face'>
                    <div className='product-show-description'>
                        <h2 className="product-name">{pastryItem.pastryname}</h2><br></br>
                        <p className='description'>{pastryItem.description}</p><br></br>
                        <br></br>
                        <p className="price-details">
                            <h3>Price :</h3>
                            {pastryItem.price1} <br></br>
                            {pastryItem.price2} 
                        </p>
                    </div>               
                </span>
            </div>        
        </div>
        </div>
          
    );
}

export default PastryDetails;