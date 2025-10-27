import { useState } from "react";
import Button from '../components/Button'
import './index.css' 
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'


function ButtonPage() {
  const handleClick = () => {
    console.log("Click")
  }
  return (
    <>
    <div>
      <Button primary onClick={handleClick}>
        <GoBell />
        Click!
      </Button>
    </div>
    <div>
      <Button secondary onMouseEnter={handleClick}>
        <GoCloudDownload />
        Buy Now!
        </Button>
    </div>
    <div>
      <Button success onMouseLeave={handleClick}>
      <GoDatabase />
        See Deal!
        </Button>
    </div>
    <div>
      <Button warning>Hide Ads!</Button>
    </div>
    <div >
      <Button danger>Send!</Button>
    </div>
    </>
  );
}

export default ButtonPage;