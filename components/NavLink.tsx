"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className, onClick }: NavLinkCompatProps) => {
  return (
    <Link href={href} className={cn("", className)} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;
