import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './components/MyVerticallyCenteredModal';
import { useEffect, useRef, useState } from 'react';
import axios from "axios"
import UpdatepopUp from './components/Updatepopup';
function App() {


  const [modalShow, setModalShow] = useState(false);
  const [StateForRefresh, setStateForRefresh] = useState(false);
  const [dataObtained, setDataObtained] = useState([]);
  const [modalForUpdate, setModalForUpdate] = useState(false);
  const [indexForUpdate, setIndexForUpdate] = useState({
    Name:'',
    Email:'',
    index:"",
    Phone:"",
    Hobby:""
  });
  let checkRef = useRef(new Array());








  useEffect(() => {
    axios.get("https://tablebackendnew1.onrender.com")  


      .then((e) => {

        // console.log(e.data)
        setDataObtained(e.data)

      })
      .catch((err) => {
        console.log(err)
      })

      setStateForRefresh(false)


  }, [StateForRefresh])




  //this is for the check box

  const arr = new Set();


  const CheckBoxClick = (e, index) => {

    if (e.target.checked) {
      arr.add(index)
    }
    else {
      if (arr.has(index)) {
        arr.delete(index)

      }


    }
    // console.log(arr)



  }
  //------------------------------


  //this is for sending male
  let dataOfSelectedUser = new Set();

  const sendMail = async () => {

    if (!arr.size) {
      alert("select atleast one user")

    }
    else {

      dataObtained.forEach((e, index) => {
        if (arr.has(index)) {
          dataOfSelectedUser.add(e)
        }
      })


      // console.log(dataOfSelectedUser)


      axios.post("https://tablebackendnew1.onrender.com/sendMail", { dataOfSelectedUser: Array.from(dataOfSelectedUser) })
        .then((e) => {
          alert("mail send")
        })
        .catch(er => {
          console.log(er)
        })





      checkRef.current.forEach(e => {
        e.checked = false;
      })
    }
    arr.clear();
    dataOfSelectedUser.clear()

  }





  const UpdateButtonClick = async (index,Name,Email,Phone,Hobby) => {
  await setIndexForUpdate({
    Name:Name,
    Email:Email,
    index:index,
    Phone:Phone,
    Hobby:Hobby
  })

    setModalForUpdate(true)


  }


  const DeleteButtonClick=async (index,Name,Email,Phone,Hobby)=>{
    axios.delete(`https://tablebackendnew1.onrender.com/delete/${Name}/${Email}/${Phone}/${Hobby}`)
    .then(e=>{
      console.log(e.data)
    })
    .catch(err=>{
      console.log(err)
    })
     setStateForRefresh(true)


  }




  return (
    <>

      <div className="container p-3">


        <div className="row">

          <table className="table table-striped table-hover  p-2">
            <thead className="table-dark">

              <tr >
                <th scope="col">Select</th>
                <th scope="col">ID</th>
                <th scope="col" colSpan="2">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Hobbies</th>
                <th scope="col">Update/delete</th>
              </tr>
            </thead>

            <tbody>
              {dataObtained && dataObtained.map((e, index) => {


                return (
                  <>
                    <tr>

                      <td>

                        <div className="form-check checkbox-xl ml-3">
                          <input className="form-check-input" type="checkbox" value="" id="checkbox-2" style={{ scale: "1.35" }} onChange={(e) => CheckBoxClick(e, index)} ref={(element) => checkRef.current[index] = element} />
                        </div>
                      </td>

                      <th scope="row">{index}</th>
                      <td>{e.Name}</td>
                      <td colSpan="2">{e.Email}</td>
                      <td>{e.Phone}</td>
                      <td>{e.Hobby}</td>
                      <td><div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary mx-1" onClick={() => UpdateButtonClick(index,e.Name,e.Email,e.Phone,e.Hobby)}>Update</button>

                        <button type="button" className="btn btn-primary mx-1" onClick={() => DeleteButtonClick(index,e.Name,e.Email,e.Phone,e.Hobby)}>Delete</button>
                      </div></td>

                      {/* <td>@mdo</td> */}
                    </tr>
                  </>
                )

              })}




            </tbody>

          </table>
        </div>







        <div className="row  justify-content-center mt-5">

          <div className="col-1 me-2 ">
            <Button variant="primary " className="px-4 py-2" onClick={() => { setModalShow(true) }}>ADD</Button>


          </div>
          <div className="col-1 ms-5">
            <Button variant="primary " className="px-4 py-2" onClick={sendMail}>SEND</Button>


          </div>
        </div>
      </div>


      {/* <div onClick={()=>{
        dataObtained.map((e)=>{
          if (e.c) {
            
          }
        })
      }}>Hell</div> */}

      <UpdatepopUp show={modalForUpdate}    indexForUpdate={indexForUpdate}  modalshowchangee={() => setModalForUpdate(false)} StateForRefresh={()=>setStateForRefresh(true)} />

      <MyVerticallyCenteredModal
        show={modalShow}
        modalshowchange={() => setModalShow(false)}    
        />



 
    </>
  );
}

export default App;
