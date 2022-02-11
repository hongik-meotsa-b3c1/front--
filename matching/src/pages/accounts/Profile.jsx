import React from "react"
import { useAppContext } from "store";

function Profile(){
    const { store } = useAppContext();
    console.log(">>>store : ", store);
    return <div>accounts/profile</div>
}

export default Profile;