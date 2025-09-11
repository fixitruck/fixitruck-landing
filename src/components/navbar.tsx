"use client";

import React from "react";
import Link from "next/link";
import { RepairServiceIcon } from "@/components/icons/repair-service-icon";
import { FleetIcon } from "@/components/icons/fleet-icon";
import { InternalIcon } from "@/components/icons/internal-icon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 lg:hidden">
            <span className="text-lg font-bold text-gray-900">FixiTruck</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <div className="flex space-x-8">
              <Link
                href="https://app.fixitruck.com/"
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-200 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm group"
              >
                <FleetIcon width={20} height={20} className="inline-block group-hover:scale-110 transition-transform duration-200" />
                Fleet Customers
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
              </Link>
              <Link
                href="https://app.fixitruck.com/"
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-200 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm group"
              >
                <RepairServiceIcon width={20} height={20} className="inline-block group-hover:scale-110 transition-transform duration-200" />
                Repair Shops
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
              </Link>
              <Link
                href="https://app.fixitruck.com/admin"
                className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-200 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm group"
              >
                <InternalIcon width={20} height={20} className="inline-block group-hover:scale-110 transition-transform duration-200" />
                BackOffice
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="https://app.fixitruck.com/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FleetIcon width={20} height={20} />
                Fleet Customers
              </Link>
              <Link
                href="https://app.fixitruck.com/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <RepairServiceIcon width={20} height={20} />
                Repair Service Providers
              </Link>
              <Link
                href="https://app.fixitruck.com/admin"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <InternalIcon width={20} height={20} />
                Internal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
