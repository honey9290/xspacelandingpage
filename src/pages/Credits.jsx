import { Head } from '../components/Sections';
import usePageTitle from '../lib/usePageTitle';
import { PHOTO_CREDITS } from '../photoCredits';

export default function Credits() {
  usePageTitle('Photo credits');
  return (
    <section className="block" id="credits">
      <div className="wrap">
        <Head
          kicker="Photo credits"
          title={<>Real projects, <span className="grad">credited.</span></>}
          lead="The project photos on this site show real West Hyderabad developments. They come from Wikimedia Commons under Creative Commons licences, and were cropped and resized for this site. They illustrate the area and are not XSPACE listings or endorsements; ask us for current options."
        />
        <ol className="credits">
          {PHOTO_CREDITS.map((c) => (
            <li key={c.source}>
              <a href={c.source} target="_blank" rel="noopener noreferrer">{c.title}</a>
              {' '}by {c.author}, licensed under{' '}
              <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer">{c.license}</a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
