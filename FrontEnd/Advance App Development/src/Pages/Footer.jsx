const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
        <div className="mt-2">
          <a href="#" className="text-gray-600 hover:underline mx-2">
            About
          </a>
          <a href="#" className="text-gray-600 hover:underline mx-2">
            Contact
          </a>
          <a href="#" className="text-gray-600 hover:underline mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:underline mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
