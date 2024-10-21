import { React, useEffect, useContext, useState } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify'; // Import toast for notifications
import { auth } from '../firebase'; // Import your Firebase configuration
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, } from "firebase/auth"; // Import Google Auth
import { useLocation, useNavigate } from 'react-router-dom';
import { products } from "../assets/frontend_assets/assets"

// Create a new context called ShopContext
const ShopContext = createContext();


export const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const shopFee = 10;
    const [showSearch, setShowSearch] = useState(false);
    const [searchitem, setSearchItem] = useState("");
    const [carts, setCarts] = useState({});
    const [cartcount, setCartCount] = useState(0);
    const [carttotal, setCartTotal] = useState(0);
    const [user, setUser] = useState(null); // State for user authentication

    const location = useLocation();
    const navigate = useNavigate();


    const structuredClone = (obj) => JSON.parse(JSON.stringify(obj));

    /* login , register ,validation functions */
    useEffect(() => {
    // Attempt to retrieve the logged-in user from local storage
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser && !user) {
      setUser(JSON.parse(loggedInUser));
    }
  }, [user]);

   useEffect(() => {
        console.log(carts);
    }, [carts]);

    useEffect(() => {
        // Any additional logic for cart count or total
    }, [cartcount, carttotal]);

  
    const showNavbar =() => {
        console.log("user :",user)
        if (!user || user === null){
            return false;
        }

        return true
    }
  const login = async (userData) => {
    try {
      const isValidUser = await validateUser(userData);
      if (isValidUser) {
        setUser(userData);
        localStorage.setItem(userData.email, JSON.stringify(userData)); // Store user data
        toast.success('Login successful');
      } else {
        throw new Error('Invalid user credentials');
      }
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };

  const validateUser = async (userData) => {
    if (!userData.email || !userData.password) {
      return false; // Invalid user data
    }

    // Retrieve the stored user data using the email as the key
    const storedUser = localStorage.getItem(userData.email);
    if (!storedUser) {
      return false; // User does not exist
    }

    const parsedUser = JSON.parse(storedUser);
    return parsedUser.password === userData.password; // Validate password
  };

  const register = async (userData) => {
    try {
      const isExistingUser = await validateUser(userData);
      if (isExistingUser) {
        throw new Error('User already exists'); // Prevent duplicate registration
      }

      // Save user data in local storage with email as the key
      localStorage.setItem(userData.email, JSON.stringify({userData,}));
      setUser(userData);
      toast.success('Registration successful');
      navigate('/');
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`);
    }
  };

     const googleRegister = async ({email, password}) => {
        
        try {
            const newuser = await createUserWithEmailAndPassword(auth, email, password)
                            .then((userCredential)=>
                            {
                                // user Signed up
                                userCredential.user;

                            })
            
            console.log("newuser :", newuser)
          

        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`Google registration failed (${errorCode}): ${errorMessage}`);
        }
        
    };

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            // Save user data in local storage or state
            localStorage.setItem(user.email, JSON.stringify(user));
            setUser(user);
            toast.success('Login successful with Google');
            navigate('/');
        } catch (error) {
            toast.error(`Google login failed: ${error.message}`);
        }
    };


  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem('user');
      toast.success('Logout successful');
    } catch (error) {
      toast.error(`Logout failed: ${error.message}`);
    }
  };

    /* Add to cart function */ 
    const addToCart = (itemId, size, quantity) => {
        let carditems = structuredClone(carts);
        if (carditems[itemId]) {
            if (carditems[itemId][size]) {
                carditems[itemId][size].quantity += quantity;
            } else {
                carditems[itemId][size] = { quantity };
            }
        } else {
            carditems[itemId] = {};
            carditems[itemId][size] = { quantity };
        }

        setCarts(carditems);
        setCartCount(calculateCartCount());
        setCartTotal(calculateCartTotal());
    }

    const updateToCart = (itemId, size, quantity) => {
        let carditems = structuredClone(carts);
        if (carditems[itemId][size]) {
            carditems[itemId][size].quantity = quantity;
        }
        setCarts(carditems);
    }

    const removeFromCart = (itemId, size) => {
        let carditems = structuredClone(carts);
        if (carditems[itemId][size]) {
            delete carditems[itemId][size];
        }
        setCarts(carditems);
    }

    const calculateCartCount = () => {
        let count = 0;
        for (const item in carts) {
            for (const size in carts[item]) {
                count += carts[item][size].quantity;
            }
        }
        return count;
    }
    
    const calculateCartTotal = () => {
        let total = 0;
        for (const item in carts) {
            for (const size in carts[item]) {
                total += carts[item][size].quantity * carts[item][size].price;
            }
        }
        return total;
    }

 
    const contextValue = {
        // Shop data and methods
        currency,
        shopFee,
        products,
        showSearch,
        setShowSearch,
        searchitem,
        setSearchItem,
        carts,
        addToCart,
        updateToCart,
        removeFromCart,
        cartcount,
        setCartCount,
        carttotal,
        setCartTotal,
        user, // Add user state to context
        login, // Add login method to context
        register, // Add register method to context
        logout, // Add logout method to context
        validateUser, // Add validateUser method to context
        showNavbar,
        googleRegister, // Add googleRegister method to context
        googleLogin, // Add googleLogin method to context
    };

   

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export  function useShopContext() {
    const context = useContext(ShopContext);
    if (context === undefined || context === null || !context ) {
        throw new Error("useShopContext must be used within a ShopContextProvider");
    }
    return context;
}
