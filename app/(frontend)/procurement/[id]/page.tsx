import ProcureMentDetail from '@/components/page/procurement/ProcureMentDetail';
import React from 'react';

interface PageProps {
    params: {
        id: string;
    };
}

const Page = ({params}: PageProps) => {
    const {id} = params;

    return (
        <div>
            <ProcureMentDetail id={id}/>        
        </div>
    );
}

export default Page;
