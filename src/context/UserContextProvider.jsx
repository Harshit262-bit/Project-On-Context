import  React from "react";
import UserContext from "./Usercontext";



//create one method 
const UserContextProvider = ({children}) => {

    // call any api and use here    
    const [user, setUser] = React.useState(null) 
return(
    <UserContext.Provider value ={{user, setUser}}>

    {children}
    
    </UserContext.Provider>
);

}
// UserContextProvider.propTypes = myPropTypes;

export default UserContextProvider;