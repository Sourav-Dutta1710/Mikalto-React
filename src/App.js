import './App.css';
import './App.scss';
import skiNight from "./images/hero-section/ski-night.jpg";
import bedRoom from "./images/comfort-section/bed-room.jpg";
import dining from "./images/comfort-section/dining-space.jpg";
import view from "./images/comfort-section/drone-view.jpg";
import signature from "./images/comfort-section/signature.png";
import standardRoom from "./images/rooms-section/standard-room.jpg";
import deluxeRoom from "./images/rooms-section/deluxe-room.jpg";
import bell from "./images/hostel-section/bell.png";
import yoga from "./images/hostel-section/yoga.png";
import location from "./images/hostel-section/location.png";
import spa from "./images/activities-section/spa-room.jpg";
import resort from "./images/nature-section/ski-resort.jpg";
import frontView from "./images/experience-section/front-view.jpg";
import office from "./images/experience-section/office-room.jpg";
import hotel from "./images/experience-section/winter-hotel.jpg";
import treatment from "./images/hello-section/spa-treatment.jpg";
import review from "./images/clients-section/review.png";
import tripAdvisor from "./images/clients-section/trip-advisor.png";
import esther from "./images/clients-section/model-esther.png";
import jane from "./images/clients-section/model-jane.png";
import selena from "./images/clients-section/model-selena.png";
import plane from "./images/address-section/plane.png";
import bus from "./images/address-section/bus.png";
import van from "./images/address-section/van.png";
import flower from "./images/address-section/flower.png";
import ribbon from "./images/footer-section/ribbon.png";

const labels = ["Deluxe Room", "Standard Room"];
const bed = ["King Size Bed", "Queen Size Bed"];
const area = ["75sqm", "55sqm"];
let deluxe = 0;

function roomChange() {
  document.getElementById("roomHeading").innerHTML = labels[deluxe];
  document.getElementById("bed").innerHTML = bed[deluxe];
  document.getElementById("area").innerHTML = area[deluxe];
  if (deluxe === 0) {
    deluxe = 1;
    document.getElementById("roomImage").innerHTML = `
      <img src=${deluxeRoom} alt="Deluxe Room" class="img-fluid common-images" />`;
  }
  else {
    deluxe = 0;
    document.getElementById("roomImage").innerHTML = `
      <img src=${standardRoom} alt="Standard Room" class="img-fluid common-images" />`
  }
}

function NavList(){
  return(
    <div id="navList">
        <ul class="navbar-nav mb-2 mb-lg-0 py-4 flex flex-col md:flex-row items-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#">Our Room</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-ite px-2">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
  )
}

function Navbar() {
  return (
    <nav class="flex flex-col md:flex-row justify-between">
      <p class="commonText text-center xl:ms-12">
        <span class="text-3xl">Mikalto</span><br />
        Hotels & Resorts<br />
      </p>
      {<NavList/>}
      <div class="d-flex me-12 mt-4">
        <a class="nav-link" href="#"><i class="fa-solid fa-bag-shopping p-2"></i></a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section name="hero" class="hero">
      <img class="common-images img-fluid w-screen px-12" src={skiNight}
        alt="Ski Resort" />
      <div class="hero-heading fw-bold">
        <h1 class="fw-normal">Enjoy Your Dream Vacation</h1>
        Quiet and endlessly beautiful hideaway
        <div class="flex pt-5">
          <button class="px-5 py-2 hidden md:block border">About Us</button>
          <span class="p-3"><a class="nav-link" href="#">View Homestay &rarr;</a></span>
        </div>
      </div>
      <form class="hero-form bg-white text-black px-12 py-12 sm:m-12 xxl:w-2/5">
        <p class="pb-8"><span class="text-3xl">Search Room<br /></span>Get the latest on our COVID-19 response</p>
        <div class="flex justify-between">
          <span class="pe-5 common-text"><i class="fa-regular fa-calendar pe-2"></i>Checkin*</span>
          <span class="ps-5 common-text"><i class="fa-regular fa-calendar pe-2"></i>Checkout*</span>
        </div>
        <div class="flex pb-4">
          <input class="w-1/2 border-b-2 me-4" type="date" placeholder="check-in Date" />
          <input class="w-1/2 border-b-2" type="date" placeholder="check-out Date" />
        </div>
        <div class="flex flex-col">
          <label class="common-text"><i class="fa-regular fa-user pe-2"></i>Adults</label>
          <input class="border-b-2" type="number" />
          <label class="common-text pt-3"><i class="fa-solid fa-child pe-2"></i>Children</label>
          <input class="border-b-2" type="number" />
        </div>
        <button type="submit" class="common-colour mt-8 p-2 text-white lg:w-96">Check Availability</button>
      </form>
    </section>
  );
}

