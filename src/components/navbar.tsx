import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-8">
            <Link
              href="https://fleet.fixitruck.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Fleet Customers
            </Link>
            <Link
              href="https://repair.fixitruck.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Repair Service Providers
            </Link>
            <Link
              href="https://admin.fixitruck.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Internal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}