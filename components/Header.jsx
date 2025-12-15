'use client';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import "../i18n"; // ✅ IMPORT HERE (client)


export default function Header() {
  const { i18n } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img src="/images/logo.png" alt="logo" height="40" className="me-2" />
          ग्रामपंचायत
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="ms-auto">
          <button
            className="btn btn-sm btn-light me-2"
            onClick={() => i18n.changeLanguage("mr")}
          >
            मराठी
          </button>
          <button
            className="btn btn-sm btn-outline-light"
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </button>
        </div>
      </div>
    </nav>
  );
}