function Comfort() {
  return (
    <section name="comfort" class="comfort p-12">
      <p class="mt-5 pt-5 ms-5 ps-5 common-text">Welcome to</p>
      <h2 class="lg:mx-5 lg:px-5 pb-3 text-black">The Mikalto Luxury &<br /> Comfort Homestay</h2>
      <p class="comfort-para lg:m-5 lg:p-5 mt-0 pt-0 text-secondary">Welcome to our five star hotel inPuerto de la Cruz's
        old town.
        A marvelous combination of architecture , design and contemporary art.
        32 rooms and 10 uniquely different suites ensure our guests' stay
        is extra special.
        <img src={signature} alt="Signature" class="" /><br />
        MELINDA AMANDA - HOTEL MANAGER
      </p>
      <img src={bedRoom} alt="Bed Room"
        class="comfort-left-image img-fluid different-images" />
      <img src={dining} alt="Dining Space"
        class="comfort-right-image img-fluid different-images" />
      <img src={view} alt="Drone View"
        class="comfort-middle-image img-fluid different-images" />
    </section>
  );
}

function Rooms() {
  return (
    <section name="rooms" class="rooms common-colour flex flex-col lg:flex-row text-white">
      <div class="pe-14 pt-24">
        <p class="mt-5 pt-5 lg:ms-5 ps-5 text-yellow-500">ELEGANCE AND COMFORT</p>
        <h2 class="lg:mx-5 px-5 pb-3 text-3xl" id="roomHeading">Standard Room</h2>
        <p class="comfort-para lg:m-5 p-5 mt-0 pt-0 text-white">From<span class="font-bold ps-2 text-lg">$150</span> /night<br />
          with wide and comfortable areas and daylight pouring in from the...
        </p>
        <div class="flex justify-between lg:mx-5 px-5">
          <ul class="list-none">
            <li>Bed:</li>
            <li>Capacity:</li>
            <li>Room Size:</li>
            <li>View:</li>
          </ul>
          <ul class="list-none">
            <li id="bed">Queen Size Bed</li>
            <li>2 Adults, 1 Children</li>
            <li id="area">55 sqm</li>
            <li>garden view</li>
          </ul>
        </div>
        <span class="ps-5 pt-5">
          <button
            class="bg-transparent px-5 py-2 lg:ms-5 my-5 xxl:my-0 text-white border">View
            Detail</button>
        </span>
      </div>
      <div id="roomImage">
        <img src={standardRoom} alt="Standard Room" class="img-fluid common-images" />
      </div>
      <buttton class="rounded-full bg-white rooms-arrow-left text-black hover:cursor-pointer"
        onClick={roomChange}><i class="fa-solid fa-chevron-left p-3"></i></buttton>
      <buttton class="rounded-full bg-white rooms-arrow-right text-black hover:cursor-pointer"
        onClick={roomChange}><i class="fa-solid fa-chevron-right p-3"></i></buttton>
    </section>
  );
}

function Hostel() {
  return (
    <>
      <h2 class="py-5  lg:p-5 lg:ms-5"><span class="ps-5 text-4xl">Why choose our hostel?</span></h2>
      <section name="hostel" class="flex flex-col lg:flex-row p-12 gap-5 pe-3">
        <div class="flex lg:ps-12">
          <span><img src={bell} alt="bell" /></span>
          <p class="text-grey-500"><span class="text-xl font-semibold text-black">Unique cuisine</span><br />
            We use the best ingredients to make special and really tasty dishes.Choose what you want to eat every day.
            You order at the moment.</p>
        </div>
        <div class="flex lg:px-12">
          <span><img src={yoga} alt="yoga" /></span>
          <p class="text-grey-500"><span class="text-xl font-semibold text-black">Yoga & Gym</span><br />
            Sauna and Solarium, a fitness corner, bicycles and Mikalto walking poles available.
            To stay in shape, especially on vacation.</p>
        </div>
        <div class="flex lg:pe-12">
          <span><img src={location} alt="location" /></span>
          <p class="text-grey-500"><span class="text-xl font-semibold text-black">Perfect Location</span><br />
            The hotel is located near one of the most beautiful sandy beaches. This is the hotel to book
            if you plan to spend a great deal of time.</p>
        </div>
      </section>
    </>
  );
}

