import React from 'react';
import { MainPage } from './components/utils.js';

const FrontMatter = () => {
    return (
        <>
        </>
    )
}


function TeamMember(name, role) {
    return (
        <div class="col-sm-6 mb-3 d-flex align-items-stretch">
            <div class="card border-0 bg-light">
                <div class="card-body text-center px-4 py-4">
                    <h5 class="fw-bold">{name}</h5>
                    <div class="text-muted">
                        {role}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Team = () => {
    return (
        <div class="row align-items-center">
            <div class="col-lg-6 order-2 order-lg-1">
                <div class="row g-3">
                    {TeamMember("Jean-Baptiste Camps", "Project Leader")}
                    {TeamMember("Kelly Christensen", "Data Architect, Webmaster")}
                    {TeamMember("Ulysse Godreau", "Postdoc")}
                    {TeamMember("Théo Moins", "AI Engineer")}
                    {TeamMember("Beatriz Tadeo Fuica", "Administrator")}
                </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2">
                <div class="ms-lg-5 mb-5">
                    <span class="text-muted">LostMa / French Corpus</span>
                    <h2 class="display-5 fw-bold mb-3 mb-xl-5">Meet the Team</h2>
                    <p class="lead">We are responsible for the project's milestones and the French-language part of the corpus.</p>
                </div>
            </div>
        </div>
    )
}


const Intl = () => {
    return (
        <div class="row align-items-center">
            <div class="col-lg-6 order-1 order-lg-1">
                <div class="ms-lg-5 mb-5">
                    <span class="text-muted">International</span>
                    <h2 class="display-5 fw-bold mb-3 mb-xl-5">Meet Our Collaborators</h2>
                    <p class="lead">We collaborate with specialists in various literary traditions. They contribute data from different language communities to broaden the scope of the project's corpus.</p>
                </div>
            </div>
            <div class="col-lg-6 order-2 order-lg-2">
                <div class="row g-3">
                    {TeamMember("Elisabeth de Bruijn", "Middle Dutch Corpus")}
                    {TeamMember("Katarzyna Kapitan", "Scandinavian Corpus")}
                    {TeamMember("Mike Kestemont", "Middle Dutch Corpus")}
                    {TeamMember("Carolina Macedo", "Iberian Corpus")}
                    {TeamMember("Remco Sleiderink", "Middle Dutch Corpus")}
                    {TeamMember("Cecile Vermaas", "Middle Dutch Corpus")}
                </div>
            </div>
        </div>
    )
}


const Content = () => {
    return (
        <>
            <Team />
            <hr />
            <Intl />
        </>
    )
}

class People extends React.Component {
    render() {
        return (MainPage(FrontMatter, Content));
    }
}
export default People;
