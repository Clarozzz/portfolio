'use client'

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useTranslations } from "next-intl";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";
import Autoplay from 'embla-carousel-autoplay'
import { Badge } from "./ui/badge";


export default function ProjectsGrid() {
    const t = useTranslations('language')
    const size = 30

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
                <Card className="overflow-hidden">
                    <Image className="w-full" width={300} height={300} src="/portfolio.png" alt="" />
                    <CardHeader>
                        <CardTitle>{t('card-title-1')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {t('card-content-1')}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-6">
                        <div className="flex flex-row gap-2 flex-wrap">
                            <Badge variant="cc">React</Badge>
                            <Badge variant="cc">Typescript</Badge>
                            <Badge variant="cc">Node.js</Badge>
                            <Badge variant="cc">Tailwind</Badge>
                        </div>
                        <div className="flex gap-6">
                            <Link href="https://github.com/Clarozzz/portfolio" target="_blank">
                                <Button variant="default" aria-label="github repository"><FaGithub size={20} /></Button>
                            </Link>
                            <Link href="#">
                                <Button aria-label="internal link"><FaExternalLinkAlt /></Button>
                            </Link>
                        </div>
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
                        className="w-full"
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
                    <CardFooter className="flex flex-col gap-6">
                        <div className="flex flex-row gap-2 flex-wrap">
                            <Badge variant="cc2">React</Badge>
                            <Badge variant="cc2">Typescript</Badge>
                            <Badge variant="cc2">Node.js</Badge>
                            <Badge variant="cc2">Tailwind</Badge>
                            <Badge variant="cc2">Supabase</Badge>
                        </div>
                        <div className="flex gap-6">
                            <Link href="https://github.com/iamyare/Saim-Cis-Nextjs" target="_blank">
                                <Button variant="default" aria-label="github repository"><FaGithub size={20} /></Button>
                            </Link>
                            <Link href="https://saimcis.vercel.app/" target="_blank">
                                <Button variant="default" aria-label="external link"><FaExternalLinkAlt /></Button>
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
