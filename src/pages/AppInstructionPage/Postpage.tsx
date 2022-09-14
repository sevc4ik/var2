import { useState } from 'react'
import { Body } from '../../components/Body'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import clinicLogo from "../../assets/images/logo.png"
import phoneButtonIcon from "../../assets/icons/phoneButton.svg"

export const AppInstructionPage: React.FC = () => {
  const clinic = {
    clinicName: 'Clinic Name',
    imageLink: clinicLogo,
  }

  const [test, setTest] = useState(false);

  const handleСlick = (value: boolean) => {
    setTest(value);
    const title = document.getElementById("title");
    title?.scrollIntoView({behavior: "smooth", block: "end"});
  }

  return (
    <>
      <Header header={clinic}/>
      <Body test={test}/>
      <Footer
        handleСlick={handleСlick}
        appDate='Fri, 2:00 PM'
        appTime='3 Dec 2021'
        icon={phoneButtonIcon} test={false}/>
    </>
)}
