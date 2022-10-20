import { Fragment, useState } from "react";
import Logo from "./assets/images/logo.svg";
import MenuOpenIcon from "./assets/images/icon-hamburger.svg";
import MenuCloseIcon from "./assets/images/icon-close.svg";
import MobileHero from "./assets/images/mobile/image-hero.jpg";
import DesktopHero from "./assets/images/desktop/image-hero.jpg";
import InteractiveMobile from "./assets/images/mobile/image-interactive.jpg";
import InteractiveDesktop from "./assets/images/desktop/image-interactive.jpg";
import { CREATIONS } from "./assets/data/Creations";
import Facebook from "./assets/images/icon-facebook.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";
import Instagram from "./assets/images/icon-instagram.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  }

  return (
    <div className={`relative ${isMenuOpen && "h-screen overflow-hidden"}`}>
      <header className="py-6 md:py-10">
        <nav className="relative z-10 container h-10 mx-auto max-w-7xl flex justify-between items-center px-4 md:px-8">
          <div role="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div role="menu-open-icon" className="block md:hidden" onClick={toggleMenuHandler}>
            {
              isMenuOpen ?
                <img src={MenuCloseIcon} alt="Menu Close Icon" /> :
                <img src={MenuOpenIcon} alt="Menu Open Icon" />
            }
          </div>

          <ul role="menu-items" className="hidden md:flex font-alata text-white gap-12">
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              About
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              Careers
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              Events
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              Products
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              Support
            </li>
          </ul>
        </nav>

        <div className="relative -mt-16 md:-mt-20">
          <img src={MobileHero} alt="Mobile Hero" className="aspect-[15/26] md:hidden" />
          <img src={DesktopHero} alt="Desktop Hero" className="w-full hidden md:block" />

          <div className="absolute container max-w-7xl mx-auto px-4 md:px-8 top-1/2 left-1/2 -translate-y-1/2 md:-translate-y-1/4 -translate-x-1/2">
            <div className="border-2 border-white text-white p-4 max-w-2xl">
              <span className="text-4xl tracking-wider md:text-6xl md:tracking-widest font-josefin">
                IMMERSIVE EXPERIENCES THAT DELIEVER
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 md:px-8 mt-24">
        <section className="relative">
          <div className="w-full md:absolute z-0 top-0">
            <img src={InteractiveMobile} alt="Interactive Mobile" className="w-full md:hidden" />
            <img src={InteractiveDesktop} alt="Interactive Desktop" className="w-3/5 hidden md:block" />
          </div>

          <div className="md:absolute z-10 md:w-1/2 md:h-96 right-0 top-48 bg-white mt-10 md:mt-0 text-center text-4xl md:flex md:flex-col md:items-center md:justify-center md:pl-24">
            <h2 className="font-josefin md:text-5xl md:text-start">THE LEADER IN INTERACTIVE VR</h2>
            <p className="mt-6 font-alata text-sm text-dark-gray px-10 leading-normal md:px-0 md:text-start md:text-base md:leading-relaxed">Founded in 2011, Loopstudios has been producing world-class virtual reality
              projects for some of the best companies around the globe. Our award-winning
              creations have transformed businesses through digital experiences that bind
              to their brand.</p>
          </div>
        </section>

        <section role="creations" className="md:pt-[700px] flex flex-col mt-24">
          <div className="flex justify-center items-center md:justify-between">
            <h2 className="font-josefin text-2xl self-items-center md:text-4xl">OUR CREATIONS</h2>
            <button className="border border-black px-4 py-2 font-josefin text-xs font-bold tracking-[0.3em] hidden transition-all delay-100 md:flex hover:bg-black hover:text-white">SEE ALL</button>
          </div>

          <div className="mt-12 grid gap-y-4 md:gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2">
            {
              CREATIONS.map(creation => (
                <div
                  key={creation.id}
                  className="flex md:hidden relative group"
                >
                  <div className="relative z-0 hover:cursor-pointer hover:opacity-70 overflow-hidden transition-all ease-out delay-75">
                    <img src={creation.imgSrcMobile} alt={creation.title} className="group-hover:scale-110" />
                  </div>
                  <div className="absolute z-10 bottom-2 left-4 w-24 leading-5">
                    <span className="font-josefin text-white hover:cursor-pointer">{creation.title}</span>
                  </div>
                </div>
              ))
            }
            {
              CREATIONS.map(creation => (
                <div
                  key={creation.id}
                  className="hidden md:flex relative group"
                >
                  <div className="relative z-0 flex-auto hover:cursor-pointer group-hover:opacity-70 overflow-hidden transition-all ease-out delay-75">
                    <img src={creation.imgSrcDesktop} alt={creation.title} className="w-full group-hover:scale-110" />
                  </div>
                  <div className="absolute z-10 bottom-2 left-4 w-24 leading-5 md:w-36 md:bottom-10 md:left-10">
                    <span className="font-josefin text-white md:text-3xl hover:cursor-pointer">{creation.title}</span>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="mt-8 flex justify-center">
            <button className="border border-black px-4 py-2 font-josefin text-xs font-bold tracking-[0.3em] flex md:hidden hover:bg-black hover:text-white">SEE ALL</button>
          </div>
        </section>
      </main>

      <footer className="mt-24 bg-black py-10">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 md:gap-y-6">
          <div role="logo" className="md:order-1">
            <img src={Logo} alt="Logo" className="mx-auto md:mx-0" />
          </div>

          <ul role="footer-menu-items" className="text-white mt-8 md:mt-0 flex flex-col md:flex-row items-center gap-4 font-alata text-sm md:order-3 md:gap-8">
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              About
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              Careers
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              Events
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              Products
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              Support
            </li>
          </ul>

          <ul role="social-media-platforms" className="flex mt-8 md:mt-0 justify-center gap-4 md:order-2 md:justify-end">
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              <img src={Facebook} alt="Facebook" />
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              <img src={Twitter} alt="Twitter" />
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              <img src={Pinterest} alt="Pinterest" />
            </li>
            <li className="relative py-2 group hover:cursor-pointer">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 border border-white invisible group-hover:visible"></div>
              <img src={Instagram} alt="Instagram" />
            </li>
          </ul>

          <div role="copyright" className="mt-8 md:mt-0 flex justify-center items-center md:order-4 md:justify-end">
            <span className="text-sm text-dark-gray">© 2021 Loopstudios. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {
        isMenuOpen &&
        (
          <div role="menu-modal" className="absolute top-0 z-20 w-full h-full bg-black">
            <nav className="relative z-30 container h-10 mx-auto max-w-7xl flex justify-between items-center px-4 md:px-8 mt-6">
              <div role="logo">
                <img src={Logo} alt="Logo" />
              </div>

              <div role="menu-open-icon" className="block md:hidden" onClick={toggleMenuHandler}>
                {
                  isMenuOpen ?
                    <img src={MenuCloseIcon} alt="Menu Close Icon" /> :
                    <img src={MenuOpenIcon} alt="Menu Open Icon" />
                }
              </div>
            </nav>

            <ul className="font-josefin text-white container mx-auto max-w-7xl px-4 md:px-8 mt-32 text-2xl space-y-6">
              <li>ABOUT</li>
              <li>CAREERS</li>
              <li>EVENTS</li>
              <li>PRODUCTS</li>
              <li>SUPPORT</li>
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default App
