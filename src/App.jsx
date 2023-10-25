import logo from "../assets/logo.svg";
import imgLeft from "../assets/illustration-hero-left.svg";
import imgRight from "../assets/illustration-hero-right.svg";
import mobileHero from "../assets/illustration-hero-mobile.png";
import passion from "../assets/illustration-passions.svg";
import freedom from "../assets/illustration-financial-freedom.svg";
import lifestyle from "../assets/illustration-lifestyle.svg";
import remote from "../assets/illustration-work-anywhere.svg";
import free from "../assets/icon-free.svg";
import paid from "../assets/icon-paid.svg";
import checkCyan from "../assets/icon-check-cyan.svg";
import check from "../assets/icon-check.svg";
import bgFooter from "../assets/bg-footer-squiggle.svg";
import scroll from "../assets/icon-scroll.svg";
import "./App.css";

function App() {
  return (
    <>
      <main className="max-w-[1110px] mx-auto">
        <nav className="p-4 mx-auto md:mx-0 w-fit">
          <img src={logo} alt="" />
        </nav>
      </main>

      <section className="my-10 md:my-20 flex flex-col md:flex-row gap-20 items-center justify-between">
        <div>
          <img src={imgLeft} alt="" className="hidden md:block" />
        </div>
        <div>
          <img src={mobileHero} alt="" className="md:hidden" />
        </div>
        <div className="bg-cover bg-no-repeat lg:p-28 md:bg-bg-tablet">
          <h1 className="text-white font-extrabold w-96 mx-auto md:mx-0 md:w-auto text-5xl lg:w-[30rem] my-5">
            Get paid for the work you
            <span className="text-[#3ee9e5]"> love</span> to do.
          </h1>
          <p className="lg:w-[30rem] w-80 md:w-auto mx-auto font-medium text-[#777f98]">
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
          <img src={scroll} alt="" className="mx-auto mt-5" />
        </div>
        <div>
          <img src={imgRight} alt="" className="hidden md:block" />
        </div>
      </section>

      <section className="max-w-[1110px] mx-auto p-4">
        <div
          className="my-28 flex flex-col gap-5 items-center lg:gap-0 lg:flex-row 
        lg:items-center md:justify-between"
        >
          <div className="lg:w-64 md:text-start md:flex gap-8 items-center lg:block">
            <div className="bg-[#093f68] mx-auto md:mx-0 rounded-3xl w-fit p-6">
              <img src={passion} alt="" />
            </div>
            <div>
              <h2 className="my-5 text-white font-extrabold text-lg">
                Indulge your passions
              </h2>
              <p className="text-[#777f98] w-80 md:w-96 lg:w-auto">
                Your passions shouldn't be just for the weekend. Earn a living
                doing what you love.
              </p>
            </div>
          </div>

          <div className="lg:w-64 md:text-start md:flex gap-8 items-center lg:block relative lg:top-24 md:left-24 lg:left-0">
            <div className="bg-[#093f68] mx-auto md:mx-0 rounded-3xl w-fit p-6">
              <img src={freedom} alt="" />
            </div>
            <div>
              <h2 className="my-5 text-white font-extrabold text-lg">
                Gain financial freedom
              </h2>
              <p className="text-[#777f98] w-80 md:w-96 lg:w-auto">
                Start making money work for you. There’s nothing quite like
                earning while you sleep.
              </p>
            </div>
          </div>

          <div className="lg:w-64 md:text-start md:flex gap-8 items-center lg:block">
            <div className="bg-[#093f68] mx-auto md:mx-0 rounded-3xl w-fit p-6">
              <img src={lifestyle} alt="" />
            </div>
            <div>
              <h2 className="my-5 text-white font-extrabold text-lg">
                Choose your lifestyle
              </h2>
              <p className="text-[#777f98] w-80 md:w-96 lg:w-auto">
                Own your daily schedule. Fancy a lie-in? Go for it! Take charge
                of your week.
              </p>
            </div>
          </div>

          <div
            className="lg:w-64 md:text-start md:flex gap-8 items-center lg:block 
          relative lg:top-24 md:left-24 lg:left-0"
          >
            <div className="bg-[#093f68] mx-auto md:mx-0 rounded-3xl w-fit p-6">
              <img src={remote} alt="" />
            </div>
            <div>
              <h2 className="my-5 text-white font-extrabold text-lg">
                Work from anywhere
              </h2>
              <p className="text-[#777f98] w-80 md:w-96 lg:w-auto">
                Selling online means not being pinned down. Want to work AND
                travel? Go for it!
              </p>
            </div>
          </div>
        </div>

        <div className="my-40">
          <div>
            <h3 className="font-extrabold text-3xl text-white my-2">
              Our pricing plans
            </h3>
            <p className="w-96 lg:w-[34rem] mx-auto text-[#777f98]">
              We only make money when our creators make money. Our plans are
              always affordable, and it’s completely free to get started.
            </p>
          </div>

          <div className="my-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
            <div className="w-[28rem] text-start text-white bg-[#093f68] rounded-xl p-8">
              <img src={free} alt="" className="relative bottom-12" />
              <h4 className="font-extrabold text-lg mb-5">Dip your toe</h4>
              <p className="text-[#777f98] my-5">
                Just getting started? No problem at all! Our free plan will take
                you a long way.
              </p>
              <h3 className="font-extrabold text-4xl my-5">Free</h3>
              <div className="my-2">
                <div className="flex items-center gap-2 my-2 text-sm">
                  <img src={checkCyan} alt="" />
                  <p>Unlimited Products</p>
                </div>
                <div className="flex items-center gap-2 my-2 text-sm">
                  <img src={checkCyan} alt="" />
                  <p>Basic analytics</p>
                </div>
                <div className="flex items-center gap-2 my-2 text-sm">
                  <img src={checkCyan} alt="" />
                  <p>Limited marketplace exposure</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <img src={checkCyan} alt="" />
                  <p>10% fee per transaction</p>
                </div>
              </div>
            </div>

            <div className="w-[28rem] text-start bg-[#3ee9e5] rounded-xl p-8">
              <img
                src={paid}
                alt=""
                className="relative bottom-12 w-[46px] h-[46px]"
              />
              <h4 className="font-extrabold text-lg mb-5">Dive right in</h4>
              <p className="text-[#777f98] my-5">
                Ready for the big time? Our paid plan will help you take your
                business to the next level.
              </p>
              <div className="flex items-center">
                <h3 className="font-extrabold text-4xl my-5">$25.00</h3>
                <span className="text-xs">/month</span>
              </div>
              <div className="my-2">
                <div className="flex items-center gap-2 my-2 text-sm">
                  <img src={check} alt="" />
                  <p>Custom domain</p>
                </div>
                <div className="flex items-center gap-2 my-2 text-sm">
                  <img src={check} alt="" />
                  <p>Advanced analytics and report</p>
                </div>
                <div className="flex items-center gap-2 my-2 text-sm">
                  <img src={check} alt="" />
                  <p>High marketplace visibility</p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <img src={check} alt="" />
                  <p>5% fee per transaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="text-white my-10 p-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${bgFooter}')` }}
      >
        <p className="font-extrabold text-3xl">Get notified when we launch</p>
        <div className="my-5 flex flex-col gap-4 md:block">
          <input
            type="email"
            placeholder="Email address"
            className="bg-[#093f68] rounded-2xl px-6 py-2 mr-5"
          />
          <button className="bg-[#3ee9e5] px-4 py-2 rounded-full hover:bg-transparent hover:border-2 hover:border-[#3ee9e5]">
            Get notified
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
