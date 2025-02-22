"use client";
import { useTransitionRouter } from "next-view-transitions";

import "./Nav.css";

const Nav = () => {
  const router = useTransitionRouter();
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

  return (
    <div className="nav">
      <div className="logo">
        <div className="link">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/", {
                onTransitionReady: slideInOut,
              });
            }}
            href="/"
          >
            ISOCHROME
          </a>
        </div>
      </div>
      <div className="links">
        <div className="link">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/work", {
                onTransitionReady: slideInOut,
              });
            }}
            href="/work"
          >
            Work
          </a>
        </div>
        <div className="link">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/about", {
                onTransitionReady: slideInOut,
              });
            }}
            href="/about"
          >
            About Us
          </a>
        </div>
        <div className="link">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact", {
                onTransitionReady: slideInOut,
              });
            }}
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
