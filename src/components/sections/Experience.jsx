import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionTitle from '../common/SectionTitle';
// import { hoverCard } from '@/lib/utils';
import { experience } from '../data/experience.js';

const Experience = () => {
    return (
        <section id="experience" className='py-16'>
            <div className='space-y-8'>
                <div className='space-y-1'>
                    <SectionTitle text="Experience" />
                    <p className='text-muted-foreground text-sm m-0'>Industry experience across web, mobile, and production systems.</p>
                </div>

                <div className='space-y-6'>
                    {experience.map((job, index) =>(
                        <Card key={index}>
                            <CardHeader className="space-y-2">
                                <div className='flex flex-wrap items-center justify-between gap-3'>
                                    <CardTitle>
                                        {job.title} - {job.company}
                                    </CardTitle>
                                    <Badge variant="secondary">{job.dates}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{job.location}</p>
                            </CardHeader>

                            <CardContent>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                                    {job.bullets.map((b) =>(
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* <Card className={`h-full ${hoverCard}`}>
                    <CardHeader className="space-y-2">
                        <div className='flex flex-wrap items-center justify-between gap-3'>
                            <CardTitle>Software Engineer - TeachVibrant</CardTitle>
                            <Badge variant='secondary'>Jun 2022 - Oct 2025</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>Full-stack ownership across web + mobile in a startup environment.</p>
                    </CardHeader>

                    <CardContent className="space-y-3">
                        <ul className='list-disc pl-5 text-muted-foreground space-y-2'>
                            <li>Built and shipped features end-to-end using React/React Native, Node/Express, and MongoDB.</li>
                            <li>Integrated external APIs (Maps, payments, localization) and delivered production-ready flows.</li>
                            <li>Collaborated with cross-functional teams to deliver scalable product features.</li>
                        </ul>
                    </CardContent>
                </Card> */}

            </div>
        </section>
    )
}

export default Experience
