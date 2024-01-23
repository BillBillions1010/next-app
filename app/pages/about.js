import BeakerIcon from '@/app/components/BeakerIcon';
import ChatNotification from '@/app/components/ChatNotification';

export default function About() {
    return (
    <article className='flex flex-1'>
        <h1 className='h-20 inset-1'>About Page</h1>
        <section className='section'>
            <LabIcon />
        </section>
    </article>
    );
}