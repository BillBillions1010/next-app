import BeakerIcon from '@/app/components/BeakerIcon';
import ChatNotification from '@/app/components/ChatNotification';

// 
export default function About() {
    return (
        <Body className='about block w-100 bg-slate-700 text-right'>
            <Header >
                <LabIcon />
            </Header>
            <article className='flex flex-1'>
                <h1 className='h-20 inset-1'>This is The About page</h1>
                <section className='m-20 section'>
                    <h2>Using SectionExamples</h2>
                    <SectionExamples />
                </section>
            </article>
        </Body>
    );
}