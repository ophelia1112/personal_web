import {react} from 'react'
import Introduction from '../components/Founderpage/Introduction'
import IntroductionVideo from '../components/Founderpage/Introductionvideo'
import Learning from '../components/Founderpage/Learning'
import Modelm1 from '../components/Founderpage/ModelM1'
import Personalguide from '../components/Founderpage/Personalguide'
import Researchproject from '../components/Founderpage/Researchproject'
import Skills from '../components/Founderpage/Skills'
import Contact from '../components/Founderpage/Contact_claim'

export default function Personalweb() {
    return (
        <>
            <Introduction/>
            <IntroductionVideo/>
            <Modelm1/>
            <Personalguide/>
            <Researchproject/>
            <Skills/>
            <Learning/>
            <Contact />
        </>

    );

}