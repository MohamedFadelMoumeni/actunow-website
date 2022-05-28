import Hero from "../components/Hero/Hero.component"
import Aboutus from "../components/about-us/about-us.component"
import Service from "../components/service/service.component"
import WeDo from "../components/we-do/we-do.component"
import ServiceTwo from "../components/service-two/service-two.compnent"
import Stats from "../components/Stats/Stats.component"
import Brands from "../components/brands/brands.component"

export default function Home() {
  return (
   <>
   <Hero />
   <Aboutus />
   <Service />
   <WeDo />
   <ServiceTwo />
   <Stats />
   <Brands />
   </>
  )
}
