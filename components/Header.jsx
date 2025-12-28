'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Header() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

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
                {t("menu.home")}
              </Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about") ? "active" : ""}`} href="/about">
                {t("menu.about")}
              </Link>
            </li>

            {/* DEVELOPMENT */}
            <li className={`nav-item dropdown ${isGroupActive(["/projects", "/schemes", "/finance", "/infrastructure"]) ? "active" : ""}`}>
              <a
                className={`nav-link dropdown-toggle ${isGroupActive(["/projects", "/schemes", "/finance", "/infrastructure"]) ? "active" : ""}`}
                href="#"
                data-bs-toggle="dropdown"
              >
                {t("menu.development")}
              </a>
              <ul className="dropdown-menu">
                <li><Link className={`dropdown-item ${isActive("/projects") ? "active" : ""}`} href="/projects">{t("menu.projects")}</Link></li>
                <li><Link className={`dropdown-item ${isActive("/schemes") ? "active" : ""}`} href="/schemes">{t("menu.schemes")}</Link></li>
                <li><Link className={`dropdown-item ${isActive("/finance") ? "active" : ""}`} href="/finance">{t("menu.finance")}</Link></li>
                <li><Link className={`dropdown-item ${isActive("/infrastructure") ? "active" : ""}`} href="/infrastructure">{t("menu.infrastructure")}</Link></li>
              </ul>
            </li>

            {/* SERVICES */}
            <li className={`nav-item dropdown ${isGroupActive(["/services", "/grievance", "/announcements"]) ? "active" : ""}`}>
              <a
                className={`nav-link dropdown-toggle ${isGroupActive(["/services", "/grievance", "/announcements"]) ? "active" : ""}`}
                href="#"
                data-bs-toggle="dropdown"
              >
                {t("menu.services")}
              </a>
              <ul className="dropdown-menu">
                <li><Link className={`dropdown-item ${isActive("/services") ? "active" : ""}`} href="/services">{t("menu.citizen_services")}</Link></li>
                <li><Link className={`dropdown-item ${isActive("/grievance") ? "active" : ""}`} href="/grievance">{t("menu.grievance")}</Link></li>
                <li><Link className={`dropdown-item ${isActive("/announcements") ? "active" : ""}`} href="/announcements">{t("menu.announcements")}</Link></li>
              </ul>
            </li>

            {/* COMMUNITY */}
            <li className={`nav-item dropdown ${isGroupActive(["/culture", "/employment", "/education", "/environment"]) ? "active" : ""}`}>
              <a
                className={`nav-link dropdown-toggle ${isGroupActive(["/culture", "/employment", "/education", "/environment"]) ? "active" : ""}`}
                href="#"
                data-bs-toggle="dropdown"
              >
                {t("menu.community")}
              </a>
              <ul className="dropdown-menu">
                <li><Link className={`dropdown-item ${isActive("/culture") ? "active" : ""}`} href="/culture">{t("menu.culture")}</Link></li>
                <li><Link className={`dropdown-item ${isActive("/employment") ? "active" : ""}`} href="/employment">{t("menu.employment")}</Link></li>
                <li><Link className={`dropdown-item ${isActive("/education") ? "active" : ""}`} href="/education">{t("menu.education")}</Link></li>
                <li><Link className={`dropdown-item ${isActive("/environment") ? "active" : ""}`} href="/environment">{t("menu.environment")}</Link></li>
              </ul>
            </li>

            {/* MEDIA */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/media") ? "active" : ""}`} href="/media">
                {t("menu.media")}
              </Link>
            </li>

            {/* DASHBOARD */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/dashboard") ? "active" : ""}`} href="/dashboard">
                {t("menu.dashboard")}
              </Link>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/contact") ? "active" : ""}`} href="/contact">
                {t("menu.contact")}
              </Link>
            </li>

          </ul>
        </div>

        {/* LANGUAGE SWITCH */}
        <div className="ms-auto">
          <button className="btn btn-sm btn-light me-2" onClick={() => i18n.changeLanguage("mr")}>मराठी</button>
          <button className="btn btn-sm btn-outline-light" onClick={() => i18n.changeLanguage("en")}>English</button>
        </div>

      </div>
    </nav>
  );
}
