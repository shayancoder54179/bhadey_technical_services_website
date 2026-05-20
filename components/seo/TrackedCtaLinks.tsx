"use client";

import Link from "next/link";
import {
  trackGetQuoteClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/lib/tracking";

interface GetQuoteLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  source?: string;
  [key: string]: unknown;
}

export function GetQuoteLink({ href, children, className, source, ...props }: GetQuoteLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("#");
  if (isExternal) {
    return (
      <a href={href} onClick={() => trackGetQuoteClick(source)} className={className} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={() => trackGetQuoteClick(source)} className={className} {...props}>
      {children}
    </Link>
  );
}

interface PhoneLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function PhoneLink({ href, children, className, ...props }: PhoneLinkProps) {
  return (
    <a href={href} onClick={() => trackPhoneClick()} className={className} {...props}>
      {children}
    </a>
  );
}

interface WhatsAppLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  source?: string;
  [key: string]: unknown;
}

export function WhatsAppLink({ href, children, className, source, ...props }: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      onClick={() => trackWhatsAppClick(source)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
