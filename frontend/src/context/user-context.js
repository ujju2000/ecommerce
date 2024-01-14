import { useState  ,useEffect , createContext, useContext  } from "react";


const User = createContext();
export const useUser  = () => useContext(User);


export default function UserProvider({children}) {
    const [products, setProducts ] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(res => {
            setProducts(res)
        })
    } , [])
    const login = async (email , password) => {
        const res = await fetch('/api/user/login' , {
            method  : 'POST',
            body : JSON.stringify({email , password}),
            headers : {'Content-Type' : 'application/json'}
        })

        return res.json();
    }
    const submit = async (user) => {
        
        const res = await fetch('/api/user/signup' , {
            method  : 'POST',
            body : JSON.stringify(user),
            headers : {'Content-Type' : 'application/json'}
        })
        if(res.status === 200)  {
            return res.json();
        }
        else {
            console.log('check again');
        }

    }
    return (
        <User.Provider value = {{products , setProducts , submit ,login}}>
            {children}
        </User.Provider>
    )
}
