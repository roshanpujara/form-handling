import React,{useState,useEffect} from 'react'

function LoginForm() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [newRecord,setNewRecord] = useState([]);

    const dataSubmission = (e) => {
        e.preventDefault();
        const duplicateData= {email:email,password:password};
        setNewRecord([...newRecord,duplicateData])
    }
  return (
    <div>
        <form action="" onSubmit={dataSubmission}>
            <div>
                <label htmlFor="email"></label>
                <input type="text" name="email" id="email" value={email} onChange={e=>{setEmail(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
            <div>
                <h1>{
                    newRecord.map((value)=>{
                        return (
                            <div key={value.id}>
                                <h3>{value.email}</h3>
                                <h3>{value.password}</h3>
                            </div>
                        )
                    })
                }</h1>
            </div>
        </form>
    </div>
  )
}

export default LoginForm