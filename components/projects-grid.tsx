'use client'

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Autoplay from 'embla-carousel-autoplay'
import { Badge } from "./ui/badge";
import { CodeXml, LaptopMinimal, LoaderCircle, Server } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";


export default function ProjectsGrid() {
    const t = useTranslations('language')
    const size = 30

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
                <Card className="overflow-hidden">
                    <Image className="w-full aspect-[16/9]" width={300} height={300} src="/portfolio.png" alt="" />
                    <CardHeader>
                        <CardTitle>{t('card-title-1')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {t('card-content-1')}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-6 items-start">
                        <div className="flex flex-row gap-2 flex-wrap">
                            <Badge variant="cc">Typescript</Badge>
                            <Badge variant="cc">Next.js</Badge>
                            <Badge variant="cc">Tailwind</Badge>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <Link href="https://github.com/Clarozzz/portfolio" target="_blank">
                                    <Button variant="secondary" aria-label="github repository"><FaGithub className="mr-1" size={20} /> {t('code')}</Button>
                                </Link>
                                <Link href="#">
                                    <Button aria-label="internal link"><FiExternalLink className="mr-1" size={19} /> Demo</Button>
                                </Link>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-span-1">
                <Card className="overflow-hidden">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3500,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <Image className="w-full aspect-[16/9]" width={300} height={300} src="/SaimCis-5.png" alt="" />
                            </CarouselItem>
                            <CarouselItem>
                                <Image className="w-full aspect-[16/9]" width={300} height={300} src="/SaimCis-8.png" alt="" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 z-10 bg-black/30 hover:bg-black/60 border-none" />
                        <CarouselNext className="absolute right-2 top-1/2 z-10 bg-black/30 hover:bg-black/60 border-none" />
                    </Carousel>
                    <CardHeader>
                        <CardTitle>{t('card-title-2')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {t('card-content-2')}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-6 items-start">
                        <div className="flex flex-row gap-2 flex-wrap">
                            <Badge variant="cc2">Typescript</Badge>
                            <Badge variant="cc2">Next.js</Badge>
                            <Badge variant="cc2">Tailwind</Badge>
                            <Badge variant="cc2">Supabase</Badge>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <Link href="https://github.com/iamyare/Saim-Cis-Nextjs" target="_blank">
                                    <Button variant="secondary" aria-label="github repository"><FaGithub className="mr-1" size={20} /> {t('code')}</Button>
                                </Link>
                                <Link href="https://saimcis.vercel.app/" target="_blank">
                                    <Button aria-label="internal link"><FiExternalLink className="mr-1" size={19} /> Demo</Button>
                                </Link>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-span-1">
                <Card className="overflow-hidden">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3500,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {[1, 2, 3].map((num) => (
                                <CarouselItem key={num}>
                                    <div className="aspect-[16/9] w-full">
                                        <Image
                                            className="w-full h-full object-cover"
                                            width={300}
                                            height={300}
                                            src={`/blog${num}.png`}
                                            alt={`Imagen ${num}`}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 z-10 bg-black/30 hover:bg-black/60 border-none" />
                        <CarouselNext className="absolute right-2 top-1/2 z-10 bg-black/30 hover:bg-black/60 border-none" />
                    </Carousel>
                    <CardHeader>
                        <CardTitle>{t('card-title-3')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {t('card-content-3')}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-6 items-start">
                        <div className="flex flex-row gap-2 flex-wrap">
                            <Badge variant="cc2">Astro</Badge>
                            <Badge variant="cc2">Typescript</Badge>
                            <Badge variant="cc2">Tailwind</Badge>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <Link href="https://github.com/Clarozzz/blog" target="_blank">
                                    <Button variant="secondary" aria-label="github repository"><FaGithub className="mr-1" size={20} /> {t('code')}</Button>
                                </Link>
                                <Link href="https://blog-clarozzz.vercel.app/" target="_blank">
                                    <Button aria-label="internal link"><FiExternalLink className="mr-1" size={19} /> Demo</Button>
                                </Link>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-span-1">
                <Card className="overflow-hidden">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3500,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {[1, 2, 3].map((num) => (
                                <CarouselItem key={num}>
                                    <div className="aspect-[16/9] w-full">
                                        <Image
                                            className="w-full h-full object-cover"
                                            width={300}
                                            height={300}
                                            src={`/junker${num}.png`}
                                            alt={`Imagen ${num}`}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 z-10 bg-black/30 hover:bg-black/60 border-none" />
                        <CarouselNext className="absolute right-2 top-1/2 z-10 bg-black/30 hover:bg-black/60 border-none" />
                    </Carousel>

                    <CardHeader>
                        <CardTitle>{t('card-title-4')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {t('card-content-4')}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-6 items-start">
                        <div className="flex flex-row gap-2 flex-wrap">
                            <Badge variant="cc">Typescript</Badge>
                            <Badge variant="cc">Next.js</Badge>
                            <Badge variant="cc">Tailwind</Badge>
                            <Badge variant="cc">FastAPI</Badge>
                            <Badge variant="cc">Supabase</Badge>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="secondary" aria-label="github repository"><FaGithub className="mr-1" size={20} /> {t('code')}</Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <Link className="flex" href="https://github.com/Clarozzz/junker-frontend" target="_blank">
                                                <LaptopMinimal className="mr-2" /> Frontend
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link className="flex" href="https://github.com/Franklin-Amador/Junker-Backend" target="_blank">
                                                <Server className="mr-2" /> Backend
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>

                                </DropdownMenu>
                                <Link href="https://junker.vercel.app/" target="_blank">
                                    <Button aria-label="internal link"><FiExternalLink className="mr-1" size={19} /> Demo</Button>
                                </Link>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-span-1 lg:col-span-2">
                <Card className="overflow-hidden">
                    <div className="flex items-center justify-center aspect-[16/9] bg-black text-white">
                        <CodeXml size={100} />
                    </div>

                    <div className="flex flex-col flex-grow justify-between">
                        <div>
                            <CardHeader>
                                <CardTitle>{t('coming')}</CardTitle>
                            </CardHeader>
                            <CardContent>{t('coming-text')}</CardContent>
                        </div>
                        <CardFooter className="flex flex-col gap-6 items-start mt-auto">
                            <div className="flex flex-row gap-2 flex-wrap">
                                <Badge variant="outline">{t('coming')}</Badge>
                            </div>
                        </CardFooter>
                    </div>
                </Card>
            </div>
        </div>
    )
}
