import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <motion.a
              href="#"
              className="navbar-logo gradient-text font-display text-2xl font-bold tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JG
            </motion.a>

            {/* Desktop Navigation */}
            <div className="navbar-links desktop-only">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="navbar-link font-display text-sm tracking-wider"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-button mobile-only"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="mobile-menu-content">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="mobile-menu-link font-display tracking-wider"
              onClick={handleLinkClick}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 50,
              }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(10, 14, 39, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.1);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          font-size: 1.5rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.1em;
        }

        .navbar-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .navbar-link {
          color: var(--color-text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .navbar-link:hover {
          color: var(--color-nebula-purple);
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-cosmic);
          transition: width 0.3s ease;
        }

        .navbar-link:hover::after {
          width: 100%;
        }

        .mobile-menu-button {
          display: none;
          background: transparent;
          border: none;
          color: var(--color-star-white);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 80%;
          max-width: 300px;
          background: rgba(10, 14, 39, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid rgba(139, 92, 246, 0.2);
          z-index: 999;
          pointer-events: none;
        }

        .mobile-menu.active {
          pointer-events: all;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          padding: 5rem 2rem 2rem;
          gap: 1.5rem;
        }

        .mobile-menu-link {
          color: var(--color-star-white);
          text-decoration: none;
          font-size: 1.25rem;
          font-weight: 600;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .mobile-menu-link:hover {
          background: rgba(139, 92, 246, 0.1);
          color: var(--color-nebula-purple);
        }

        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }

          .mobile-only {
            display: block;
          }

          .mobile-menu-button {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
