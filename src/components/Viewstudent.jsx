import React, { useState } from 'react'
import Nav from './Nav'

const Viewstudent = () => {
    const [stapi, xstapi] = useState(
        [{ "id": "1", "name": "John Doe", "roll_number": "R123", "admission_number": "A456", "college": "ABC College" }, { "id": "2", "name": "Rahul R", "roll_number": "1203", "admission_number": "A67456", "college": "ABC College" }, { "id": "3", "name": "Manu K", "roll_number": "35", "admission_number": "9792", "college": "SREE BUDHA COLLEGE " }, { "id": "4", "name": "Navaneeth", "roll_number": "24", "admission_number": "8268", "college": "SBC" }, { "id": "5", "name": "Madhav", "roll_number": "34524", "admission_number": "C342356", "college": "SBCE" }, { "id": "6", "name": "Nabeel", "roll_number": "23", "admission_number": "23cs", "college": "sbce" }, { "id": "7", "name": "Vineeth Sreenivasan", "roll_number": "78", "admission_number": "R5626", "college": "Nirmala College" }, { "id": "8", "name": "Mehthab N M", "roll_number": "35", "admission_number": "N869", "college": "Nirmala College of Arts & Science" }, { "id": "9", "name": "Aneez", "roll_number": "2", "admission_number": "8268", "college": "Nirmala College of Arts & Science" }, { "id": "10", "name": "Devadath Pb", "roll_number": "24", "admission_number": "4568", "college": "Nirmala Collage of Arts & Science" }, { "id": "11", "name": "Aromal A S", "roll_number": "18", "admission_number": "12356", "college": "Nirmala Collage of Arts & Science" }]
    )
    return (
        <div className='bg-primary-subtle p-4 rounded'>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1 align="center">STUDENT VIEW</h1>
                           {stapi.map(
                            (value,index)=>{
                                return(
                                     <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary"><b>ID: </b>{value.id} <b>Roll No:</b>{value.roll_number}</h6>
                                        <p class="card-text"><b>Admission No: </b>{value.admission_number}</p>
                                        <p class="card-text"><b>College: </b>{value.college}</p>
                                        
                                    </div>
                                </div>
                            </div>
                                )
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewstudent