import React, {useState} from 'react';
import './CheckboxList.css';

function CheckboxList() {
 const [checked, setChecked] = useState({
    banana : false,
    kiwi : false,
    strawberry : false
 })

 const handleChange = (e) => {
    setChecked({
        ...checked,
        [e.target.name]: e.target.checked,
    });
 };

 // Get a list of selected cheched fruits
 const selected = Object.keys(checked).filter(fruit => checked[fruit]);

    return (
        <div className='page-wrapper'>
            <div className="checkbox-list">
            <h2>Select your favorite fruits</h2>

            {Object.keys(checked).map((fruit) => (
                <label key={fruit}>
                    <input type="checkbox"
                    name={fruit}
                    checked={checked[fruit]}
                    onChange={handleChange}
                     />
                    {fruit}
                </label>
            ))}

            <p className='selected'>
            {selected.length > 0
            ? `You selected: ${selected.join(',')} `
            : 'No fruits selected yet'
            }
            </p>
            </div>
        </div>
    )
}

export default CheckboxList;