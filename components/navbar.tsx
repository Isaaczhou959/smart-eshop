"use client";

import { useCartStore } from "@/store/cart-store";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const navLinks = [
    {
      href: "/",
      label: "Home",
      icon: HomeIcon,
    },
    {
      href: "/products",
      label: "Products",
      icon: ShoppingBagIcon,
    },
    {
      href: "/checkout",
      label: "Checkout",
      icon: ShoppingCartIcon,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="MyEstore"
              width={36}
              height={36}
              className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <p className="hidden md:block text-2xl font-bold art-text bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            NovaTrend
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${
                    active
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                <Icon
                  className={`h-4 w-4 ${
                    active ? "text-blue-600" : "text-gray-500"
                  }`}
                />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
        {/* Right Side - Cart & Mobile Menu */}
        <div className="flex items-center space-x-3">
          {/* Shopping Cart */}
          <Link
            href="/checkout"
            className={`
              relative p-2 rounded-lg transition-all duration-200
              ${
                isActive("/checkout")
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }
            `}
          >
            <ShoppingCartIcon className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <div className="relative w-5 h-5">
              <Bars3Icon
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <XMarkIcon
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`
        md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        flex items-center space-x-3 px-3 py-3 rounded-lg font-medium text-sm transition-all duration-200
                        ${
                          active
                            ? "bg-blue-50 text-blue-600 shadow-sm"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }
                      `}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          active ? "text-blue-600" : "text-gray-500"
                        }`}
                      />
                      <span>{link.label}</span>
                      {active && (
                        <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
