import Link from "next/link";
import {  Facebook,  Twitter,  Instagram,  Linkedin,  Phone,  Mail,  MapPin,  Globe,
  Clock,
} from "lucide-react"; // Import icons
import Image from "next/image";
const footerLinks = [
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Event Form", href: "#" },
  { name: "Enquiry Form", href: "#" },
  { name: "Services", href: "#" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary  border-t w-full " id="contact">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          <div className="space-y-8">
            <Link href="/" className="flex-shrink-0">
              <Image
                width={100}
                height={60}
                src="/our-company.png"
                alt="Logo"
                className="transition-all duration-300 ease-in-out"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Providing innovative solutions for businesses worldwide. Our
              commitment to excellence drives everything we do.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="grid  gap-4">
              {footerLinks.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="space-y-8">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Forms
            </h3>
            <ul className="grid gap-4">
              {footerLinks.slice(3, 6).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div className="space-y-8">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Company Details
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground flex items-center hover:text-foreground cursor-pointer">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+61291362399" className="hover:text-foreground">
                  (02) 9136 2399
                </a>
              </p>
              <p className="text-sm text-muted-foreground flex items-center hover:text-foreground cursor-pointer">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@applyworldgroup.com.au"
                  className="hover:text-foreground"
                >
                  info@applyworldgroup.com.au
                </a>
              </p>
              <p className="text-sm text-muted-foreground flex items-center hover:text-foreground cursor-pointer">
                <MapPin className="h-5 w-5 mr-2" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Main+St,+Sydney,+NSW+2000,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Level 5/Suite 55, 104 Bathurst St, Sydney NSW 2000 Australia
                </a>
              </p>

              <p className="text-sm text-muted-foreground flex items-center hover:text-foreground cursor-pointer">
                <Globe className="h-5 w-5 mr-2 " />{" "}
                <a
                  href="http://www.applyworldgroup.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  www.applyworldgroup.com.au
                </a>
              </p>
              <p className="text-sm text-muted-foreground flex items-center hover:text-foreground cursor-pointer">
                <Clock className="h-5 w-5 mr-2 " /> Mon - Fri, 9:00 AM - 5:00 PM
                (Australian Time)
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-muted pt-4">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Apply World Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
