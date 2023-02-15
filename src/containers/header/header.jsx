import asteroide from './asteroide.avif';
import style from './header.module.css';

const Header = () => (
    <header className={style.main}>
        <img src={asteroide} alt="Logo du site 🌏" />
        <p>Correction des exercices !</p>
    </header>
)

export default Header;