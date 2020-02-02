import React from 'react';
import ReactToPrint from 'react-to-print';
import ContentsPC001 from '../src/components/ContentsPC001'
import ContentsPC001_3 from '../src/components/ContentsPC001_3'
class Example extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                    // pageStyle="@page { size: A4 portrait;}"
                    pageStyle='@page { size: A4 portrait; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; padding: 20px !important; } }'
                />
                <ContentsPC001_3 ref={el => (this.componentRef = el)}/>
            </div>
        );
    }
}
export default Example

