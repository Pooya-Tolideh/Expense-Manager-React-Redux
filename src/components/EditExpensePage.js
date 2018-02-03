import React from 'react';

const EditExpensePage = (props) => (
    <div>
        { ` Edit expense # ${props.match.params.id } here` }
    </div>
);

export default EditExpensePage;
