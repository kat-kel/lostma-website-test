import logo from './images/BNF_Fr95_209v_2.jpg';


const Header = () => {
    return (
        <header>
            <span className='background-image-container'>
                <img src={logo} alt="placeholder logo" className="background" />
            </span>
            <div className='container-fluid foreground'>
                <h1>LostMa</h1>
                <p>navigating the currents of culture</p>
            </div>
            <span className='image-citation'>
          Bibliothèque nationale de France, Français 95, folio 209v
            </span>
        </header>
    );
};

export default Header;