import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);

    let onChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    let onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        };
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, options)
            .then(response => response.json())
            .then(response => {
                sessionStorage.setItem('auth', response.access_token);
                window.location.replace('/')
                if(!response.ok){
                    setErr(response.message);
                }
            })
            .catch(err => {
                setErr(String(err));
            });
    }


    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="form-control">
                    <img
                        src="/nitage_logo.png"
                        alt="Nitage Logo"
                        width={200}
                        height={200}
                        className="ml-16 mb-4"
                    />
                    <label className="input-group mb-4">
                        <span className="font-bold w-24">Username</span>
                        <input type="text" placeholder="" className="input input-bordered" value={username} onChange={onChangeUsername} />
                    </label>

                    <label className="input-group mb-4">
                        <span className="font-bold w-24">Password</span>
                        <input type="password" className="input input-bordered" value={password} onChange={onChangePassword} />
                    </label>

                    <button onClick={handleLogin} className="py-2 px-4 border-4 border-black font-bold bg-nitage-green text-black rounded-lg upper">Login</button>
                    {err && 
                        <div className="alert alert-error mt-2">
                          <div>
                            <span>{err}</span>
                          </div>
                      </div>
                    
                    }
                </div>
            </div>
        </>
    );


}

export default Login;