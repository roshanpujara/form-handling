import React,{useState} from 'react'

function Form() {
  const [value,setValue] = useState({
    username:'',
    email:'',
    phone:'',
    password:''
  })
  const [newValue,setNewValue] = useState([])

  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue({
      ...value,[name]:value
    });
  }
  const dataSubmission = (e) => {
    e.preventDefault();
    const newRecord  = {...value, id : new Date().getTime.toString()};
    console.log(newValue);
    setNewValue([...newValue, newRecord]);
    console.log(newValue)
    setValue({
      username:'',
      email:'',
      phone:'',
      password:''
    })

  }
  return (
    <div>
    <h2>Registration Form</h2>
    <form action="" onSubmit={dataSubmission}>
    <div>
    <label htmlFor="username">USERNAME</label><br />
    <input autoComplete='off' type="text" name="username" id="username" value={value.username} onChange={changeValue} />
    </div>
    <div>
    <label htmlFor="email">EMAIL</label><br />
    <input autoComplete='off' type="text" name="email" id="email" value={value.email} onChange={changeValue} />
    </div>
    <div>
    <label htmlFor="phone">PHONE</label><br />
    <input autoComplete='off' type="text" name="phone" id="phone" value={value.phone} onChange={changeValue} />
    </div>
    <div>
    <label htmlFor="password">PASSWORD</label><br />
    <input autoComplete='off' type="password" name="password" id="password" value={value.password} onChange={changeValue} />
    </div>
    <div>
    <button onSubmit={dataSubmission}>Signup</button>
    </div>
    <div>
      {newValue.map((val)=>{
        const {id,username,email,phone,password} = val;
        return (
          <div key={id}>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{password}</p>

          </div>
        )
      })}
    </div>
    </form>
    </div>
  )
}

export default Form