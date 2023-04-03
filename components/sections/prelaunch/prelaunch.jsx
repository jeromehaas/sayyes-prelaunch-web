import Section from "components/layouts/section/section";
import Paragraph from "components/content/paragraph/paragraph";
import Heading from "components/content/heading/heading";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';

const Prelaunch = () => {

    // SETUP REFS
    const prelaunchRef = useRef();
    const prelaunchTimelineRef = useRef();


    // SETUP TIMELINE
    useEffect(() => {
        const context = gsap.context(() => {
            prelaunchTimelineRef.current = gsap.timeline();
            prelaunchTimelineRef.current.to('.prelaunch .prelaunch__message .message__letter', { opacity: 1, top: 0, duration: 0.5, stagger: 0.1, ease: "back.out" }, 0)
            prelaunchTimelineRef.current.to('.prelaunch .prelaunch__address', { opacity: 1, top: 0, duration: 1, ease: "ease.out" }, 2)
            prelaunchTimelineRef.current.to('.prelaunch .prelaunch__peaker', { opacity: 1, top: 0, duration: 1, ease: "ease.out" }, 2)
        }, prelaunchRef);
        return () => context.revert();
    }, []);

    return (
        <Section className="prelaunch" ref={ prelaunchRef }>
            <div className="prelaunch__peaker peaker">
                <Heading className="peaker__logo" level="h4">SAYYES</Heading>
            </div>
            <div className="prelaunch__message message">
                <Heading className="message__text">
                    <span className="message__letter">C</span>
                    <span className="message__letter">O</span>
                    <span className="message__letter">M</span>
                    <span className="message__letter">I</span>
                    <span className="message__letter">N</span>
                    <span className="message__letter">G</span>
                    <span className="message__letter"> </span>
                    <span className="message__letter">S</span>
                    <span className="message__letter">O</span>
                    <span className="message__letter">O</span>
                    <span className="message__letter">N</span>
                    <span className="message__letter">.</span>
                    <span className="message__letter">.</span>
                    <span className="message__letter">.</span>
                </Heading>
            </div>
            <div className="prelaunch__address address">
                <Paragraph className="address__item item item__name">SayYes KLG</Paragraph>
                <Paragraph className="address__item item item__location">Blumenrainstrasse 1, 6032 Emmen</Paragraph>
                <Paragraph className="address__item item item__email"><Link className="address__item item__email" href="mailto:yes@sayyes-bridal.ch">yes@sayyes-bridal.ch</Link></Paragraph>
            </div>
        </Section>
    );

};

export default Prelaunch;