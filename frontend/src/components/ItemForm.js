import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirst_name] = useState('');
    const [middle_name, setMiddle_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [telephone, setTelephone] = useState('');
    const [birth_date, setBirth_date] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [zip_code, setZip_code] = useState('');
    const [birth_place, setBirth_place] = useState('');
    const [civil_status, setCivil_status] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [occupation, setOccupation] = useState('');
    const [company_name, setCompany_name] = useState('');
    const [company_address, setCompany_address] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBlood_type] = useState('');
    const [gsis_num, setGsis_num] = useState('');
    const [pagibig_num, setPagibig_num] = useState('');
    const [philhealth_num, setPhilhealth_num] = useState('');
    const [sss_num, setSss_num] = useState('');
    const [tin_num, setTin_num] = useState('');
    const [employee_num, setEmployee_num] = useState('');

    useEffect(() => {
        if (item) {
            setFirst_name(item.first_name);
            setMiddle_name(item.middle_name);
            setLast_name(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setTelephone(item.telephone);
            setBirth_date(item.birth_date);
            setAge(item.age);
            setSex(item.sex);
            setZip_code(item.zip_code);
            setBirth_place(item.birth_place);
            setCivil_status(item.civil_status);
            setCitizenship(item.citizenship);
            setOccupation(item.occupation);
            setCompany_name(item.company_name);
            setCompany_address(item.company_address);
            setHeight(item.height);
            setWeight(item.weight);
            setBlood_type(item.blood_type);
            setGsis_num(item.gsis_num);
            setPagibig_num(item.pagibig_num);
            setPhilhealth_num(item.philhealth_num);
            setSss_num(item.sss_num);
            setTin_num(item.tin_num);
            setEmployee_num(item.employee_num);
        }
    }, [item]);

    const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
        first_name,
        middle_name,
        last_name,
        address,
        email,
        phone,
        telephone,
        birth_date,
        age,
        sex,
        zip_code,
        birth_place,
        civil_status,
        citizenship,
        occupation,
        company_name,
        company_address,
        height,
        weight,
        blood_type,
        gsis_num,
        pagibig_num,
        philhealth_num,
        sss_num,
        tin_num,
        employee_num,
    };
    try {
        if (item) {
            await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
        } else {
            await axios.post('http://localhost:8000/api/items/', data);
        }
        onSuccess();
    } catch (error) {
        console.error('Error submitting the form:', error);
        if (error.response) {
            console.error('Server response:', error.response.data);
        }
    }
};



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Telephone:</label>
                <input type='text' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div>
                <label>Birth Date:</label>
                <input type='text' value={birth_date} onChange={(e) => setBirth_date(e.target.value)} />
            </div>
            <div>
                <label>Age:</label>
                <input type='text' value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type='text' value={zip_code} onChange={(e) => setZip_code(e.target.value)} />
            </div>
            <div>
                <label>Birth Place:</label>
                <input type='text' value={birth_place} onChange={(e) => setBirth_place(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivil_status(e.target.value)} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label>Occupation:</label>
                <input type='text' value={occupation} onChange={(e) => setOccupation(e.target.value)} />
            </div>
            <div>
                <label>Company Name:</label>
                <input type='text' value={company_name} onChange={(e) => setCompany_name(e.target.value)} />
            </div>
            <div>
                <label>Company Address:</label>
                <textarea value={company_address} onChange={(e) => setCompany_address(e.target.value)} />
            </div>
            <div>
                <label>Height:</label>
                <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type='text' value={blood_type} onChange={(e) => setBlood_type(e.target.value)} />
            </div>
            <div>
                <label>GSIS ID NO:</label>
                <input type='text' value={gsis_num} onChange={(e) => setGsis_num(e.target.value)} />
            </div>
            <div>
                <label>PAGIBIG NO:</label>
                <input type='text' value={pagibig_num} onChange={(e) => setPagibig_num(e.target.value)} />
            </div>
            <div>
                <label>PHILHEALTH NO:</label>
                <input type='text' value={philhealth_num} onChange={(e) => setPhilhealth_num(e.target.value)} />
            </div>
            <div>
                <label>SSS NO:</label>
                <input type='text' value={sss_num} onChange={(e) => setSss_num(e.target.value)} />
            </div>
            <div>
                <label>TIN NO:</label>
                <input type='text' value={tin_num} onChange={(e) => setTin_num(e.target.value)} />
            </div>
            <div>
                <label>EMPLOYEE NO:</label>
                <input type='text' value={employee_num} onChange={(e) => setEmployee_num(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ItemForm;
