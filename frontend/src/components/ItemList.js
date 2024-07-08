import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemList = ({onEdit, onDelete}) => {
     const [items, setItems] = useState([]);
     useEffect( () => {
        fetchItems();
     }, []);

     const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items')
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error)
        }
     };

     return (   
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.first_name} : {item.middle_name} : {item.last_name} : {item.address} : {item.email} : {item.phone} : {item.telephone} : 
                        {item.birth_date} : {item.age} : {item.sex} : {item.zip_code} : {item.birth_place} : {item.civil_status} : {item.citizenship} : 
                        {item.occupation} : {item.company_name} : {item.company_address} : {item.height} : {item.weight} : {item.blood_type} : {item.gsis_num} : 
                        {item.pagibig_num} : {item.philhealth_num} : {item.sss_num} : {item.tin_num} : {item.employee_num}
                        <button onClick ={()=> onEdit(item)}>Edit</button>
                        <button onClick ={()=> onDelete(item)}>Delete</button>
                        </li>
                ))}
            </ul>
        </div>
     );
};
export default ItemList;