import React from 'react';
import useUserData  from '../hooks/UserData';

const withUserData = (WrappedComponent: React.FC<any>) => (props: any) => {
    const UserData = useUserData();
    return <WrappedComponent data={UserData} {...props} />
};

export default withUserData;