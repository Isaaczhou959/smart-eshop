import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBagIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="NovaTrend"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold text-white">NovaTrend</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your One-Stop Online Shop for Trendy, Practical, and Affordable
              Finds. Discover the latest products with unbeatable quality and
              service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/success"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Order Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-300">
                <p>📧 support@novatrend.com</p>
                <p>📞 +61 412 345 678</p>
                <p>📍 Australia </p>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <span className="text-sm font-bold">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <span className="text-sm font-bold">📷</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <span className="text-sm font-bold">▶</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and exclusive
              deals.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NovaTrend by Isaac Zhou. All
            rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookies Policy
            </a>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Secured by</span>
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded px-2 py-1">
                <span className="text-xs font-bold text-blue-600">STRIPE</span>
              </div>
              <div className="text-gray-400 text-xs">🔒 SSL Secured</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