function Activities() {
  return (
    <section name="activities" class="common-colour flex flex-col lg:flex-row text-white items-center">
      <div class="lg:me-28 mt-5 p-5">
        <span class="mt-5 pt-5 ps-5 text-yellow-500">OTHER ACTIVITIES</span>
        <h2 class="px-5 pb-3 me-3 text-3xl">Give yourself a smile - smile and wellness</h2>
        <p class="comfort-para mb-5 ps-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusamus voluptate cupiditate animi dolorum
          esse explicabo, nisi nobis aliquam cumque est, tempora nemo necessitatibus, eligendi autem quisquam enim
          amet perferendis!<br />
          <a class="nav-link pt-3" href="#">Explore more &rarr;</a>
        </p>
      </div>
      <img src={spa} alt="Spa" class="img-fluid common-images w-[50vw]" />
    </section>
  );
}

function Nature() {
  return (
    <section name="nature" class="common-colour flex flex-col lg:flex-row text-white items-center">
      <img src={resort} alt="Resort" class="img-fluid common-images w-[50vw]" />
      <div class="me-5 mt-5 pt-5">
        <span class="mt-5 pt-5 ps-5 text-yellow-500">RECONNECT WITH NATURE</span>
        <h2 class="px-5 pb-3 me-3 text-3xl">Experience a truly unforgettable holiday</h2>
        <p class="comfort-para mb-5 ps-5 text-white w-100">
          The wilderness and authenticity of this tiny village nestled between stiff mountain cliffs and miles and miles
          of beautiful beaches
          drew foreign visitors like a magnet.</p>
        <ul class="ps-5 ms-3 text-yellow-500">
          <li><span class="text-white">Thermal water and ancient baths</span></li>
          <li><span class="text-white">Turkish Bath</span></li>
          <li><span class="text-white">Turkish Sauna</span></li>
          <li><span class="text-white">Relax and therapy message</span></li>
        </ul>
        <button class="bg-transparent px-5 py-2 mt-4 ms-5 my-5 text-white border">Book Your
          Stay</button>
      </div>
    </section>
  );
}


function Experience() {
  return (
    <section name="experience" class="py-5">
      <div class="text-center pt-5">
        <span class="common-text">EXPERIENCE MATTERS</span>
        <h2 class="text-3xl">Esxape from the World see the experience before you<br /> feel it.Discover the luxury of Hotel Mikalto</h2>
      </div>
      <div class="flex flex-col lg:flex-row text-grey-500 pt-5 gap-5 p-12">
        <div class="w-[65vw]">
          <img src={frontView} alt="view" class="img-fluid different-images pb-4" />
          <span class="common-text">WELLNESS</span>
          <p>
            <span class="py-4 text-black text-normal text-3xl">Dedicated to wellness</span><br />
            Aman's approach to wellness is focussed on personalisation, privacy and seclusion.
            Local spa rituals with indigenous ingredients offer a profoundly therapeutic touch
            and a gentle sense of discovery<br />
            <a class="nav-link pt-3" href="#">Discover more &rarr;</a>
          </p>
        </div>
        <div class="w-[65vw]">
          <img src={office} alt="Office Room"
            class="img-fluid different-images pb-4" />
          <span class="common-text">GIFT CARDS</span>
          <p>
            <span class="py-4 text-black text-normal text-3xl">The gift of future travel</span><br />
            Share extraordinary experiences with the Aman E-Gift Card - delivered instantly and
            offering memories that last a lifetime.<br />
            <a class="nav-link pt-3" href="#">Discover more &rarr;</a>
          </p>
        </div>
        <div class="w-[65vw]">
          <img src={skiNight} alt="Ski Night" class="img-fluid different-images pb-4" />
          <span class="common-text">MIKALTO SHOP</span>
          <p>
            <span class="py-4 text-black fw-normal text-3xl">The spa experience from home</span><br />
            Skincare and spa supplements harness powerful natural ingredients to provide balance
            and optimal wellbeing.<br />
            <a class="nav-link pt-3" href="#">Discover more &rarr;</a>
          </p>
        </div>
        <div class="w-[65vw]">
          <img src={hotel} alt="Winter Hotel"
            class="img-fluid different-images pb-4" />
          <span class="common-text">EXPERIENCE</span>
          <p>
            <span class="py-4 text-black text-normal text-3xl">Adventures in the Wild</span><br />
            Skincare and spa supplements harness powerful natural ingredients to provide balance
            and optimal wellbeing.<br />
            <a class="nav-link pt-3" href="#">Discover more &rarr;</a>
          </p>
        </div>
      </div>
      <p class="text-center">
        <button class="bg-transparent px-5 py-2 common-text border border-blue-500 hover:text-white">View all
          services</button>
      </p>
    </section>
  );
}

