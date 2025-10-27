import React from 'react'
import classNames from 'classnames';
import useNavigation  from '../hooks/use-navigation'

export default function Link({ to, children}) {
    const { navigate } = useNavigation();

    const classes = classNames('text=blue-500');

    const handleClick = (event) => {
        //detect if command key is pressed
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        //prevent total page refresh
        event.preventDefault();
        
        //reach into context for navigate function
        navigate(to);
    };

  return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )
}
