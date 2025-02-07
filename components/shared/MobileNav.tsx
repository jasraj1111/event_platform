import React from 'react'
import Image from "next/image";
import { Separator } from "@/components/ui/separator"


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import NavItems from './NavItems';
  

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
            <SheetTitle />
                <Image src = "/assets/icons/menu.svg" 
                alt="menu"
                width ={24}
                height={24}
                className="cursor-pointer">

                </Image>
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
            <Image src="/assets/images/logo.svg" alt='logo'
            height={128} width={38} />
            <Separator className='border border-green-50' />
            <NavItems />
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav