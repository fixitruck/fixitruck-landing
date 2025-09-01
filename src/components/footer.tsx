export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="fixed bottom-0 w-full bg-white/80 backdrop-blur-sm z-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-10 sm:h-12">
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            © {currentYear} FixiTruck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}