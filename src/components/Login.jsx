import React from 'react'



const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div>
            
        </div>
        <div>
            <form>
                <h2>BRAND.</h2>
                <div>
                    <label>Username</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button>
                    Sign In
                </button>
                <div>
                    <p></p>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login