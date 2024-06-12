'use client'

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useTranslations } from "next-intl";
import { SiTypescript } from "react-icons/si";
import { FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";
import Autoplay from 'embla-carousel-autoplay'


export default function ProjectsGrid() {
    const t = useTranslations('language')
    const size = 30

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
                <Card className="overflow-hidden">
                    <Image className="w-full" width={300} height={300} src="/portfolio.png" alt="" />
                    <CardHeader>
                        <CardTitle>{t('card-title-1')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {t('card-content-1')}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <div className="flex flex-row gap-2">
                            <SiTypescript size={size} />
                            <FaReact size={size} />
                            <RiNextjsFill size={size} />
                            <RiTailwindCssFill size={size} />
                        </div>
                        <Link href="#">
                            <Button aria-label="internal link"><FaExternalLinkAlt /></Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
            <div className="col-span-1">
                <Card className="overflow-hidden">
                    <Carousel
                        opts={{
                            loop: true
                        }}
                        plugins={[
                            Autoplay({
                              delay: 2000,
                            }),
                          ]}
                        className="w-full max-w-xs"
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <Image className="w-full" width={300} height={300} src="/SaimCis-5.png" alt="" />
                            </CarouselItem>
                            <CarouselItem>
                                <Image className="w-full" width={300} height={300} src="/SaimCis-8.png" alt="" />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <CardHeader>
                        <CardTitle>{t('card-title-2')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {t('card-content-2')}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <div className="flex flex-row gap-2">
                            <SiTypescript size={size} />
                            <FaReact size={size} />
                            <RiNextjsFill size={size} />
                            <RiTailwindCssFill size={size} />
                        </div>
                        <Link href="https://saimcis.vercel.app/" target="_blank">
                            <Button aria-label="external link"><FaExternalLinkAlt /></Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
