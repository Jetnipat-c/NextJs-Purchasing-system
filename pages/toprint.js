import React from 'react';
import ReactToPrint from 'react-to-print';
import ContentsPC001 from '../src/components/ContentsPC001'

class Example extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                    // pageStyle="@page { size: A4 portrait;}"
                    pageStyle='@page { size: A4 portrait; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; padding: 40px !important; } }'
                />
                <ContentsPC001 ref={el => (this.componentRef = el)}
                ></ContentsPC001>

            </div>
        );
    }
}
export default Example