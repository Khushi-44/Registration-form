import { useState } from "react"

function App() {
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    alert(`Name: ${name} \n Email:${email}`)
  }
  

  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-[#F2E7C9]">
      <div className = "bg-[#EADDA6] h-100 w-100 rounded-xl shadow-lg p-5">
       <div className = " h-20 w-90 rounded-xl p-1">
        <h1 className =" mt-3 font-bold text-center text-4xl text-[#9EA3B0]">Register Yourself</h1>
       </div>
       <form onSubmit ={handleSubmit}>
       <p className= "mt-2 font-bold text-black">Name</p>
       <div className ="mt-2 flex justify-start h-10 w-90 bg-[#F2E7C9] rounded-md">
        <input
        required
        value = {name}
        onChange={(e) => setName(e.target.value)}
        placeholder = "Enter your name"
        className="ml-1 w-full outline-none "
        />
       </div>
       <p className ="mt-2 font-bold text-black">Email</p>
        <div className ="mt-2 flex justify-start h-10 w-90 bg-[#F2E7C9] rounded-md">
        <input
        required
        type = "email"
        value = {email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder = "Enter your email"
        className="ml-1 w-full outline-none "
        />
       </div>
       <button 
       type = "submit"
       className = "mx-auto flex justify-center items-center mt-5 w-50 h-8 rounded-md text-white bg-[#C89B7B] hover:bg-[#A57F60] transition-colors duration-200">Submit</button>
       </form>
      </div>
    </div>
    </>
  )
}

export default App
