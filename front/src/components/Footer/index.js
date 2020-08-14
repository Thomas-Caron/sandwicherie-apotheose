import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Footer = ({ socialnetworks }) => (
    <footer className="footer">
            <div className="footer__container">
                <div className="footer__schedule">
                    <p className="footer__infos">Horaires :</p>
                    <p className="footer__infos">10:30 à 14:30 - 18:30 à 22:00</p>
                </div>
                <div className="footer__phone">
                    <p className="footer__infos">Téléphone : <a href="tel:+33557309139">05 57 30 91 39</a></p>
                </div>
                <div className="footer__adress">
                    <p className="footer__infos">25 Cours Pasteur,</p>
                    <p className="footer__infos">33000 BORDEAUX</p>
                </div>
                <ul className="footer__socialnetworks">
                    {socialnetworks.map((link) => (
                        <li className="footer__socialnetwork" key={link.id}>
                            <a href={link.path} target="_blank" rel="noopener noreferrer"><i className={link.icon}></i></a>
                        </li>
                    ))}
                </ul>
                <div className="footer__copyright">
                    <p className="footer__infos">© Tous droits réservés - Messieurs Croquent</p>
                </div>
            </div>
    </footer>
);

Footer.propTypes = {
    socialnetworks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
export default Footer;
