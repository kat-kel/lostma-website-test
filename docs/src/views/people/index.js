import './People.css';

import React from 'react';

import PersonCard from './PersonCard';


const Team = () => {
    return (
        <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
                <div className="row g-3">
                    {PersonCard('Jean-Baptiste Camps', 'Project Leader')}
                    {PersonCard('Kelly Christensen', 'Data Architect, Webmaster')}
                    {PersonCard('Ulysse Godreau', 'Postdoc')}
                    {PersonCard('Théo Moins', 'AI Engineer')}
                    {PersonCard('Beatriz Tadeo Fuica', 'Administrator')}
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


const Collaborators = () => {
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
                    {PersonCard('Elisabeth de Bruijn', 'Middle Dutch Corpus')}
                    {PersonCard('Katarzyna Kapitan', 'Scandinavian Corpus')}
                    {PersonCard('Mike Kestemont', 'Middle Dutch Corpus')}
                    {PersonCard('Carolina Macedo', 'Iberian Corpus')}
                    {PersonCard('Remco Sleiderink', 'Middle Dutch Corpus')}
                    {PersonCard('Cecile Vermaas', 'Middle Dutch Corpus')}
                </div>
            </div>
        </div>
    );
};

class People extends React.Component {
    render() {
        return (
            <>
                <Team />
                <hr />
                <Collaborators />
            </>
        );
    }
}
export default People;
