import Link from "next/link";
import { RepairServiceIcon } from "@/components/icons/repair-service-icon";
import { FleetIcon } from "@/components/icons/fleet-icon";
import { InternalIcon } from "@/components/icons/internal-icon";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-8">
            <Link
              href="https://fleet.fixitruck.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              <FleetIcon width={20} height={20} className="inline-block" />
              Fleet Customers
            </Link>
            <Link
              href="https://repair.fixitruck.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              <RepairServiceIcon width={20} height={20} className="inline-block" />
              Repair Service Providers
            </Link>
            <Link
              href="https://admin.fixitruck.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              <InternalIcon width={20} height={20} className="inline-block" />
              Internal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}