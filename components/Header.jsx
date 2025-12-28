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
          {/* <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
          </ul> */}
          <ul className="navbar-nav ms-auto">

            {/* HOME */}
            <li className="nav-item">
              <Link className="nav-link" href="/">मुख्यपृष्ठ</Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link className="nav-link" href="/about">ग्रामपंचायतीबद्दल</Link>
            </li>

            {/* DEVELOPMENT DROPDOWN */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                विकास
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/projects">प्रमुख प्रकल्प</Link></li>
                <li><Link className="dropdown-item" href="/schemes">योजना</Link></li>
                <li><Link className="dropdown-item" href="/finance">अर्थसंकल्प</Link></li>
                <li><Link className="dropdown-item" href="/infrastructure">पायाभूत सुविधा</Link></li>
              </ul>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                सेवा
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/services">नागरिक सेवा</Link></li>
                <li><Link className="dropdown-item" href="/grievance">तक्रार निवारण</Link></li>
                <li><Link className="dropdown-item" href="/announcements">घोषणा व परिपत्रके</Link></li>
              </ul>
            </li>

            {/* COMMUNITY DROPDOWN */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                समाज
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/culture">संस्कृती व ओळख</Link></li>
                <li><Link className="dropdown-item" href="/employment">रोजगार व कौशल्य</Link></li>
                <li><Link className="dropdown-item" href="/education">शिक्षण व युवक</Link></li>
                <li><Link className="dropdown-item" href="/environment">पर्यावरण</Link></li>
              </ul>
            </li>

            {/* MEDIA */}
            <li className="nav-item">
              <Link className="nav-link" href="/media">गॅलरी</Link>
            </li>

            {/* DASHBOARD */}
            <li className="nav-item">
              <Link className="nav-link" href="/dashboard">डॅशबोर्ड</Link>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <Link className="nav-link" href="/contact">संपर्क</Link>
            </li>

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
