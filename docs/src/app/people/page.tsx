import PersonCard from "./components/PersonCard";
import peopleJSON from '@/data/people.json';

const TeamMemberData = Object.values(peopleJSON.Team).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

const CollaboratorData = Object.values(peopleJSON.Collaborators).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

export default async function People() {
  return (
    <div className="flex flex-col space-y-4">
        <h1>Who are we?</h1>
        <div className="bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 md:rounded-e-full rounded-xl">
            <div className="grid md:grid-cols-2 md:pt-0 gap-8">
                <div className="grid order-first md:order-last">
                    <div className="ms-lg-5 mb-5 content-around">
                        <span className="text-muted">LostMa / French Corpus</span>
                        <h2 className="display-5 fw-bold mb-3 mb-xl-5">Meet the Team</h2>
                        <p className="lead">We are responsible for the project&apos;s milestones and the French-language part of the corpus.</p>
                    </div>
                </div>
                <div className="order-last md:order-first">
                    <div className="grid md:grid-cols-2 justify-items-center gap-8">
                        {
                            Object.values(TeamMemberData).map(p => (PersonCard(p)))
                        }
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gradient-to-r from-gray-100 dark:from-gray-800 p-4 md:rounded-s-full rounded-xl">
            <div className="grid md:grid-cols-2 md:pt-0 gap-8">
                <div className="grid order-first md:ml-8">
                    <div className="ms-lg-5 mb-5 content-around">
                        <span className="text-muted">International</span>
                        <h2 className="display-5 fw-bold mb-3 mb-xl-5">Meet Our Collaborators</h2>
                        <p className="lead">We collaborate with specialists in various literary traditions. They contribute data from different language communities to broaden the scope of the project&apos;s corpus.</p>
                    </div>
                </div>
                <div className="order-last">
                    <div className="grid md:grid-cols-2 justify-items-center gap-8">
                        {
                            Object.values(CollaboratorData).map(p => (PersonCard(p)))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}