import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
            We&#39;re passionate about providing high-quality, stylish shoes for every occasion.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/shipping" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping Information</Link></li>
              <li><Link href="/returns" className="text-sm text-gray-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">Email: support@shoeswebsite.com</p>
            <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Shoes Website. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            All trademarks and registered trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

