import React, {useState} from 'react';

const ProgessOptions = ({percentage}) => {
    const [ami, setAmi] = useState('Amazon Machine Image-1')
    const [type, setType] = useState('t1-large')
    const [config, setConfig] = useState('windows16')
    const [storage, setStorage] = useState('1TB')

    const changeAMI = event => {
        setAmi(event.target.value);
    }
    const changeType = event => {
        setType(event.target.value);
    }
    const changeConfig = event => {
        setConfig(event.target.value);
    }
    const changeStorage = event => {
        setStorage(event.target.value);
    }

    return (
        <>
            {
                percentage === 0 &&
                <>
                <div>
                    Choose an Amazon Machine Image<br/>
                    <select  onChange={changeAMI}>
                        <option>Amazon Machine Image-1</option>
                        <option>Amazon Machine Image-2</option>
                        <option>Amazon Machine Image-3</option>
                        <option>Amazon Machine Image-4</option>
                        <option>Amazon Machine Image-5</option>
                        <option>Amazon Machine Image-6</option>
                        <option>Amazon Machine Image-7</option>
                        <option>Amazon Machine Image-8</option>
                        <option>Amazon Machine Image-9</option>
                        <option>Amazon Machine Image-10</option>
                    </select>
                </div>
                <div>
                    Selected AMI:<br/>
                    {ami}
                </div>
                </>
            }
            {
                percentage === 25 &&
                <>
                <div>
                    Choose an Instance Type<br/>
                    <select  onChange={changeType}>
                        <option>t1-large</option>
                        <option>t1-medium</option>
                        <option>t1-small</option>
                    </select>
                </div>
                <div>
                    Selected Type:<br/>
                    {type}
                </div>
                </>
            }
            {
                percentage === 50 &&
                <>
                <div>
                    Configure an Instance<br/>
                    <select  onChange={changeConfig}>
                        <option>windows16</option>
                        <option>rhel7</option>
                    </select>
                </div>
                <div>
                    Selected Configuration:<br/>
                    {config}
                </div>
                </>
            }
            {
                percentage === 75 &&
                <>
                <div>
                    Add Storage<br/>
                    <select  onChange={changeStorage}>
                        <option>1TB</option>
                        <option>2TB</option>
                    </select>
                </div>
                <div>
                    Selected Storeage:<br/>
                    {storage}
                </div>
                </>
            }
            {
                percentage === 100 &&
                <>
                <div>
                    Review Selections<br/>
                    AMI: {ami}<br/>
                    Type: {type}<br/>
                    Configuration: {config}<br/>
                    Storage: {storage}<br/>
                </div>
                </>
            }
        </>
    );
};

export default ProgessOptions;