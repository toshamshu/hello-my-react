import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () =>{
            console.log('offline event listener execution');
            setOnlineStatus(false);
        });
        window.addEventListener("online", () =>{
            console.log('online event listener execution');
            setOnlineStatus(true);
        })
    }, []);
    return onlineStatus;
}
export default useOnlineStatus;