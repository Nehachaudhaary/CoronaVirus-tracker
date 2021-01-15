import React from 'react';
import numeral from "numeral";
import './Table.css';   

function Table({countries}) {
    return (
        <div className="table">
            {countries.map(({country,cases,countryInfo}) => (
                <tr>
                    <td>
                    <div >
                        <img src={countryInfo.flag } className="country-flag" alt="Country flag"/>
                    </div>
                    </td>
                    <td>{country}</td>
                    <td><strong>{numeral(cases).format("0,0")}</strong></td>
                </tr>
            ))}
        </div>
    )
}

export default Table
