import React, { ReactNode } from 'react';

const layout = ({ banner, features, aboutUs, client, employee, services,workSample,question,contact }: { banner: ReactNode, features: ReactNode, aboutUs: ReactNode, client: ReactNode, employee: ReactNode, services:ReactNode,workSample:ReactNode,question:ReactNode, contact:ReactNode}) => {
    return (
        <div>
            {banner}
            {features}
            {aboutUs}
            {client}
            {employee}
            {services}
            {workSample}
            {question}
            {contact}
        </div>
    );
};

export default layout;