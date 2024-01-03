import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer xl:px-16 py-10 px-4 md:px-8 text-base-content shadow-md">
        <aside>
        <img src={logo} alt="logo" />
          <p className='md:w-40 mt-2'>
             Providing reliable services since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Useful Links</header>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Faq</a>
        </nav>
        <nav>
          <header className="footer-title">Main Menu</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offers</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav>
        <nav>
          <header className="footer-title">contact us</header>
          <a className="link link-hover">hasibul.nayon1@gmail.com</a>
          <a className="link link-hover">+880 17834934</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
