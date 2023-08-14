import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import "./popuscss.css"
import { useEffect, useState } from 'react';
// import cssforcard from "./cssforcard.css"



function UpdatepopUp(props) {

    const {modalshowchangee,indexForUpdate,StateForRefresh,...another}=props


let initialData={
    Name:"",
    Email:"",
    Phone:"",
    Hobby:""
}
 const [AllInputData, setAllInputData] = useState(initialData);




 const typingFunctionInput=(e)=>{
    setAllInputData({...AllInputData,[e.target.name]:e.target.value})
    // console.log(AllInputData)

 }
 


//  const saveButtonClicked=()=>{
//     axios.post("http://localhost:8001/updateUser",{AllInputData})
//     .then(e=>console.log("saved"))
//     .catch(err=>console.log(err))
//  }



useEffect(()=>{
    setAllInputData({Name:indexForUpdate.Name,Email:indexForUpdate.Email,Phone:indexForUpdate.Phone,Hobby:indexForUpdate.Hobby})
},[indexForUpdate.Name])



const changeButtonCall=(e)=>{
    e.preventDefault()
    console.log("change button called")

    axios.post(`https://tablebackendnew1.onrender.com/getData/${indexForUpdate.index}/${indexForUpdate.Email}/${indexForUpdate.Name}/${indexForUpdate.Phone}`,{AllInputData})
    .then(e=>{
        console.log(e.data)
       
        setAllInputData({Name:indexForUpdate.Name,Email:indexForUpdate.Email,Phone:indexForUpdate.Phone,Hobby:indexForUpdate.Hobby})
        

    })
    .catch(err=>{console.log(err)})

    StateForRefresh()
    modalshowchangee()
    

}


    return (
        <Modal
            {...another}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div className="container p-2 " style={{ height: "80vh", width: "100%",background:"rgb(238 231 232)" }}>
                <div className="row justify-content-end">
                    <div className="col ">

                        {/* <Button  style={{ width: "75px", float: "right" }} onClick={modalshowchangee}>Close</Button> */}

                        <button type="button" class="btn-close" aria-label="Close"    onClick={modalshowchangee} style={{ width: "75px", float: "right" }}></button>

                    </div>

                </div>
                <div className="row ">
                    <form action="" className='col-12 p-4 px-5'>

                        {/*  */}

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">NAME</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required   value={AllInputData.Name}  name="Name" onChange={typingFunctionInput} />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">EMAIL</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   required  value={AllInputData.Email}  name="Email" onChange={typingFunctionInput}/>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">PHONE NO</label>
                            <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required  pattern="[0-9]{10}" value={AllInputData.Phone}   name="Phone" onChange={typingFunctionInput} />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">HOBBY</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required  value={AllInputData.Hobby}   name="Hobby" onChange={typingFunctionInput}/>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>

                        <div className="row mb-3  justify-content-center">
                           
                        <button className='btn btn-primary  col-2 mt-5'  onClick={changeButtonCall} >Change</button>
                        </div>


                        {/*  */}




                    </form>

                </div>


            </div>


        </Modal>
    );
}



export default UpdatepopUp;