function Hello() {
  return (
    <section name="hello" class="hello py-5">
      <img class="img-fluid common-images w-screen hidden hidden-item" src={treatment}
        alt="Ski Resort" />
      <div class="hello-item bg-white text-grey-500 px-5 lg:m-5 lg:py-12">
          <span class="py-5 text-black text-normal text-3xl">Say hello<br /> to a whole new you<br /></span>
          <p class="pt-3 py-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quasi.
              Eius, illo nesciunt tenetur iste eaque veritatis, perferendis dolore laudantium non minus modi!
              Voluptatibus cupiditate est debitis expedita quo dignissimos.</p>
          <a class="nav-link pt-3" href="#">Discover more &rarr;</a>
      </div>
    </section>
  );
}

function Clients() {
  return ( 
    <section name="clients"
    class="different-colour flex flex-col lg:flex-row justify-around gap-5 p-12">
    <div class="text-grey-500 xl:px-4">
      <div class="flex">
        <span><img src={selena} alt="model" /></span>
        <p class="text-grey-500"><span class="fs-6 fw-semibold text-black">Selena Mayer</span><br />
          2021-01-10</p>
        <span><img src={tripAdvisor} alt="Trip Advisor" class="hidden hidden-item" /></span>
      </div>
      <p class="text-grey-500">
        <img src={review} alt="review" /><br />
        <span class="font-semibold text-black ps-2">Wondeerful new year trip</span><br />
        "One of the best hotels I've ever stayed in.The staff are very friendly and helpful, they were so helpful
        it made me feel bad.It includes use of the Spa,wonderful, it has a...
      </p>
    </div>
    <div class="text-grey-500 xl:px-4">
      <div class="flex">
        <span><img src={esther} alt="model" /></span>
        <p class="text-grey-500"><span class="font-semibold text-black">Esther Howard</span><br />
          2021-01-10</p>
        <span><img src={tripAdvisor} alt="Trip Advisor" class="hidden hidden-item" /></span>
      </div>
      <p class="text-grey-500">
        <img src={review} alt="review" /><br />
        <span class="font-semibold text-black ps-2">Recommended</span><br />
        "Great resort, professional staffs".It turns out that you're searching for paradise and you have it hear,
        nearby.
        Thanks for the warmth, you are fantastic.
      </p>
    </div>
    <div class="text-grey-500 xl:px-4">
      <div class="flex">
        <span><img src={jane} alt="model" /></span>
        <p class="text-grey-500"><span class="font-semibold text-black">Jane Cooper</span><br />
          2021-01-10</p>
        <span><img src={tripAdvisor} alt="Trip Advisor" class="hidden hidden-item" /></span>
      </div>
      <p class="text-grey-500">
        <img src={review} alt="review" /><br />
        <span class="font-semibold text-black ps-2">All Good</span><br />
        "I love the Resort and its enviroment.Mikalto is incredibly dedicated, knowledgable, and helpful.
        The finished product was beautiful every penny...
      </p>
    </div>
  </section>
   );
}

function Adress() {
  return (   
    <section name="adress" class="flex flex-col lg:flex-row p-12 gap-5 py-5 justify-between">
    <div class="adress-item px-5">
      <img src={flower} alt="Flower" class="img-fluid different-images pb-4" />
      <p class="text-grey-500"><span class="common-text">GETTING HERE</span><br />
        <span class="py-4 font-normal text-3xl text-black">How to get there?</span><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus quis, facilis suscipit, eum, omnis
        consequuntur eos ad ipsum cupiditate quam ducimus!
        Laborum cupiditate numquam ipsa doloribus. Quasi, eum at?
      </p>
      <div class="flex py-5">
        <span><img src={plane} alt="plane" /></span>
        <p class="text-grey-500"><span class="text-xl font-semibold text-black">By plane</span><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe ipsum dolore necessitatibus quia,
          cupiditate fugiat id. Iste non
        </p>
      </div>
      <div class="flex py-5">
        <span><img src={bus} alt="bus" /></span>
        <p class="text-grey-500"><span class="text-xl font-semibold text-black">By bus</span><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus tempora laborum beatae, quae consectetur
          fugiat nemo quibusdam voluptas impedit
        </p>
      </div>
      <div class="flex py-5">
        <span><img src={van} alt="van" /></span>
        <p class="text-grey-500 ps-3"><span class="text-xl font-semibold text-black">By van</span><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates harum, possimus itaque tenetur sunt esse
          debitis aliquam blanditiis consectetur,
        </p>
      </div>
      <a class="nav-link pt-3 common-text" href="#">Discover more &rarr;</a>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0439020777935!2d88.42883567538762!3d22.57746127948822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a5466e0099%3A0x563fb49fb6394261!2sItobuz%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1689512620752!5m2!1sen!2sin"
      width="600" height="650" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade" class="align-self-center hidden hidden-item"></iframe>
  </section>
   );
}

