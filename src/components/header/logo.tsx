import { Link } from 'react-router-dom';
import { IconBurger } from '../../assets/svgs';

const AppLogo = () => {
    return (
        <div className="lg:px-2">
            <Link className="hidden lg:block" to="/">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Page Name"
                            src="https://graph.facebook.com/237352949662793/picture?type=normal"
                        />
                    </div>
                </div>
            </Link>
            <label className="btn btn-circle btn-ghost lg:hidden" htmlFor="drawer">
                <IconBurger />
            </label>
        </div>
    );
}

export default AppLogo;