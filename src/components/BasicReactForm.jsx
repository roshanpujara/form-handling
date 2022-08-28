import React,{useState} from 'react'

function BasicReactForm() {
    const [value,setValue] = useState({
        username:'',
        email:'',
        phone:'',
        password:''
    })
    const changeValueData = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name,value);        
        setValue({...value, [name]:value})
        
    }
    const handleSubmit = event => {
        event.preventDefault();
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <div>
            <label>username <br />
                <input type="text" autoComplete='off' name="username" value={value.username} onChange={changeValueData} />
            </label>
        </div>
        <div>
            <label>email <br />
                <input type="text" autoComplete='off' name="email" value={value.email} onChange={changeValueData}/>
            </label>
        </div>
        <div>
            <label>phone <br />
                <input type="text" name="phone" value={value.phone} onChange={changeValueData}/>
            </label>
        </div>
        <div>
            <label>password <br />
                <input type="text" name="password" value={value.password} onChange={changeValueData}/>
            </label>
        </div>
        <div>
            <button type='submit'>
                Signup
            </button>
        </div>
    </form>
  )
}

export default BasicReactForm