function Subscribe() {
  return (    
    <section name="subscribe" class="subscribe text-center py-12">
    <p class="text-grey-500"><span class="text-blue-500">STORIES DELIVERED STRAIGHT</span><br />
      <span class="py-4 font-normal text-3xl text-black">Get News & Update to Your Inbox</span><br />
      <input type="email" class="subscribe-email py-3 border w-[50vw] my-5" placeholder="Enter your email address..." />
      <button type="submit"
        class="common-colour subscribe-button mt-3 py-2 px-5 text-white">Subscribe</button><br />
    <div class="flex justify-center">Will be used in accordance with our&nbsp;<a href="#"
        class="nav-link underline">Privacy Policy</a></div>
    </p>
  </section>
    );
}

function Footer() {
  return (    
    <footer class="common-colour">
    <img src={ribbon} alt="ribbon" class="img-fluid" />
    <div class="text-white flex flex-col lg:flex-row gap-5 justify-evenly items-center">
      <div>
        <h1 class="font-normal ps-2">
          Mikalto
        </h1>
        <p class="footer-para pb-0 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          accusamus voluptate cupiditate animi dolorum
          esse explicabo, nisi nobis aliquam cumque est, tempora nemo necessitatibus, eligendi autem quisquam enim
          amet perferendis!</p>
        <div class="flex">
          Follow Us:
          <a class="nav-link px-2 ps-4" href="#"><i class="fa-brands fa-instagram"></i></a>
          <a class="nav-link px-2" href="#"><i class="fa-brands fa-facebook"></i></a>
          <a class="nav-link px-2" href="#"><i class="fa-brands fa-youtube"></i></a>
          <a class="nav-link px-2" href="#"><i class="fa-brands fa-twitter"></i></a>
          <a class="nav-link px-2" href="#"><i class="fa-brands fa-instagram"></i></a>
          <a class="nav-link px-2" href="#"><i class="fa-brands fa-pinterest"></i></a>
        </div>
      </div>
      <div>
        <h3 class="font-normal pb-4">About</h3>
        <ul class="list-none font-lighter">
          <li><a class="nav-link active fw-semibold underline" href="#">About Us</a></li>
          <li><a class="nav-link" href="#">Careers</a></li>
          <li><a class="nav-link" href="#">Contact US</a></li>
          <li><a class="nav-link" href="#">Blogs</a></li>
          <li><a class="nav-link" href="#">Gift Cards</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-normal pb-4">Services</h3>
        <ul class="list-none font-lighter">
          <li>Spa</li>
          <li>Experience</li>
          <li>Weddings</li>
          <li>Dinings</li>
          <li>Event</li>
        </ul>
      </div>
      <div>
        <h3 class="font-normal pb-4">Quick Links</h3>
        <ul class="list-none font-lighter">
          <li><a class="nav-link" href="#">Facilities</a></li>
          <li><a class="nav-link" href="#">Accomodation</a></li>
          <li><a class="nav-link" href="#">Reservation</a></li>
          <li><a class="nav-link" href="#">Why Choose Us?</a></li>
          <li><a class="nav-link" href="#">Our Restuarent</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-normal pb-4">Contact Us</h3>
        <ul class="list-none font-lighter">
          <li>Toll Free Customer Support</li>
          <li>+(123)1500-456-7890</li>
          <li><br /></li>
          <li>Need Live Support?</li>
          <li>reservation@mikalto.com</li>
        </ul>
      </div>
    </div>
    <hr class="text-white px-12 mx-12 my-5" />
    <div class="flex flex-col lg:flex-row lg:justify-between p-4 ps-0 text-white px-12">
        <span class="ps-12">Copyright © 2022 mikalto JWS.</span>
      <div>
        <a class="nav-link px-2 ps-5" href="#">Privacy</a>
        <a class="nav-link px-2" href="#">Terms</a>
        <a class="nav-link px-2" href="#">Sitemap</a>
      </div>
    </div>
  </footer>
      );
}

  function App() {
  return (
          <>
            <Navbar />
            <Hero />
            <Comfort />
            <Rooms />
            <Hostel />
            <Activities />
            <Nature />
            <Experience />
            <Hello />
            <Clients />
            <Adress />
            <Subscribe />
            <Footer />
          </>
  );
}

          export default App;