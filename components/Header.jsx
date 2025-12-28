'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Header() {
  const pathname = usePathname();
  const { i18n } = useTranslation();

  // helper
  const isActive = (path) => pathname === path;
  const isGroupActive = (paths) => paths.some(p => pathname.startsWith(p));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">

        {/* LOGO */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img src="/images/logo.png" alt="logo" height="40" className="me-2" />
          ग्रामपंचायत
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">

            {/* HOME */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/") ? "active" : ""}`} href="/">
                मुख्यपृष्ठ
              </Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about") ? "active" : ""}`} href="/about">
                ग्रामपंचायतीबद्दल
              </Link>
            </li>

            {/* DEVELOPMENT */}
            <li className={`nav-item dropdown ${isGroupActive(["/projects", "/schemes", "/finance", "/infrastructure"]) ? "active" : ""}`}>
              <a className={`nav-link dropdown-toggle ${isGroupActive(["/projects", "/schemes", "/finance", "/infrastructure"]) ? "active" : ""}`}
                 href="#" data-bs-toggle="dropdown">
                विकास
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className={`dropdown-item ${isActive("/projects") ? "active" : ""}`} href="/projects">
                    प्रमुख प्रकल्प
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/schemes") ? "active" : ""}`} href="/schemes">
                    योजना
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/finance") ? "active" : ""}`} href="/finance">
                    अर्थसंकल्प
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/infrastructure") ? "active" : ""}`} href="/infrastructure">
                    पायाभूत सुविधा
                  </Link>
                </li>
              </ul>
            </li>

            {/* SERVICES */}
            <li className={`nav-item dropdown ${isGroupActive(["/services", "/grievance", "/announcements"]) ? "active" : ""}`}>
              <a className={`nav-link dropdown-toggle ${isGroupActive(["/services", "/grievance", "/announcements"]) ? "active" : ""}`}
                 href="#" data-bs-toggle="dropdown">
                सेवा
              </a>
              <ul className="dropdown-menu">
                <li><Link className={`dropdown-item ${isActive("/services") ? "active" : ""}`} href="/services">नागरिक सेवा</Link></li>
                <li><Link className={`dropdown-item ${isActive("/grievance") ? "active" : ""}`} href="/grievance">तक्रार निवारण</Link></li>
                <li><Link className={`dropdown-item ${isActive("/announcements") ? "active" : ""}`} href="/announcements">घोषणा व परिपत्रके</Link></li>
              </ul>
            </li>

            {/* COMMUNITY */}
            <li className={`nav-item dropdown ${isGroupActive(["/culture", "/employment", "/education", "/environment"]) ? "active" : ""}`}>
              <a className={`nav-link dropdown-toggle ${isGroupActive(["/culture", "/employment", "/education", "/environment"]) ? "active" : ""}`}
                 href="#" data-bs-toggle="dropdown">
                समाज
              </a>
              <ul className="dropdown-menu">
                <li><Link className={`dropdown-item ${isActive("/culture") ? "active" : ""}`} href="/culture">संस्कृती व ओळख</Link></li>
                <li><Link className={`dropdown-item ${isActive("/employment") ? "active" : ""}`} href="/employment">रोजगार व कौशल्य</Link></li>
                <li><Link className={`dropdown-item ${isActive("/education") ? "active" : ""}`} href="/education">शिक्षण व युवक</Link></li>
                <li><Link className={`dropdown-item ${isActive("/environment") ? "active" : ""}`} href="/environment">पर्यावरण</Link></li>
              </ul>
            </li>

            {/* MEDIA */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/media") ? "active" : ""}`} href="/media">
                गॅलरी
              </Link>
            </li>

            {/* DASHBOARD */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/dashboard") ? "active" : ""}`} href="/dashboard">
                डॅशबोर्ड
              </Link>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/contact") ? "active" : ""}`} href="/contact">
                संपर्क
              </Link>
            </li>

          </ul>
        </div>

        {/* LANGUAGE */}
        <div className="ms-auto">
          <button className="btn btn-sm btn-light me-2" onClick={() => i18n.changeLanguage("mr")}>मराठी</button>
          <button className="btn btn-sm btn-outline-light" onClick={() => i18n.changeLanguage("en")}>English</button>
        </div>

      </div>
    </nav>
  );
}
