"use client";
import { useEffect, useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import "./Nav.css";

const Nav = () => {
  const router = useTransitionRouter();
  const navRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuOverlayBarRef = useRef(null);
  const menuOpenBtnRef = useRef(null);
  const menuCloseBtnRef = useRef(null);

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.4,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleCloseMenu = () => {
    if (
      !menuOverlayBarRef.current ||
      !menuCloseBtnRef.current ||
      !navRef.current ||
      !menuOpenBtnRef.current ||
      !menuOverlayRef.current
    ) {
      return;
    }

    gsap.to(
      [
        menuOverlayBarRef.current.querySelector("a"),
        menuCloseBtnRef.current.querySelector("p"),
      ],
      {
        y: -20,
        duration: 1,
        stagger: 0.1,
        ease: CustomEase.create("", ".76,0,.2,1"),
        onComplete: () => {
          gsap.set(menuOverlayBarRef.current.querySelector("a"), { y: 20 });
          gsap.set(menuCloseBtnRef.current.querySelector("p"), { y: 20 });
        },
      }
    );

    gsap.to(".menu-link a", {
      y: "-100%",
      duration: 0.75,
      stagger: 0.05,
      ease: "power4.in",
      onComplete: () => {
        gsap.set(".menu-link a", { y: "100%" });
      },
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      delay: 0.5,
      ease: CustomEase.create("", ".76,0,.2,1"),
      onComplete: () => {
        gsap.set(navRef.current, { pointerEvents: "all" });
        gsap.set(menuOverlayRef.current, {
          pointerEvents: "none",
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
      },
    });

    gsap.to(
      [
        navRef.current.querySelector("a"),
        menuOpenBtnRef.current.querySelector("p"),
      ],
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: CustomEase.create("", ".76,0,.2,1"),
      }
    );
  };

  const handleOpenMenu = () => {
    if (
      !navRef.current ||
      !menuOpenBtnRef.current ||
      !menuOverlayRef.current ||
      !menuOverlayBarRef.current ||
      !menuCloseBtnRef.current
    ) {
      return;
    }

    gsap.to(
      [
        navRef.current.querySelector("a"),
        menuOpenBtnRef.current.querySelector("p"),
      ],
      {
        y: -20,
        duration: 1,
        stagger: 0.1,
        ease: CustomEase.create("", ".76,0,.2,1"),
        onComplete: () => {
          gsap.set(navRef.current.querySelector("a"), { y: 20 });
          gsap.set(menuOpenBtnRef.current.querySelector("p"), { y: 20 });
        },
      }
    );

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: CustomEase.create("", ".76,0,.2,1"),
      onComplete: () => {
        gsap.set(navRef.current, { pointerEvents: "none" });
        gsap.set(menuOverlayRef.current, { pointerEvents: "all" });
      },
    });

    gsap.to(".menu-link a", {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.to(
      [
        menuOverlayBarRef.current.querySelector("a"),
        menuCloseBtnRef.current.querySelector("p"),
      ],
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: CustomEase.create("", ".76,0,.2,1"),
      }
    );
  };

  useEffect(() => {
    gsap.registerPlugin(CustomEase);

    if (menuOpenBtnRef.current) {
      menuOpenBtnRef.current.addEventListener("click", handleOpenMenu);
    }

    if (menuCloseBtnRef.current) {
      menuCloseBtnRef.current.addEventListener("click", handleCloseMenu);
    }

    router.events?.on("routeChangeStart", handleCloseMenu);

    return () => {
      if (menuOpenBtnRef.current) {
        menuOpenBtnRef.current.removeEventListener("click", handleOpenMenu);
      }

      if (menuCloseBtnRef.current) {
        menuCloseBtnRef.current.removeEventListener("click", handleCloseMenu);
      }

      router.events?.off("routeChangeStart", handleCloseMenu);
    };
  }, [router]);

  const handleNavigation = (e, path) => {
    e.preventDefault();

    handleCloseMenu();

    setTimeout(() => {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }, 200);
  };

  return (
    <>
      <nav ref={navRef}>
        <div className="logo">
          <a href="/" onClick={(e) => handleNavigation(e, "/")}>
            ISOChrome
          </a>
        </div>
        <div className="menu-toggle-open" ref={menuOpenBtnRef}>
          <p>Menu</p>
        </div>
      </nav>

      <div className="menu-overlay" ref={menuOverlayRef}>
        <div className="menu-overlay-bar" ref={menuOverlayBarRef}>
          <div className="logo">
            <a href="/">ISOChrome</a>
          </div>
          <div className="menu-toggle-close" ref={menuCloseBtnRef}>
            <p>Close</p>
          </div>
        </div>

        <div className="menu-links">
          <div className="menu-link">
            <a href="/" onClick={(e) => handleNavigation(e, "/")}>
              <h1>Index</h1>
            </a>
          </div>
          <div className="menu-link">
            <a href="/about" onClick={(e) => handleNavigation(e, "/about")}>
              <h1>About Us</h1>
            </a>
          </div>
          <div className="menu-link">
            <a href="/work" onClick={(e) => handleNavigation(e, "/work")}>
              <h1>Work</h1>
            </a>
          </div>
          <div className="menu-link">
            <a href="/contact" onClick={(e) => handleNavigation(e, "/contact")}>
              <h1>Contact</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
