"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronDown, 
  Search, 
  X, 
  Menu, 
  ArrowUpRight,
  Phone,
  Mail,
  TrendingUp,
  Cpu,
  Video
} from "lucide-react";
import { COMPANY } from "@/data/companyData";

export default function Navbar() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const serviceCategories = [
    {
      category: "Performance & Search",
      icon: TrendingUp,
      items: [
        { name: "Technical SEO & Audits", desc: "Core Web Vitals, schema markup & crawl architecture", path: "/services#seo", num: "01" },
        { name: "PPC & Performance Ads", desc: "Google & Meta campaigns managed to Cost Per Lead", path: "/services#ppc-performance", num: "02" },
        { name: "AI SEO & GEO Citations", desc: "Authoritative entity graph for ChatGPT & Perplexity", path: "/services#ai-seo", num: "03" },
        { name: "Lead Generation Funnels", desc: "High-intent landing pages with instant CRM alerts", path: "/services#lead-generation", num: "07" },
      ]
    },
    {
      category: "Digital Engineering",
      icon: Cpu,
      items: [
        { name: "Modern Next.js Development", desc: "Sub-second load times, clean TypeScript code", path: "/services#website-development", num: "06" },
        { name: "MERN Stack Web Applications", desc: "Full-stack apps, Node & MongoDB/Postgres", path: "/services#website-development", num: "08" },
        { name: "Business Dashboards", desc: "Internal management tools & ERP operations portals", path: "/services#dashboards", num: "09" },
        { name: "AI Workflows & Automation", desc: "Automated webhook pipelines & lead routing", path: "/services#ai-workflows", num: "10" },
        { name: "WordPress & Shopify Stores", desc: "High-converting online e-commerce stores", path: "/services#ecommerce", num: "11" },
      ]
    },
    {
      category: "Creative & Media",
      icon: Video,
      items: [
        { name: "Video Marketing & Reels", desc: "Short-form vertical video for Instagram & YouTube", path: "/services#video-marketing", num: "05" },
        { name: "Digital Marketing Strategy", desc: "Full-funnel 90-day content, email & ad blueprints", path: "/services#digital-marketing", num: "04" },
        { name: "Social Media Handling", desc: "Daily community moderation & post scheduling", path: "/services#social-media", num: "12" },
        { name: "Pamphlet & Graphic Design", desc: "Physical exhibition flyers, brochures & prints", path: "/services#pamphlets-design", num: "13" }
      ]
    }
  ];

  const allServices = serviceCategories.flatMap(c => c.items);
  const searchResults = searchQuery.trim() === ""
    ? allServices.slice(0, 5)
    : allServices.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setSearchFocused(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const handleSelectService = (path: string) => {
    setSearchQuery("");
    setSearchFocused(false);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0e0502]/95 backdrop-blur-md border-b border-[#240d05] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo & Navigation */}
          <div className="flex items-center gap-8 shrink-0">
            {/* Clickable Logo linking to homepage */}
            <Link 
              href="/" 
              className="flex items-center py-1 hover:opacity-90 transition-opacity" 
              title="Octane - Return to Homepage"
            >
              <img
                src="/logo_transparent.png"
                alt="Octane Logo"
                style={{
                  height: "36px",
                  maxHeight: "36px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#c4b3a5]">
              
              {/* Solutions / Services Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("services")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeDropdown === "services" ? "bg-[#1f0c06] text-[#d0b38a] font-semibold" : "hover:bg-[#1a0a05] hover:text-white"
                  }`}
                  aria-expanded={activeDropdown === "services"}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[#d0b38a]" : "text-neutral-400"}`} />
                </button>

                {/* Dropdown Panel */}
                {activeDropdown === "services" && (
                  <div 
                    className="absolute top-full left-0 w-[840px] pt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[#150703] rounded-xl shadow-2xl border border-[#2e1208] p-6 grid grid-cols-3 gap-6">
                      {serviceCategories.map((col, idx) => {
                        const IconComponent = col.icon;
                        return (
                          <div key={idx} className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold text-[#d0b38a] uppercase tracking-wider border-b border-[#240d05] pb-2">
                              <IconComponent className="w-4 h-4 text-[#d0b38a]" />
                              <span>{col.category}</span>
                            </div>
                            <div className="space-y-1">
                              {col.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block p-2 rounded-lg hover:bg-[#200c06] transition-colors group"
                                >
                                  <div className="text-xs font-semibold text-neutral-200 group-hover:text-[#d0b38a] flex items-center justify-between">
                                    <span>{item.name}</span>
                                    <span className="font-mono text-[10px] text-neutral-500 group-hover:text-[#d0b38a]">{item.num}</span>
                                  </div>
                                  <div className="text-[11px] text-[#9c8b7f] line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}

                      {/* Bottom Quick Bar */}
                      <div className="col-span-3 pt-3 border-t border-[#240d05] flex items-center justify-between bg-[#0e0502] -mx-6 -mb-6 p-4 rounded-b-xl">
                        <span className="text-xs text-[#b8a89d] font-medium">Looking for customized full-funnel enterprise sprints?</span>
                        <Link
                          href="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs font-semibold text-[#d0b38a] hover:text-white flex items-center gap-1.5"
                        >
                          <span>Explore all capabilities</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enterprise / Case Studies Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("for-businesses")}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("for-businesses")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    activeDropdown === "for-businesses" ? "bg-[#1f0c06] text-[#d0b38a] font-semibold" : "hover:bg-[#1a0a05] hover:text-white"
                  }`}
                  aria-expanded={activeDropdown === "for-businesses"}
                >
                  <span>Enterprise</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "for-businesses" ? "rotate-180 text-[#d0b38a]" : "text-neutral-400"}`} />
                </button>

                {activeDropdown === "for-businesses" && (
                  <div 
                    className="absolute top-full left-0 w-72 pt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[#150703] rounded-xl shadow-2xl border border-[#2e1208] p-2 space-y-1">
                      <Link
                        href="/portfolio"
                        onClick={() => setActiveDropdown(null)}
                        className="block p-3 rounded-lg hover:bg-[#200c06] transition-colors"
                      >
                        <div className="text-xs font-semibold text-neutral-200 hover:text-[#d0b38a]">Case Studies &amp; Results</div>
                        <div className="text-[11px] text-[#9c8b7f] mt-0.5">Real client pipeline growth &amp; CPL benchmarks</div>
                      </Link>
                      <Link
                        href="/pricing"
                        onClick={() => setActiveDropdown(null)}
                        className="block p-3 rounded-lg hover:bg-[#200c06] transition-colors"
                      >
                        <div className="text-xs font-semibold text-neutral-200 hover:text-[#d0b38a]">Retainer Sprints &amp; Plans</div>
                        <div className="text-[11px] text-[#9c8b7f] mt-0.5">Transparent month-to-month deliverables</div>
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setActiveDropdown(null)}
                        className="block p-3 rounded-lg hover:bg-[#200c06] transition-colors"
                      >
                        <div className="text-xs font-semibold text-neutral-200 hover:text-[#d0b38a]">Operating Model</div>
                        <div className="text-[11px] text-[#9c8b7f] mt-0.5">Direct senior access without account middlemen</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Link: Pricing */}
              <Link
                href="/pricing"
                className="px-3 py-2 rounded-lg hover:bg-[#1a0a05] hover:text-white transition-colors"
              >
                Pricing
              </Link>

              {/* Direct Link: Field Notes / Resources */}
              <Link
                href="/blog"
                className="px-3 py-2 rounded-lg hover:bg-[#1a0a05] hover:text-white transition-colors"
              >
                Resources
              </Link>

              {/* Direct Link: About */}
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg hover:bg-[#1a0a05] hover:text-white transition-colors"
              >
                About
              </Link>

            </nav>
          </div>

          {/* Right Section: Search & Enterprise Primary CTA */}
          <div className="flex items-center gap-3">
            
            {/* Search Bar */}
            <div ref={searchRef} className="relative hidden md:block w-48 lg:w-64">
              <div className={`relative flex items-center rounded-lg border transition-all ${
                searchFocused ? "border-[#d0b38a] bg-[#150703] ring-1 ring-[#d0b38a]/30" : "border-[#2e1208] hover:border-[#4a1f0e] bg-[#1a0a05]"
              }`}>
                <input
                  type="text"
                  placeholder="Search solutions..."
                  value={searchQuery}
                  onFocus={() => setSearchFocused(true)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchResults.length > 0) {
                      handleSelectService(searchResults[0].path);
                    }
                  }}
                  className="w-full pl-3 pr-8 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none rounded-lg bg-transparent"
                />
                <div className="absolute right-2.5 text-neutral-500 pointer-events-none">
                  <Search className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Search Dropdown */}
              {searchFocused && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#150703] rounded-xl shadow-2xl border border-[#2e1208] p-2 z-50 max-h-72 overflow-y-auto">
                  <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#d0b38a]">
                    Matching Solutions ({searchResults.length})
                  </div>
                  {searchResults.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleSelectService(item.path)}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-[#200c06] text-left transition-colors group cursor-pointer"
                    >
                      <div>
                        <div className="text-xs font-semibold text-neutral-200 group-hover:text-[#d0b38a]">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[#9c8b7f]">{item.desc}</div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#d0b38a]" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <Link
              href="/contact"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[#d0b38a] hover:bg-[#dec5a2] text-[#0e0502] shadow-sm transition-all inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Post a project</span>
              <ArrowUpRight className="w-4 h-4 hidden sm:inline" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white lg:hidden rounded-lg hover:bg-[#1f0c06] transition-colors"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Responsive & Full Touch Support) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#240d05] bg-[#0e0502] px-4 py-4 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          
          {/* Quick Contact Header */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#1a0a05] border border-[#2e1208] text-xs">
            <a
              href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`}
              className="text-neutral-200 font-semibold flex items-center gap-1.5 hover:text-[#d0b38a]"
            >
              <Phone className="w-3.5 h-3.5 text-[#94ab76]" />
              <span>Call Us</span>
            </a>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="text-neutral-200 font-semibold flex items-center gap-1.5 hover:text-[#d0b38a]"
            >
              <Mail className="w-3.5 h-3.5 text-[#d0b38a]" />
              <span>Email</span>
            </a>
          </div>

          {/* Solutions Categories */}
          <div className="space-y-4 text-xs">
            {serviceCategories.map((cat, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="font-bold text-[#d0b38a] uppercase tracking-wider text-[10px] border-b border-[#240d05] pb-1">
                  {cat.category}
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {cat.items.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleSelectService(item.path)}
                      className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-[#1a0a05] flex items-center justify-between"
                    >
                      <span className="text-neutral-200 font-medium">{item.name}</span>
                      <span className="font-mono text-[10px] text-neutral-400">{item.num}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Direct Links */}
            <div className="pt-3 border-t border-[#240d05] space-y-2">
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-neutral-200 font-semibold hover:text-[#d0b38a]"
              >
                Case Studies &amp; Portfolio
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-neutral-200 font-semibold hover:text-[#d0b38a]"
              >
                Retainer Sprints &amp; Pricing
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-neutral-200 font-semibold hover:text-[#d0b38a]"
              >
                Field Notes &amp; Guides
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-neutral-200 font-semibold hover:text-[#d0b38a]"
              >
                About Octane
              </Link>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-2 border-t border-[#240d05]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 rounded-xl bg-[#d0b38a] text-[#0e0502] text-xs font-bold text-center shadow-sm"
            >
              Post a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
