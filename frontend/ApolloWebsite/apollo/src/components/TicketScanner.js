import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const TicketScanner = (props) => {
    const [data, setData] = useState('No result');

    return (
        <>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                        console.log("data = " + data);
                    }

                    if (!!error) {
                        console.log(error);
                    }
                }}
                style={{ width: '50%' }}
            />
            <p style={{ color: 'white' }}>data={data}</p>
        </>
    );
};

export default TicketScanner