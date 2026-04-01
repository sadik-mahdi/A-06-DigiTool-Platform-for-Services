import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="flex-row md:flex items-center justify-centersm:footer-horizontal bg-[#101727] text-neutral-content p-20 w-full border">
      <div>
        <p>
          <span className='font-bold text-4xl pb-2'>Digitools</span>
          <br />
          <span className='text-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</span>
        </p>
      </div>

      <div className="footer sm:footer-horizontal bg-[#101727]     text-neutral-content p-10">
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

      <div>
        <h6 className="footer-title md:flex">Social Links</h6>
        <div className="grid grid-flow-col gap-4">
          <a> <AiFillInstagram /> </a>
          <a> <FaFacebookSquare /> </a>
          <a> <FaXTwitter /> </a>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;