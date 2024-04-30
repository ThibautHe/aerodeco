"use client"
import { eventNames } from "process";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type anchorProps = {
  name: string;
};

export default function AnchorLink({ name }: anchorProps) {
  const pathname = usePathname();


  return pathname === '/' ? <Link href={`/#${name}`}></Link> : <Link href={`/`}></Link>
}
