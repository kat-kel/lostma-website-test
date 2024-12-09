import { TeamMemberData } from './fetchData';
import PersonCard from './PersonCard';


export default function Team() {
    return (
        <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
                <div className="row g-3">
                    {
                        Object.values(TeamMemberData).map(p => (PersonCard(p)))
                    }
                </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
                <div className="ms-lg-5 mb-5">
                    <span className="text-muted">LostMa / French Corpus</span>
                    <h2 className="display-5 fw-bold mb-3 mb-xl-5">Meet the Team</h2>
                    <p className="lead">We are responsible for the project's milestones and the French-language part of the corpus.</p>
                </div>
            </div>
        </div>
    );
};
