
function Contacts() {
  return (

    <>
    
    
        <div className="max-w-[1200px] mx-auto mt-[50px]">

            <input className="input  " type="text" placeholder="Name" />
            <input className="input" type="text" placeholder="LastName" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="number" placeholder="Phone" />
            <button className=" w-[calc(95%+32px)] bg-blue-500 py-2 mt-20 mx-12 rounded"> Add Contact </button>


        </div>
           
        

    </>

  )
}

export default Contacts