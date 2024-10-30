import LearnGrowEarn from "../components/LearnGrowEarn"
import Program from "../components/Program"
import WhyLearnWithUs from "../components/WhyLearnWithUs"
import tsimage from '../assets/salesimage.png'
import management from '../assets/management.png'
import pdesign from '../assets/ui3.png'
import pmarketing from '../assets/marketing.png'
import csuccess from '../assets/success.png'
import gdesign from '../assets/grp3.png'
import FAQ from "../components/FAQ"

const Home = () => {
  return (
    <div>
        <LearnGrowEarn />
        <hr className=" border-black my-[3rem]"/>

        <WhyLearnWithUs />

        <Program 
        img = {tsimage}
        name = "Tech Sales"
        width= "w-[24rem]"
        details = "Join the Revenue Talent Incubation (RETAIN) program and learn all you need to become a tech expert with the help of our experienced instructors."
        />

        <Program 
        img = {management}
        name = "Financial Management"
        details = "Join the Revenue Talent Incubation - RETAIN program and learn all you need to become a tech expert with the help of our experienced instructors."
        width = "w-[24rem]"
        mobileSize = "w-[10rem]"
        />

        <Program 
        img = {pdesign}
        name = "Product Design"
        details = "Join the Revenue Talent Incubation - RETAIN program and learn all you need to become a tech expert with the help of our experienced instructors."
        />
        
        <Program 
        img = {pmarketing}
        name = "Product Marketing"
        details = "Join the Revenue Talent Incubation - RETAIN program and learn all you need to become a tech expert with the help of our experienced instructors."
        width = "25rem"
        />

        <Program 
        img = {csuccess}
        name = "Customer Success"
        details = "Join the Revenue Talent Incubation - RETAIN program and learn all you need to become a tech expert with the help of our experienced instructors."
        width = "25rem"
        />

        <Program 
        img = {gdesign}
        name = "Graphic Design"
        details = "Join the Revenue Talent Incubation - RETAIN program and learn all you need to become a tech expert with the help of our experienced instructors."
        width = "25rem"
        />


        <FAQ />

    </div>
  )
}

export default Home