import { CollaboratorData } from './fetchData';
import PersonCard from './PersonCard';


export default function Collaborators() {
    return (
        <div className="row align-items-center">
            <div className="col-lg-6 order-1 order-lg-1">
                <div className="ms-lg-5 mb-5">
                    <span className="text-muted">International</span>
                    <h2 className="display-5 fw-bold mb-3 mb-xl-5">Meet Our Collaborators</h2>
                    <p className="lead">We collaborate with specialists in various literary traditions. They contribute data from different language communities to broaden the scope of the project's corpus.</p>
                </div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2">
                <div className="row g-3">
                    {
                        Object.values(CollaboratorData).map(p => (PersonCard(p)))
                    }
                </div>
            </div>
        </div>
    );
};