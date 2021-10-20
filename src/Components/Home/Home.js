import React from 'react';
import './style.css';

export default function Home(props) {
    // function setUserName() {
    //     props.setUserName('');
    // }

    // if(props.name=== '') {
    //     setUserName();
    // }

    return (
        <div className='container'>
            <div className='card mt4'>
                <div className='card-body'>
                    <div class="banner-list-inner">
                        <div class="content">
                            <h1 class="blue-text">{ props.name ? 'Hi ' + props.name : '' }</h1>
                            <h1 class="blue-text">BMS Banking</h1>
                            <p>This helps you carry out a variety of banking transactions and access an extensive range of features, right from where you are, in just a few clicks. With our Internet Banking solutions, you can now bid goodbye to long queues and unwanted delays.
                            </p>
                            <p>This helps you carry out a variety of banking transactions and access an extensive range of features, right from where you are, in just a few clicks. With our Internet Banking solutions, you can now bid goodbye to long queues and unwanted delays.
                            </p>
                            <p>This helps you carry out a variety of banking transactions and access an extensive range of features, right from where you are, in just a few clicks. With our Internet Banking solutions, you can now bid goodbye to long queues and unwanted delays.
                            </p>
                            <p>This helps you carry out a variety of banking transactions and access an extensive range of features, right from where you are, in just a few clicks. With our Internet Banking solutions, you can now bid goodbye to long queues and unwanted delays.
                            </p>
                            <p>This helps you carry out a variety of banking transactions and access an extensive range of features, right from where you are, in just a few clicks. With our Internet Banking solutions, you can now bid goodbye to long queues and unwanted delays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
