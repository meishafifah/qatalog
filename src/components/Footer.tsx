import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <section id="footer" className="mt-20 lg:mt-40 bg-black/80 w-full">
      <div className="max-w-[1700px] mx-auto px-6 md:px-9 lg:px-32 py-6 pt-12 md:pt-16 md:pb-6 text-white">
        <div className="flex flex-col md:flex-row gap-y-9 md:gap-x-12 md:gap-y-0">
          <div className="w-full md:w-1/4 flex flex-col">
            <h4 className="font-bold mb-3">Account</h4>
            <div className="flex flex-col gap-y-1">
              <a className="text-md md:text-base" href={"/"}>
                Login
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Free Trial
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Pricing
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col">
            <h4 className="font-bold mb-3">About</h4>
            <div className="flex flex-col gap-y-1">
              <a className="text-md md:text-base" href={"/"}>
                About
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Newsroom
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Terms of service
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Privacy policy
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col">
            <h4 className="font-bold mb-3">Product</h4>
            <div className="flex flex-col gap-y-1">
              <a className="text-md md:text-base" href={"/"}>
                Search & knowledge
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Integrations
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Security
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col">
            <h4 className="font-bold mb-3">Resources</h4>
            <div className="flex flex-col gap-y-1">
              <a className="text-md md:text-base" href={"/"}>
                ActionQuery
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Enterprise Intelligence
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Help center
              </a>
              <a className="text-md md:text-base" href={"/"}>
                Language work
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <img className="w-12 h-12 rounded-full" src={logo} alt="" />
          <h4 className="scroll-m-20 text-base md:text-xl font-light tracking-tight">
            Semua Ada, Semua Mudah
          </h4>
        </div>
      </div>
    </section>
  );
}
