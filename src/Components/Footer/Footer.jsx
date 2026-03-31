import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center sm:footer-horizontal bg-neutral text-neutral-content p-10 w-full border-b">
      <aside>
        <p>
          <span className='font-bold text-4xl pb-2'>Digitools</span>
          <br />
          <span className='text-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</span>
        </p>
      </aside>

      <div className="footer sm:footer-horizontal bg-neutral     text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </div>

      <nav>
        <h6 className="footer-title">Social Links</h6>
        <div className="grid grid-flow-col gap-4">
          <a> <AiFillInstagram /> </a>
          <a> <FaFacebookSquare /> </a>
          <a> <FaXTwitter /> </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;