import { createContext, useState, useEffect } from 'react'

const NavigationContext = createContext();

function NavProvider ({ children }) {
    //state set to cause rerender when user presses back and forward
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //listen for popstate forward back
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)

        }
    window.addEventListener('popstate', handler);

    //cleanup function if nav removed from DOM in the future
    const cleanup = () => {
        window.removeEventListener('popstate', handler)
    }
    return cleanup

    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{ navigate, currentPath }}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    )

};

export { NavProvider }
export default NavigationContext;